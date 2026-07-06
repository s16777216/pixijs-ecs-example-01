export type EntityID = number;

export interface Component {
  // Base interface for components
}

type ComponentConstructor<T extends Component> = new (...args: any[]) => T;

export class World {
  private nextEntityID: EntityID = 0;
  private components: Map<ComponentConstructor<Component>, Map<EntityID, Component>> = new Map();
  private entities: Set<EntityID> = new Set();

  createEntity(): EntityID {
    const id = this.nextEntityID++;
    this.entities.add(id);
    return id;
  }

  destroyEntity(entityID: EntityID): void {
    if (!this.entities.has(entityID)) return;
    
    // Remove from all component maps
    for (const componentMap of this.components.values()) {
      componentMap.delete(entityID);
    }
    
    this.entities.delete(entityID);
  }

  addComponent(entityID: EntityID, component: Component): void {
    const type = component.constructor as ComponentConstructor<Component>;
    if (!this.components.has(type)) {
      this.components.set(type, new Map());
    }
    this.components.get(type)!.set(entityID, component);
  }

  getComponent<T extends Component>(entityID: EntityID, type: ComponentConstructor<T>): T | undefined {
    const componentMap = this.components.get(type);
    return componentMap?.get(entityID) as T | undefined;
  }
}
