import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Heading, Text, Image, ResponsiveContext } from 'grommet';
import { Link } from 'react-router-dom';
import { MainCards } from './styles';

const Logo = ({ background, children, ...rest }) => {
  const size = useContext(ResponsiveContext);
  return (
    <Box
      height={size === 'small' ? '124px' : '192px'}
      alignSelf="start"
      {...rest}
    >
      {children}
    </Box>
  );
};

Logo.defaultProps = {
  background: 'background-back',
};

Logo.propTypes = {
  children: PropTypes.node,
  background: PropTypes.string,
};

const CardImage = ({ background, children, ...rest }) => {
  return (
    <Box background={background} round="xsmall" {...rest} height="300px">
      {children}
    </Box>
  );
};

CardImage.defaultProps = {
  background: 'background-back',
};

CardImage.propTypes = {
  children: PropTypes.node,
  background: PropTypes.string,
};

const CardWrapper = ({ children, ...rest }) => {
  return (
    <MainCards
      round="medium"
      overflow="hidden"
      {...rest}
      style={{
        minHeight: '510px',
        minWidth: '336px',
        maxHeight: '694px',
        maxWidth: '576px',
      }}
    >
      {children}
    </MainCards>
  );
};

CardWrapper.propTypes = {
  children: PropTypes.node,
};

const Card = ({
  background,
  image,
  title,
  desc,
  link,
  label,
  logo,
  path,
  alt,
}) => {
  const size = useContext(ResponsiveContext);

  return (
    /* Conditionally adjust padding based on image */
    <CardWrapper pad="large" background={background}>
      {image && (
        <CardImage>
          <Image src={image} alt={alt} fit="cover" />
        </CardImage>
      )}
      {logo && (
        <Logo>
          <Image src={logo} alt={alt} fit="contain" />
        </Logo>
      )}
      <Box>
        <Box>
          <Heading
            margin={{ top: 'medium', bottom: 'small' }}
            level={size === 'small' ? 3 : 2}
            color="text-strong"
          >
            {title}
          </Heading>
          <Text
            color="text-strong"
            size={size === 'small' ? 'large' : 'xlarge'}
          >
            {desc}
          </Text>
        </Box>
      </Box>
      <Box pad={{ top: 'medium' }} direction="row">
        {path ? (
          <Link to={{ pathname: path }}>
            <Button
              label={
                <Box pad="xsmall">
                  <Text color="text-strong">{label}</Text>
                </Box>
              }
              secondary
            />
          </Link>
        ) : (
          <Button
            label={
              <Box pad="xsmall">
                <Text color="text-strong">{label}</Text>
              </Box>
            }
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            secondary
          />
        )}
      </Box>
    </CardWrapper>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  background: PropTypes.string,
  path: PropTypes.string,
  alt: PropTypes.string,
  image: PropTypes.string,
  logo: PropTypes.string,
  link: PropTypes.string,
  label: PropTypes.string,
  desc: PropTypes.string,
};

export default Card;
