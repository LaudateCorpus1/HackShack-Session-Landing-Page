/* (C) Copyright 2019 Hewlett Packard Enterprise Development LP. */
import Phaser from 'phaser';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  init() {
    this.selection = 'start';
    this.gamepad = undefined;
    this.buttonPressed = false;
    this.stickPressed = false;
    this.startScene = false;
  }

  create() {
    this.countdown();

    // logo
    this.gameLogo = this.add.sprite(0, 0, 'gameLogo').setScale(0.5);
    this.centerObject(this.gameLogo, 0, 1.65);
    this.hpeDevLogo = this.add.sprite(0, 0, 'hpeDevLogo').setScale(0.5);
    this.centerObject(this.hpeDevLogo, -1.6, 2.8);
    // start select box
    this.startSelectionBox = this.add
      .graphics()
      .fillStyle(0xffffff, 1)
      .fillRoundedRect(0, 0, 190, 55);
    this.centerObject(this.startSelectionBox, 0.9, 0.5);
    // start button
    this.startButton = this.add
      .text(0, 0, 'Start', {
        fontFamily: 'Kemco',
        fontSize: '30px',
      })
      .setTint(0x000000)
      .setInteractive();
    this.centerObject(this.startButton, 0.5, 0.38);
    // hot to play select
    this.controlsSelectionBox = this.add
      .graphics()
      .fillStyle(0xffffff, 1)
      .fillRoundedRect(0, 0, 210, 55);
    this.controlsSelectionBox.visible = false;
    this.centerObject(this.controlsSelectionBox, 1, -0.2);
    // how to play button
    this.controlsButton = this.add
      .text(this.width / 2 + 60, this.height / 2 - 108, 'Controls', {
        fontFamily: 'Kemco',
        fontSize: '30px',
      })
      .setTint(0xffffff)
      .setInteractive();
    this.centerObject(this.controlsButton, 0.85, -0.3);
    this.keyboardInputs();
  }

  update() {
    if (this.input.gamepad.total > 0) {
      this.gamepad = this.input.gamepad.getPad(0);
    }
    if (this.startScene) {
      if (this.gamepad) {
        this.gamepadInputs();
      }
    }
  }

  keyboardInputs() {
    this.upInput = this.input.keyboard.on('keyup_UP', this.onChange, this);
    this.downInput = this.input.keyboard.on('keyup_DOWN', this.onChange, this);
    this.enterInput = this.input.keyboard.on(
      'keyup_ENTER',
      this.onSelect,
      this,
    );
  }

  countdown() {
    if (!this.startScene) {
      const startTimer = this.time.addEvent({
        delay: 500,
        repeat: 1,
        callback: () => {
          if (startTimer.repeatCount === 1) {
            this.startScene = true;
          }
        },
      });
    }
  }

  gamepadInputs() {
    // A button
    if (this.gamepad.id.indexOf('Pro Controller') !== -1) {
      if (this.gamepad.buttons[1].pressed) {
        this.buttonPressed = true;
        this.onSelect();
      }
      if (!this.gamepad.buttons[1].pressed) {
        this.buttonPressed = false;
      }
    } else {
      if (this.gamepad.A && this.buttonPressed === false) {
        this.buttonPressed = true;
        this.onSelect();
      }
      if (!this.gamepad.A) {
        this.buttonPressed = false;
      }
    }
    // joystick
    if (this.gamepad.leftStick.y === -6 && this.stickPressed === false) {
      this.stickPressed = true;
      this.onChange();
    } else if (
      this.gamepad.leftStick.y === 0.6 &&
      this.stickPressed === false
    ) {
      this.stickPressed = true;
      this.onChange();
    }
    if (this.gamepad.leftStick.y === 0) {
      this.stickPressed = false;
    }
  }

  onChange() {
    if (this.selection === 'start') {
      this.controlsSelectionBox.visible = true;
      this.startSelectionBox.visible = false;
      this.controlsButton.setTint(0x000000);
      this.startButton.setTint(0xffffff);
      this.selection = 'controls';
    } else {
      this.controlsSelectionBox.visible = false;
      this.startSelectionBox.visible = true;
      this.controlsButton.setTint(0xffffff);
      this.startButton.setTint(0x000000);
      this.selection = 'start';
    }
  }

  onSelect() {
    if (this.selection === 'start') {
      this.startScene = false;
      this.scene.start('Game');
    } else if (this.selection === 'controls') {
      this.startScene = false;
      this.scene.start('HowToPlay');
    }
  }

  centerObject(gameObject, offsetX = 0, offsetY = 0) {
    const { width, height } = this.cameras.main;
    gameObject.x = width / 2 - offsetX * 100;
    gameObject.y = height / 2 - offsetY * 100;
  }
}
