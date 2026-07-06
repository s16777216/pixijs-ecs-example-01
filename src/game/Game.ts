import { World } from '../ecs/World';
import { SystemManager } from '../ecs/SystemManager';
import { GravitySystem } from '../platformer/systems/GravitySystem';
import { MovementSystem } from '../platformer/systems/MovementSystem';
import { JumpSystem } from '../platformer/systems/JumpSystem';
import { CollisionSystem } from '../platformer/systems/CollisionSystem';
import { RenderSystem } from '../renderer/RenderSystem';
import { CameraSystem } from '../renderer/CameraSystem';
import { GameRenderer } from '../renderer/Renderer';

export class Game {
  private world: World;
  private systemManager: SystemManager;
  private renderer: GameRenderer;

  constructor() {
    this.world = new World();
    this.systemManager = new SystemManager();
    this.renderer = new GameRenderer(800, 600);
  }

  async init(playerID: number) {
    await this.renderer.init(800, 600);
    // 2.1 Register systems in correct order
    this.systemManager.registerSystem(new JumpSystem());
    this.systemManager.registerSystem(new MovementSystem());
    this.systemManager.registerSystem(new GravitySystem());
    this.systemManager.registerSystem(new CollisionSystem());
    this.systemManager.registerSystem(new RenderSystem(this.renderer));
    this.systemManager.registerSystem(new CameraSystem(this.renderer, playerID, 800, 600));
  }

  // 2.2 & 2.3 Game Loop with fixed time-step
  private lastTime = 0;
  private accumulator = 0;
  private fixedDeltaTime = 1000 / 60; // 60 FPS physics

  run(currentTime: number) {
    const deltaTime = currentTime - this.lastTime;
    this.lastTime = currentTime;
    this.accumulator += deltaTime;

    while (this.accumulator >= this.fixedDeltaTime) {
      this.systemManager.update(this.world, this.fixedDeltaTime / 1000);
      this.accumulator -= this.fixedDeltaTime;
    }

    requestAnimationFrame(this.run.bind(this));
  }
}
