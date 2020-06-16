/* (C) Copyright 2019 Hewlett Packard Enterprise Development LP. */
import Phaser from 'phaser';

export default class PowerUp extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'devPowerUp');

    this.scene = scene;

    this.scene.physics.world.enable(this);
    this.scene.add.existing(this);
  }

  spawn(x, y) {
    this.setPosition(x, y);
    this.play('powerUpFloat');
  }

  onHit() {
    this.setActive(false);
    this.setVisible(false);
    this.disableBody();

    this.scene.events.emit('gotPowerUp');
  }
}
