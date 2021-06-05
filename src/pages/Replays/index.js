import React from 'react';
import ReplaysTemplate from './template';

const Replays = props => {
  const openGraphImage = "https://us-central1-grommet-designer.cloudfunctions.net/images/jay-giang-hpe-com/hpe-dev.jpg?size=400";
  return <ReplaysTemplate openGraphImage={openGraphImage} {...props} />
}

export default Replays;
