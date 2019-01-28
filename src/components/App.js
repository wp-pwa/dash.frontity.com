import React from 'react';
import { Grommet, Box } from 'grommet';
import { grommet } from 'grommet/themes';
import TopBar from './TopBar';
import Page from './Page';
import LogIn from './LogIn';
import InProgress from './InProgress';
import SignUp from './SignUp';

const App = () => (
  <Grommet theme={grommet}>
    <Box fill>
      <TopBar />
      <Page />
      <LogIn />
      <SignUp />
      <InProgress />
    </Box>
  </Grommet>
);

export default App;
