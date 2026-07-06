import { World } from '../ecs/World';
import { System } from '../ecs/System';
import { PositionComponent } from '../platformer/components/Components';

export class GameFlowSystem extends System {
  requiredComponents = [PositionComponent];

  update(world: World, entities: number[], deltaTime: number): void {
    for (const entity of entities) {
      const pos = world.getComponent(entity, PositionComponent)!;

      // 3.1 Death detection
      if (pos.y > 600) {
        console.log("Game Over! Player fell.");
        // Logic to reset player position here
        pos.x = 50;
        pos.y = 50;
      }
      
      // 3.2 Win detection (Goal at 750, 200)
      if (pos.x > 750 && pos.y < 250) {
        console.log("You Win!");
        pos.x = 50;
        pos.y = 50;
      }
    }
  }
}
