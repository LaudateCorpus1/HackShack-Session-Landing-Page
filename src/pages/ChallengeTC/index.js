import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Image, Heading, Text } from 'grommet';
import { Previous } from 'grommet-icons';
import { Link } from 'react-router-dom';
import { Layout } from '../../components/index';

const TableColumns = ({ Row1, Row2 }) => {
  return (
    <Box fill="horizontal" direction="row">
      <Box pad="small" basis="1/2" border>
        <Text size="xlarge">{Row1}</Text>
      </Box>
      <Box pad="small" basis="1/2" border>
        <Text size="xlarge">{Row2}</Text>
      </Box>
    </Box>
  );
};

TableColumns.propTypes = {
  Row1: PropTypes.string,
  Row2: PropTypes.string,
};

const ChallengeTC = () => {
  return (
    <Layout background="/img/generic-background.svg">
      <Box align="start" width="xlarge" direction="column">
        <Box align="start">
          <Link to={{ pathname: '/challenges' }}>
            <Button
              color="white"
              icon={<Previous size="small" />}
              label="Back to Hack Shack Challenge"
            />
          </Link>
          <Heading
            color="text-strong"
            level="1"
            margin={{ bottom: 'large', top: 'none' }}
          >
            RULES FOR HPE Hack Shack Challenges
          </Heading>
        </Box>
        <Box pad={{ vertical: 'medium' }}>
          <Image src="img/Community/dev-thumb.png" />
        </Box>
        <Text size="xlarge">
          NO PURCHASE NECESSARY & PURCHASE WILL NOT INCREASE CHANCE OF WINNING.
          OPEN ONLY TO KubeCon – CloudNativeCon Europe 2020 attendees 18 years
          of age or older. Void in Puerto Rico, U.S. territories, possessions
          and where prohibited by law. Employees of HPE and their immediate
          family and household members are not eligible to win prizes. Employees
          of the U.S. federal government, U.S. state/local government, or public
          higher education institution, or any private or public K-12
          educational institution, or library, are not eligible. Eligibility and
          disqualification will be determined at HPE’s sole discretion. Entry
          constitutes agreement to rules & HPE’s decisions. Participants will
          compete in this challenge between August 17th, 2020 at 8.00 AM CET and
          August 21st, 2020 at 5.00 PM PDT and create a project from any one of
          the following topics:  
        </Text>
        <br />
        <Box direction="column">
          <TableColumns Row1="Session" Row2="Project defined as:" />
          <TableColumns
            Row1="HPE Hack Shack: The Container Challenge"
            Row2="This challenge is undoubtedly the most complicated one as it's an end-to-end developer experience. 
            Your mission here will be to build a Grommet sample app (or reuse the one from the Grommet Challenge), 
            package it in a container, and then run that container in a Kubernetes Cluster. 
            This challenge touches on several technologies, such as front-end web application design, Docker containers and Kubernetes. 
            Be ready for an intense moment when all the pieces of the puzzle will suddenly make total sense."
          />
          <TableColumns
            Row1="HPE Hack Shack: The Grommet Challenge"
            Row2="A new mission awaits! In this challenge, you will take on a UX designer persona and 
            show your creative side using Grommet to design your own little web app UI. 
            You will start with the Grommet Designer, generate code from your design, push that code to GitHub, 
            and finally deploy the app on Netlify. Beginner through expert designers and developers are all welcome. 
            This challenge is all about unleashing your creativity!"
          />
        </Box>
        <br />
        <Text size="xlarge">
          <strong>
            All challenges must be submitted back in to HPE no later than August
            21st, 2020 at 5.00 PM PDT
          </strong>
        </Text>
        <Text margin={{ top: 'medium' }} size="xlarge">
          Winners will be chosen by a panel of 3 HPE judges based on the
          following criteria: 40% Usefulness of application; 20% Technical
          achievement; 20% Originality; and 20% Completeness. One entry per
          session. Participants are allowed to participate in multiple sessions.
          Winner(s) will be notified no later than Monday, August 24th by HPE
          via email. All winners must have provided a working email to be
          contacted by and for the gift certificate to be sent to. All winners
          may have to sign and return an eligibility affidavit & liability
          release, unless prohibited. If eligible winners fail to sign and
          return required documents, prize may be forfeited. No substitution,
          cash redemption or transfer of prizes. Taxes are winner’s
          responsibility.
        </Text>
        <br />
        <Text size="xlarge">
          <strong>Category winners:</strong> All 1st place category winners will
          be awarded with a $50 gift certificate. No substitution, cash
          redemption or transfer of prizes. Taxes are winner’s responsibility.
        </Text>
        <br />
        <Text size="xlarge">
          Odds of winning depend on number of entries. Entrants release and hold
          harmless HPE, its subsidiaries, affiliates, and their officers,
          directors, employees, agents from any claim arising out of entry or
          prize receipt or use.
        </Text>
        <br />
        <Text size="xlarge">
          By participating in the HPE HackShack Challenges, participants
          represent and warrant that he/she have the full power and authority to
          submit content and to grant any and all associated rights listed
          herein. By participating, the participant also acknowledges that the
          final product submitted will belong to HPE and will be hosted on the
          HPE Developer Community, an open-source community, for the use of all
          its registered members; any malware, virus, or malicious code found in
          the final product becomes responsibility of the original
          creator/participant. All third party trademarks are the property of
          their respective owners. Sponsor: Hewlett Packard Enterprise Company,
          11445 Compaq Center Dr W Houston, TX 77070 USA. Use this address for
          inquiries, requests to be removed from this mailing list, and winner’s
          list.
        </Text>
      </Box>
    </Layout>
  );
};
export default ChallengeTC;
