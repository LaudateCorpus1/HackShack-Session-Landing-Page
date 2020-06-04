import React from 'react';
import { Heading } from 'grommet';
import { ContentCards } from '../../components/Cards';
import { Layout } from '../../components/index';
import { CardGrid } from '../../components/Cards';
import { arcadeContent } from '../../CardData/PageContent';

const Arcade = () => {
  return (
    <Layout background="/img/hack-shack-home-background.png">
      <Heading margin={{ bottom: 'large' }} color="text-strong">
        ARCADE
      </Heading>
      <CardGrid>
        {arcadeContent.map(content => (
          <ContentCards
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
    </Layout>
  );
};

export default Arcade;
