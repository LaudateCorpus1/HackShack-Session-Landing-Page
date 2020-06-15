import React from 'react';
import { Heading } from 'grommet';
import { Layout, Card, CardGrid } from '../../components/index';
import { communityContent } from '../../data/CardData/PageContent';
import { MainTitle } from '../Schedule/styles';

const Community = () => {
  return (
    <Layout background="/img/community-background.png">
      <MainTitle>
        <Heading color="text-strong" margin={{ bottom: 'large', top: 'none' }}>
          COMMUNITY
        </Heading>
      </MainTitle>
      <CardGrid>
        {communityContent.map(content => (
          <Card
            key={content.title}
            alt={content.alt}
            background={content.background}
            title={content.title}
            logo={content.logo}
            desc={content.desc}
            label={content.label}
            link={content.link}
          />
        ))}
      </CardGrid>
    </Layout>
  );
};

export default Community;
