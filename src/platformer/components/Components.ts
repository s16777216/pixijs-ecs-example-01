import { Component } from '../../ecs/World';

export class PositionComponent implements Component {
    constructor(public x: number = 0, public y: number = 0) {}
}

export class VelocityComponent implements Component {
    constructor(public vx: number = 0, public vy: number = 0) {}
}

export class CollisionComponent implements Component {
    constructor(
        public width: number,
        public height: number,
        public isStatic: boolean = false
    ) {}
}

export class PlayerInputComponent implements Component {
    constructor(
        public left: boolean = false,
        public right: boolean = false,
        public jump: boolean = false
    ) {}
}

export class StateComponent implements Component {
    constructor(
        public isGrounded: boolean = false,
        public currentAnimation: string = 'idle'
    ) {}
}
