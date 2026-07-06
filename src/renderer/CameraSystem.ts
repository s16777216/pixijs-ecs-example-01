import { World } from '../ecs/World';
import { System } from '../ecs/System';
import { PositionComponent } from '../platformer/components/Components';
import { GameRenderer } from './Renderer';

export class CameraSystem extends System {
  // Assume the entity to follow has a PositionComponent
  requiredComponents = [PositionComponent];

  constructor(
    private renderer: GameRenderer,
    private targetEntityID: number,
    private screenWidth: number,
    private screenHeight: number
  ) {
    super();
  }

  update(world: World, entities: number[], deltaTime: number): void {
    const targetPos = world.getComponent(this.targetEntityID, PositionComponent);
    if (!targetPos) return;

    // Center the camera on the target
    let cameraX = targetPos.x - this.screenWidth / 2;
    let cameraY = targetPos.y - this.screenHeight / 2;

    // Clamp camera boundaries (assuming map starts at 0,0)
    cameraX = Math.max(0, cameraX);
    cameraY = Math.max(0, cameraY);

    // Apply inverse position to the world container
    this.renderer.worldContainer.position.set(-cameraX, -cameraY);
  }
}
