import React from 'react';
import { Box } from 'grommet';

const GameWrapper = () => {
  return (
    <Box fill style={{ position: 'relative' }}>
      <Box
        fill
        background={{
          image: 'url(/img/hackshack-attack-background.png)',
          size: 'cover',
          position: 'top center',
        }}
        style={{
          position: 'absolute',
          zIndex: 1,
        }}
      />
      <Box id="phaser-game" fill style={{ position: 'absolute' }} />
    </Box>
  );
};

export default GameWrapper;
