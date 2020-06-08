import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Heading, Text, Image, ResponsiveContext } from 'grommet';
import { Link } from 'react-router-dom';

const Logo = ({ background, children, ...rest }) => {
  const size = useContext(ResponsiveContext);
  return (
    <Box
      pad={{ left: 'medium' }}
      margin={{ top: 'large' }}
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
    <Box
      justify="between"
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
  const size = useContext(ResponsiveContext);

  return (
    <CardWrapper background={background}>
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
      <Box pad={{ horizontal: 'medium', bottom: 'medium' }}>
        <Box>
          <Heading
            margin={{ top: 'medium', bottom: 'small' }}
            level={size === 'small' ? 3 : 2}
          >
            {title}
          </Heading>
          <Text size={size === 'small' ? 'large' : 'xlarge'}>{desc}</Text>
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
