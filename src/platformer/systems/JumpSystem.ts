import { World } from '../../ecs/World';
import { System } from '../../ecs/System';
import { VelocityComponent, StateComponent, PlayerInputComponent } from '../components/Components';

export class JumpSystem extends System {
  requiredComponents = [VelocityComponent, StateComponent, PlayerInputComponent];
  private jumpForce = -10;

  update(world: World, entities: number[], deltaTime: number): void {
    for (const entity of entities) {
      const velocity = world.getComponent(entity, VelocityComponent)!;
      const state = world.getComponent(entity, StateComponent)!;
      const input = world.getComponent(entity, PlayerInputComponent)!;

      if (input.jump && state.isGrounded) {
        velocity.vy = this.jumpForce;
        state.isGrounded = false;
      }
    }
  }
}
