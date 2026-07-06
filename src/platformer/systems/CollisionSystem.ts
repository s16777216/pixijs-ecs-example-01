import { World } from '../../ecs/World';
import { System } from '../../ecs/System';
import { PositionComponent, VelocityComponent, CollisionComponent, StateComponent } from '../components/Components';
import { CollisionUtils } from '../utils/CollisionUtils';

export class CollisionSystem extends System {
  requiredComponents = [PositionComponent, VelocityComponent, CollisionComponent, StateComponent];

  update(world: World, entities: number[], deltaTime: number): void {
    // Directly query all entities from world to find static colliders
    const allEntities = Array.from((world as any).entities) as number[];
    const staticEntities = allEntities.filter(e => world.getComponent(e, CollisionComponent)?.isStatic);

    for (const entity of entities) {
      const pos = world.getComponent(entity, PositionComponent)!;
      const vel = world.getComponent(entity, VelocityComponent)!;
      const col = world.getComponent(entity, CollisionComponent)!;
      const state = world.getComponent(entity, StateComponent)!;

      // 1. Move on X
      pos.x += vel.vx;
      state.isGrounded = false; // Assume not grounded until proven otherwise

      for (const staticEntity of staticEntities) {
        const staticPos = world.getComponent(staticEntity, PositionComponent)!;
        const staticCol = world.getComponent(staticEntity, CollisionComponent)!;

        if (CollisionUtils.checkAABB(pos, col, staticPos, staticCol)) {
          if (vel.vx > 0) pos.x = staticPos.x - col.width;
          else if (vel.vx < 0) pos.x = staticPos.x + staticCol.width;
          vel.vx = 0;
        }
      }

      // 2. Move on Y
      pos.y += vel.vy;

      for (const staticEntity of staticEntities) {
        const staticPos = world.getComponent(staticEntity, PositionComponent)!;
        const staticCol = world.getComponent(staticEntity, CollisionComponent)!;

        if (CollisionUtils.checkAABB(pos, col, staticPos, staticCol)) {
          if (vel.vy > 0) { // Falling
            pos.y = staticPos.y - col.height;
            vel.vy = 0;
            state.isGrounded = true;
          } else if (vel.vy < 0) { // Jumping
            pos.y = staticPos.y + staticCol.height;
            vel.vy = 0;
          }
        }
      }
    }
  }
}
