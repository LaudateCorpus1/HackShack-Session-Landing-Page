/* (C) Copyright 2019 Hewlett Packard Enterprise Development LP. */
import Phaser from 'phaser';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  init() {
    this.gamepad = undefined;
    this.buttonPressed = false;
    this.stickPressed = false;
    this.startScene = false;
  }

  create() {
    this.countdown();

    // logo
    this.gameLogo = this.add.sprite(0, 0, 'gameLogo').setScale(0.6);
    this.centerObject(this.gameLogo, 0, 1.4);
    this.hpeDevLogo = this.add.sprite(0, 0, 'hpeDevLogo').setScale(0.6);
    this.centerObject(this.hpeDevLogo, -1.6, 2.8);
    // start select box
    this.startSelectionBox = this.add
      .graphics()
      .fillStyle(0xffffff, 1)
      .fillRoundedRect(0, 0, 280, 80);
    this.centerObject(this.startSelectionBox, 1.42, -0.3);
    // start button
    this.startButton = this.add
      .text(0, 0, 'Start', {
        fontFamily: 'Kemco',
        fontSize: '50px',
      })
      .setTint(0x000000)
      .setInteractive();
    this.centerObject(this.startButton, 0.97, -0.4);

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
  }

  onSelect() {
    this.startScene = false;
    this.scene.start('Game');
  }

  centerObject(gameObject, offsetX = 0, offsetY = 0) {
    const { width, height } = this.cameras.main;
    gameObject.x = width / 2 - offsetX * 100;
    gameObject.y = height / 2 - offsetY * 100;
  }
}
