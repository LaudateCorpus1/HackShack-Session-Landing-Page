import React, { useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Grommet } from 'grommet';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import { throwError } from 'rxjs';
import { hpe } from 'grommet-theme-hpe';
import { deepMerge } from 'grommet/utils';
import {
  Home,
  Community,
  Arcade,
  StickerWall,
  Schedule,
  HackShackAttack,
} from './pages/index';

const customHpe = deepMerge(hpe, {
  global: {
    breakpoints: {
      small: {
        value: 700,
      },
      medium: {
        value: 900,
      },
      large: {
        value: 1200,
      },
    },
  },
});

const App = () => {
  let gtagId;
  let gaDebug;
  if (process.env.NODE_ENV === 'production') {
    gtagId = 'UA-108944070-5';
    gaDebug = false;
  } else if (process.env.NODE_ENV === 'development') {
    gtagId = 'UA-NNNNNN-N';
    gaDebug = false;
  } else {
    throwError(
      "NODE_ENV not set to 'production' nor 'development'." +
        'Google Analytics tracking will not be initialized.',
    );
  }
  ReactGA.initialize(gtagId, {
    debug: gaDebug,
  });
  const history = createBrowserHistory();
  history.listen(location => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  });
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const { location } = window;
      ReactGA.set({ page: location.pathname });
      ReactGA.pageview(location.pathname);
    }
  }, []);
  return (
    <Grommet
      theme={customHpe}
      themeMode="dark"
      full
      background="#151d29"
      style={{ overflowX: 'hidden' }}
    >
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/community">
            <Community />
          </Route>
          <Route path="/schedule">
            <Schedule />
          </Route>
          <Route path="/arcade">
            <Arcade />
          </Route>
          <Route path="/stickerwall">
            <StickerWall />
          </Route>
          <Route path="/hackshackattack">
            <HackShackAttack />
          </Route>
        </Switch>
      </Router>
    </Grommet>
  );
};

export default App;
