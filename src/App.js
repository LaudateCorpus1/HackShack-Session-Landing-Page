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
  // Schedule,
  HackShackAttack,
  ContestPage,
  NewsletterTC,
  ChallengeTC,
  Replays,
  Ezmeral,
  Workshops,
  WorkshopTC,
} from './pages/index';

import ScrollToTop from './components/ScrollToTop';

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
      background="#151d29"
      style={{ overflowX: 'hidden' }}
    >
      <Router history={history}>
        <ScrollToTop />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/community">
            <Community />
          </Route>
          {/* hiding challenges while working on workshops on demand
          <Route path="/challenges">
            <Schedule />
          </Route> */}
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
          <Route
            exact
            path="/replays"
            render={props => <Replays {...props} />}
          ></Route>
          <Route
            path="/replays/:replayId"
            render={props => <Replays {...props} />}
          ></Route>
          <Route path="/newslettertermsconditions">
            <NewsletterTC />
          </Route>
          <Route path="/challengetermsconditions">
            <ChallengeTC />
          </Route>
          <Route path="/newslettertermsconditions">
            <NewsletterTC />
          </Route>
          <Route path="/ezmeral">
            <Ezmeral />
          </Route>
          <Route path="/workshops">
            <Workshops />
          </Route>
          <Route path="/workshoptermsconditions">
            <WorkshopTC />
          </Route>
        </Switch>
      </Router>
    </Grommet>
  );
};

export default App;
