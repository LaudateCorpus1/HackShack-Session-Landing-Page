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

function getNumberOfWeek() {
  const today = new Date();
  console.log('today', today);
  const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
  const pastDaysOfYear = (today - firstDayOfYear) / 86400000;
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}

let dateTitle;
let weekFile;
switch (getNumberOfWeek()) {
  case 27:
    dateTitle = 'Week of June 29';
    weekFile = week3;
    break;
  case 28:
    dateTitle = 'Week of July 6';
    weekFile = week3;
    break;
  case 29:
    dateTitle = 'Week of July 13';
    weekFile = week4;
    break;
  case 30:
    dateTitle = 'Week of July 20';
    weekFile = week5;
    break;
  case 31:
    dateTitle = 'Week of July 27';
    weekFile = week6;
    break;
  default:
    dateTitle = 'This week in Discover';
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
