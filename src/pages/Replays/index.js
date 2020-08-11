import React, { useState } from 'react';
import { Heading } from 'grommet';
import { Layout, VideoList, Video } from '../../components/index';
import { PageHeader } from '../../components/PageHeading';
import replays from '../../data/ReplaysData/replays.json';

const sortReplays = (replayData, current) => {
  const beggining = [];
  const end = [];

  replayData.map(replay => {
    if (current > replay.id) {
      end.push(replay);
    } else {
      beggining.push(replay);
    }
    return replay;
  });
  return beggining.concat(end);
};

const Replays = props => {
  let replayId = 0;
  if (props.match.params.replayId != null) {
    replayId = parseInt(props.match.params.replayId, 10);
  }
  const [current, setCurrent] = useState(replayId);
  const sortedReplays = sortReplays(replays, current);
  return (
    <Layout background="/img/BackgroundImages/generic-background.jpg">
      <PageHeader title="REPLAYS">
        <Video
          videolink={replays[current].videolink}
          id={replays[current].id}
          avatar={replays[current].avatar}
          desc={replays[current].desc}
          key={replays[current].title}
          presenter={replays[current].presenter}
          role={replays[current].role}
          title={replays[current].title}
          setCurrent={setCurrent}
          current={current}
          replaysLength={replays.length}
        />
        <Heading color="text" style={{ fontWeight: '500' }} level={2}>
          UP NEXT
        </Heading>
        {sortedReplays.map(
          ({ desc, presenter, role, title, videolink, id }) =>
            id !== current && (
              <VideoList
                key={title}
                id={id}
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
