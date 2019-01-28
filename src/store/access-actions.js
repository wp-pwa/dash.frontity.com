import { flow } from 'mobx-state-tree';
import client, { setToken, removeToken } from '../graphql/client';

export default self => ({
  logIn: flow(function* logIn({ value: emailAndPass }) {
    self.isWaiting = true;
    self.hasFailed = false;
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
      yield self.updateUser(); // Logged in User
    } catch (error) {
      console.error(error);
      self.hasFailed = true;
    }
    self.isWaiting = false;
  }),
  logOut: flow(function* logOut() {
    removeToken();
    yield self.updateUser(); // 'null'
  }),
});
