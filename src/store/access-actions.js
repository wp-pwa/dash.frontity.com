import { flow } from 'mobx-state-tree';
import client, { setToken, removeToken } from '../graphql/client';

export const volatile = () => ({
  isSignUpModalOpen: false,
});

export const actions = self => ({
  logIn: flow(function* logIn({ value: emailAndPass }) {
    try {
      const { authenticateUser } = yield client.request(
        `
          mutation logIn($email: String!, $password: String!) {
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
    }
  }),
  logOut: flow(function* logOut() {
    removeToken();
    yield self.updateUser(); // 'null'
  }),
  signUp: flow(function* signUp({ value: nameEmailAndPass }) {
    try {
      const { signupUser } = yield client.request(
        `
          mutation signUp($name: String!, $email: String!, $password: String!) {
            signupUser(name: $name, email: $email, password: $password) {
              token
            }
          }
        `,
        nameEmailAndPass,
      );
      setToken(signupUser.token);
      yield self.updateUser(); // Signed up User
      self.closeSignUpModal();
    } catch (error) {
      console.error(error);
    }
  }),
  openSignUpModal: () => (self.isSignUpModalOpen = true),
  closeSignUpModal: () => (self.isSignUpModalOpen = false),
});
