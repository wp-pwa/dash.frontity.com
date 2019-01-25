import React from 'react';
import { Box, Heading, Text, Anchor } from 'grommet';
import wrap from 'mobx-react-wrapper/dist/mobx-react-wrapper.js';

const LogIn = ({ openSignUpPage }) => (
  <Box fill pad="xlarge" gap="xlarge">
    <Heading>log in</Heading>
    <Text>
      Not a user yet? <Anchor onClick={openSignUpPage}>Sign up!</Anchor>
    </Text>
  </Box>
);

export default wrap.default(store => ({
  openSignUpPage: store.router.openSignUpPage,
}))(LogIn);
