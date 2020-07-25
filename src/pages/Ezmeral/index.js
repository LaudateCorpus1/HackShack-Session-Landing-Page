import React from 'react';
import { Heading, Button, Text, Image as GrommetImage, Box } from 'grommet';
import { Layout, ScheduleCard, CardGrid } from '../../components/index';
import ezmeralContent from '../../data/EzmeralData/ezmeral.json';

import { MainTitle } from './styles';

let dateTitle = 'Week of July 27';

const Ezmeral = () => {
  return (
    <Layout background="/img/BackgroundImages/ezmeral-background.png">
      <Box align="center" justify="between" direction="row" fill="horizontal">
        <Box>
          <GrommetImage
            src="/img/StickerPage/ezmeral.png"
            alt="Ezmeral Logo"
            fit="contain"
          />
        </Box>
        <Box>
          <Button
            label={
              <Box pad="xsmall">
                <Text color="text-strong">Learn more at hpe.com</Text>
              </Box>
            }
            href="https://www.hpe.com/us/en/ezmeral.html"
            target="_blank"
            rel="noreferrer noopener"
            secondary
          />
        </Box>
      </Box>
      <MainTitle>
        <Heading color="text-strong" margin={{ top: 'none', bottom: 'none' }}>
          HPE EZMERAL
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
        {ezmeralContent.map(
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
            workshopList,
          }) => (
            <ScheduleCard
              avatar={avatar}
              desc={
                sessionType === 'Challenge'
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
              workshopList={workshopList}
            />
          ),
        )}
      </CardGrid>
    </Layout>
  );
};

export default Ezmeral;
