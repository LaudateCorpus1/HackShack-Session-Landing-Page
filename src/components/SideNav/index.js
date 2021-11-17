import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { Box, Button, Heading } from 'grommet';

const getNavColor = (active, hover) => {
  if (active) return 'white';
  if (hover) return 'white';
  return 'rgba(255, 255, 255, 0.3)';
};

const SideNavContainer = styled(Box)`
  z-index: 1;
`;

const NavButton = ({ active, to, history, children, size, href }) => {
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
      href={href}
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
  href: PropTypes.string,
};

const SideNav = ({ location, history, size, match }) => (
  <SideNavContainer align="start" gap="xsmall" width={{ min: '250px' }}>
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
      active={location.pathname === '/workshops'}
      to="/workshops"
      size={size}
    >
      WORKSHOPS
    </NavButton>
    <NavButton
      history={history}
      active={location.pathname === '/challenges'}
      to="/challenges"
      size={size}
    >
      CHALLENGES
    </NavButton>
    <NavButton
      history={history}
      active={location.pathname === '/ezmeral'}
      to="/ezmeral"
      size={size}
    >
      HPE EZMERAL
    </NavButton>
    <NavButton
      history={history}
      active={match.path === '/replays/:replayId'}
      to="/replays/0"
      size={size}
    >
      REPLAYS
    </NavButton>{' '}
    <NavButton
      history={history}
      active={location.pathname === '/community'}
      href="https://developer.hpe.com/community"
      size={size}
    >
      COMMUNITY
    </NavButton>
    <NavButton
      history={history}
      active={
        location.pathname === '/arcade' ||
        location.pathname === '/stickerwall' ||
        location.pathname === '/competiton'
      }
      to="/arcade"
      size={size}
    >
      ARCADE
    </NavButton>
  </SideNavContainer>
);

SideNav.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  match: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  size: PropTypes.string,
};

export default withRouter(SideNav);
