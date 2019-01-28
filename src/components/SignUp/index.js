import React from 'react';
import {
  Layer,
  Box,
  Heading,
  Text,
  Anchor,
  Form,
  FormField,
  TextInput,
  Button,
} from 'grommet';
import wrap from 'mobx-react-wrapper/dist/mobx-react-wrapper.js';

const SignUp = ({ signUp, isSignUpModalOpen, isWaiting, closeSignUpModal }) =>
  isSignUpModalOpen && !isWaiting ? (
    <Layer modal position="center">
      <Box width="medium" elevation="large" pad="large" gap="large">
        <Box gap="small">
          <Heading margin="0">» Frontity</Heading>
          <Heading margin="0" level={3}>
            dashboard
          </Heading>
        </Box>
        <Form onSubmit={signUp}>
          <Box gap="medium">
            <Box gap="small">
              <FormField
                label="Name"
                name="name"
                type="text"
                component={TextInput}
                required
              />
              <FormField
                label="Email"
                name="email"
                type="email"
                component={TextInput}
                required
              />
              <FormField
                label="Password"
                name="password"
                type="password"
                component={TextInput}
                required
              />
            </Box>
            <Box direction="row" justify="between" align="center">
              <Button type="submit" label="Sign up" primary />
            </Box>
          </Box>
        </Form>
        <Text>
          Already have an account?{' '}
          <Anchor onClick={closeSignUpModal}>Log in</Anchor>.
        </Text>
      </Box>
    </Layer>
  ) : null;

export default wrap.default(store => ({
  signUp: store.signUp,
  isSignUpModalOpen: store.isSignUpModalOpen,
  isWaiting: store.isWaitingForUser,
  closeSignUpModal: store.closeSignUpModal,
}))(SignUp);
