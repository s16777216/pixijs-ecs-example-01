import { World, Component } from './World';
import { System } from './System';
import { SystemManager } from './SystemManager';

// 1. Define Components
class PositionComponent implements Component {
    x: number; y: number;
    constructor(x: number, y: number) { this.x = x; this.y = y; }
}
class VelocityComponent implements Component {
    vx: number; vy: number;
    constructor(vx: number, vy: number) { this.vx = vx; this.vy = vy; }
}

// 2. Setup World
const world = new World();
const entity = world.createEntity();
world.addComponent(entity, new PositionComponent(10, 20));
console.log("3.1 Entity created and component retrieved:", world.getComponent(entity, PositionComponent));

// 3. Setup Systems
class MovementSystem extends System {
  requiredComponents = [PositionComponent, VelocityComponent];
  update(world: World, entities: number[], deltaTime: number): void {
    console.log("3.2 MovementSystem processing entities:", entities);
  }
}

const systemManager = new SystemManager();
systemManager.registerSystem(new MovementSystem());

// 4. Verify Filtering
// This entity has Position, but not Velocity, should not be processed by MovementSystem
const entity2 = world.createEntity();
world.addComponent(entity2, new PositionComponent(0, 0));

// This entity has both, should be processed
const entity3 = world.createEntity();
world.addComponent(entity3, new PositionComponent(5, 5));
world.addComponent(entity3, new VelocityComponent(1, 1));

console.log("Running system manager update...");
systemManager.update(world, 0.016); // Should only process entity3
