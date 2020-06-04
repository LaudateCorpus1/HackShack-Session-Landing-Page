import React from 'react';
import { Box, Text, Image, Button } from 'grommet';
import { FooterContainer } from './styles';

export const HPEDevFooter = () => {
  const footerLinks = [
    { label: 'Platforms', href: 'https://developer.hpe.com/platforms' },
    { label: 'Open Source', href: 'https://developer.hpe.com/projects' },
    { label: 'Community', href: 'https://developer.hpe.com/community' },
    { label: 'Events', href: 'https://developer.hpe.com/events' },
  ];

  return (
    <FooterContainer
      align="center"
      justify="between"
      border="top"
      pad={{ left: '24px', right: '24px', top: '12px', bottom: '12px' }}
      style={{ whiteSpace: 'nowrap' }}
    >
      <Box direction="row" align="center" gap="small">
        <Box width="xxsmall" height="xxsmall">
          <Image fit="contain" src="./img/hpeDevLogo.svg" />
        </Box>
        <Text>
          <Text weight="bold">HPE </Text>
          Developer
        </Text>
      </Box>
      <Box gap="xsmall" direction="row">
        {footerLinks.map(link => {
          const { label, href } = link;
          return (
            <Button key={label} href={href} target="_blank">
              <Text color="#FFFFFF">{label}</Text>
            </Button>
          );
        })}
      </Box>
    </FooterContainer>
  );
};
export default HPEDevFooter;
