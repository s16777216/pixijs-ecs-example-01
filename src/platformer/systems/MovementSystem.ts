import { World } from '../../ecs/World';
import { System } from '../../ecs/System';
import { VelocityComponent, PlayerInputComponent } from '../components/Components';

export class MovementSystem extends System {
  requiredComponents = [VelocityComponent, PlayerInputComponent];
  private moveSpeed = 5;

  update(world: World, entities: number[], deltaTime: number): void {
    for (const entity of entities) {
      const velocity = world.getComponent(entity, VelocityComponent)!;
      const input = world.getComponent(entity, PlayerInputComponent)!;

      if (input.left) {
        velocity.vx = -this.moveSpeed;
      } else if (input.right) {
        velocity.vx = this.moveSpeed;
      } else {
        velocity.vx = 0; // Simple friction
      }
    }
  }
}
