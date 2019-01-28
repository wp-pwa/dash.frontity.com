import { GraphQLClient } from 'graphql-request';
import { CookieStorage } from 'cookie-storage';

const storage = new CookieStorage();
// const storage = window.sessionStorage;

const getAuthorization = () => {
  const token = storage.getItem('token');
  return token ? { authorization: `Bearer ${token} ` } : {};
};

const client = new GraphQLClient(
  'https://api.graph.cool/simple/v1/frontity-v1',
  {
    headers: getAuthorization(),
    credentials: 'same-origin',
  },
);

export const setToken = token => {
  const thirtyDays = 30 * 24 * 60 * 60;
  const expires = new Date(Date.now() + thirtyDays);

  storage.setItem('token', token, { expires });
  client.options.headers = getAuthorization();
};

export const removeToken = () => {
  storage.removeItem('token');
  client.options.headers = getAuthorization();
};

export default client;
