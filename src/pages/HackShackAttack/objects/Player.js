/* (C) Copyright 2019 Hewlett Packard Enterprise Development LP. */
import Phaser from 'phaser';

export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'player');

    this.scene = scene;
    this.lives = 3;
    this.immune = false;

    this.setScale(0.4);

    this.playerFlicker = this.scene.tweens.add({
      targets: this,
      alpha: 0.5,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut',
      duration: 200,
      paused: true,
    });
    this.scene.physics.world.enable(this);
    this.scene.add.existing(this);
  }

  update(moveKeys, fireKeys, gamepad) {
    if (gamepad) {
      this.onMoveGamepad(gamepad);
    } else {
      this.onMoveKeyboard(moveKeys, fireKeys);
    }
    if (this.body.velocity.x === 0 && this.body.velocity.y === 0) {
      this.anims.stop();
    }
    this.constrainVelocity(this, 400);
    this.animateInvincibility();
  }

  animateInvincibility() {
    if (this.immune === true) {
      this.playerFlicker.resume();
    } else {
      this.playerFlicker.pause();
      this.setAlpha(1);
    }
  }

  onHit(damage, livesText) {
    if (this.immune === false) {
      this.lives -= damage;
      livesText.setText(`Lives:${this.lives}`);
      this.scene.cameras.main.shake(120);
      this.immune = true;

      this.scene.time.addEvent({
        delay: 1500,
        callback: () => {
          this.immune = false;
        },
      });
    }
    if (this.lives <= 0) {
      livesText.setText('Lives:0');
      this.disableBody();
      this.scene.events.emit('gameover');
    }
  }

  handleAnimationGamePad(gamepad) {
    if (gamepad.id.indexOf('Pro Controller') !== -1) {
      const { buttons } = gamepad;
      if (buttons[0].pressed) {
        this.play('playerDown', true);
      } else if (buttons[3].pressed) {
        this.play('playerUp', true);
      }
      if (buttons[1].pressed) {
        this.play('playerRight', true);
      } else if (buttons[2].pressed) {
        this.play('playerLeft', true);
      }
    } else {
      if (gamepad.A) {
        this.play('playerDown', true);
      } else if (gamepad.Y) {
        this.play('playerUp', true);
      }
      if (gamepad.B) {
        this.play('playerRight', true);
      } else if (gamepad.X) {
        this.play('playerLeft', true);
      }
    }
  }

  handleAnimationKeyBoard(fireKeys) {
    if (fireKeys.up.isDown) {
      this.play('playerUp', true);
    } else if (fireKeys.down.isDown) {
      this.play('playerDown', true);
    }
    if (fireKeys.left.isDown) {
      this.play('playerLeft', true);
    } else if (fireKeys.right.isDown) {
      this.play('playerRight', true);
    }
  }

  onMoveGamepad(gamepad) {
    this.setVelocity(0);
    if (gamepad.axes.length) {
      const x = gamepad.axes[0].getValue();
      const y = gamepad.axes[1].getValue();
      this.setVelocityX(400 * x);
      this.setVelocityY(400 * y);
      if (Math.abs(x) > Math.abs(y)) {
        if (x < 0) {
          this.play('playerLeft', true);
        } else if (x > 0) {
          this.play('playerRight', true);
        }
      } else if (Math.abs(y) > Math.abs(x)) {
        if (y > 0) {
          this.play('playerDown', true);
        }
        if (y < 0) {
          this.play('playerUp', true);
        }
      }
      this.handleAnimationGamePad(gamepad);
    }
  }

  onMoveKeyboard(moveKeys, fireKeys) {
    this.setVelocity(0);
    if (moveKeys.up.isDown) {
      this.setVelocityY(-400);
      this.play('playerUp', true);
    } else if (moveKeys.down.isDown) {
      this.setVelocityY(400);
      this.play('playerDown', true);
    }
    if (moveKeys.left.isDown) {
      this.setVelocityX(-400);
      this.play('playerLeft', true);
    } else if (moveKeys.right.isDown) {
      this.setVelocityX(400);
      this.play('playerRight', true);
    }
    this.handleAnimationKeyBoard(fireKeys);
  }

  constrainVelocity(sprite, maxVelocity) {
    if (!sprite || !sprite.body) {
      return;
    }
    let angle;
    let vx = sprite.body.velocity.x;
    let vy = sprite.body.velocity.y;
    const currVelocitySqr = vx * vx + vy * vy;

    if (currVelocitySqr > maxVelocity * maxVelocity) {
      angle = Math.atan2(vy, vx);
      vx = Math.cos(angle) * maxVelocity;
      vy = Math.sin(angle) * maxVelocity;
      sprite.body.velocity.x = vx;
      sprite.body.velocity.y = vy;
    }
  }
}
