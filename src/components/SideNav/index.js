import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Box, Button, Heading, ResponsiveContext } from 'grommet';

const getNavColor = (active, hover) => {
  if (active) return 'white';
  if (hover) return 'white';
  return 'rgba(255, 255, 255, 0.3)';
};

const NavButton = ({ active, to, history, children }) => {
  const [hover, setHover] = useState(false);
  const size = useContext(ResponsiveContext);
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
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export const SideNav = ({ location, history }) => (
  <Box align="start" gap="xsmall" width={{ min: '250px' }}>
    <NavButton history={history} active={location.pathname === '/'} to="/">
      HACK SHACK
    </NavButton>
    <NavButton
      history={history}
      active={location.pathname === '/schedule'}
      to="/schedule"
    >
      SCHEDULE
    </NavButton>
    {/* Take out EZMERAL for now until announced
    <NavButton history={history} active={location.pathname === '/#'} to="#">
      HPE EZMERAL
    </NavButton> */}
    {/* Take out Replays for now
    <NavButton
      history={history}
      active={location.pathname === '/replays'}
      to="/replays"
    >
      REPLAYS
    </NavButton> */}
    <NavButton
      history={history}
      active={location.pathname === '/community'}
      to="/community"
    >
      COMMUNITY
    </NavButton>
    <NavButton
      history={history}
      active={
        location.pathname === '/arcade' || location.pathname === '/stickerwall'
      }
      to="/arcade"
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
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(SideNav);
