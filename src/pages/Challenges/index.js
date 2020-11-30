import React, { useEffect, useState } from 'react';
import { Heading, Text, Box } from 'grommet';
import { Layout, ScheduleCard, CardGrid } from '../../components/index';
import { MainTitle } from './styles';
import axios from 'axios';

const Challenge = () => {
  const { REACT_APP_WORKSHOPCHALLENGE_API_ENDPOINT } = process.env;
  const getChallengesApi = `${REACT_APP_WORKSHOPCHALLENGE_API_ENDPOINT}/api/workshops?active=true`;
  const [challenges, setchallenges] = useState([]);
  const [error, setError] = useState('');
  let arr = [];

  useEffect(() => {
    const getChallenges = () => {
      axios({
        method: 'GET',
        url: getChallengesApi,
      })
        .then(response => {
          // Map created
          response.data.forEach(challenge => {
            if (challenge.sessionType === 'Coding Challenge')
              arr.push({ ...challenge });
          });
          if (arr.length <= 0)
            setError(
              `There are currently no challenges in progress. Stay tuned!`,
            );
          setchallenges(arr);
        })
        .catch(err => {
          setError(
            'Oops..something went wrong. The HPE DEV team is addressing the problem. Please try again later!',
          );
          console.log(err);
        });
    };
    getChallenges();
    // eslint-disable-next-line
  }, []);
  return (
    <Layout background="/img/BackgroundImages/schedule-background.png">
      <MainTitle>
        <Heading color="text-strong" margin={{ top: 'none', bottom: 'small' }}>
          CHALLENGES
        </Heading>
        <Text color="text-strong" margin={{ top: 'none', bottom: 'medium' }}>
          Register for Challenges
        </Text>
      </MainTitle>
      {challenges.length > 0 ? (
        <CardGrid>
          {challenges.map(challenge => (
            <ScheduleCard
              avatar={challenge.avatar}
              desc={
                challenge.sessionType === 'Coding Challenge'
                  ? `${challenge.description.slice(0, 520)}`
                  : `${challenge.description.slice(0, 220)}...`
              }
              id={challenge.sessionId}
              key={challenge.name}
              DBid={challenge.id}
              presenter={challenge.presenter}
              role={challenge.role}
              sessionLink={challenge.replayLink}
              sessionType={challenge.sessionType}
              title={challenge.name}
              notebook={challenge.notebook}
              location={challenge.location}
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
              <Text size="large" alignSelf="center">
                {error}
              </Text>
              <Box height="medium"></Box>
            </>
          ) : (
            <Box height="medium"></Box>
          )}
        </Box>
      )}
    </Layout>
  );
};

export default Challenge;
