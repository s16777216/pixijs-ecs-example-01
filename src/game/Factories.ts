import { World } from '../ecs/World';
import { PositionComponent, VelocityComponent, CollisionComponent, StateComponent, PlayerInputComponent } from '../platformer/components/Components';
import { SpriteComponent } from '../renderer/SpriteComponent';

export class PlayerFactory {
  static create(world: World, x: number, y: number) {
    const player = world.createEntity();
    world.addComponent(player, new PositionComponent(x, y));
    world.addComponent(player, new VelocityComponent(0, 0));
    world.addComponent(player, new CollisionComponent(32, 32, false));
    world.addComponent(player, new StateComponent(true, 'idle'));
    world.addComponent(player, new PlayerInputComponent(false, false, false));
    world.addComponent(player, new SpriteComponent('player', 0.5, 1));
    return player;
  }
}

export class LevelLoader {
  static load(world: World, levelData: { x: number, y: number, width: number, height: number }[]) {
    for (const platform of levelData) {
      const entity = world.createEntity();
      world.addComponent(entity, new PositionComponent(platform.x, platform.y));
      world.addComponent(entity, new CollisionComponent(platform.width, platform.height, true));
      // Static platforms don't need velocity or state
    }
  }
}
