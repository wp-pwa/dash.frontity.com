import { types, flow, getParent } from 'mobx-state-tree';
import client, { setToken, removeToken } from '../graphql/client';

export default types
  .model({
    isWaiting: false,
    isLoggedIn: false,
    hasFailed: false,
  })
  .actions(self => ({
    logIn: flow(function* logIn({ value: emailAndPass }) {
      self.isWaiting = true;
      self.hasFailed = false;
      self.isLoggedIn = false;
      try {
        const { authenticateUser } = yield client.request(
          `
          mutation Signin($email: String!, $password: String!) {
            authenticateUser(email: $email, password: $password) {
              token
            }
          }
          `,
          emailAndPass,
        );

        setToken(authenticateUser.token);
        self.isLoggedIn = true;

        // Request user data
        const { user } = yield client.request(
          `
          query getUser {
            user {
              name
              email
            }
          }
          `,
        );

        console.log(user);

        getParent(self).setUser(user);

        // Redirects to main page
        getParent(self).router.openSitesPage();
      } catch (error) {
        console.log(error);
        self.isLoggedIn = false;
        self.hasFailed = true;
      }

      self.isWaiting = false;
    }),
    logOut: () => {
      removeToken();
      self.isLoggedIn = false;
      // Redirects to login page
      getParent(self).router.openLogInPage();
    },
  }));
