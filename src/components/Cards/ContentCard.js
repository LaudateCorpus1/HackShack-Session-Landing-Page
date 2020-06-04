import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Heading, Text, Image } from 'grommet';
import { CardImage, Card, CommunityImage } from './index';

export const ContentCards = ({
  background,
  image,
  title,
  desc,
  link,
  label,
  logo,
  alt,
}) => {
  return (
    <Card justify="evenly" align="start" background={background}>
      {image && (
        <CardImage>
          {' '}
          <Image src={image} alt={alt} fit="cover" />
        </CardImage>
      )}
      {logo && (
        <CommunityImage>
          <Image src={logo} alt={alt} fit="contain" />
        </CommunityImage>
      )}
      <Box
        pad={{ horizontal: 'medium', bottom: 'medium' }}
        justify="between"
        basis={image && image ? "60%" : 'none'}
        fill
      >
        <Box fill={logo && logo ? true : false}>
          <Heading margin={{ top: 'medium', bottom: 'small' }} level={2}>
            {title}
          </Heading>
          <Text size="xlarge">{desc}</Text>
        </Box>
        <Button
          margin={{ vertical: 'small' }}
          alignSelf="start"
          href={link}
          secondary
          label={
            <Box pad="xsmall">
              <Text color="text-strong">{label}</Text>
            </Box>
          }
          target="_blank"
        ></Button>
      </Box>
    </Card>
  );
};

ContentCards.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  logo: PropTypes.string,
  link: PropTypes.string,
  label: PropTypes.string,
  desc: PropTypes.string,
};
