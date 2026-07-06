## Why

To integrate the ECS framework, platformer mechanics, and rendering bridge into a cohesive, playable game experience. This module defines the actual "content" of the game—the levels, the specific properties of the player, and the overall game flow.

## What Changes

- **Level Definition**: A system to define and load the arrangement of platforms and boundaries.
- **Entity Factories**: Specialized helper functions to create complex entities (e.g., a `createPlayer` function that attaches all necessary components).
- **Game Loop Integration**: The final assembly of all systems into a single execution pipeline.
- **Win/Loss Conditions**: Simple logic to detect when the player has reached the goal or fallen off the map.

## Capabilities

### New Capabilities
- `game-world-composition`: Ability to spawn a structured level with multiple interacting entities.
- `game-lifecycle-management`: Handling game start, reset, and win/loss states.

### Modified Capabilities
- None.

## Impact

- **Dependencies**: This is the top-level module; it depends on all three previous changes (`ecs-framework`, `platformer-mechanics`, `pixijs-render-bridge`).
- **User Experience**: This is the only module the end-user interacts with directly.
