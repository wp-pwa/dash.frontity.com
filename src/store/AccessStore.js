import { types, flow } from 'mobx-state-tree';
import client from '../graphql/client';

const User = types.model('User', {
  name: types.string,
  email: types.string,
});

export default types
  .model({
    user: types.maybe(User),
    isWaiting: false,
    isLoggedIn: false,
  })
  .actions(self => ({
    logIn: flow(function* logIn({ value: emailAndPass }) {
      self.isWaiting = true;
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

        const { token } = authenticateUser;

        self.isWaiting = true;
        self.isLoggedIn = true;
      } catch (error) {
        self.isWaiting = false;
        self.isLoggedIn = false;
      }
    }),
  }));
