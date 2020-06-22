/* (C) Copyright 2019 Hewlett Packard Enterprise Development LP. */
import React, { useEffect, useState } from 'react';
import { IonPhaser } from '@ion-phaser/react';
import styled from 'styled-components';
import { Box, Button, Layer, Image, Text, Anchor, CheckBox } from 'grommet';
import { Link } from 'react-router-dom';
import { Previous } from 'grommet-icons';
import Phaser from 'phaser';
import BootScene from './scenes/BootScene';
import PreloaderScene from './scenes/PreloaderScene';
import HowToPlayScene from './scenes/HowToPlay';
import LeaderboardScene from './scenes/Leaderboard';
import TitleScene from './scenes/TitleScene';
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
    this.scene.add('Game', GameScene);
    this.scene.add('HowToPlay', HowToPlayScene);
    this.scene.add('Leaderboard', LeaderboardScene);
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

const gameConfig = {
  initialize: true,
  game: {
    width: 1366,
    height: 768,
    parent: 'phaser-game',
    type: Phaser.AUTO,
    input: {
      gamepad: true,
      queue: true,
    },
    scale: {
      autoCenter: Phaser.Scale.CENTER_BOTH,
      mode: Phaser.Scale.ENVELOP,
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

const GameContainer = styled(Box)`
  position: relative;
  min-height: 1100px;
`;

const BackgroundWrapper = styled(Box)`
  position: absolute;
  z-index: 10;
`;

const TermsLayer = ({ setAccepted }) => {
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (checked) {
      setAccepted(true);
      setError(false);
      localStorage.setItem('formData', JSON.stringify({ accepted: true }));
    } else {
      setError(true);
    }
  };

  return (
    <Layer>
      <Box alignSelf="end" pad="small">
        <Link to={{ pathname: '/arcade' }}>
          <Button icon={<Previous />} label="Back to Arcade" />
        </Link>
      </Box>
      <Box direction="column" pad="large" gap="medium" align="start">
        <Image
          width="100%"
          fit="cover"
          alt="attack marquee"
          src="/assets/attack-marquee.png"
        />
        <Text style={{ fontFamily: 'Kemco' }} size="xxlarge" color="#ffffff">
          HPE may need to collect your email address if you are a high scoring
          winner. Your email will not be used for any other purpose.
        </Text>
        <Text color="#ffffff">
          Read the full{' '}
          <Anchor
            href=" https://hackshack.hpedev.io/competition"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Text color="#ffffff" weight={900}>
              Terms and Conditions
            </Text>
          </Anchor>{' '}
          that apply.
        </Text>
        <Box direction="row" align="center">
          <CheckBox
            onChange={() => {
              setChecked(!checked);
              setError(false);
            }}
          />
          <Text color="#ffffff" style={{ fontFamily: 'Kemco' }}>
            I agree.
          </Text>
        </Box>
        {error && <Text>You must agree to play.</Text>}
        <Button onClick={() => handleSubmit()}>
          <Box background="#00567acc">
            <Text
              color="#ffffff"
              style={{ fontFamily: 'Kemco' }}
              size="xxlarge"
              margin="medium"
            >
              Start Game
            </Text>
          </Box>
        </Button>
      </Box>
    </Layer>
  );
};
const HackShackAttack = () => {
  const { game, initialize } = gameConfig;
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem('formData');
    const parsedData = JSON.parse(data);
    if (parsedData) {
      if (parsedData.accepted) {
        setAccepted(true);
      }
    }
  }, []);

  return (
    <GameContainer fill>
      <BackgroundWrapper
        fill
        background={{
          image: 'url(/img/BackgroundImages/hackshack-attack-background.png)',
          size: 'cover',
          position: 'top center',
        }}
      >
        <Box margin="48px" alignSelf="start">
          <Link to={{ pathname: '/arcade' }}>
            <Button icon={<Previous />} label="Back to Arcade" />
          </Link>
        </Box>
      </BackgroundWrapper>
      {accepted && (
        <Box fill id="phaser-game">
          <IonPhaser game={game} initialize={initialize} />
        </Box>
      )}
      {!accepted && <TermsLayer setAccepted={setAccepted} />}
    </GameContainer>
  );
};

export default HackShackAttack;
