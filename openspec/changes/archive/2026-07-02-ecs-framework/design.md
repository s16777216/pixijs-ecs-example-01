## Context

The project requires a game architecture that avoids deep inheritance hierarchies. The ECS pattern is chosen to allow composition over inheritance.

## Goals / Non-Goals

**Goals:**
- Minimalist API: `world.createEntity()`, `world.addComponent(entity, component)`, `world.getComponent(entity, type)`.
- Efficient system iteration: Systems should only process entities that match their required component signature.
- Zero dependencies on rendering or physics libraries.

**Non-Goals:**
- High-performance memory pooling (not needed for a small example).
- Complex event-bus systems between entities.

## Decisions

### 1. Component Storage
**Decision**: Use a Map-based storage where keys are Component types and values are Maps of `EntityID -> ComponentInstance`.
**Rationale**: Provides O(1) access and is simple to implement for an example project.

### 2. System Execution
**Decision**: Systems are simple classes with an `update(world, deltaTime)` method, managed by a `SystemManager`.
**Rationale**: Ensures a predictable execution order (e.g., Input $\rightarrow$ Physics $\rightarrow$ Render).

## Risks / Trade-offs

- **[Risk]**: Type safety in TypeScript when retrieving components $\rightarrow$ **Mitigation**: Use generics `getComponent<T>(entity, T)`.
- **[Risk]**: Performance overhead of Map lookups $\rightarrow$ **Mitigation**: Acceptable for this scale; can be optimized to TypedArrays if needed later.
