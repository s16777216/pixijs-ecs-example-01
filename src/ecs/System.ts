import { World, Component } from './World';

export abstract class System {
  // Mechanism to define required components (Component Signature)
  abstract readonly requiredComponents: (new (...args: any[]) => Component)[];

  // The system receives only entities that match its signature
  abstract update(world: World, entities: number[], deltaTime: number): void;
}
