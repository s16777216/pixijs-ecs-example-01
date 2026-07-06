## Why

To enhance the performance and architectural robustness of our game engine. While the custom ECS implementation is sufficient for a minimal example, `bitECS` is designed for high-performance, data-oriented games using TypedArrays. Migrating to `bitECS` ensures our engine can scale effectively as the game grows in complexity.

## What Changes

- **Core Engine Replacement**: Replace the custom `World`, `Component`, and `System` structures with `bitECS` equivalents (`createWorld`, `defineComponent`, `addEntity`).
- **Data Model Update**: Refactor component definitions to follow the `bitECS` requirement of TypedArray-based structures.
- **System Logic Refactor**: Update all game systems to use `bitECS`'s pipeline and Query mechanism instead of the custom `SystemManager`.
- **Dependency Addition**: Install and configure `bitecs` library.

## Capabilities

### New Capabilities
- `bitecs-integration`: Integration of `bitECS` as the core ECS engine.

### Modified Capabilities
- `ecs-core-management`: Existing entity/component lifecycle management will now be powered by `bitECS`.
- `ecs-system-execution`: System orchestration will use `bitECS` pipelines.

## Impact

- **Architecture**: Significantly changes how game state is stored (now in TypedArrays rather than Maps).
- **Performance**: Improved memory usage and cache locality due to TypedArray storage.
- **Dependency**: Adds `bitecs` as a dependency.
