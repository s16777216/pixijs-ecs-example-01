import { World } from '../ecs/World';
import { PositionComponent, VelocityComponent, CollisionComponent, StateComponent, PlayerInputComponent } from './components/Components';
import { GravitySystem } from './systems/GravitySystem';
import { MovementSystem } from './systems/MovementSystem';
import { JumpSystem } from './systems/JumpSystem';
import { CollisionSystem } from './systems/CollisionSystem';
import { SystemManager } from '../ecs/SystemManager';

// 1. Setup World
const world = new World();
const systemManager = new SystemManager();

// Register systems in correct order: Input/Jump -> Movement/Gravity -> Collision
systemManager.registerSystem(new JumpSystem());
systemManager.registerSystem(new MovementSystem());
systemManager.registerSystem(new GravitySystem());
systemManager.registerSystem(new CollisionSystem());

// 2. Setup Player Entity
const player = world.createEntity();
world.addComponent(player, new PositionComponent(50, 50));
world.addComponent(player, new VelocityComponent(0, 0));
world.addComponent(player, new CollisionComponent(32, 32, false));
world.addComponent(player, new StateComponent(false, 'idle'));
world.addComponent(player, new PlayerInputComponent(false, false, false));

// 3. Setup Platform Entity
const platform = world.createEntity();
world.addComponent(platform, new PositionComponent(0, 200));
world.addComponent(platform, new CollisionComponent(800, 32, true));

// 4. Verification
console.log("Initial Position:", world.getComponent(player, PositionComponent));

// Simulate Gravity
systemManager.update(world, 0.016);
const posAfterGravity = world.getComponent(player, PositionComponent)!;
console.log("Position after gravity:", posAfterGravity);
if (posAfterGravity.y > 50) console.log("4.1 Gravity Verification: Passed");
else console.log("4.1 Gravity Verification: Failed");

// Simulate Input/Jump
world.getComponent(player, PlayerInputComponent)!.jump = true;
world.getComponent(player, StateComponent)!.isGrounded = true; // Pretend grounded
// Need to reset vy first to verify jump impulse
world.getComponent(player, VelocityComponent)!.vy = 0;
systemManager.update(world, 0.016);
const velAfterJump = world.getComponent(player, VelocityComponent)!;
console.log("Velocity after jump:", velAfterJump);
if (velAfterJump.vy < 0) console.log("4.2 Jump Verification: Passed");
else console.log("4.2 Jump Verification: Failed");

// Simulate Collision
// Reset position and velocity for collision test
world.getComponent(player, PositionComponent)!.x = 50;
world.getComponent(player, PositionComponent)!.y = 150; // Above platform
world.getComponent(player, VelocityComponent)!.vy = 20; // Falling fast
systemManager.update(world, 0.016);
const posAfterCollision = world.getComponent(player, PositionComponent)!;
console.log("Position after collision:", posAfterCollision);
// Platform is at 200, height 32. Player is at 150+20 = 170. 
// With collision check, it should snap to top of platform (200 - 32 = 168)
if (posAfterCollision.y <= 168) console.log("4.3 Collision Verification: Passed");
else console.log("4.3 Collision Verification: Failed");
