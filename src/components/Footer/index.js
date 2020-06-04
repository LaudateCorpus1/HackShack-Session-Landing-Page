import React from 'react';
import { Box, Text } from 'grommet';
import { HPEDevFooter } from '../index';
import { StyledAnchor, FooterContainer } from './styles';

const footerLinks = [
  {
    label: 'Privacy Policy | ',
    href: 'https://www.hpe.com/us/en/legal/privacy.html',
  },
  {
    label: 'Cookies | ',
    href: 'https://www.hpe.com/us/en/legal/privacy.html#datacollection',
  },
  {
    label: 'Terms of Use | ',
    href: 'https://www.hpe.com/us/en/about/legal/terms-of-use.html',
  },
  {
    label: 'Do Not Sell My Personal Information',
    href: 'https://www.hpe.com/us/en/privacy/personal-information.html',
  },
];

export const Footer = () => {
  return (
    <Box>
      <HPEDevFooter />
      <FooterContainer
        align="center"
        pad={{ left: '12px', right: '12px' }}
        background="#FFFFFF"
        justify="between"
      >
        <Box>
          <Text size="small">
            &copy; 2020 Hewlett Packard Enterprise Development LP
          </Text>
        </Box>
        <Box direction="row" gap="xxsmall">
          {footerLinks.map(link => {
            const { label, href } = link;
            return (
              <StyledAnchor
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Text size="small">{label}</Text>
              </StyledAnchor>
            );
          })}
        </Box>
      </FooterContainer>
    </Box>
  );
};
export default Footer;
