import React from 'react';
import { Layout, Card, CardGrid } from '../../components/index';
import { communityContent } from '../../data/CardData/PageContent';
import { PageHeader } from '../../components/PageHeading';

const Community = () => {
  return (
    <Layout background="/img/community-background.png">
      <PageHeader title="Community">
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
      </PageHeader>
    </Layout>
  );
};

export default Community;
