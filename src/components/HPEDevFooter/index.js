import React, { useContext } from 'react';
import { Box, Text, Image, Button, ResponsiveContext } from 'grommet';
import { FooterContainer } from './styles';

const footerLinks = [
  { label: 'Platforms', href: 'https://developer.hpe.com/platforms' },
  { label: 'Open Source', href: 'https://developer.hpe.com/projects' },
  { label: 'Community', href: 'https://developer.hpe.com/community' },
  { label: 'Events', href: 'https://developer.hpe.com/events' },
];

export const HPEDevFooter = () => {
  const size = useContext(ResponsiveContext);
  const dir = size === 'small' ? 'column' : 'row';
  const fontSize = size === 'small' ? '16px' : '22px';
  const iconSize = size === 'small' ? '34px' : '48px';

  return (
    <FooterContainer
      direction={dir}
      align="center"
      justify="between"
      border="top"
      pad={{ left: 'small', right: 'small', top: 'xsmall', bottom: 'xsmall' }}
    >
      <Box direction="row" align="center" gap="small">
        <Box width={iconSize} height={iconSize}>
          <Image fit="contain" src="./img/hpeDevLogo.svg" />
        </Box>
        <Text size={fontSize}>
          <Text weight="bold" size={fontSize}>
            HPE{' '}
          </Text>
          Developer
        </Text>
      </Box>
      <Box gap="xsmall" direction="row">
        {footerLinks.map(link => {
          const { label, href } = link;
          return (
            <Button key={label} href={href} target="_blank">
              <Text color="#FFFFFF" size={fontSize}>
                {label}
              </Text>
            </Button>
          );
        })}
      </Box>
    </FooterContainer>
  );
};
export default HPEDevFooter;
