import { Component } from '../ecs/World';

export class SpriteComponent implements Component {
    constructor(
        public textureName: string,
        public anchorX: number = 0,
        public anchorY: number = 0
    ) {}
}
