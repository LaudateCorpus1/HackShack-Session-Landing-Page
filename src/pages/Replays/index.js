import React, { useEffect, useState } from 'react';
import { Heading, Text, Box, Image } from 'grommet';
import { Layout, VideoList, Video } from '../../components/index';
import { PageHeader } from '../../components/PageHeading';
import axios from 'axios';
import AuthService from '../../services/auth.service';

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
  const { REACT_APP_WORKSHOPCHALLENGE_API_ENDPOINT } = process.env;
  const getReplaysApi = `${REACT_APP_WORKSHOPCHALLENGE_API_ENDPOINT}/api/replays?active=true`;
  const [replays, setReplays] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getToken = () => {
      AuthService.login().then(
        () => {
          getReplays(AuthService.getCurrentUser().accessToken);
        },
        err => {
          setError(
            'Oops..something went wrong. The HPE DEV team is addressing the problem. Please try again later!',
          );
        },
      );
    };
    const getReplays = token => {
      axios({
        method: 'GET',
        url: getReplaysApi
      })
        .then(response => {
        setReplays(response.data)
      })
        .catch(err => {
          setError(
            'Oops..something went wrong. The HPE DEV team is addressing the problem. Please try again later!',
          );
          console.log(error);
        });
    };
    getToken();
    // eslint-disable-next-line
  }, [error, getReplaysApi])
  let replayId = 0;
  if (props.match.params.replayId) {
    replayId = parseInt(props.match.params.replayId, 10);
  }
  const [current, setCurrent] = useState(replayId);
  const [autoplay, setAutoPlay] = useState(false);
  const sortedReplays = sortReplays(replays, current);
  return (
    <Layout background="/img/BackgroundImages/generic-background.jpg">
      <PageHeader title="REPLAYS">
        {replays.length > 0 ? (
        <>
        <Video
          videolink={replays[current].videoLink}
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
          autoplay={autoplay}
        />
        <Heading color="text" style={{ fontWeight: '500' }} level={2}>
          UP NEXT
        </Heading>
        </>
        ) : (
        <Box
          pad="small"
          justify="center"
          margin={{ top: 'medium' }}
          direction="column"
          // background="status-critical"
        >
          {error ? (
            <>
              <Text size="large" color="status-critical" alignSelf="center">
                {error}
              </Text>
              <Image src="/img/gremlin-rockin.svg"></Image>
            </>
          ) : (
            <Box height="medium"></Box>
          )}
        </Box>
        )}
        {sortedReplays.map(
          ({ desc, presenter, role, title, videoLink, id }) =>
            id !== current && (
              <VideoList
                key={title}
                id={id}
                desc={`${desc.slice(0, 150)}...`}
                title={title}
                presenter={presenter}
                videoLink={videoLink}
                role={role}
                setCurrent={setCurrent}
                setAutoPlay={setAutoPlay}
              />
            ),
        )}
      </PageHeader>
    </Layout>
  );
};

export default Replays;
