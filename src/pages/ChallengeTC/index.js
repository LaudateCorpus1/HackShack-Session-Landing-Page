import React from 'react';
import { Box, Button, Image, Heading, Text } from 'grommet';
import { Layout } from '../../components/index';
import { Previous } from 'grommet-icons';
import { Link } from 'react-router-dom';

const ChallengeTC = () => {
  return (
    <Layout background="/img/generic-background.svg">
      <Box align="start" width="xlarge" direction="column">
        <Box align="start">
          <Link to={{ pathname: '/schedule' }}>
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
            RULES FOR HPE Hack Shack Challenges at HPE Discover
          </Heading>
        </Box>

        <Box pad={{ vertical: 'medium' }}>
          <Image src="img/Community/dev-thumb.png"></Image>
        </Box>
        <Text size="xlarge">
          NO PURCHASE NECESSARY & PURCHASE WILL NOT INCREASE CHANCE OF WINNING.
          OPEN ONLY TO HPE Discover Virtual Experience event 2020 attendees 18
          years of age or older. Void in Puerto Rico, U.S. territories,
          possessions and where prohibited by law. Employees of HPE and their
          immediate family and household members not eligible to win prizes.
          Employees of the U.S. federal government, U.S. state/local government,
          or public higher education institution, or to any private or public
          K-12 educational institution, or library, not eligible. Eligibility
          and disqualification will be determined in HPE’s sole discretion.
          Entry constitutes agreement to rules & HPE’s decisions. Participants
          enter by attending any of the [Need session ID] Hack Shack Challenges:
          Are you ready to compete? session at HPE Discover beginning June 30th,
          2020 at 9.30 and ending July 30th, 2020 at 4.00 PM PSD and creating a
          project from any one of the following challenges: 
        </Text>
        <br></br>
        <Box direction="column">
          <Box width="medium" direction="row">
            <Box border>
              <Text size="xlarge">Session</Text>
            </Box>
            <Box border>
              <Text size="xlarge">Project defined as:</Text>
            </Box>
          </Box>
          <Box width="medium" direction="row">
            <Box border>
              <Text size="xlarge">
                Hack Shack Challenge: Deploy your app in a Kubernetes cluster
              </Text>
            </Box>
            <Box border>
              <Text size="xlarge">
                In this challenge, you’ll package an application in a container
                and create the necessary Kubernetes artifacts to publish it in a
                Kubernetes cluster managed by HPE Container Platform. The
                challenge will be considered successful when the app is up and
                running in that environment. You can use the application you
                developed in the Grommet Challenge, or we can provide you with
                one.
              </Text>
            </Box>
          </Box>
          <Box width="medium" direction="row">
            <Box border>
              <Text size="xlarge">
                Hack Shack Challenge: Use Redfish to streamline queries
              </Text>
            </Box>
            <Box border>
              <Text size="xlarge">
                In this challenge, you’ll leverage the Redfish REST API to
                create a scripted version of system information where you would
                list items, like devices and serial numbers, in a single query.
                You‘ll have a choice between using simple bash, PowerShell, or
                Python to achieve your goal.
              </Text>
            </Box>
          </Box>
          <Box direction="row">
            <Box border>
              <Text size="xlarge">
                Hack Shack Challenge: Use PowerShell to code a OneView API-based
                report
              </Text>
            </Box>
            <Box border>
              <Text size="xlarge">
                In this challenge, you’ll leverage the provided HPE OneView
                PowerShell library to create a PowerShell-coded API-based report
                that provides a list of relevant items. You’ll make use of a
                Jupyter notebook, a PowerShell kernel, some documentation, and a
                good deal of creativity!
              </Text>
            </Box>
          </Box>
          <Box direction="row">
            <Box border>
              <Text size="xlarge">
                Hack Shack Challenge: Design your App with Grommet Designer
              </Text>
            </Box>
            <Box border>
              <Text size="xlarge">
                In this challenge, you’ll learn what Grommet and Grommet
                Designer are and how to use them to easily design your own app.
                Start with a basic design supplied by Grommet Designer, generate
                code from your design, push it to GitHub, and deploy in Netlify.
                Use your design and coding skills to enhance the application.
                Beginner, expert designers and developers are all welcome.
              </Text>
            </Box>
          </Box>
        </Box>
        <Text size="xlarge">
          Winners will be chosen by a panel of 3 HPE judges based on the
          following criteria: 40% Usefulness of application; 20% Technical
          achievement; 20% Originality; and 20% Completeness. One entry per
          session. Participants allowed to participate in multiple sessions.
          Winner(s) will be notified Wednesday, August 5th by HPE via email. All
          winners must have provided a working email to be contacted by and for
          the gift certificate to be sent to. All winners may have to sign and
          return an eligibility affidavit & liability release, unless
          prohibited. If eligible winners fail to sign and return required
          documents, prize may be forfeited. No substitution, cash redemption or
          transfer of prizes. Taxes are winner’s responsibility.
        </Text>
        <br></br>
        <Text size="xlarge">
          <strong>Category winners:</strong> All 1st place category winners will
          be awarded with a $50 gift certificate. No substitution, cash
          redemption or transfer of prizes. Taxes are winner’s responsibility.
        </Text>
        <br></br>
        <Text size="xlarge">
          <strong>Overall category winner:</strong> The overall category winner
          will be awarded with a $50 gift certificate. No substitution, cash
          redemption or transfer of prizes. Taxes are winner’s responsibility.
        </Text>
        <br></br>
        <Text size="xlarge">
          Odds of winning depend on number of entries. Entrants release and hold
          harmless HPE, its subsidiaries, affiliates, and their officers,
          directors, employees, agents from any claim arising out of entry or
          prize receipt or use.
        </Text>
        <br></br>
        <Text size="xlarge">
          By participating in the HPE HackShack Challenges participants
          represent and warrant that he/she have the full power and authority to
          submit content and to grant any and all associated rights listed
          herein. By participating, the participant also acknowledges that the
          final product submitted will belong to HPE and will be hosted on the
          HPE Developer Community, an open-source community, for the use of all
          its registered members; any malware, virus, or malicious code found in
          the final product becomes responsibility of the original
          creator/participant. All third party trademarks are the property of
          their respective owners. Sponsor: Hewlett Packard Enterprise Company,
          11445 Compaq Center Dr W Houston, TX 77070 Use this address for
          inquiries, requests to be removed from this mailing list, and winner’s
          list.
        </Text>
      </Box>
    </Layout>
  );
};

export default ChallengeTC;
