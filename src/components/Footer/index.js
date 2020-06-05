import React, { useContext } from 'react';
import { Box, Text, ResponsiveContext } from 'grommet';
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
  const size = useContext(ResponsiveContext);
  const dir = size === 'small' ? 'column' : 'row';
  const fontSize = size === 'small' ? '14px' : '18px';

  return (
    <Box>
      <HPEDevFooter />
      <FooterContainer
        align="center"
        pad={{ left: 'small', right: 'small' }}
        background="#FFFFFF"
        justify="between"
        direction={dir}
      >
        <Box>
          <Text size={fontSize}>
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
                <Text size={fontSize}>{label}</Text>
              </StyledAnchor>
            );
          })}
        </Box>
      </FooterContainer>
    </Box>
  );
};
export default Footer;
