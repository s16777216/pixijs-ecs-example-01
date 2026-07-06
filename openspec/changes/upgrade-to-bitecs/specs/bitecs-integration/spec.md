## ADDED Requirements

### Requirement: BitECS World Initialization
The system MUST initialize the game using `bitECS` primitives.

#### Scenario: World Setup
- **WHEN** the game engine initializes
- **THEN** a `bitECS` world is created with a predefined entity capacity

### Requirement: Component Definition
The system MUST define components using TypedArray structures via `defineComponent`.

#### Scenario: Defining Position
- **WHEN** the component is defined
- **THEN** it maps to a TypedArray (e.g., `Float32Array`) for fast access

### Requirement: System Pipeline
The system SHALL execute game logic using the `bitECS` pipeline (`pipe`).

#### Scenario: Running the Pipeline
- **WHEN** the main loop triggers
- **THEN** the `bitECS` pipeline executes all systems in the configured order
