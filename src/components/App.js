import React from 'react';
import { Grommet, Box, Paragraph, Anchor } from 'grommet';
import { grommet } from 'grommet/themes';
import { Reactjs as Icon } from 'grommet-icons';

const App = () => (
  <Grommet theme={grommet}>
    <Box fill pad="xlarge" align="center">
      <Icon className="App-logo" alt="logo" size="xlarge" color="brand" />
      <Paragraph>
        Edit <code>src/App.js</code> and save to reload.
      </Paragraph>
      <Anchor
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </Anchor>
    </Box>
  </Grommet>
);

export default App;
