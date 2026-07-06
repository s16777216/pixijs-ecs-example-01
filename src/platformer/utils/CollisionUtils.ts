import { PositionComponent, CollisionComponent } from '../components/Components';
import { World } from '../../ecs/World';

export class CollisionUtils {
  static checkAABB(pos1: PositionComponent, col1: CollisionComponent, 
                   pos2: PositionComponent, col2: CollisionComponent): boolean {
    return (
      pos1.x < pos2.x + col2.width &&
      pos1.x + col1.width > pos2.x &&
      pos1.y < pos2.y + col2.height &&
      pos1.y + col1.height > pos2.y
    );
  }
}
