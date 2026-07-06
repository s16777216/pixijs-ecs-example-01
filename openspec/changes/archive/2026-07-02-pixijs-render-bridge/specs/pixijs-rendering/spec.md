## ADDED Requirements

### Requirement: Sprite Synchronization
The system SHALL update the position and scale of a `Pixi.Sprite` to match the coordinates and dimensions of the entity's `TransformComponent` every frame.

#### Scenario: Position Update
- **WHEN** the `RenderSystem` updates
- **THEN** it iterates through entities with `TransformComponent` and `SpriteComponent`, updating `sprite.x` and `sprite.y` based on the component data

### Requirement: Sprite Lifecycle Management
The system MUST ensure that a `Pixi.Sprite` is created when a `SpriteComponent` is attached to an entity and destroyed when the entity is removed.

#### Scenario: Entity Destruction
- **WHEN** an entity is destroyed in the ECS world
- **THEN** the associated `Pixi.Sprite` is removed from the PixiJS stage and destroyed to free GPU memory

### Requirement: Animation State Mapping
The system SHALL update the sprite's texture or frame based on the entity's `StateComponent`.

#### Scenario: Walking Animation
- **WHEN** `StateComponent` is set to `RUNNING`
- **THEN** the `RenderSystem` updates the sprite to use the walking animation frames
