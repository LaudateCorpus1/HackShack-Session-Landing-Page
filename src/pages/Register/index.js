import React, { useState, useEffect } from 'react';
import {
  Box,
  Form,
  FormField,
  TextInput,
  Button,
  Header,
  Heading,
  Text,
  CheckBox,
  Anchor,
} from 'grommet';
import axios from 'axios';
import { Layout, ListItem } from '../../components/index';

const Register = () => {
  const defaultForm = {
    name: '',
    email: '',
    company: '',
    workshop: '',
    jupyterWorkshop: '',
    terms: false,
  };
  const defaultError = {
    nameErr: '',
    emailErr: '',
    companyErr: '',
    workshopErr: '',
    acceptTermsErr: '',
  };
  const [formValues, setFormValues] = useState(defaultForm);
  const [customError, setCustomError] = useState(defaultError);
  const [error, setError] = useState('');
  const [submitStatus, setSubmitStatus] = useState(false);
  const [workshopNameDesc, setWorkshopNameDesc] = useState([]);

  const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;
  const getWorkshopsApi = `${apiEndpoint}/api/workshops`;
  const addCustomer = `${apiEndpoint}/api/customer/create`;

  let formIsValid = false;

  useEffect(() => {
    let capacity = 0;
    const getWorkshops = () => {
      axios({
        method: 'GET',
        url: getWorkshopsApi,
      })
        .then(response => {
          let arr = [];

          // Map created
          response.data.forEach(workshop => {
            arr.push({ ...workshop });
            if (workshop.capacity > 0) capacity += 1;
          });
          setWorkshopNameDesc([...workshopNameDesc, ...arr]);
        })
        .then(() => {
          if (capacity <= 0)
            setError(
              'Currently, workshops are Unavailable. Please try again in few hours',
            );
        })
        .catch(error => {
          if (!error.response) {
            // network error
            setError(`Error submitting ${getWorkshopsApi}.`);
          } else {
            setError(error.response.data.message);
          }
        });
    };
    getWorkshops();
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
  const workshopValidation = async workshop => {
    if (workshop) {
      formIsValid = true;
      setCustomError(prevState => ({
        ...prevState,
        workshopErr: '',
      }));
    } else {
      formIsValid = false;
      setCustomError(prevState => ({
        ...prevState,
        workshopErr: 'Please select a workshop',
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
    await workshopValidation(formValues.workshop);
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
    <Layout background="/img/schedule-background.svg">
      <Box
        align="start"
        border
        round="small"
        justify="start"
        gap="medium"
        pad={{ horizontal: 'medium', vertical: 'medium' }}
        background="dark-1"
      >
        <Header
          direction="column"
          align="start"
          gap="xxsmall"
          pad={{ horizontal: 'xxsmall' }}
        >
          <Heading level={3} margin="none">
            Register
          </Heading>
          <Text>for a HPE Hack Shack workshop</Text>
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
            <FormField label="Workshops" error={customError.workshopErr}>
              <Box pad="xsmall" gap="xsmall">
                {workshopNameDesc &&
                  workshopNameDesc.length &&
                  workshopNameDesc.map(workshopData => (
                    <ListItem
                      key={workshopData.name}
                      workshopNameDesc={workshopData}
                      setFormValues={setFormValues}
                      // setJupyterWorkshop={setJupyterWorkshop}
                      setCustomError={setCustomError}
                      workshop={formValues.workshop}
                      // jupyterWorkshop={formValues.jupyterWorkshop}
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
                    I accept the HPE{' '}
                    <Anchor
                      label="Terms of Use"
                      href="https://www.hpe.com/us/en/about/legal/terms-of-use.html"
                      target="_blank"
                      rel="noreferrer noopener"
                    />{' '}
                    and{' '}
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
              label="Register"
              type="submit"
              // hoverIndicator={true}
              primary
            />
          </Form>
        </Box>
      </Box>
    </Layout>
  );
};

export default Register;
