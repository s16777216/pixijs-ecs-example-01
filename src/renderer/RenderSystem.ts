import * as PIXI from 'pixi.js';
import { World } from '../ecs/World';
import { System } from '../ecs/System';
import { PositionComponent } from '../platformer/components/Components';
import { SpriteComponent } from './SpriteComponent';
import { GameRenderer } from './Renderer';

export class RenderSystem extends System {
  requiredComponents = [PositionComponent, SpriteComponent];
  private spriteMap: Map<number, PIXI.Sprite> = new Map();

  constructor(private renderer: GameRenderer) {
    super();
  }

  update(world: World, entities: number[], deltaTime: number): void {
    // 1. Manage Sprite Lifecycle
    const activeEntities = new Set(entities);

    // Remove sprites for destroyed entities
    for (const [entityID, sprite] of this.spriteMap.entries()) {
      if (!activeEntities.has(entityID)) {
        this.renderer.worldContainer.removeChild(sprite);
        sprite.destroy();
        this.spriteMap.delete(entityID);
      }
    }

    // 2. Update/Create Sprites
    for (const entityID of entities) {
      const pos = world.getComponent(entityID, PositionComponent)!;
      const spriteComp = world.getComponent(entityID, SpriteComponent)!;

      if (!this.spriteMap.has(entityID)) {
        // Create new sprite
        const texture = PIXI.Texture.from(spriteComp.textureName);
        const sprite = new PIXI.Sprite(texture);
        sprite.anchor.set(spriteComp.anchorX, spriteComp.anchorY);
        this.renderer.worldContainer.addChild(sprite);
        this.spriteMap.set(entityID, sprite);
      }

      // Update position
      const sprite = this.spriteMap.get(entityID)!;
      sprite.position.set(pos.x, pos.y);
    }
  }
}
