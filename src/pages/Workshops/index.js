import React, { useEffect, useState } from 'react';
import { Heading, Text, Box, Image } from 'grommet';
import { Layout, ScheduleCard, CardGrid } from '../../components/index';
import { MainTitle } from './styles';
import axios from 'axios';

const Workshop = () => {
  const { REACT_APP_WORKSHOPCHALLENGE_API_ENDPOINT } = process.env;
  const getWorkshopsApi = `${REACT_APP_WORKSHOPCHALLENGE_API_ENDPOINT}/api/workshops?active=true`;
  const [workshops, setworkshops] = useState([]);
  const [error, setError] = useState('');
  let arr = [];

  useEffect(() => {
    const getWorkshops = () => {
      axios({
        method: 'GET',
        url: getWorkshopsApi,
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
          setError(
            'Oops..something went wrong. The HPE DEV team is addressing the problem. Please try again later!',
          );
          console.log(err);
        });
    };
    getWorkshops();
    // eslint-disable-next-line
  }, []);
  return (
    <Layout background="/img/BackgroundImages/schedule-background.png">
      <MainTitle>
        <Heading color="text-strong" margin={{ top: 'none', bottom: 'small' }}>
          WORKSHOPS
        </Heading>
        <Text color="text-strong" margin={{ top: 'none', bottom: 'medium' }}>
          Register for Workshops-on-Demand
        </Text>
      </MainTitle>
      {workshops.length > 0 ? (
        <CardGrid>
          {workshops.map(workshop => (
            <ScheduleCard
              avatar={workshop.avatar}
              desc={
                workshop.sessionType === 'Workshops-on-Demand'
                  ? `${workshop.description.slice(0, 520)}`
                  : `${workshop.description.slice(0, 220)}...`
              }
              id={workshop.sessionId}
              key={workshop.name}
              DBid={workshop.id}
              presenter={workshop.presenter}
              role={workshop.role}
              sessionLink={workshop.replayLink}
              sessionType={workshop.sessionType}
              title={workshop.name}
              notebook={workshop.notebook}
              location={workshop.location}
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
          <Text size="large" color="status-critical" alignSelf="center">
            {error}
          </Text>
          <Image src="/img/gremlin-rockin.svg"></Image>
        </Box>
      )}
    </Layout>
  );
};

export default Workshop;
