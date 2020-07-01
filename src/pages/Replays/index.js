import React, { useState } from 'react';
import { Heading } from 'grommet';
import { Layout, VideoList, Video } from '../../components/index';
import { PageHeader } from '../../components/PageHeading';
import replays from '../../data/ReplaysData/replays.json';

const Replays = () => {
  const [current, setCurrent] = useState(0);
  return (
    <Layout background="background">
      <PageHeader title="REPLAYS">
        <Video
          videolink={replays[current].videolink}
          avatar={replays[current].avatar}
          desc={replays[current].desc}
          key={replays[current].title}
          presenter={replays[current].presenter}
          role={replays[current].role}
          title={replays[current].title}
        />
        <Heading color="text" style={{ fontWeight: '500' }} level={2}>
          UP NEXT
        </Heading>
        {replays.map(
          ({ desc, presenter, role, title, videolink }, index) =>
            index !== current && (
              <VideoList
                key={title}
                index={index}
                desc={`${desc.slice(0, 150)}...`}
                title={title}
                presenter={presenter}
                videoLink={videolink}
                role={role}
                setCurrent={setCurrent}
              />
            ),
        )}
      </PageHeader>
    </Layout>
  );
};

export default Replays;
