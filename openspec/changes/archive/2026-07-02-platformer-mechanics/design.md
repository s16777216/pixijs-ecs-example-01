## Context

This module implements the behavioral logic for a Mario-like game. It operates entirely on data stored in ECS components and is agnostic to the rendering layer.

## Goals / Non-Goals

**Goals:**
- Precise "snapping" to platforms to avoid jitter.
- Responsive jumping and movement.
- Decoupled input state (Input System updates data $\rightarrow$ Movement System reads data).

**Non-Goals:**
- Complex slopes or curved surfaces (axis-aligned rectangles only).
- Full-body physics simulation (no rotations or angular momentum).
- Pixel-perfect collision (AABB is sufficient).

## Decisions

### 1. Collision Resolution
**Decision**: Use "Discrete Position Correction". Resolve X-axis collisions first, then Y-axis collisions.
**Rationale**: This is the standard approach for 2D platformers to correctly distinguish between hitting a wall and landing on a floor.

### 2. Gravity & Integration
**Decision**: Use Semi-Implicit Euler Integration. 
`velocity += gravity * dt` $\rightarrow$ `position += velocity * dt`.
**Rationale**: Stable enough for platformers and computationally trivial.

### 3. Jump Logic
**Decision**: Use a "Grounded" flag in the `StateComponent` to allow jumping.
**Rationale**: Prevents infinite jumping in mid-air unless a "double jump" capability is explicitly added.

## Risks / Trade-offs

- **[Risk]**: Tunneling (fast objects passing through thin walls) $\rightarrow$ **Mitigation**: Cap maximum velocity and use reasonable platform thicknesses.
- **[Risk]**: Jitter when pressing against walls $\rightarrow$ **Mitigation**: Use a small epsilon value for collision offsets.
