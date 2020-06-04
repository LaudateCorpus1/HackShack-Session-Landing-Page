import React from 'react';
import { Box, Button, Image, Heading, Text } from 'grommet';
import { Layout, SubPageHeader } from '../../components/index';

const Competiton = () => {
  return (
    <Layout background="/img/generic-background.svg">
      <SubPageHeader title="HACK SHACK ATTACK CONTEST RULES AND INFORMATION">
        <Box pad={{ vertical: 'medium' }}>
          <Image src="/img/attack-marquee.svg"></Image>
        </Box>
        <Box pad={{ vertical: 'medium' }} align="start">
          <Button primary label="Play the Game"></Button>
        </Box>
        <Heading margin={{ top: 'large', bottom: 'small' }} color="text-strong">
          Contest deadline and fine print
        </Heading>
        <Heading
          margin={{ top: 'none', bottom: 'large' }}
          level={2}
          color="text-strong"
        >
          1:1 Rules of the game
        </Heading>
        <Text size="xlarge">
          Until recently, the prevailing view assumed lorem ipsum was born as a
          nonsense text. “It's not Latin, though it looks like it, and it
          actually says nothing,” Before & After magazine answered a curious
          reader, “Its ‘words’ loosely approximate the frequency with which
          letters occur in English, which is why at a glance it looks pretty
          real.” As Cicero would put it, “Um, not so fast.” The placeholder
          text, beginning with the line “Lorem ipsum dolor sit amet, consectetur
          adipiscing elit”, looks like Latin because in its youth, centuries
          ago, it was Latin. Richard McClintock, a Latin scholar from
          Hampden-Sydney College, is credited with discovering the source behind
          the ubiquitous filler text. In seeing a sample of lorem ipsum, his
          interest was piqued by consectetur—a genuine, albeit rare, Latin word.
          Consulting a Latin dictionary led McClintock to a passage from De
          Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a
          first-century B.C. text from the Roman philosopher Cicero. In
          particular, the garbled words of lorem ipsum bear an unmistakable
          resemblance to sections 1.10.32–33 of Cicero's work, with the most
          notable passage excerpted below: “Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem.”
        </Text>
      </SubPageHeader>
    </Layout>
  );
};

export default Competiton;
