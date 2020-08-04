import React from 'react';
import { Heading } from 'grommet';
import { Layout, ScheduleCard, CardGrid } from '../../components/index';
import schedule from '../../data/ScheduleData/schedule.json';
import { MainTitle } from './styles';

const Schedule = () => {
  return (
    <Layout background="/img/BackgroundImages/schedule-background.png">
      <MainTitle>
        <Heading color="text-strong" margin={{ top: 'none', bottom: 'medium' }}>
          CHALLENGES
        </Heading>
      </MainTitle>
      <CardGrid>
        {schedule.map(
          ({
            avatar,
            desc,
            link,
            DBid,
            notebook,
            presenter,
            role,
            sessionId,
            sessionType,
            title,
          }) => (
            <ScheduleCard
              avatar={avatar}
              desc={
                sessionType === 'Game Challenge' ||
                sessionType === 'Coding Challenge'
                  ? `${desc.slice(0, 520)}`
                  : `${desc.slice(0, 220)}...`
              }
              id={sessionId}
              key={title}
              DBid={DBid}
              presenter={presenter}
              role={role}
              sessionLink={link}
              sessionType={sessionType}
              title={title}
              notebook={notebook}
            />
          ),
        )}
      </CardGrid>
    </Layout>
  );
};

export default Schedule;
