## ADDED Requirements

### Requirement: Game Loop Orchestration
The system MUST implement a main loop that executes all registered ECS systems in the designated order every frame.

#### Scenario: Standard Frame Update
- **WHEN** a frame tick occurs
- **THEN** the sequence `Input` $\rightarrow$ `Physics` $\rightarrow$ `Collision` $\rightarrow$ `Animation` $\rightarrow$ `Render` is executed exactly once

### Requirement: Death Condition
The system SHALL trigger a "Loss" state if the player entity falls below a certain Y-coordinate threshold (the "pit").

#### Scenario: Falling off the map
- **WHEN** `player.transform.y` exceeds the map boundary
- **THEN** the game triggers a "Reset" or "Loss" state

### Requirement: Game State Reset
The system MUST be able to reset the game world to its initial state.

#### Scenario: Restarting the game
- **WHEN** a reset is triggered
- **THEN** all existing entities are destroyed and the level/player are re-spawned
