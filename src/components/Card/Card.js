import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Heading, Text, Image } from 'grommet';
import { Link } from 'react-router-dom';

const Logo = ({ background, children, ...rest }) => {
  return (
    <Box
      pad={{ left: 'medium' }}
      margin={{ top: 'large' }}
      height="small"
      width="small"
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
    <Box
      background={background}
      height="small"
      round="xsmall"
      overflow="hidden"
      basis="50%"
      style={{ position: 'relative' }}
      {...rest}
    >
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
    <Box
      justify="between"
      round="small"
      overflow="hidden"
      {...rest}
      style={{
        minHeight: '610px',
        minWidth: '576px',
        maxHeight: '610px',
        maxWidth: '576px',
      }}
    >
      {children}
    </Box>
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
  return (
    <CardWrapper align="start" background={background}>
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
      <Box
        pad={{ horizontal: 'medium', bottom: 'medium' }}
        basis={image ? '60%' : 'none'}
      >
        <Box>
          <Heading margin={{ top: 'medium', bottom: 'small' }} level={2}>
            {title}
          </Heading>
          <Text size="xlarge">{desc}</Text>
        </Box>
      </Box>
      <Box margin="medium">
        {path ? (
          <Link to={{ pathname: path }}>
            <Button
              margin={{ vertical: 'small' }}
              alignSelf="start"
              label={
                <Box pad="xsmall">
                  <Text color="text-strong">{label}</Text>
                </Box>
              }
              primary
            />
          </Link>
        ) : (
          <Button
            margin={{ vertical: 'small' }}
            alignSelf="start"
            label={
              <Box pad="xsmall">
                <Text color="text-strong">{label}</Text>
              </Box>
            }
            href={link}
            target="_blank"
            primary
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
