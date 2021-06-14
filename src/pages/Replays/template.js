import React, { useEffect, useState } from 'react';
import { Heading, Text, Box, Image } from 'grommet';
import { Layout, VideoList, Video } from '../../components/index';
import { PageHeader } from '../../components/PageHeading';
import axios from 'axios';
import AuthService from '../../services/auth.service';
import { Helmet } from 'react-helmet';

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
  window.prerenderReady = false;

  useEffect(() => {
    setTimeout(function () {
      window.prerenderReady = true;
    }, 5000)
  })

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
  const finisherBadgeImg = props.openGraphImage ? props.openGraphImage : replays[current] && replays[current].workshop ? replays[current].workshop.badgeImg : null;
  const replayTitle = replays.length > 0 && replays[current].title;
 console.log('replays[current] && replays[current]: ', replays[current] && replays[current]);
 console.log('finisherBadgeImg: ', finisherBadgeImg);
  return (
    <Layout background="/img/BackgroundImages/generic-background.jpg">
      <PageHeader title={replayTitle}>
      {replays.length > 0 ? (
        <>
          <Helmet>
            <meta name="fragment" content="!" />
            <meta property="og:title" content={replays[current].title} data-react-helmet="true" />
            <meta property="og:description" content={replays[current].desc} data-react-helmet="true" />
            <meta property="og:image" content={finisherBadgeImg} data-react-helmet="true" />
            <meta property="og:image:width" content="200" data-react-helmet="true" />
            <meta property="og:image:height" content="200" data-react-helmet="true" />

            {/* <!-- Google / Search Engine Tags --> */}
            <meta itemprop="name" content={replays[current].title} data-react-helmet="true" />
            <meta itemprop="description" content={replays[current].desc} data-react-helmet="true" />
            <meta itemprop="image" content={finisherBadgeImg} data-react-helmet="true" />

            {/* <!-- Facebook Meta Tags --> */}
            <meta property="og:type" content="website" data-react-helmet="true" />
            <meta property="og:title" content={replays[current].title} data-react-helmet="true" />
            <meta property="og:description" content={replays[current].desc} data-react-helmet="true" />
            <meta property="og:image" content={finisherBadgeImg} data-react-helmet="true" />

            {/* <!-- Twitter Meta Tags --> */}
            <meta name="twitter:card" content="summary_large_image" data-react-helmet="true" />
            <meta name="twitter:title" content={replays[current].title} data-react-helmet="true" />
            <meta name="twitter:description" content={replays[current].desc} data-react-helmet="true" />
            <meta name="twitter:image" content={finisherBadgeImg} data-react-helmet="true" />
          </Helmet>
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
            notebook={replays[current].workshop && replays[current].workshop.notebook}
            sessionType={replays[current].workshop && replays[current].workshop.sessionType}
            location={replays[current].workshop && replays[current].workshop.location}
            capcity={replays[current].workshop && replays[current].workshop.capacity}
            workshopTitle={replays[current].workshop && replays[current].workshop.name}
            replayId={replayId}
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
