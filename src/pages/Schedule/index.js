import React from 'react';
import { Heading } from 'grommet';
import { Layout, ScheduleCard, CardGrid } from '../../components/index';
import week1 from '../../data/ScheduleData/discover-events-wk1.json';
import week2 from '../../data/ScheduleData/discover-events-wk2.json';
import { MainTitle } from './styles';

const Schedule = () => {
  return (
    <Layout background="/img/BackgroundImages/schedule-background.png">
      <MainTitle>
        <Heading color="text-strong" margin={{ top: 'none', bottom: 'none' }}>
          SCHEDULE
        </Heading>
        <Heading
          color="text"
          style={{ fontWeight: '500' }}
          margin={{ top: 'none', bottom: 'large' }}
          level={2}
        >
          WEEK OF JUNE 22
        </Heading>
      </MainTitle>
      <CardGrid>
        {week1.map(
          ({
            avatar,
            desc,
            link,
            presenter,
            role,
            sessionId,
            sessionType,
            title,
          }) => (
            <ScheduleCard
              avatar={avatar}
              desc={`${desc.slice(0, 220)}...`}
              id={sessionId}
              key={title}
              presenter={presenter}
              role={role}
              sessionLink={link}
              sessionType={sessionType}
              title={title}
            />
          ),
        )}
      </CardGrid>
      <Heading
        color="text"
        style={{ fontWeight: '500' }}
        margin={{ top: 'large', bottom: 'large' }}
        level={2}
      >
        WEEK OF JUNE 28
      </Heading>
      <CardGrid>
        {week2.map(
          ({
            avatar,
            desc,
            link,
            DBid,
            presenter,
            role,
            sessionId,
            sessionType,
            title,
          }) => (
            <ScheduleCard
              avatar={avatar}
              desc={`${desc.slice(0, 220)}...`}
              id={sessionId}
              key={title}
              DBid={DBid}
              presenter={presenter}
              role={role}
              sessionLink={link}
              sessionType={sessionType}
              title={title}
            />
          ),
        )}
      </CardGrid>
    </Layout>
  );
};

export default Schedule;
