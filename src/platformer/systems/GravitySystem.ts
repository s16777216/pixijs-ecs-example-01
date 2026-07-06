import { World } from '../../ecs/World';
import { System } from '../../ecs/System';
import { VelocityComponent, StateComponent } from '../components/Components';

export class GravitySystem extends System {
  requiredComponents = [VelocityComponent, StateComponent];
  private gravity = 0.5;

  update(world: World, entities: number[], deltaTime: number): void {
    for (const entity of entities) {
      const velocity = world.getComponent(entity, VelocityComponent)!;
      const state = world.getComponent(entity, StateComponent)!;

      if (!state.isGrounded) {
        velocity.vy += this.gravity;
      }
    }
  }
}
