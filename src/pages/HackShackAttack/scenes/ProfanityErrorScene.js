/* (C) Copyright 2019 Hewlett Packard Enterprise Development LP. */
import Phaser from 'phaser';

export default class ProfanityErrorScene extends Phaser.Scene {
  constructor() {
    super('ProfanityError');
  }

  init(data) {
    this.gamepad = undefined;
    this.buttonPressed = false;
    this.stickPressed = false;
    this.startScene = false;

    this.height = this.game.config.height;
    this.width = this.game.config.width;

    this.score = data.score;
  }

  create() {
    this.countdown();
    this.createScene();
    this.createAnimations();
    this.keyboardInputs();
    this.enterInput = this.input.keyboard.on('keyup_ENTER', this.enter, this);
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
    this.enterInput = this.input.keyboard.on('keyup_ENTER', this.enter, this);
  }

  gamepadInputs() {
    // A button
    if (this.gamepad.id.indexOf('Pro Controller') !== -1) {
      if (this.gamepad.buttons[1].pressed) {
        this.buttonPressed = true;
        this.enter();
      }
      if (!this.gamepad.buttons[1].pressed) {
        this.buttonPressed = false;
      }
    } else {
      if (this.gamepad.A && this.buttonPressed === false) {
        this.buttonPressed = true;
        this.enter();
      }
      if (!this.gamepad.A) {
        this.buttonPressed = false;
      }
    }
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

  createScene() {
    this.message1 = this.add.text(
      this.width / 2 - 300,
      this.height / 2 - 180,
      'Profanity is not allowed',
      { fontFamily: 'Kemco', fontSize: '32px' },
    );
    this.message2 = this.add.text(
      this.width / 2 - 330,
      this.height / 2 - 130,
      'in either initials or name.',
      { fontFamily: 'Kemco', fontSize: '32px' },
    );

    this.acceptText = this.add
      .text(
        this.width / 2 - 300,
        this.height / 2,
        'Press  A  or  Enter  to  continue',
        { fontFamily: 'Kemco', fontSize: '24px' },
      )
      .setTint(0xffffff);

    this.background = this.add
      .sprite(this.width / 2, this.height / 2 - 90, 'highscoreBG')
      .setScale(5.1, 5.2);
    this.eyes = this.add
      .sprite(this.width / 2, this.height / 2 - 120, 'highscoreEyes')
      .setScale(4);
  }

  createAnimations() {
    this.tweens.add({
      targets: this.acceptText,
      alpha: 0,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut',
      duration: 800,
    });
    this.eyes.play('blink');
    this.background.anims.playReverse('closeMouth');
  }

  enter() {
    this.startScene = false;
    this.background.play('closeMouth');
    this.background.on('animationcomplete', () => {
      this.scene.start('HighScore', { score: this.score });
    });
  }
}
