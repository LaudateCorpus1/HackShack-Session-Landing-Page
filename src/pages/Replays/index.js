import React from 'react';
import { Heading } from 'grommet';
import { VideoList, VideoPlaying } from '../../components/Replays';
import { Layout } from '../../components/index';
import { PageHeader } from '../../components/PageHeading';
import replays from '../../data/ReplaysData/replays.json';

const Replays = () => {
  return (
    <Layout background="background">
      <PageHeader title="REPLAYS">
        {/* To keep things easy I figured just play first one in array
        you can use this for default state  */}
        <VideoPlaying
          videolink={replays[0].videolink}
          avatar={replays[0].avatar}
          desc={replays[0].desc}
          key={replays[0].title}
          presenter={replays[0].presenter}
          role={replays[0].role}
          title={replays[0].title}
        />
        <Heading color="text" style={{ fontWeight: '500' }} level={2}>
          UP NEXT
        </Heading>
        {/* Update state depending on which video they click
         */}
        {replays.map(({ desc, presenter, role, title, videolink }) => (
          <VideoList
            key={title}
            desc={`${desc.slice(0, 150)}...`}
            title={title}
            presenter={presenter}
            videoLink={videolink}
            role={role}
          />
        ))}
      </PageHeader>
    </Layout>
  );
};

export default Replays;
