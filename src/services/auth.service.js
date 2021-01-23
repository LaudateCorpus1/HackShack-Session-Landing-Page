import axios from 'axios';

const {
  REACT_APP_WORKSHOPCHALLENGE_API_ENDPOINT,
  REACT_APP_USERNAME,
  REACT_APP_PASSWORD,
} = process.env;

const API_URL = `${REACT_APP_WORKSHOPCHALLENGE_API_ENDPOINT}/api/login`;
const data = {
  username: REACT_APP_USERNAME,
  password: REACT_APP_PASSWORD,
};
const options = {
  headers: {
    'Content-Type': 'application/json',
  },
};

class AuthService {
  login() {
    return axios({
      method: 'POST',
      url: API_URL,
      data,
      headers: options,
    }).then(response => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }

      return response.data;
    });
  }

  logout() {
    localStorage.removeItem('user');
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();
