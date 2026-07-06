## ADDED Requirements

### Requirement: Horizontal Movement
The player SHALL move left and right based on the current state of the `PlayerInputComponent`.

#### Scenario: Moving Right
- **WHEN** the 'Right' key is active in `PlayerInputComponent`
- **THEN** the player's horizontal velocity is set to a positive constant (MoveSpeed)

### Requirement: Jump Execution
The player SHALL be able to jump if they are currently in a "Grounded" state.

#### Scenario: Successful Jump
- **WHEN** the 'Jump' key is pressed and `StateComponent.isGrounded` is true
- **THEN** the player's vertical velocity is set to a jump force (JumpImpulse)

### Requirement: Friction/Deceleration
The player SHALL decelerate to a stop when no movement keys are pressed.

#### Scenario: Stopping
- **WHEN** no movement keys are active in `PlayerInputComponent`
- **THEN** the horizontal velocity is linearly interpolated toward 0
