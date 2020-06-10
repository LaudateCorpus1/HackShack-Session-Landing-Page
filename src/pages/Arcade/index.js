import React from 'react';
import { Heading, Box } from 'grommet';
import { Layout, Card, CardGrid } from '../../components/index';
import { arcadeContent } from '../../CardData/PageContent';

const Arcade = () => {
  return (
    <Layout background="/img/arcade-background.jpg">
      <Box direction="column" pad="xlarge">
        <Heading color="text-strong" margin={{ bottom: 'large', top: 'none' }}>
          ARCADE
        </Heading>
        <CardGrid>
          {arcadeContent.map(content => (
            <Card
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
      </Box>
    </Layout>
  );
};

export default Arcade;
