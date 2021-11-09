import Cookies from 'js-cookie';
import queryString from 'query-string';

// const module = typeof window !== `undefined` ? require("module") : null;

const COOKIE_NAME = 'juju-wedding-password';
const CURRENT_PASSWORD = 'hawaii2022';

export const setSessionPassword = passwordCandidate => {
  // console.log(passwordCandidate);
  Cookies.set(COOKIE_NAME, passwordCandidate, { expires: 1 });
};

export const getSessionPassword = () => {
  return Cookies.get(COOKIE_NAME);
};

export const getPassword = () => {
  return CURRENT_PASSWORD;
};

// export const decodedPassword = () => {
//   return window.btoa(CURRENT_PASSWORD);
// }

export const getQueryPassword = location => {
  const { secret } = queryString.parse(location.search);
  return secret;
};
