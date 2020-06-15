import React from 'react';
import { Heading } from 'grommet';
import { Layout, ScheduleCard, CardGrid } from '../../components/index';
import eventSchedule from '../../data/ScheduleData/hpe-discover-events.json';
import { MainTitle } from './styles';

const Schedule = () => {
  return (
    <Layout background="/img/schedule-background.png">
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
        {eventSchedule.map(
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
    </Layout>
  );
};

export default Schedule;
