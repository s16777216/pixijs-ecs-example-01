## ADDED Requirements

### Requirement: Gravity Application
The system SHALL apply a constant downward acceleration to all entities with a `VelocityComponent` and `CollisionComponent` that are not currently grounded.

#### Scenario: Free Fall
- **WHEN** a player jumps or walks off a platform
- **THEN** their vertical velocity increases negatively over time until they hit a surface

### Requirement: AABB Collision Detection
The system MUST detect intersections between the player's bounding box and any platform's bounding box.

#### Scenario: Landing on a Floor
- **WHEN** the player's bottom edge intersects a platform's top edge while falling
- **THEN** the player's Y position is snapped to the platform top and vertical velocity is set to 0

### Requirement: Horizontal Wall Collision
The system SHALL prevent players from passing through the sides of platforms.

#### Scenario: Hitting a Wall
- **WHEN** the player's side edge intersects a platform's side edge
- **THEN** the player's horizontal velocity is set to 0 and position is snapped to the platform edge
