import React from 'react';
import { Layout, Success } from '../../components/index';

const SuccessPage = props => {
  console.log('props in success page', props);
  return (
    <Layout background="/img/generic-background.svg">
      <Success {...props}></Success>
    </Layout>
  );
};

export default SuccessPage;
