## 1. Preparation

- [ ] 1.1 Install `bitecs`
- [ ] 1.2 Review `ecs-framework` logic to ensure parity

## 2. Migration

- [ ] 2.1 Refactor Component definitions to `bitECS` format
- [ ] 2.2 Refactor `World` to use `bitECS` `createWorld`
- [ ] 2.3 Refactor Systems to use `bitECS` Queries and Pipelines
- [ ] 2.4 Update `Game.ts` to use `bitECS` pipeline

## 3. Verification

- [ ] 3.1 Verify existing platformer logic (physics, collision) still works with `bitECS`
- [ ] 3.2 Verify rendering still correctly maps component data to PixiJS Sprites
