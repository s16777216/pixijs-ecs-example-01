## Context

The foundation (ECS), the logic (Physics), and the visuals (PixiJS) are already implemented. This module acts as the "Game Director" that orchestrates these components.

## Goals / Non-Goals

**Goals:**
- Easy level definition (via a simple data structure).
- Quick entity spawning using factories.
- A stable, high-level game loop that manages time and system updates.

**Non-Goals:**
- Dynamic level generation (procedural generation).
- Complex save/load systems.
- Advanced UI/Menu systems (start with a direct game launch).

## Decisions

### 1. Level Representation
**Decision**: Use a 2D array (Grid) or a list of bounding boxes for level layout.
**Rationale**: Sufficient for a demo and extremely easy to edit manually.

### 2. Entity Factories
**Decision**: Implement static factory functions (e.g., `PlayerFactory.create(world, x, y)`).
**Rationale**: Avoids repetitive `world.addComponent` calls throughout the code and centralizes entity definitions.

### 3. System Execution Order
**Decision**: Fixed Pipeline: `InputSystem` $\rightarrow$ `MovementSystem` $\rightarrow$ `GravitySystem` $\rightarrow$ `CollisionSystem` $\rightarrow$ `AnimationSystem` $\rightarrow$ `RenderSystem`.
**Rationale**: This order ensures that movements are calculated and collisions resolved before the final position is rendered to the screen, preventing "ghosting" or jitter.

## Risks / Trade-offs

- **[Risk]**: Large levels causing performance drops $\rightarrow$ **Mitigation**: Use a simple culling check in the `RenderSystem` (only render what's on screen).
- **[Risk]**: Logic bugs appearing only during integration $\rightarrow$ **Mitigation**: Strictly follow the task order and verify each module's integration one by one.
