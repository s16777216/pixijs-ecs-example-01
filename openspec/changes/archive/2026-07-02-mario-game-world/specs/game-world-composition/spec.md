## ADDED Requirements

### Requirement: Level Layout Definition
The system SHALL allow the definition of a level consisting of multiple static platform entities at specified coordinates.

#### Scenario: Loading a basic level
- **WHEN** the game initializes
- **THEN** a set of entities with `TransformComponent` and `CollisionComponent` (marked as static) are spawned to form the floor and platforms

### Requirement: Entity Spawning via Factory
The system MUST provide a factory method to create a complete Player entity with all required components (`Transform`, `Velocity`, `Sprite`, `Input`, `Collision`, `State`).

#### Scenario: Spawning the player
- **WHEN** `PlayerFactory.create(world, x, y)` is called
- **THEN** a single entity is returned that is fully equipped to move, collide, and be rendered

### Requirement: Goal Detection
The system SHALL detect when the player entity intersects with a designated "Goal" entity.

#### Scenario: Reaching the end
- **WHEN** player's bounding box intersects the goal's bounding box
- **THEN** the game triggers a "Win" state
