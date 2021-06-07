import React, { useState, useEffect, useRef } from 'react';
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
  Avatar
} from 'grommet';
import { StatusGood, FormClose, ShareOption } from 'grommet-icons';
import PropTypes from 'prop-types';
import { CardWrapper, ContrastLayer } from './styles';
import { Link } from 'react-router-dom';
import AuthService from '../../services/auth.service';

const { REACT_APP_WORKSHOPCHALLENGE_API_ENDPOINT } = process.env;

export const SignupLayer = ({
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
      const postCustomer = () => {
        axios({
          method: 'POST',
          url: `${REACT_APP_WORKSHOPCHALLENGE_API_ENDPOINT}/api/customer`,
          headers: {
            'x-access-token': AuthService.getCurrentUser().accessToken,
          },
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
          .catch(err => {
            if (err.response.status === 401) {
              AuthService.login().then(() => postCustomer());
            } else {
              console.log(err);
              setError('There was an error submitting your request');
            }
          });
      };
      postCustomer();
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
          <FormField
            label="Company Email"
            name="email"
            error={emailError}
            required
          >
            <TextInput name="email" />
          </FormField>
          <FormField label="Full Name" name="name" required>
            <TextInput name="name" />
          </FormField>
          <FormField label="Company Name" name="company" required>
            <TextInput name="company" />
          </FormField>
          <Box margin={{ top: 'medium' }} gap="medium">
            <FormField required name="termsAndConditions">
              <CheckBox
                name="termsAndConditions"
                label={
                  sessionType === 'Coding Challenge' ? (
                    <Text>
                      I have read and accept the Hack Shack Challenge{' '}
                      <Anchor
                        target="_blank"
                        label="Terms and Conditions"
                        href="/challengetermsconditions"
                      />{' '}
                      and{' '}
                      <Anchor
                        label="HPE's Privacy Policy"
                        href="https://www.hpe.com/us/en/legal/privacy.html"
                        target="_blank"
                        rel="noreferrer noopener"
                      />
                      , and acknowledge that clicking on the{' '}
                      <strong>Take on the Challenge</strong> button below starts
                      the
                      <strong> 4-hour</strong> window in which to complete the
                      challenge.
                      <br />
                      <b>
                        <i>Note:</i>
                      </b>{' '}
                      After clicking the button, go directly to your email to
                      receive your confirmation and login credentials.
                    </Text>
                  ) : (
                    <Text>
                      I have read and accept the Hack Shack Workshop{' '}
                      <Anchor
                        target="_blank"
                        label="Terms and Conditions"
                        href="/workshoptermsconditions"
                      />{' '}
                      and{' '}
                      <Anchor
                        label="HPE's Privacy Policy"
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

export const SuccessLayer = ({ name, setLayer, size, title, reset, sessionType }) => (
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
  ezmeral,
}) => {
  const textSize = size === 'small' ? '16px' : 'medium';
  let backgroundColor;
  let uri = '';
  switch (sessionType) {
    case 'Workshops-on-Demand':
      backgroundColor = '#263040';
      uri = `${REACT_APP_WORKSHOPCHALLENGE_API_ENDPOINT}/api/workshops/`;
      break;
    case 'Coding Challenge':
      backgroundColor = 'rgba(155, 99, 16, 0.8)';
      uri = `${REACT_APP_WORKSHOPCHALLENGE_API_ENDPOINT}/api/workshops/`;
      break;
    default:
      backgroundColor = 'background';
  }
  const cardTopSectionRef = useRef(null);
  const [cardTopSectionHeight, setcardTopSectionHeight] = useState(false);
  const [cardTopSectionWidth, setcardTopSectionWidth] = useState(false);
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
    proxy: 'hackshack',
  });
  const [hover, setHover] = useState(false);
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
      proxy: 'hackshack',
    });
  };

  useEffect(() => {
    const getWorkshopbyID = () => {
      axios({
        method: 'GET',
        url: `${uri}${DBid}`,
        headers: { 'x-access-token': AuthService.getCurrentUser().accessToken },
      })
        .then(res => {
          if (res.data.capacity === 0) {
            setDisabled(true);
          }
        })
        .catch(err => {
          if (err.response.status === 401) {
            AuthService.login().then(() => getWorkshopbyID());
          }
        });
    };
    if (
      sessionType &&
      (sessionType === 'Workshops-on-Demand' ||
        sessionType === 'Coding Challenge')
    ) {
      getWorkshopbyID();
    }
  }, [DBid, sessionType, uri]);

  useEffect(() => {
    if (cardTopSectionRef.current) {
      const refHeight = cardTopSectionRef.current.offsetHeight;
      setcardTopSectionHeight(refHeight);
    }
  }, [cardTopSectionRef])

  return (
    <>
      {ezmeral ?
        (<CardWrapper
          pad="large"
          justify="between"
          background={backgroundColor}
          round="medium"
          overflow="hidden"
        >
          <Box direction="column">
            <Box direction="column">
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
            </Box>
          </Box>
        </CardWrapper>)
        : (<CardWrapper
          justify="between"
          background={backgroundColor}
          round="xsmall"
          overflow="hidden"
        >
          <Box
            pad={{ top: size !== 'large' ? 'large' : 'medium', horizontal: "large" }}
            background={hover ? '#FFFFFF' : "#00000080"}
            onMouseEnter={() => setHover(true)}
            onFocus={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onBlur={() => setHover(false)}
            height="70%"
            ref={cardTopSectionRef}
          >
            <Box direction="column">
              {!hover ? (
                <Box
                  direction="column"
                  height={`${cardTopSectionHeight}px`}
                >
                  <ContrastLayer
                    background="background-contrast"
                    width="fit-content"
                    pad="xxsmall"
                    round="xsmall"
                  >
                    <Text
                      color="#FF8300"
                      size="small"
                      margin={{ vertical: "3px", horizontal: "12px" }}
                    >
                      Popular
                    </Text>
                  </ContrastLayer>
                  <Heading
                    level={4}
                    margin={{ bottom: 'small' }}
                  >
                    {title}
                  </Heading>
                  {(avatar || presenter || role) && (
                    <Box gap="small" direction="row" >
                      {avatar ? (
                        <Avatar src={avatar} />
                      ) : (
                        <Avatar src="/img/SpeakerImages/defaultAvatar.svg" />
                      )}
                      <Box justify="center" >
                        <Text>{presenter}</Text>
                        <Text>{role}</Text>
                      </Box>
                    </Box>
                  )}
                </Box>
              ) : (
                <Box height={`${cardTopSectionHeight}px`}>
                  <Box overflow="scroll"  >
                    <Heading level={5} margin={{ top: 'xsmall' }}>{title}</Heading>
                    <Text
                      margin={{ bottom: 'large' }}
                      size={size === 'small' ? 'small' : 'medium'}
                    >
                      {desc}
                    </Text>
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
          <Box margin={{ top: "medium", bottom: "medium", horizontal: "large" }}>
            <Box direction="row" gap={size === "small" ? "xsmall" : "medium"}>
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
                          <Text color="text-strong" size={textSize} >
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
                          <Text color="text-strong" size={textSize} >
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
              {sessionType === 'Coding Challenge' ||
                sessionType === 'Workshops-on-Demand' ? (
                <Link to={{ pathname: sessionLink }}>
                  <Button
                    label={
                      <Box pad="xsmall">
                        <Text color="text-strong" size={textSize} >Learn more</Text>
                      </Box>
                    }
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
                        <Text color="text-strong" size={textSize} >Learn more</Text>
                      </Box>
                    }
                  />
                  {sessionType === 'Game Challenge' && (
                    <Button
                      alignSelf="start"
                      href="https://enterpriseaccelerator.hpe.com/terms-and-conditions"
                      target="_blank"
                      rel="noreferrer noopener"
                      label={
                        <Box pad="xsmall">
                          <Text color="text-strong" size={textSize} >Terms & Conditions</Text>
                        </Box>
                      }
                      secondary
                    />
                  )}
                </Box>
              )}
              <Button
                onClick={() => setSignupLayer(true)}
                alignSelf="start"
                margin={{ left: 'auto' }}
                icon={<ShareOption />}
                reverse={true}
                gap="xsmall"
                label={
                  size !== 'small' && <Box pad="xsmall">
                    <Text color="text-strong">
                      Share
                </Text>
                  </Box>
                }
              />
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
          </Box>
        </CardWrapper>)}
    </>
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
