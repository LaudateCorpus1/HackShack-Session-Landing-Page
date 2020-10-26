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
import { Link } from 'react-router-dom';

const { REACT_APP_WORKSHOPCHALLENGE_API_ENDPOINT } = process.env;

const SignupLayer = ({
  reset,
  setLayer,
  setFormData,
  formData,
  setSuccess,
  size,
  title,
  sessionType,
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
        url: `${REACT_APP_WORKSHOPCHALLENGE_API_ENDPOINT}/api/customer`,
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
        <Text color="#ffffff" margin={{ top: 'none', bottom: 'small' }}>
          {title} {sessionType === 'Workshops-on-Demand' ? 'workshop' : ''}
        </Text>
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
          <Box margin={{ top: 'medium' }} gap="medium">
            <FormField required name="termsAndConditions">
              <CheckBox
                name="termsAndConditions"
                label={
                  sessionType === 'Coding Challenge' ? (
                    <Text>
                      I accept the Hack Shack Challenge{' '}
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
                  ) : (
                    <Text>
                      I accept the Hack Shack Workshop{' '}
                      <Anchor
                        target="_blank"
                        label="Terms and Conditions"
                        href="/workshoptermsconditions"
                      />
                      , HPE's{' '}
                      <Anchor
                        label="Privacy Policy"
                        href="https://www.hpe.com/us/en/legal/privacy.html"
                        target="_blank"
                        rel="noreferrer noopener"
                      />
                      , and acknowledge that clicking on the{' '}
                      <strong>Register for the Workshop</strong> button below
                      starts the
                      <strong> 4-hour</strong> window in which to complete the
                      workshop.
                      <br />
                      <b>
                        <i>Note:</i>
                      </b>{' '}
                      After clicking the button, go directly to your email to
                      receive your confirmation and login credentials.
                    </Text>
                  )
                }
              />
            </FormField>
            <Button
              alignSelf="start"
              label={
                sessionType === 'Coding Challenge'
                  ? 'Take on the Challenge'
                  : 'Register for the Workshop'
              }
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

const SuccessLayer = ({ name, setLayer, size, title, reset, sessionType }) => (
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
          {sessionType === 'Coding Challenge'
            ? 'Challenge Accepted!'
            : `You're Registered!`}
        </Heading>
        <Text color="#ffffff">
          You have been signed up for this{' '}
          {sessionType === 'Coding Challenge' ? 'Challenge' : 'workshop'}. Head
          over to your email to learn what happens next.
        </Text>
      </Box>
      <Box>
        <Text>Your registration info:</Text>
        <Text>
          {' '}
          <Text color="#ffffff" weight="bold">
            {name}
          </Text>{' '}
          is signed up for{' '}
          <Text color="#ffffff" weight="bold">
            {title}
          </Text>
        </Text>
      </Box>
      <Box margin={{ top: 'large' }}>
        <Button
          alignSelf="start"
          label="close"
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
  workshopList,
  location,
}) => {
  let backgroundColor;
  // const [uri, seturi] = useState('');
  let uri = '';
  switch (sessionType) {
    case 'Workshops-on-Demand':
      backgroundColor = '#00567acc';
      uri = `${REACT_APP_WORKSHOPCHALLENGE_API_ENDPOINT}/api/workshops/`;
      break;
    case 'Coding Challenge':
      backgroundColor = 'rgba(155, 99, 16, 0.8)';
      uri = `${REACT_APP_WORKSHOPCHALLENGE_API_ENDPOINT}/api/workshops/`;
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
    title: title,
    notebook,
    sessionType: sessionType,
    location: location,
    termsAndConditions: false,
  });

  const resetFormData = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      title: title,
      notebook,
      sessionType: sessionType,
      location: location,
      termsAndConditions: false,
    });
  };

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${uri}${DBid}`,
    })
      .then(res => {
        if (res.data.capacity === 0) {
          setDisabled(true);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, [DBid, sessionType, uri]);

  return (
    <CardWrapper
      pad="large"
      justify="between"
      background={backgroundColor}
      round="medium"
      overflow="hidden"
    >
      <Box direction="column">
        <Box direction="column">
          {(avatar || presenter || role) && (
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
          )}
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
        {sessionType === 'Coding Challenge' ||
        sessionType === 'Workshops-on-Demand' ? (
          <Link to={{ pathname: sessionLink }}>
            <Button
              label={
                <Box pad="xsmall">
                  <Text color="text-strong">Learn more</Text>
                </Box>
              }
              secondary
            />
          </Link>
        ) : (
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
            {sessionType === 'Game Challenge' && (
              <Button
                alignSelf="start"
                href="https://enterpriseaccelerator.hpe.com/terms-and-conditions"
                target="_blank"
                rel="noreferrer noopener"
                label={
                  <Box pad="xsmall">
                    <Text color="text-strong">Terms & Conditions</Text>
                  </Box>
                }
                secondary
              />
            )}
          </Box>
        )}
        {workshopList &&
          workshopList.map(workshop => (
            <Box key={workshop.workshopLink}>
              <Button
                href={workshop.workshopLink}
                key={workshop.workshopLink}
                target="_blank"
                rel="noreferrer noopener"
                alignSelf="start"
                label={
                  <Box pad="xsmall">
                    <Text color="text-strong">
                      {' '}
                      Register {workshop.workshopID}
                    </Text>
                  </Box>
                }
                secondary
              />
            </Box>
          ))}
        {(sessionType === 'Coding Challenge' ||
          sessionType === 'Workshops-on-Demand') && (
          <Box>
            <Button
              onClick={() => setSignupLayer(true)}
              disabled={disabled}
              alignSelf="start"
              label={
                <Box pad="xsmall">
                  <Text color="text-strong">
                    {disabled
                      ? 'Currently full, please try again later'
                      : sessionType === 'Coding Challenge'
                      ? 'Challenge me'
                      : 'Register'}
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
          sessionType={sessionType}
        />
      )}
      {successLayer && (
        <SuccessLayer
          setLayer={setSuccessLayer}
          name={formData.name}
          size={size}
          title={title}
          reset={resetFormData}
          sessionType={sessionType}
        />
      )}
    </CardWrapper>
  );
};
ScheduleCard.propTypes = {
  avatar: PropTypes.string,
  desc: PropTypes.string,
  id: PropTypes.number,
  DBid: PropTypes.number,
  presenter: PropTypes.string,
  role: PropTypes.string,
  sessionLink: PropTypes.string,
  sessionType: PropTypes.string,
  size: PropTypes.string,
  title: PropTypes.string,
  workshopList: PropTypes.array,
  location: PropTypes.string,
};
export default ScheduleCard;
