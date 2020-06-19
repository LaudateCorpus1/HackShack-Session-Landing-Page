import React from 'react';
import { Box, Button, Image, Heading, Text } from 'grommet';
import { Layout } from '../../components/index';
import { Previous } from 'grommet-icons';

const NewsletterTC = () => {
  return (
    <Layout background="/img/generic-background.svg">
      <Box align="start" width="xlarge" direction="column">
        <Box align="start">
          <Button
            color="white"
            icon={<Previous size="small" />}
            label="Back to Newsletter Signup"
            href="https://developer.hpe.com/event/hpe-discover-us-2020?listid=11647678"
          />
          <Heading
            color="text-strong"
            level="1"
            margin={{ bottom: 'large', top: 'none' }}
          >
            RULES FOR - Random Newsletter Drawing – During HPE Discover Virtual
            Experience event
          </Heading>
        </Box>

        <Box pad={{ vertical: 'medium' }}>
          <Image src="img/Community/dev-thumb.png"></Image>
        </Box>
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
          decisions. 
        </Text>
        <br></br>
        <Text size="xlarge">
          HPE will select 3 names at random from those that have subscribed to
          the HPE Developer Community monthly newsletter between June 23 through
          July 31st 2020. Each winner will be{' '}
          <strong> awarded a gift certificate</strong> (valued at approximately
          $100). Winner(s) will be notified no later than Wednesday, August 5th
          by HPE via email.
        </Text>
        <br></br>
        <Text size="xlarge">
          Each person is allowed to enter ONE EMAIL ADDRESS. Existing newsletter
          subscribers are not eligible to win. All winners must have provided a
          working email to be contacted by and for the gift certificate to be
          sent to. Winner may have to sign and return an eligibility affidavit &
          liability release, unless prohibited. If eligible winners fail to sign
          and return required documents, prize may be forfeited. No
          substitution, cash redemption or transfer of prizes. Taxes are
          winner’s responsibility. Participants release and hold harmless HPE,
          its subsidiaries, affiliates, and their officers, directors,
          employees, agents from any claim arising out of entry or prize receipt
          or use. All third party trademarks are the property of their
          respective owners. Sponsor: Hewlett Packard Enterprise Company, 11445
          Compaq Center Dr. W Houston, TX 77070 Use this address for inquiries,
          requests to be removed from this mailing list, and winner’s list.
        </Text>
      </Box>
    </Layout>
  );
};

export default NewsletterTC;
