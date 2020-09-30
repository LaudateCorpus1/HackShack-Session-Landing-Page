import React, { useState, useEffect } from 'react';
import { Heading } from 'grommet';
import { Layout, ScheduleCard, CardGrid } from '../../components/index';
import { MainTitle } from './styles';
import axios from 'axios';

const Schedule = () => {
  const { REACT_APP_WORKSHOPCHALLENGE_API_ENDPOINT } = process.env;
  const getChallengesApi = `${REACT_APP_WORKSHOPCHALLENGE_API_ENDPOINT}/api/challenges`;
  const [challenges, setchallenges] = useState([]);
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
          setchallenges(arr);
        })
        .catch(err => {
          console.log(err);
        });
    };
    getChallenges();
    // eslint-disable-next-line
  }, []);
  return (
    <Layout background="/img/BackgroundImages/schedule-background.png">
      <MainTitle>
        <Heading color="text-strong" margin={{ top: 'none', bottom: 'medium' }}>
          CHALLENGES
        </Heading>
      </MainTitle>
      <CardGrid>
        {challenges.map(challenge => (
          <ScheduleCard
            avatar={challenge.avatar}
            desc={
              challenge.sessionType === 'Game Challenge' ||
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
    </Layout>
  );
};

export default Schedule;
