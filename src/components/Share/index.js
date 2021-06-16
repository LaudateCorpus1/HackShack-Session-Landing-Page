import React, { useState } from 'react';
import { Linkedin, Twitter, Link as GrommetLink } from 'grommet-icons';
import { Button } from 'grommet';

const Share = ({replayId, workshop}) => {
  const [toolTip, setToolTip] = useState('Click to copy the URL to clipboard');
  const hostName = window.location.host;

  return (
  <>
    <Button
      icon={<Linkedin size="medium" />}
      target="_blank"
      rel="noopener noreferrer"
      a11yTitle="Share on LinkedIn"
      label={workshop && "LinkedIn"}
      reverse={true}
      href={`https://www.linkedin.com/sharing/share-offsite/?url=https://${hostName}/workshop/${replayId}`}
    />
    <Button
      margin={{ horizontal: "20px" }}
      icon={<Twitter size='medium' />}
      target="_blank"
      rel="noopener noreferrer"
      a11yTitle="Share on Twitter"
      label={workshop && "Twitter"}
      reverse={true}
      href={`https://twitter.com/intent/tweet?url=https://${hostName}/workshop/${replayId}`}
    />
    <Button
      icon={<GrommetLink size='medium' />}
      onClick={() => {
        navigator.clipboard.writeText(window.location.href);
        setToolTip('Copied!');
      }}
      tip={{
        dropProps: { align: { bottom: 'top' } },
        content: toolTip,
      }}
      label={workshop && "Copy"}
      reverse={true}
    />
  </>
  )
}

export default Share;