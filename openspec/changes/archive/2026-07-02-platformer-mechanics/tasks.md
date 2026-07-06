## 1. Component Definitions

- [x] 1.1 Define `VelocityComponent` (vx, vy)
- [x] 1.2 Define `CollisionComponent` (width, height, isStatic)
- [x] 1.3 Define `PlayerInputComponent` (left, right, jump)
- [x] 1.4 Define `StateComponent` (isGrounded, currentAnimation)

## 2. Physics Systems Implementation

- [x] 2.1 Implement `GravitySystem` to apply downward force to non-grounded entities
- [x] 2.2 Implement `MovementSystem` to update velocity based on `PlayerInputComponent`
- [x] 2.3 Implement `JumpSystem` to apply upward impulse when grounded and jump is pressed

## 3. Collision Resolution System

- [x] 3.1 Implement AABB intersection check utility
- [x] 3.2 Implement X-axis collision resolution and position snapping
- [x] 3.3 Implement Y-axis collision resolution and position snapping
- [x] 3.4 Implement logic to update `StateComponent.isGrounded` based on Y-collision

## 4. Verification (Data-Driven)

- [x] 4.1 Verify gravity works (Y position decreases over time in vacuum)
- [x] 4.2 Verify jump works (Y velocity becomes positive on jump trigger)
- [x] 4.3 Verify collision works (Player stops at platform boundary)
