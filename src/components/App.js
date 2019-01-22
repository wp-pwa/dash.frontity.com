import React from 'react';
import { Grommet, Box, Paragraph, Anchor, Text, CheckBox } from 'grommet';
import { grommet } from 'grommet/themes';
import { Reactjs as Icon } from 'grommet-icons';
import wrap from 'mobx-react-wrapper/dist/mobx-react-wrapper.js';

const App = ({ isEnabled, toggleEnabled }) => (
  <Grommet theme={grommet}>
    <Box fill pad="xlarge" align="center">
      <Icon className="App-logo" alt="logo" size="xlarge" color="brand" />
      <Paragraph>
        Edit <Text as="code">src/App.js</Text> and save to reload.
      </Paragraph>
      <Box>
        <Anchor
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Anchor>
      </Box>
      <CheckBox
        toggle
        label="enabled"
        checked={isEnabled}
        onChange={toggleEnabled}
      />
    </Box>
  </Grommet>
);

export default wrap.default(store => ({
  isEnabled: store.isEnabled,
  toggleEnabled: store.toggleEnabled,
}))(App);
