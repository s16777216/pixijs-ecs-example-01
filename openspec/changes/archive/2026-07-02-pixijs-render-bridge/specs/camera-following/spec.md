## ADDED Requirements

### Requirement: Player Centered Camera
The camera SHALL shift the world container so that the player entity remains centered on the screen.

#### Scenario: Player Moving Right
- **WHEN** the player entity's X coordinate increases
- **THEN** the world container's X coordinate decreases by the same amount (minus the screen center offset)

### Requirement: Camera Boundaries
The camera MUST NOT scroll beyond the defined boundaries of the level.

#### Scenario: Level Start
- **WHEN** the player is at X=0
- **THEN** the world container is clamped to prevent showing the area outside the left edge of the map
