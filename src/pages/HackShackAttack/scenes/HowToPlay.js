/* (C) Copyright 2019 Hewlett Packard Enterprise Development LP. */
import Phaser from 'phaser';

export default class HowToPlayScene extends Phaser.Scene {
  constructor() {
    super('HowToPlay');
  }

  init() {
    this.gamepad = undefined;
    this.frame = 'keyboard';
    this.buttonPressed = false;
    this.stickPressed = false;
    this.startScene = false;
    this.height = this.game.config.height;
    this.width = this.game.config.width;
  }

  create() {
    this.countdown();

    this.keyboardControls = this.add
      .sprite(0, 0, 'keyboardControls')
      .setScale(0.45);
    this.centerObject(this.keyboardControls, 0, 1);

    this.padControls = this.add.sprite(0, 0, 'padControls').setScale(0.5);
    this.centerObject(this.padControls, 0.1, 1.1);
    this.padControls.visible = false;
    this.keyboardInputs();

    this.acceptText = this.add
      .text(
        this.width / 2 - 200,
        this.height / 2 + 100,
        'Press A or Enter to continue',
        { fontFamily: 'Kemco', fontSize: '18px' },
      )
      .setTint(0xffffff);

    this.acceptTextFade = this.tweens.add({
      targets: this.acceptText,
      alpha: 0,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut',
      duration: 1200,
    });
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
    if (this.frame === 'keyboard') {
      this.startScene = false;
      this.frame = 'controller';
      this.keyboardControls.visible = false;
      this.padControls.visible = true;
    } else {
      this.frame = 'keyboard';
      this.startScene = false;
      this.scene.start('Title');
    }
  }

  centerObject(gameObject, offsetX = 0, offsetY = 0) {
    const { width, height } = this.cameras.main;
    gameObject.x = width / 2 - offsetX * 100;
    gameObject.y = height / 2 - offsetY * 100;
  }
}
