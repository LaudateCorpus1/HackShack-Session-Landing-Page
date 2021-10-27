import React from 'react';
import WorkshopsTemplate from './template';

const Workshops = props => {
  const openGraphImg = 'https://us-central1-grommet-designer.cloudfunctions.net/images/jay-giang-hpe-com/hpe-dev.jpg?size=400';
  return <WorkshopsTemplate openGraphImg={openGraphImg} {...props} />;
};

export default Workshops;
