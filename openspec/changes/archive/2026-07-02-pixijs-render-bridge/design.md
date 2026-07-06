## Context

The core logic is handled by an ECS framework. The rendering layer must reflect this state every frame without introducing logic into the rendering process.

## Goals / Non-Goals

**Goals:**
- One-way data flow: ECS Transform $\rightarrow$ PixiJS Sprite.
- Automated lifecycle: Sprite is created when `SpriteComponent` is added and destroyed when the entity is removed.
- Smooth camera movement (interpolated following).

**Non-Goals:**
- Complex shader effects or advanced lighting.
- UI/HUD implementation (this is a separate concern from world rendering).

## Decisions

### 1. Sprite Mapping
**Decision**: Use a Map to associate `EntityID` with `Pixi.Sprite` instances.
**Rationale**: Allows O(1) lookup during the render loop to update positions.

### 2. Camera Implementation
**Decision**: Use a single `Pixi.Container` as the "World Root" and shift its `x, y` coordinates in the opposite direction of the player's movement.
**Rationale**: Simplest way to implement 2D scrolling without moving every single object in the world.

### 3. Animation Handling
**Decision**: Use a simple state-to-frame mapping. The `RenderSystem` reads the `StateComponent` and updates the sprite's texture or frame index.
**Rationale**: Sufficient for a Mario-like game where animations are discrete (idle, walk, jump).

## Risks / Trade-offs

- **[Risk]**: Memory leaks from orphaned sprites $\rightarrow$ **Mitigation**: Implement a cleanup check in the `RenderSystem` or a hook in the `World.destroyEntity` method.
- **[Risk]**: Stuttering if rendering and physics update rates differ $\rightarrow$ **Mitigation**: Use PixiJS's ticker for rendering and a fixed time-step for physics.
