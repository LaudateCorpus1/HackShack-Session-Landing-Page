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

const WorkshopTC = () => {
  return (
    <Layout background="/img/generic-background.svg">
      <Box align="start" width="xlarge" direction="column">
        <Box align="start">
          <Link to={{ pathname: '/workshops' }}>
            <Button
              color="white"
              icon={<Previous size="small" />}
              label="Back to Hack Shack Workshop"
            />
          </Link>
          <Heading
            color="text-strong"
            level="1"
            margin={{ bottom: 'large', top: 'none' }}
          >
            Terms for use of HPE Hack Shack Workshops-on-Demand
          </Heading>
        </Box>
        <Box pad={{ vertical: 'medium' }}>
          <Image src="img/Community/dev-thumb.png" />
        </Box>
        <Text size="xlarge">
          Hewlett Packard Enterprise (HPE) is not responsible for any loss of
          data created by the download. HPE is not responsible for any data
          saved or left on the Jupyter Notebook.  
        </Text>
        <br />
      </Box>
    </Layout>
  );
};
export default WorkshopTC;
