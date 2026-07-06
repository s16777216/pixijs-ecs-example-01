import { World } from './World';
import { System } from './System';

export class SystemManager {
  private systems: System[] = [];

  registerSystem(system: System): void {
    this.systems.push(system);
  }

  update(world: World, deltaTime: number): void {
    for (const system of this.systems) {
      // Logic for filtering entities based on system's Component Signature
      const matchingEntities = this.getMatchingEntities(world, system);
      system.update(world, matchingEntities, deltaTime);
    }
  }

  private getMatchingEntities(world: World, system: System): number[] {
    const allEntities = Array.from((world as any).entities) as number[];
    return allEntities.filter(entityID => {
      return system.requiredComponents.every(componentType => {
        return world.getComponent(entityID, componentType) !== undefined;
      });
    });
  }
}
