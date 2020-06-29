import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Heading,
  Layer,
  Box,
  Text,
  FormField,
  Form,
  CheckBox,
  Button,
  Anchor,
  TextInput,
  Avatar,
} from 'grommet';
import { StatusGood, FormClose } from 'grommet-icons';
import PropTypes from 'prop-types';
import { CardWrapper } from './styles';

const { REACT_APP_CHALLENGE_API_ENDPOINT } = process.env;

const SignupLayer = ({
  reset,
  setLayer,
  setFormData,
  formData,
  setSuccess,
  size,
  title,
}) => {
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');

  const emailValidation = email => {
    if (email) {
      const emailtemp = email;
      const lastAtPos = emailtemp.lastIndexOf('@');
      const lastDotPos = emailtemp.lastIndexOf('.');

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          emailtemp.indexOf('@@') === -1 &&
          lastDotPos > 2 &&
          emailtemp.length - lastDotPos > 2
        )
      ) {
        setEmailError('Email is not valid');

        return false;
      }
      setEmailError('');
    }
    return true;
  };

  const onSubmit = () => {
    if (emailValidation(formData.email)) {
      axios({
        method: 'POST',
        url: `${REACT_APP_CHALLENGE_API_ENDPOINT}/api/customer`,
        data: { ...formData },
      })
        .then(response => {
          if (response.status === 202) {
            setError(response.data);
          } else {
            setLayer(false);
            setSuccess(true);
          }
        })
        .catch(() => {
          setError('There was an error submitting your request');
        });
    }
  };

  return (
    <Layer
      position="right"
      full="vertical"
      style={{ borderRadius: '4px 0px 0px 4px' }}
    >
      <Button
        onClick={() => {
          reset();
          setLayer(false);
        }}
        alignSelf="end"
        icon={<FormClose />}
        margin={{ top: 'medium', right: 'medium' }}
      />
      <Box
        overflow="auto"
        height="800px"
        width={size === 'small' ? '100%' : '500px'}
        direction="column"
        pad={{ bottom: 'large', left: 'xlarge', right: 'xlarge' }}
      >
        <Heading color="#ffffff" margin={{ top: 'none', bottom: 'small' }}>
          Register
        </Heading>
        <Text color="#ffffff">For {title}</Text>
        <Form
          validate="blur"
          value={formData}
          onChange={setFormData}
          onSubmit={({ value }) => onSubmit({ value })}
        >
          <FormField label="Email" name="email" error={emailError} required>
            <TextInput name="email" />
          </FormField>
          <FormField label="Name" name="name" required>
            <TextInput name="name" />
          </FormField>
          <FormField label="Company" name="company">
            <TextInput name="company" />
          </FormField>
          <Box margin={{ top: 'large' }} gap="medium">
            <FormField required name="termsAndConditions">
              <CheckBox
                name="termsAndConditions"
                label={
                  <Text>
                    I accept the HackShack Challenge{' '}
                    <Anchor
                      target="_blank"
                      label="Terms and Conditions"
                      href="/challengetermsconditions"
                    />{' '}
                    and HPE's{' '}
                    <Anchor
                      label="Privacy Policy"
                      href="https://www.hpe.com/us/en/legal/privacy.html"
                      target="_blank"
                      rel="noreferrer noopener"
                    />
                  </Text>
                }
              />
            </FormField>
            <Button
              alignSelf="start"
              label="Take on the Challenge"
              type="submit"
              primary
            />
          </Box>
          {error && (
            <Box
              pad="small"
              justify="center"
              margin={{ top: 'medium' }}
              background="status-critical"
            >
              <Text alignSelf="center">{error}</Text>
            </Box>
          )}
        </Form>
      </Box>
    </Layer>
  );
};

SignupLayer.propTypes = {
  reset: PropTypes.func,
  formData: PropTypes.object,
  setFormData: PropTypes.func,
  setLayer: PropTypes.func,
  setSuccess: PropTypes.func,
  size: PropTypes.string,
  title: PropTypes.string,
};

const SuccessLayer = ({ name, setLayer, size, title, reset }) => (
  <Layer
    position="right"
    full="vertical"
    style={{ borderRadius: '4px 0px 0px 4px' }}
  >
    <Button
      alignSelf="end"
      onClick={() => setLayer(false)}
      icon={<FormClose />}
      margin={{ top: 'medium', right: 'medium' }}
    />
    <Box
      height="100%"
      width={size === 'small' ? '100%' : '500px'}
      direction="column"
      pad={{ bottom: 'large', left: 'xlarge', right: 'xlarge' }}
    >
      <StatusGood size="large" />
      <Box margin={{ bottom: 'medium', top: 'small' }}>
        <Heading color="#ffffff" margin={{ top: 'none', bottom: 'small' }}>
          Challenge Accepted!
        </Heading>
        <Text color="#ffffff">
          You're signed up for the Challenge! Head over to your email to confirm
          your registration, and to learn what happens next.
        </Text>
      </Box>
      <Box>
        <Text>Your registration info:</Text>
        <Text>
          {' '}
          <Text color="#ffffff" weight="bold">
            {name}
          </Text>{' '}
          is signed up for the{' '}
          <Text color="#ffffff" weight="bold">
            {title}
          </Text>
        </Text>
      </Box>
      <Box margin={{ top: 'large' }}>
        <Button
          alignSelf="start"
          label="Take me back to the Schedule"
          onClick={() => {
            reset();
            setLayer(false);
          }}
          primary
        />
      </Box>
    </Box>
  </Layer>
);

SuccessLayer.propTypes = {
  name: PropTypes.string,
  setLayer: PropTypes.func,
  reset: PropTypes.func,
  size: PropTypes.string,
  title: PropTypes.string,
};

const ScheduleCard = ({
  avatar,
  desc,
  id,
  DBid,
  notebook,
  presenter,
  role,
  sessionLink,
  sessionType,
  size,
  title,
}) => {
  let backgroundColor;
  switch (sessionType) {
    case 'Workshop':
      backgroundColor = '#00567acc';
      break;
    case 'Challenge':
      backgroundColor = 'rgba(155, 99, 16, 0.8)';
      break;
    default:
      backgroundColor = 'background';
  }
  const [signupLayer, setSignupLayer] = useState(false);
  const [successLayer, setSuccessLayer] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    challenge: title,
    notebook,
    termsAndConditions: false,
  });

  const resetFormData = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      challenge: title,
      notebook,
      termsAndConditions: false,
    });
  };

  useEffect(() => {
    if (sessionType === 'Challenge') {
      axios({
        method: 'GET',
        url: `${REACT_APP_CHALLENGE_API_ENDPOINT}/api/challenges/${DBid}`,
      })
        .then(res => {
          if (res.data.capacity === 0) {
            setDisabled(true);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [DBid, sessionType]);

  return (
    <CardWrapper
      pad="large"
      justify="between"
      background={backgroundColor}
      round="medium"
      overflow="hidden"
    >
      <Box direction="column">
        <Box align="center" justify="between" direction="row">
          <Box
            pad={{ vertical: 'xsmall', horizontal: 'medium' }}
            background="background-contrast"
            round="large"
            alignSelf="center"
          >
            {sessionType}
          </Box>
          <Box direction="row" round="large">
            Session ID: {id}
          </Box>
        </Box>
        <Box direction="column">
          <Box pad={{ top: 'large' }} gap="small" direction="row">
            {avatar ? (
              <Avatar src={avatar} />
            ) : (
              <Avatar src="/img/SpeakerImages/defaultAvatar.svg" />
            )}
            <Box justify="center">
              <Text>{presenter}</Text>
              <Text>{role}</Text>
            </Box>
          </Box>
          <Heading margin={{ vertical: 'small' }} level={3}>
            {title}
          </Heading>
        </Box>
        <Box>
          <Text
            margin={{ bottom: 'large' }}
            size={size === 'small' ? 'large' : 'xlarge'}
          >
            {desc}
          </Text>
        </Box>
      </Box>
      <Box direction="row" gap="medium">
        <Button
          alignSelf="start"
          href={sessionLink}
          target="_blank"
          rel="noreferrer noopener"
          label={
            <Box pad="xsmall">
              <Text color="text-strong">Learn more</Text>
            </Box>
          }
          secondary
        />
        {sessionType === 'Challenge' && (
          <Box>
            <Button
              onClick={() => setSignupLayer(true)}
              disabled={disabled}
              alignSelf="start"
              label={
                <Box pad="xsmall">
                  <Text color="text-strong">
                    {disabled ? 'Currently full, try again later' : 'Register'}
                  </Text>
                </Box>
              }
              secondary
            />
          </Box>
        )}
      </Box>
      {signupLayer && (
        <SignupLayer
          formData={formData}
          reset={resetFormData}
          setFormData={setFormData}
          setLayer={setSignupLayer}
          setSuccess={setSuccessLayer}
          title={title}
          size={size}
        />
      )}
      {successLayer && (
        <SuccessLayer
          setLayer={setSuccessLayer}
          name={formData.name}
          size={size}
          title={title}
          reset={resetFormData}
        />
      )}
    </CardWrapper>
  );
};
ScheduleCard.propTypes = {
  avatar: PropTypes.string,
  desc: PropTypes.string,
  id: PropTypes.string,
  DBid: PropTypes.string,
  presenter: PropTypes.string,
  role: PropTypes.string,
  sessionLink: PropTypes.string,
  sessionType: PropTypes.string,
  size: PropTypes.string,
  title: PropTypes.string,
};
export default ScheduleCard;
