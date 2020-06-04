import React from 'react';
import { ContentCards } from '../../components/Cards';
import { Layout } from '../../components/index';
import { CardGrid } from '../../components/Cards';
import { communityContent } from '../../data/PageContent';
import { Heading } from 'grommet';

const Community = () => {
  return (
    <Layout background="/img/community-background.svg">
      <Heading color="text-strong" margin={{ bottom: 'large' }}>COMMUNITY</Heading>
      <CardGrid>
        {communityContent.map(content => (
          <ContentCards
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
