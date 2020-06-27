import React, { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import {
  Box,
  Form,
  FormField,
  TextInput,
  Button,
  Heading,
  Header,
  Text,
  CheckBox,
  Anchor,
} from 'grommet';
import axios from 'axios';
import { ListItem, Layout } from '../../components';

const Challenge = props => {
  const defaultForm = {
    name: '',
    email: '',
    company: '',
    challenge: '',
    notebook: '',
    terms: false,
  };
  const defaultError = {
    nameErr: '',
    emailErr: '',
    companyErr: '',
    challengeErr: '',
    acceptTermsErr: '',
  };

  const [formValues, setFormValues] = useState(defaultForm);
  const [customError, setCustomError] = useState(defaultError);
  const [error, setError] = useState('');
  const [submitStatus, setSubmitStatus] = useState(false);
  const [challengeNameDesc, setChallengeNameDesc] = useState([]);

  const apiEndpoint = process.env.REACT_APP_CHALLENGE_API_ENDPOINT;
  const getChallengesApi = `${apiEndpoint}/api/challenges`;
  const addCustomer = `${apiEndpoint}/api/customer`;

  let formIsValid = false;

  useEffect(() => {
    let capacity = 0;
    const getChallenges = () => {
      axios({
        method: 'GET',
        url: getChallengesApi,
      })
        .then(response => {
          let arr = [];

          // Map created
          response.data.forEach(challenge => {
            arr.push({ ...challenge });
            if (challenge.capacity > 0) capacity += 1;
          });
          setChallengeNameDesc([...challengeNameDesc, ...arr]);
        })
        .then(() => {
          if (capacity <= 0)
            setError(
              'Currently, challenges are Unavailable. Please try again in few hours',
            );
        })
        .catch(error => {
          if (!error.response) {
            // network error
            setError(`Error submitting ${getChallengesApi}.`);
          } else {
            setError(error.response.data.message);
          }
        });
    };
    getChallenges();
    // eslint-disable-next-line
  }, []);

  // Update form field values on change
  const handleChange = (e, setter, name) => {
    let value;
    if (name !== 'terms') value = e.target.value;
    else value = e.target.checked;
    setter(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Name validation
  const nameValidation = name => {
    //Name - only letters and space
    if (name) {
      if (!name.match(/^[a-zA-Z\s]+$/)) {
        setCustomError(prevState => ({
          ...prevState,
          nameErr: 'Only letters and space',
        }));
        return false;
      } else {
        setCustomError(prevState => ({
          ...prevState,
          nameErr: '',
        }));
      }
    } else {
      setCustomError(prevState => ({
        ...prevState,
        nameErr: 'Please enter your name',
      }));
      return false;
    }
    return true;
  };

  // Company validation
  const companyValidation = company => {
    //Company - only letters and space
    if (company) {
      if (!company.match(/^[a-zA-Z\s]+$/)) {
        setCustomError(prevState => ({
          ...prevState,
          companyErr: 'Only letters and space',
        }));
        return false;
      } else {
        setCustomError(prevState => ({
          ...prevState,
          companyErr: '',
        }));
      }
    } else {
      setCustomError(prevState => ({
        ...prevState,
        companyErr: 'Please enter your company name',
      }));
      return false;
    }
    return true;
  };

  // Email validation
  const emailValidation = email => {
    if (email) {
      const emailtemp = email;
      let lastAtPos = emailtemp.lastIndexOf('@');
      let lastDotPos = emailtemp.lastIndexOf('.');

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          emailtemp.indexOf('@@') === -1 &&
          lastDotPos > 2 &&
          emailtemp.length - lastDotPos > 2
        )
      ) {
        setCustomError(prevState => ({
          ...prevState,
          emailErr: 'Email is not valid',
        }));

        return false;
      } else {
        setCustomError(prevState => ({
          ...prevState,
          emailErr: '',
        }));
      }
    } else {
      setCustomError(prevState => ({
        ...prevState,
        emailErr: 'Please enter your company email',
      }));
      return false;
    }
    return true;
  };

  //Workshop selection - required
  const challengeValidation = async challenge => {
    if (challenge) {
      formIsValid = true;
      setCustomError(prevState => ({
        ...prevState,
        challengeErr: '',
      }));
    } else {
      formIsValid = false;
      setCustomError(prevState => ({
        ...prevState,
        challengeErr: 'Please select a challenge',
      }));
    }
  };

  //Terms and Privacy validatiom - required
  const acceptTermsValidation = async checked => {
    if (checked) {
      formIsValid = true;
      setCustomError(prevState => ({
        ...prevState,
        acceptTermsErr: '',
      }));
    } else {
      formIsValid = false;
      setCustomError(prevState => ({
        ...prevState,
        acceptTermsErr: 'Please agree to terms and privacy',
      }));
    }
  };

  const handleValidation = async () => {
    //Workshop - required
    await challengeValidation(formValues.challenge);
    await acceptTermsValidation(formValues.terms);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await handleValidation();
    if (formIsValid) {
      axios({
        method: 'POST',
        url: addCustomer,
        data: { ...formValues },
      })
        .then(response => {
          if (response.status >= 400) {
            return setSubmitStatus(false);
          } else if (response.status > 200) {
            setError(response.data);
            return setSubmitStatus(false);
          }
          setSubmitStatus(true);
        })
        .catch(error => {
          if (!error.response) {
            // network error
            setError(`Error submitting ${addCustomer}.`);
          } else {
            // this.errorStatus = error.response.data.message;
            setError(error.response.data.message);
          }
        });
    }
  };

  return (
    <Layout background="/img/BackgroundImages/schedule-background.png">
      <Box
        align="start"
        border
        round="small"
        justify="start"
        gap="medium"
        pad={{ horizontal: 'medium', vertical: 'medium' }}
        background="#263040"
      >
        <Header
          direction="column"
          align="start"
          gap="xxsmall"
          pad={{ horizontal: 'xxsmall' }}
        >
          <Heading level={3} margin="none">
            Signup
          </Heading>
          <Text>for a HPE Discover Hack Shack Challenge</Text>
        </Header>
        <Box
          // Padding used to prevent focus from being cutoff
          pad={{ horizontal: 'xxsmall' }}
        >
          <Form
            // validate="blur"
            // value={formValues}
            // onChange={setFormValues}
            onSubmit={handleSubmit}
          >
            <FormField
              label="Email"
              // validate={emailValidation}
              // required
              // onChange={e => handleChange(e, setFormValues, "email")}
              error={customError.emailErr}
            >
              <TextInput
                type="text"
                required
                placeholder="enter your company email"
                // value={email}
                onBlur={event => {
                  if (emailValidation(event.target.value))
                    handleChange(event, setFormValues, 'email');
                }}
              />
            </FormField>
            <FormField label="Name" error={customError.nameErr}>
              <TextInput
                required
                placeholder="enter your name"
                //value={name}
                onBlur={event => {
                  if (nameValidation(event.target.value))
                    handleChange(event, setFormValues, 'name');
                }}
              />
            </FormField>
            <FormField label="Company" error={customError.companyErr}>
              <TextInput
                required
                placeholder="enter your company name"
                //value={company}
                onBlur={event => {
                  if (companyValidation(event.target.value))
                    handleChange(event, setFormValues, 'company');
                }}
              />
            </FormField>
            <FormField label="Challenges" error={customError.challengeErr}>
              <Box pad="xsmall" gap="xsmall">
                {challengeNameDesc &&
                  challengeNameDesc.length &&
                  challengeNameDesc.map(workshopData => (
                    <ListItem
                      key={workshopData.name}
                      challengeNameDesc={workshopData}
                      setFormValues={setFormValues}
                      // setJupyterWorkshop={setJupyterWorkshop}
                      setCustomError={setCustomError}
                      challenge={formValues.challenge}
                      // notebook={formValues.notebook}
                    />
                  ))}
              </Box>
            </FormField>
            <FormField
              htmlFor="terms-and-privacy"
              error={customError.acceptTermsErr}
            >
              <CheckBox
                id="terms-and-privacy"
                name="termsAndPrivacy"
                checked={formValues.terms}
                // required
                label={
                  <Text>
                    I accept the HackShack Challenge{' '}
                    <Link to={{ pathname: '/challengetermsconditions' }}>
                      <Anchor label="Terms and Conditions" />
                    </Link>{' '}
                    and HPE{' '}
                    <Anchor
                      label="Privacy Policy"
                      href="https://www.hpe.com/us/en/legal/privacy.html"
                      target="_blank"
                      rel="noreferrer noopener"
                    />
                  </Text>
                }
                onChange={event => {
                  if (acceptTermsValidation(event.target.value))
                    handleChange(event, setFormValues, 'terms');
                }}
              />
            </FormField>
            {error && (
              <Box pad={{ top: 'xsmall', bottom: 'medium' }}>
                <Box
                  align="center"
                  justify="center"
                  direction="row-responsive"
                  background="status-critical"
                >
                  <Text>{error}</Text>
                </Box>
              </Box>
            )}

            <Button
              alignSelf="center"
              label="Signup"
              type="submit"
              // hoverIndicator={true}
              primary
            />
          </Form>
        </Box>
      </Box>

      {submitStatus && (
        <Redirect
          to={{
            pathname: '/success',
            state: formValues,
          }}
        />
      )}
    </Layout>
  );
};
export default Challenge;
