/* (C) Copyright 2019 Hewlett Packard Enterprise Development LP. */
import Phaser from 'phaser';

// font and highscore assets
const rubImg = 'http://u.cubeupload.com/radlad/p05fOU.png';
const endImg = 'http://u.cubeupload.com/radlad/p05fOU.png';

// tiles
const map = 'http://u.cubeupload.com/radlad/Tmk1qL.png';

// logos
const gameLogo = 'http://u.cubeupload.com/radlad/LIa21m.png';
const hpeDevLogo = 'http://u.cubeupload.com/radlad/HEB49q.png';

// sprites
const playerAvatar = 'http://u.cubeupload.com/radlad/Jjcgzo.png';
const player = 'http://u.cubeupload.com/radlad/Bp8xBK.png';
const devPowerUp = 'http://u.cubeupload.com/radlad/zNUmOq.png';
const bullet = 'http://u.cubeupload.com/radlad/lJfGpA.png';
const itBug = 'http://u.cubeupload.com/radlad/nmHhAF.png';
const itMonster = 'http://u.cubeupload.com/radlad/Ii2OQ1.png';
const devGameOver = 'http://u.cubeupload.com/radlad/9NxC7e.png';
const dizzyAnim = 'http://u.cubeupload.com/radlad/vP6hPM.png';
const highscoreBG = 'http://u.cubeupload.com/radlad/pdlBK1.png';
const itMonsterPoof = 'http://u.cubeupload.com/radlad/u53STA.png';
const bugDeath = 'http://u.cubeupload.com/radlad/yRBfhP.png';
const explosion = 'http://u.cubeupload.com/radlad/yPbEs8.png';
const highscoreEyes = 'http://u.cubeupload.com/radlad/yJ0LSn.png';
const powerUpCollect = 'http://u.cubeupload.com/radlad/mmZ4OK.png';
const winners = 'http://u.cubeupload.com/radlad/Slb9QD.png';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  init() {
    this.readyCount = 0;
  }

  preload() {
    this.add.text(0, 0, '', { fontFamily: 'Kemco' });
    const { width, height } = this.cameras.main;

    // display progress bar
    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(width / 2 - 160, height / 2 - 30, 320, 50);
    // loading text
    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        fontFamily: 'Kemco',
        font: '20px monospace',
        fill: '#FFFFFF',
      },
    });
    // set anchor to center
    loadingText.setOrigin(0.5, 0.5);
    // percent text
    const percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        fontFamily: 'Kemco',
        font: '18px monospace',
        fill: '#FFFFFF',
      },
    });
    // set anchor to center
    percentText.setOrigin(0.5, 0.5);
    // loading assets text
    const assetsText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#FFFFFF',
      },
    });
    // set anchor to center
    assetsText.setOrigin(0.5, 0.5);
    // update progress bar and file progress bar
    this.load.on('progress', value => {
      percentText.setText(`${parseInt(value * 100)}%`);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(width / 2 - 150, height / 2 - 20, 300 * value, 30);
    });
    this.load.on('fileprogress', file => {
      assetsText.setText(`Loading asset: ${file.key}`);
    });
    // remove progress bars when complete
    this.load.on('complete', () => {
      progressBox.destroy();
      progressBar.destroy();
      assetsText.destroy();
      loadingText.destroy();
      percentText.destroy();
      this.ready();
    });
    // timed event for logo
    this.timedEvent = this.time.delayedCall(1, this.ready, [], this);
    // input panel
    this.load.image('rub', rubImg);
    this.load.image('end', endImg);

    // sprites
    this.load.image('map', map);

    this.load.image('gameLogo', gameLogo);
    this.load.image('hpeDevLogo', hpeDevLogo);

    this.load.image('playerAvatar', playerAvatar);
    this.load.image('bullet', bullet);
    this.load.image('devGameOver', devGameOver);
    this.load.image('winners', winners);

    this.load.spritesheet('player', player, {
      frameWidth: 80,
      frameHeight: 112,
    });
    this.load.spritesheet('itBug', itBug, { frameWidth: 96, frameHeight: 124 });
    this.load.spritesheet('itMonster', itMonster, {
      frameWidth: 100,
      frameHeight: 116,
    });
    this.load.spritesheet('highscoreBG', highscoreBG, {
      frameWidth: 167,
      frameHeight: 96,
    });
    this.load.spritesheet('highscoreEyes', highscoreEyes, {
      frameWidth: 167,
      frameHeight: 96,
    });
    this.load.spritesheet('dizzyAnim', dizzyAnim, {
      frameWidth: 96,
      frameHeight: 124,
    });
    this.load.spritesheet('itMonsterPoof', itMonsterPoof, {
      frameWidth: 100,
      frameHeight: 100,
    });
    this.load.spritesheet('bugDeath', bugDeath, {
      frameWidth: 64,
      frameHeight: 64,
    });
    this.load.spritesheet('explosion', explosion, {
      frameWidth: 72,
      frameHeight: 80,
    });
    this.load.spritesheet('devPowerUp', devPowerUp, {
      frameWidth: 96,
      frameHeight: 96,
    });
    this.load.spritesheet('powerUpCollect', powerUpCollect, {
      frameWidth: 96,
      frameHeight: 180,
    });
  }

  create() {
    // it monster specific animations
    this.anims.create({
      key: 'poof',
      frames: this.anims.generateFrameNumbers('itMonsterPoof', {
        start: 0,
        end: 8,
      }),
      frameRate: 30,
      repeat: 0,
      hideOnComplete: true,
    });
    this.anims.create({
      key: 'walk',
      frames: this.anims.generateFrameNumbers('itMonster', {
        start: 0,
        end: 5,
      }),
      frameRate: 20,
      repeat: -1,
    });
    // bug specific animations
    this.anims.create({
      key: 'bounce',
      frames: this.anims.generateFrameNumbers('itBug', { start: 0, end: 6 }),
      frameRate: 15,
      repeat: -1,
    });
    this.anims.create({
      key: 'death',
      frames: this.anims.generateFrameNumbers('bugDeath', { start: 0, end: 4 }),
      frameRate: 30,
      repeat: 0,
      hideOnComplete: true,
    });
    // player specific animations
    this.anims.create({
      key: 'playerUp',
      frames: this.anims.generateFrameNumbers('player', { start: 7, end: 9 }),
      repeat: -1,
      frameRate: 10,
    });
    this.anims.create({
      key: 'playerDown',
      frames: this.anims.generateFrameNumbers('player', { start: 0, end: 2 }),
      repeat: -1,
      frameRate: 10,
    });
    this.anims.create({
      key: 'playerLeft',
      frames: this.anims.generateFrameNumbers('player', { start: 3, end: 4 }),
      repeat: -1,
      frameRate: 10,
    });
    this.anims.create({
      key: 'playerRight',
      frames: this.anims.generateFrameNumbers('player', { start: 5, end: 6 }),
      repeat: -1,
      frameRate: 10,
    });
    this.anims.create({
      key: 'explode',
      frames: this.anims.generateFrameNumbers('explosion', {
        start: 0,
        end: 2,
      }),
      repeat: 0,
      frameRate: 30,
      hideOnComplete: true,
    });
    this.anims.create({
      key: 'powerUpFloat',
      frames: this.anims.generateFrameNumbers('devPowerUp', {
        start: 0,
        end: 15,
      }),
      repeat: -1,
      frameRate: 15,
    });
    this.anims.create({
      key: 'powerUpCollect',
      frames: this.anims.generateFrameNumbers('powerUpCollect', {
        start: 0,
        end: 4,
      }),
      repeat: 0,
      frameRate: 10,
      hideOnComplete: true,
    });
    // highscore scene specific animations
    this.anims.create({
      key: 'blink',
      frames: this.anims.generateFrameNumbers('highscoreEyes', {
        start: 0,
        end: 2,
      }),
      frameRate: 8,
      repeat: -1,
      delay: 5000,
      repeatDelay: 6000,
    });
    this.anims.create({
      key: 'closeMouth',
      frames: this.anims.generateFrameNumbers('highscoreBG', {
        start: 2,
        end: 7,
      }),
      frameRate: 30,
      delay: 200,
      repeat: 0,
    });
    // gameover scene specific animations
    this.anims.create({
      key: 'dizzy',
      frames: this.anims.generateFrameNumbers('dizzyAnim', {
        start: 0,
        end: 13,
      }),
      frameRate: 10,
      repeat: -1,
    });
  }

  ready() {
    this.readyCount += 1;
    if (this.readyCount === 2) {
      this.scene.start('ThankYou');
    }
  }
}
