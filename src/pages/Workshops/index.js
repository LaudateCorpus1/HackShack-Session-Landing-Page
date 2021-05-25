import React, { useEffect, useState } from 'react';
import {
  Heading,
  Text, 
  Box, 
  Image
} from 'grommet';
import { Layout, ScheduleCard, CardGrid } from '../../components/index';
import { MainTitle } from './styles';
import axios from 'axios';
import AuthService from '../../services/auth.service';

const Workshop = () => {
  const { REACT_APP_WORKSHOPCHALLENGE_API_ENDPOINT } = process.env;
  const getWorkshopsApi = `${REACT_APP_WORKSHOPCHALLENGE_API_ENDPOINT}/api/workshops?active=true`;
  const [workshops, setworkshops] = useState([]);
  const [error, setError] = useState('');
  let arr = [];

  useEffect(() => {
    const getToken = () => {
      AuthService.login().then(
        () => {
          getWorkshops(AuthService.getCurrentUser().accessToken);
        },
        err => {
          setError(
            'Oops..something went wrong. The HPE DEV team is addressing the problem. Please try again later!',
          );
        },
      );
    };

    const getWorkshops = token => {
      axios({
        method: 'GET',
        url: getWorkshopsApi,
        headers: { 'x-access-token': token },
      })
        .then(response => {
          // Map created
          response.data.forEach(workshop => {
            if (workshop.sessionType === 'Workshops-on-Demand')
              arr.push({ ...workshop });
          });
          setworkshops(arr);
        })
        .catch(err => {
          if (err.response.status === 401) {
            AuthService.login().then(() => getToken());
          } else {
            console.log('catch error', err);
            setError(
              'Oops..something went wrong. The HPE DEV team is addressing the problem. Please try again later!',
            );
          }
        });
    };
    getToken();
    // eslint-disable-next-line
  }, []);
  return (
    <Layout background="/img/BackgroundImages/schedule-background.png">
      <MainTitle>
        <Heading color="text-strong" margin={{ top: 'none', bottom: 'small' }}>
          ONGOING Workshops-on-Demand
        </Heading>
      </MainTitle>
      {workshops.length > 0 ? (
        <CardGrid>
          {workshops.map(workshop => (
            <ScheduleCard
              avatar={'https://s3-alpha-sig.figma.com/img/c73d/e823/e8935bd8095a9a88e428375fa1868854?Expires=1622419200&Signature=LJT7J07v8XAyWlnpdwekSbl0aR4t9ovMrdogtVEH2s2GhOt1CAUknXtmQzbmLm~m3G7Y1j499erXr2ln3ab-q~4OOEc~CkI4Uk9uvSgMAiT-qXHeMGcuQ2bT9uVoX5h0ss9z6833YTTRVfq3PG8Xf5TWah0PZMHCDon~CgWXdwlvXjyiJTukEWKT2zJK~pTtqJDZ8Rgn7Xm3TMfCZYT0qpFaOvjdfGSO~542KRXHyvsRcYnUOLYPrNjSHJo2JTrcQEJKDsBTPwc2iO5rOcwheO0c0Q7ddo6wCfoRvg4E-GLpnL~V2QULwgVZjagbSFxcbNYG7xlxP-fBM1nJfoyZlA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}
              desc={
                workshop.sessionType === 'Workshops-on-Demand'
                  ? `${workshop.description.slice(0, 520)}`
                  : `${workshop.description.slice(0, 220)}...`
              }
              id={workshop.sessionId}
              key={workshop.name}
              DBid={workshop.id}
              presenter={'Chris Carlozzi'}
              role={'HPE Designer & Gamer'}
              sessionLink={workshop.replayLink}
              sessionType={workshop.sessionType}
              title={workshop.name}
              notebook={workshop.notebook}
              location={workshop.location}
            />
          ))}
        </CardGrid>
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
    </Layout>
  );
};

export default Workshop;
