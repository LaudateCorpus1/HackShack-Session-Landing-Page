import React, { useEffect, useState } from 'react';
import {
  Heading,
  Text,
  Box,
  Image
} from 'grommet';
import { Layout, ScheduleCard, CardGrid } from '../../components/index';
import { MainTitle } from './styles';
import axios from 'axios';
import AuthService from '../../services/auth.service';
import { Helmet } from 'react-helmet';

const Workshop = props => {
  const { REACT_APP_WORKSHOPCHALLENGE_API_ENDPOINT } = process.env;
  const getWorkshopsApi = `${REACT_APP_WORKSHOPCHALLENGE_API_ENDPOINT}/api/workshops?active=true`;
  const getSpecialBadgesApi = `${REACT_APP_WORKSHOPCHALLENGE_API_ENDPOINT}/api/special-badges`;
  const [workshops, setworkshops] = useState([]);
  const [specialBadges, setSpecialBadges] = useState([]);
  const [error, setError] = useState('');
  let arr = [];

  useEffect(() => {
    const getToken = () => {
      AuthService.login().then(
        () => {
          getWorkshops(AuthService.getCurrentUser().accessToken);
          getSpecialBadges(AuthService.getCurrentUser().accessToken);
        },
        err => {
          setError(
            'Oops..something went wrong. The HPE DEV team is addressing the problem. Please try again later!',
          );
        },
      );
    };

    const getWorkshops = token => {
      axios({
        method: 'GET',
        url: getWorkshopsApi,
        headers: { 'x-access-token': token },
      })
        .then(response => {
          // Map created
          response.data.forEach(workshop => {
            if (workshop.sessionType === 'Workshops-on-Demand')
              arr.push({ ...workshop });
          });
          setworkshops(arr);
        })
        .catch(err => {
          if (err.response.status === 401) {
            AuthService.login().then(() => getToken());
          } else {
            console.log('catch error', err);
            setError(
              'Oops..something went wrong. The HPE DEV team is addressing the problem. Please try again later!',
            );
          }
        });
    };
    const getSpecialBadges = token => {
      axios({
        method: 'GET',
        url: getSpecialBadgesApi,
        headers: { 'x-access-token': token },
      })
        .then(response => {
          setSpecialBadges(response.data);
        })
        .catch(err => {
          if (err.response.status === 401) {
            AuthService.login().then(() => getToken());
          } else {
            console.log('catch error', err);
            setError(
              'Oops..something went wrong. The HPE DEV team is addressing the problem. Please try again later!',
            );
          }
        });
    };
    getToken();
    // eslint-disable-next-line
  }, []);

  let workshopId = 0;
  if (props.match.params.workshopId) {
    workshopId = parseInt(props.match.params.workshopId, 10);
  }
  const openGraphImg = props.match.params.workshopId ? specialBadges.length > 0 && specialBadges[workshopId].badgeImg : props.openGraphImg;
  
  return (
    <Layout background="/img/BackgroundImages/schedule-background.png">
      { specialBadges.length > 0 && (
        <Helmet>
          <meta name="fragment" content="!" />
          <meta property="og:title" content="Workshops on Demand" data-react-helmet="true" />
          <meta property="og:description" content="Workshops on Demand" data-react-helmet="true" />
          <meta property="og:image" content={openGraphImg} data-react-helmet="true" />
          <meta property="og:image:width" content="200" data-react-helmet="true" />
          <meta property="og:image:height" content="200" data-react-helmet="true" />

          {/* <!-- Google / Search Engine Tags --> */}
          <meta itemprop="name" content="Workshops on Demand" data-react-helmet="true" />
          <meta itemprop="description" content="Workshops on Demand description" data-react-helmet="true" />
          <meta itemprop="image" content={openGraphImg} data-react-helmet="true" />

          {/* <!-- Facebook Meta Tags --> */}
          <meta property="og:type" content="website" data-react-helmet="true" />
          <meta property="og:title" content="Workshops on Demand" data-react-helmet="true" />
          <meta property="og:description" content="Workshops on Demand description" data-react-helmet="true" />
          <meta property="og:image" content={openGraphImg} data-react-helmet="true" />

          {/* <!-- Twitter Meta Tags --> */}
          <meta name="twitter:card" content="summary_large_image" data-react-helmet="true" />
          <meta name="twitter:title" content="Workshops on Demand" data-react-helmet="true" />
          <meta name="twitter:description" content="Workshops on Demand description" data-react-helmet="true" />
          <meta name="twitter:image" content={openGraphImg} data-react-helmet="true" />
        </Helmet>
      )}
      <MainTitle>
        <Heading color="text-strong" margin={{ top: 'none', bottom: 'small' }}>
          Workshops-on-Demand
        </Heading>
      </MainTitle>
      {workshops.length > 0 ? (
        <CardGrid>
          {workshops.map(workshop => (
            <ScheduleCard
              avatar={workshop.replay && workshop.replay.avatar}
              desc={
                workshop.sessionType === 'Workshops-on-Demand'
                  ? `${workshop.description.slice(0, 520)}`
                  : `${workshop.description.slice(0, 220)}...`
              }
              id={workshop.sessionId}
              key={workshop.name}
              DBid={workshop.id}
              presenter={workshop.replay && workshop.replay.presenter}
              role={workshop.replay && workshop.replay.role}
              sessionLink={workshop.replayLink}
              sessionType={workshop.sessionType}
              title={workshop.name}
              notebook={workshop.notebook}
              location={workshop.location}
              replayId={workshop.replayId}
            />
          ))}
        </CardGrid>
      ) : (
        <Box
          pad="small"
          justify="center"
          margin={{ top: 'medium' }}
          direction="column"
        // background="status-critical"
        >
          {error ? (
            <>
              <Text size="large" color="status-critical" alignSelf="center">
                {error}
              </Text>
              <Image src="/img/gremlin-rockin.svg"></Image>
            </>
          ) : (
            <Box height="medium"></Box>
          )}
        </Box>
      )}
    </Layout>
  );
};

export default Workshop;
