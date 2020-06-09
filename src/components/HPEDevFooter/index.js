import React, { useContext } from 'react';
import { Box, Text, Image, ResponsiveContext } from 'grommet';
import { FooterWrapper, StyledAnchor } from '../Footer/styles';

const footerLinks = [
  { label: 'Platforms', href: 'https://developer.hpe.com/platforms' },
  { label: 'Open Source', href: 'https://developer.hpe.com/projects' },
  { label: 'Community', href: 'https://developer.hpe.com/community' },
  { label: 'Events', href: 'https://developer.hpe.com/events' },
];

export const HPEDevFooter = () => {
  const size = useContext(ResponsiveContext);
  const fontSize = size === 'small' ? '20px' : '22px';
  const iconSize = size === 'small' ? '40px' : '48px';

  return (
    <FooterWrapper
      direction="row"
      align="start"
      justify="between"
      border="top"
      pad={size === 'small' ? 'medium' : 'small'}
    >
      <Box direction="row" gap="small" align="center">
        <Box width={iconSize} height={iconSize}>
          <Image fit="contain" src="./img/hpeDevLogo.svg" />
        </Box>
        <Text size={fontSize} color="#FFFFFF">
          <Text weight="bold" size={fontSize}>
            HPE{' '}
          </Text>
          Developer
        </Text>
      </Box>
      {size === 'small' ? (
        <Box gap="xsmall" direction="row" alignSelf="center">
          <StyledAnchor
            href="https://hpedev.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text color="#FFFFFF" size={fontSize} weight={900}>
              Learn More
            </Text>
          </StyledAnchor>
        </Box>
      ) : (
        <Box gap="medium" direction="row" alignSelf="center">
          {footerLinks.map(link => {
            const { label, href } = link;
            return (
              <StyledAnchor
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Text color="#FFFFFF" size={fontSize} weight={900}>
                  {label}
                </Text>
              </StyledAnchor>
            );
          })}
        </Box>
      )}
    </FooterWrapper>
  );
};
export default HPEDevFooter;
