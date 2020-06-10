/* (C) Copyright 2019 Hewlett Packard Enterprise Development LP. */
import React from 'react';
import { IonPhaser } from '@ion-phaser/react';
import Phaser from 'phaser';
import { GameWrapper } from '../../components/index';
import BootScene from './scenes/BootScene';
import PreloaderScene from './scenes/PreloaderScene';
import TitleScene from './scenes/TitleScene';
import AttractModeScene from './scenes/AttractModeScene';
import GameScene from './scenes/GameScene';
import GameOverScene from './scenes/GameOverScene';
import HighScoreScene from './scenes/HighScoreScene';
import ErrorScene from './scenes/ErrorScene';
import BackToTitleScene from './scenes/BackToTitleScene';
import ThankYouScene from './scenes/ThankYouScene';
import ProfanityErrorScene from './scenes/ProfanityErrorScene';
import SplashScene from './scenes/SplashScene';
class Game extends Phaser.Scene {
  create() {
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('AttractMode', AttractModeScene);
    this.scene.add('Game', GameScene);
    this.scene.add('GameOver', GameOverScene);
    this.scene.add('HighScore', HighScoreScene);
    this.scene.add('BackToTitle', BackToTitleScene);
    this.scene.add('Error', ErrorScene);
    this.scene.add('ProfanityError', ProfanityErrorScene);
    this.scene.add('ThankYou', ThankYouScene);
    this.scene.add('Splash', SplashScene);
    this.scene.start('Boot');
  }
}

const HackShackAttack = () => {
  const gameConfig = {
    initialize: true,
    game: {
      parent: 'phaser-game',
      type: Phaser.AUTO,
      input: {
        gamepad: true,
        queue: true,
      },
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
      pixelArt: true,
      physics: {
        default: 'arcade',
        arcade: {
          debug: false,
          gravity: { y: 0 },
        },
      },
      scene: Game,
    },
  };
  const { game, initialize } = gameConfig;
  return <GameWrapper>Hello</GameWrapper>;
};

export default HackShackAttack;

{
  /* <div id="phaser-game">
<IonPhaser game={game} initialize={initialize} />
</div> */
}
