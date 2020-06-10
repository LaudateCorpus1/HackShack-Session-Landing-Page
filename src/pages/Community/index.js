import React from 'react';
import { Heading, Box } from 'grommet';
import { Layout, Card, CardGrid } from '../../components/index';
import { communityContent } from '../../CardData/PageContent';

const Community = () => {
  return (
    <Layout background="/img/community-background.png">
      <Heading color="text-strong" margin={{ bottom: 'large', top: 'none' }}>
        COMMUNITY
      </Heading>
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
