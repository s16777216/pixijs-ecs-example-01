## ADDED Requirements

### Requirement: Entity Lifecycle
The system SHALL provide methods to create and destroy entities. Each entity MUST be represented by a unique numeric identifier.

#### Scenario: Create Entity
- **WHEN** `world.createEntity()` is called
- **THEN** a new unique ID is generated and returned

### Requirement: Component Association
The system MUST allow attaching a component instance to an entity and retrieving it by its type.

#### Scenario: Adding a Component
- **WHEN** `world.addComponent(entityId, component)` is called
- **THEN** the component is stored and associated with the given entity ID

#### Scenario: Retrieving a Component
- **WHEN** `world.getComponent(entityId, ComponentType)` is called
- **THEN** the system returns the component instance associated with that entity and type, or null if not present
