## Why

To implement the core physics and movement logic that defines the "feel" of a platformer. By isolating these mechanics into their own module, we can tune the game's physics (gravity, jump height, friction) independently of the rendering engine.

## What Changes

- **Physics Components**: Introduction of `VelocityComponent` and `CollisionComponent`.
- **Gravity System**: A system that applies constant downward force to all entities capable of falling.
- **Movement System**: Logic to translate player input into horizontal velocity.
- **Jump System**: Logic to handle jump impulses based on grounding state.
- **Collision System**: Implementation of AABB (Axis-Aligned Bounding Box) detection and position correction to prevent entities from overlapping with platforms.

## Capabilities

### New Capabilities
- `platformer-physics`: Core gravity and collision resolution.
- `player-movement-logic`: Translation of inputs to character movement and jumping.

### Modified Capabilities
- None.

## Impact

- **Dependencies**: Heavily depends on `ecs-framework` for entity and component management.
- **Performance**: Collision detection is the most computationally expensive part; however, with a small number of platforms, AABB is highly efficient.
