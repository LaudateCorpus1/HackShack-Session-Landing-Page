import React from 'react';
import { Heading } from 'grommet';
import { Layout, ScheduleCard, CardGrid } from '../../components/index';
import eventSchedule from '../../ScheduleData/hpe-discover-events.json';

const Schedule = () => {
  return (
    <Layout background="/img/schedule-background.png">
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
        <CardGrid>
          {eventSchedule.map(
            ({
              session_id,
              session_type,
              avatar,
              title,
              presenter,
              desc,
              role,
              week,
            }) => (
              <ScheduleCard
                key={title}
                id={session_id}
                avatar={avatar}
                role={role}
                sessionType={session_type}
                title={title}
                presenter={presenter}
                desc={desc.slice(0, 220) + '...'}
              />
            ),
          )}
        </CardGrid>
    </Layout>
  );
};

export default Schedule;
