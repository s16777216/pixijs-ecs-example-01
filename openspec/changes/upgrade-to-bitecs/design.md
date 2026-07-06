## Context

We are migrating from a custom ECS framework to `bitECS`. This is a performance-focused architectural shift.

## Goals / Non-Goals

**Goals:**
- Replace custom ECS with `bitECS` primitives.
- Achieve better performance via TypedArrays.
- Maintain existing game logic (Physics, Rendering) with minimal modifications.

**Non-Goals:**
- Changing game behavior or mechanics.

## Decisions

### 1. Component Definition
**Decision**: Use `defineComponent` with TypedArray types.
**Rationale**: This is the core strength of `bitECS`.

### 2. Entity Management
**Decision**: Use `addEntity` and `removeEntity` from `bitECS`.
**Rationale**: Direct usage of library primitives.

### 3. System Execution
**Decision**: Use `pipe` and `createPipeline` for system orchestration.
**Rationale**: Highly performant and idiomatic to `bitECS`.

## Risks / Trade-offs

- **[Risk]**: Fixed entity buffer size limit in `bitECS` $\rightarrow$ **Mitigation**: Define a reasonable maximum entity count (e.g., 1000).
- **[Risk]**: More verbose component definitions $\rightarrow$ **Mitigation**: Follow `bitECS` documentation.
