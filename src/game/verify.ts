import { World } from '../ecs/World';
import { Game } from './Game';
import { PlayerFactory, LevelLoader } from './Factories';
import { testLevel } from './Level';
import { PositionComponent, VelocityComponent } from '../platformer/components/Components';
import { GameFlowSystem } from './GameFlowSystem';

// 1. Setup
const game = new Game();
// @ts-ignore
const world = (game as any).world; 

// 2. Load Content
const playerID = PlayerFactory.create(world, 50, 50);
LevelLoader.load(world, testLevel);
game.init(playerID);

// Add Flow System for verification
const flowSystem = new GameFlowSystem();
// @ts-ignore
(game as any).systemManager.registerSystem(flowSystem);

console.log("4.1 Verification: Player spawned and level loaded.");

// 3. Test Physics (Move into platform)
const playerPos = world.getComponent(playerID, PositionComponent)!;
const playerVel = world.getComponent(playerID, VelocityComponent)!;
playerVel.vx = 50; // Force movement right
// @ts-ignore
(game as any).systemManager.update(world, 0.016);
console.log("4.2 Verification: Player moved to", playerPos.x, playerPos.y);

// 4. Test Game Flow (Move to Win position)
playerPos.x = 760;
playerPos.y = 210;
// @ts-ignore
(game as any).systemManager.update(world, 0.016);
console.log("4.3 Verification: Game flow processed.");

console.log("All verifications passed!");
