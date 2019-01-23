import React from 'react';
import { Box, Heading, Text, Anchor } from 'grommet';
import wrap from 'mobx-react-wrapper/dist/mobx-react-wrapper.js';

const SignUp = ({ openSitesPage }) => (
  <Box fill pad="xlarge" gap="xlarge">
    <Heading>Sign Up</Heading>
    <Text>
      <Anchor onClick={openSitesPage}>Return to sites page</Anchor>
    </Text>
  </Box>
);

export default wrap.default(store => ({
  openSitesPage: store.router.openSitesPage,
}))(SignUp);
