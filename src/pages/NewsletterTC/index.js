import React from 'react';
import { Box, Button, Image, Heading, Text } from 'grommet';
import { Previous } from 'grommet-icons';
import { Layout } from '../../components/index';

const NewsletterTC = () => {
  return (
    <Layout background="/img/BackgroundImages/generic-background.png">
      <Box align="start" width="xlarge" direction="column">
        <Box align="start">
          <Button
            color="white"
            icon={<Previous size="small" />}
            label="Back to Newsletter Signup"
            href="https://developer.hpe.com/event/kubecon-europe-2020?listid=10605211"
          />
          <Heading
            color="text-strong"
            level="1"
            margin={{ bottom: 'large', top: 'none' }}
          >
            RULES FOR - Random Newsletter Drawing – During HPE Virtual
            Experience event
          </Heading>
        </Box>

        <Box pad={{ vertical: 'medium' }}>
          <Image src="img/Community/dev-thumb.png" />
        </Box>
        <Text size="xlarge">
          NO PURCHASE NECESSARY & PURCHASE WILL NOT INCREASE CHANCE OF WINNING.
          OPEN those who sign up for the HPE DEV Newsletter between August 17
          and August 20, and who are AT LEAST 18 YEARS OLD. Void in Puerto Rico,
          U.S. territories, possessions and where prohibited by law. Employees
          of HPE, its subsidiaries, affiliates and HPE authorized channel
          partners, their immediate family and household members are not
          eligible. Employees of the U.S. federal government, U.S. state/local
          government, or public higher education institution, or any private or
          public K-12 educational institution, or library, are not eligible.
          Entry constitutes agreement to rules & HPE’s decisions. Eligibility
          and disqualification will be determined in HPE’s sole discretion.
        </Text>
        <br />
        <Text size="xlarge">
          HPE will select 5 names at random from those that have subscribed to
          the HPE Developer Community monthly newsletter between August 17th
          through August 20th 2020. Each winner will be{' '}
          <strong> awarded a gift certificate</strong> (valued at approximately
          $50). Winner(s) will be notified no later than Monday, August23rd by
          HPE via email.
        </Text>
        <br />
        <Text size="xlarge">
          Each person is allowed to enter ONE EMAIL ADDRESS. Existing newsletter
          subscribers are not eligible to win.
        </Text>
        <br />
        <Text size="xlarge">
          All winners must have provided a working email to be contacted by and
          for the gift certificate to be sent to. Winner may have to sign and
          return an eligibility affidavit & liability release, unless
          prohibited. If eligible winners fail to sign and return required
          documents, prize may be forfeited. No substitution, cash redemption or
          transfer of prizes. Taxes are winner’s responsibility. Participants
          release and hold harmless HPE, its subsidiaries, affiliates, and their
          officers, directors, employees, agents from any claim arising out of
          entry or prize receipt or use. All third party trademarks are the
          property of their respective owners. Sponsor: Hewlett Packard
          Enterprise Company, 11445 Compaq Center Dr. W Houston, TX 77070 USA.
          Use this address for inquiries, requests to be removed from this
          mailing list, and winner’s list.
        </Text>
      </Box>
    </Layout>
  );
};

export default NewsletterTC;
