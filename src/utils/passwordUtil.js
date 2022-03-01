import Cookies from 'js-cookie';
import axios from 'axios';

const baseWeddingApiUrl = 'https://api.wedding.justinmendoza.net';
const passwordApi = '/api/password'
const COOKIE_NAME = 'juju-wedding-password';
const wedding = 'juju'

export const setWeddingSession = () => {
  Cookies.set(COOKIE_NAME, wedding, { expires: 1 });
};

export const getSessionPassword = () => {
  return Cookies.get(COOKIE_NAME);
};

export const getPassword = async (password) => {
  try {
    const response = await axios.post(baseWeddingApiUrl + passwordApi, { wedding, password });
    return response.data.success;
  } catch (e) {
    return e;
  }
};
