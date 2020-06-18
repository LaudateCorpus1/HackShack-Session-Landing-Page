import React from 'react';
import { Layout, Card, CardGrid } from '../../components/index';
import { arcadeContent } from '../../data/CardData/PageContent';
import { PageHeader } from '../../components/PageHeading';

const Arcade = () => {
  return (
    <Layout background="/img/BackgroundImages/arcade-background.jpg">
      <PageHeader title="ARCADE">
        <CardGrid>
          {arcadeContent.map(content => (
            <Card
              key={content.title}
              title={content.title}
              alt={content.alt}
              background={content.background}
              image={content.image}
              desc={content.desc}
              label={content.label}
              link={content.link}
              path={content.path}
            />
          ))}
        </CardGrid>
      </PageHeader>
    </Layout>
  );
};

export default Arcade;
