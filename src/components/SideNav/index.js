import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Box, Button, Heading } from 'grommet';

const getNavColor = (active, hover) => {
  if (active) return 'white';
  if (hover) return 'white';
  return 'rgba(255, 255, 255, 0.3)';
};

const NavButton = ({ active, to, history, children, size }) => {
  const [hover, setHover] = useState(false);

  return (
    <Button
      plain
      onClick={() => {
        history.push(to);
      }}
      onMouseOver={() => setHover(true)}
      onFocus={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      onBlur={() => setHover(false)}
    >
      <Heading
        margin="none"
        size={size === 'small' ? 'medium' : 'small'}
        color={getNavColor(active, hover)}
      >
        {children}
      </Heading>
    </Button>
  );
};

NavButton.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  to: PropTypes.string.isRequired,
  size: PropTypes.string,
};

const SideNav = ({ location, history, size }) => (
  <Box align="start" gap="xsmall" width={{ min: '250px' }}>
    <NavButton
      history={history}
      active={location.pathname === '/'}
      to="/"
      size={size}
    >
      HACK SHACK
    </NavButton>
    <NavButton
      history={history}
      active={location.pathname === '/schedule'}
      to="/schedule"
      size={size}
    >
      SCHEDULE
    </NavButton>
    <NavButton
      history={history}
      active={location.pathname === '/community'}
      to="/community"
      size={size}
    >
      COMMUNITY
    </NavButton>
    <NavButton
      history={history}
      active={
        location.pathname === '/arcade' || location.pathname === '/stickerwall'
      }
      to="/arcade"
      size={size}
    >
      ARCADE
    </NavButton>
    <NavButton
      history={history}
      active={location.pathname === '/register'}
      to="/register"
    >
      REGISTER
    </NavButton>
  </Box>
);

SideNav.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  size: PropTypes.string,
};

export default withRouter(SideNav);

/* Take out EZMERAL for now until announced
    <NavButton history={history} active={location.pathname === '/#'} to="#">
      HPE EZMERAL
    </NavButton> */
/* Take out Replays for now
    <NavButton
      history={history}
      active={location.pathname === '/replays'}
      to="/replays"
    >
      REPLAYS
    </NavButton> */
