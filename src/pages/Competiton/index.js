import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Image, Heading, Text } from 'grommet';
import { Layout, SubPageHeader } from '../../components/index';

const Competiton = () => {
  return (
    <Layout background="/img/BackgroundImages/generic-background.png">
      <SubPageHeader title="HACK SHACK ATTACK CONTEST RULES AND INFORMATION">
        <Box pad={{ vertical: 'medium' }}>
          <Image src="/img/attack-marquee.svg" />
        </Box>
        <Box pad={{ vertical: 'medium' }} align="start">
          <Link to="/hackshackattack">
            <Button primary label="Play the Game" />
          </Link>
        </Box>
        <Heading margin={{ top: 'large', bottom: 'small' }} color="text-strong">
          Contest rules, times to compete and prizes
        </Heading>
        <Text size="xlarge">
          NO PURCHASE NECESSARY & PURCHASE WILL NOT INCREASE CHANCE OF WINNING.
          OPEN ONLY TO HPE Discover Virtual Experience event 2020 ATTENDEES AT
          LEAST 18 YEARS OLD. Void in Puerto Rico, U.S. territories, possessions
          and where prohibited by law. Employees of HPE, its subsidiaries,
          affiliates and HPE authorized channel partners, their immediate family
          and household members not eligible. Employees of the U.S. federal
          government, U.S. state/local government, or public higher education
          institution, or to any private or public K-12 educational institution,
          or library, not eligible. Entry constitutes agreement to rules & HPE’s
          decisions. Eligibility and disqualification will be determined in
          HPE’s sole discretion.
        </Text>
        <br/>
        <Text size="xlarge">
          The Hack Shack Attack is a retro arcade-style game in which the player
          eliminates as many “IT monsters” and “IT bugs” as possible. The
          highest scoring player during each ‘period’{' '}
          <strong>
            {' '}
            will be declared the winner and be awarded a gift certificate
          </strong>{' '}
          (valued at approximately $50).
        </Text>
        <Text size="xlarge">
          The Hack Shack Attack game periods are as follows:
          <ul>
            <li>
              Tuesday June 23rd 8:00 AM PDT through Friday June 26th at 5:00 PM
              PDT
            </li>
            <li>
              Tuesday June 30th 8:00 AM PDT through Friday July 3rd 5:00 PM PDT
            </li>
            <li>
              Wednesday July 8th 8:00 AM PDT through Friday July 10th at 5:00 PM
              PDT
            </li>
            <li>
              Wednesday July 15th 8:00 AM PDT through Friday July 17th at 5:00
              PM PDT
            </li>
            <li>
              Wednesday July 29h 8:00 AM PDT through Friday July 31st at 5:00 PM
              PDT
            </li>
          </ul>
        </Text>
        <Text size="xlarge">
          Each period will begin with all scores erased and an empty leader
          board. At the end of each of these periods the{' '}
          <strong>
            highest scoring player will be declared the winner and be awarded a
            gift certificate
          </strong>{' '}
          (valued at approximately $50). All winners will be notified by email
          no later than the following Monday of each period. In the event of a
          tie affecting the determination of the highest score, the winner will
          be the player who achieved their score first in time during the
          applicable game period.
        </Text>
        <br/>
        <Text size="xlarge">
          All winners must provide a working email to be contacted by and for
          the gift certificate to be sent to. Winner may have to sign and return
          an eligibility affidavit & liability release, unless prohibited. If
          eligible winners fail to sign and return required documents, prize may
          be forfeited. No substitution, cash redemption or transfer of prizes.
          Taxes are winner’s responsibility. Odds of winning depend on number of
          times an individual plays the Hack Shack Attack game. Participants
          release and hold harmless HPE, its subsidiaries, affiliates, and their
          officers, directors, employees, agents from any claim arising out of
          entry or prize receipt or use. All third party trademarks are the
          property of their respective owners. The Manufacturer(s) of the grand
          prize is not a participant in or sponsor of the Hack Shack Attack Game
          or of Discover Las Vegas 2019. Sponsor: Hewlett Packard Enterprise
          Company, 11445 Compaq Center Dr. W Houston, TX 77070 Use this address
          for inquiries, requests to be removed from this mailing list, and
          winner’s list.
        </Text>
      </SubPageHeader>
    </Layout>
  );
};

export default Competiton;
