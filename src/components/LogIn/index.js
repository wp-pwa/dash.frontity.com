import React from 'react';
import {
  Box,
  Heading,
  Text,
  Anchor,
  Form,
  FormField,
  TextInput,
  Button,
} from 'grommet';
import { InProgress } from 'grommet-icons';
import wrap from 'mobx-react-wrapper/dist/mobx-react-wrapper.js';

const LogIn = ({ openSignUpPage, logIn, isWaiting = true }) => (
  <Box fill pad="xlarge" gap="xlarge" align="center">
    <Box width="medium" elevation="large" pad="large" gap="large">
      <Box gap="small">
        <Heading margin="0">» Frontity</Heading>
        <Heading margin="0" level={3}>
          dashboard
        </Heading>
      </Box>
      <Form onSubmit={logIn}>
        <Box gap="medium">
          <Box gap="small">
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
            <Button type="submit" label="Log In" primary />
            {isWaiting && <InProgress animation="fadeIn" />}
          </Box>
        </Box>
      </Form>
    </Box>
    <Text>
      Not a user yet? <Anchor onClick={openSignUpPage}>Sign up!</Anchor>
    </Text>
  </Box>
);

export default wrap.default(store => ({
  logIn: store.access.logIn,
  isWaiting: store.access.isWaiting,
  openSignUpPage: store.router.openSignUpPage,
}))(LogIn);
