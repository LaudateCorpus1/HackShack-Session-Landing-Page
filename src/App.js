import React, { useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Grommet } from 'grommet';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import { throwError } from 'rxjs';
import { hpe } from 'grommet-theme-hpe';
import { deepMerge } from 'grommet/utils';
import {
  // Home,
  Community,
  Arcade,
  StickerWall,
  HackShackAttack,
  ContestPage,
  NewsletterTC,
  ChallengeTC,
  Replays,
  Ezmeral,
  Workshops,
  WorkshopTC,
  Challenges,
  TreasureHuntTC,
} from './pages/index';
import FinisherBadge from './pages/Replays/finisher-badge';
import SpecialBadge from './pages/Workshops/special-badge';

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
          <Route exact path="/" render={props => <Workshops {...props} />}>
            {/* <Home /> */}
          </Route>
          <Route path="/community">
            <Community />
          </Route>
          <Route path="/challenges">
            <Challenges />
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
          <Route
            exact
            path="/replays"
            render={props => <Replays {...props} />}
          ></Route>
          <Route
            exact
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
          <Route
            exact
            path="/workshops"
            render={props => <Workshops {...props} />}
          ></Route>
          <Route
            exact
            path="/workshop/:replayId"
            render={props => <Replays {...props} />}
          ></Route>
          <Route
            exact
            path="/workshop/:replayId/finisher-badge"
            render={props => <FinisherBadge {...props} />}
          ></Route>
          <Route
            exact
            path="/workshops/:workshopId/special-badge"
            render={props => <SpecialBadge {...props} />}
          ></Route>
          <Route path="/workshoptermsconditions">
            <WorkshopTC />
          </Route>
          <Route path="/treasurehunttermsconditions">
            <TreasureHuntTC />
          </Route>
        </Switch>
      </Router>
    </Grommet>
  );
};

export default App;
