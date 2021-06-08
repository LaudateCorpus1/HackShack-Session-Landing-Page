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

const Workshop = ({ match }) => {
  const { REACT_APP_WORKSHOPCHALLENGE_API_ENDPOINT } = process.env;
  const getWorkshopsApi = `${REACT_APP_WORKSHOPCHALLENGE_API_ENDPOINT}/api/workshops?active=true`;
  const [workshops, setworkshops] = useState([]);
  const [error, setError] = useState('');
  let arr = [];

  useEffect(() => {
    const getToken = () => {
      AuthService.login().then(
        () => {
          getWorkshops(AuthService.getCurrentUser().accessToken);
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
    getToken();
    // eslint-disable-next-line
  }, []);
  return (
    <Layout background="/img/BackgroundImages/schedule-background.png">
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
              match={match}
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
