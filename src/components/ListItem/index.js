import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Layer,
  Heading,
  Header,
  Paragraph,
  RadioButton,
  Text,
} from 'grommet';
import { Close, StatusInfo } from 'grommet-icons';

const ListItem = props => {
  const [open, setOpen] = useState();
  const onOpen = () => setOpen(true);
  let disabled = false;

  const onClose = () => setOpen(undefined);
  if (props.challengeNameDesc.capacity <= 0) disabled = true;

  return (
    <Box direction="row" align="center" gap="small">
      <RadioButton
        name={props.challengeNameDesc.name}
        label={props.challengeNameDesc.name}
        checked={props.challengeNameDesc.name === props.challenge}
        disabled={disabled}
        onChange={event => {
          props.setFormValues(prevState => ({
            ...prevState,
            challenge: props.challengeNameDesc.name,
            jupyterWorkshop: props.challengeNameDesc.notebook,
          }));
          props.setCustomError(prevState => ({
            ...prevState,
            workshopErr: '',
          }));
        }}
      />
      <Button icon={<StatusInfo />} onClick={onOpen} />
      {disabled && (
        <Text color="status-critical"> Currently unavailable. Try later</Text>
      )}
      {open && (
        <Layer
          animate={true}
          modal={true}
          onClickOutside={onClose}
          onEsc={onClose}
        >
          <Box
            align="center"
            justify="center"
            pad="medium"
            background={{ color: 'background', dark: false }}
          >
            <Header
              align="center"
              direction="row"
              flex={false}
              justify="between"
              gap="medium"
            >
              <Heading margin="none" level="3">
                {props.challengeNameDesc.name}
              </Heading>
              <Button
                icon={<Close />}
                hoverIndicator={true}
                onClick={onClose}
              />
            </Header>
            <Paragraph>{props.challengeNameDesc.description}</Paragraph>
          </Box>
        </Layer>
      )}
    </Box>
  );
};

ListItem.propTypes = {
  challengeNameDesc: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default ListItem;
