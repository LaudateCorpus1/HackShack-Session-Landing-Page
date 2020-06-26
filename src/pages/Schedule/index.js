import React from 'react';
import { Heading } from 'grommet';
import { Layout, ScheduleCard, CardGrid } from '../../components/index';
import {
  // eslint-disable-next-line no-unused-vars
  week1,
  week2,
  week3,
  week4,
  week5,
  week6,
} from '../../data/ScheduleData/index';
import { MainTitle } from './styles';

let dateTitle;
let weekFile;
switch (new Date().getDate()) {
  case 5:
    dateTitle = 'Week of July 6';
    weekFile = week3;
    break;
  case 12:
    dateTitle = 'Week of July 13';
    weekFile = week4;
    break;
  case 19:
    dateTitle = 'Week of July 20';
    weekFile = week5;
    break;
  case 26:
    dateTitle = 'Week of July 27';
    weekFile = week6;
    break;
  default:
    dateTitle = 'Week of June 29';
    weekFile = week2;
}

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
          {dateTitle}
        </Heading>
      </MainTitle>
      <CardGrid>
        {weekFile.map(
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
