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
  ContestPage,
} from './pages/index';

const customHpe = deepMerge(hpe, {
  global: {
    breakpoints: {
      small: {
        value: 900,
      },
    },
  },
});

const App = () => {
  let gtagId;
  let gaDebug;
  if (process.env.REACT_APP_NODE_ENV === 'production') {
    gtagId = process.env.REACT_APP_GOOGLE_ANALYTICS_ID;
    gaDebug = false;
  } else if (process.env.REACT_APP_NODE_ENV === 'development') {
    gtagId = 'UA-NNNNNN-N';
    gaDebug = false;
  } else {
    throwError(
      "REACT_APP_NODE_ENV not set to 'production' nor 'development'." +
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
          <Route path="/competition">
            <ContestPage />
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
