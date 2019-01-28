import React from 'react';
import { Box, Text, Button } from 'grommet';
import wrap from 'mobx-react-wrapper/dist/mobx-react-wrapper.js';

const TopBar = ({ user, logOut }) => (
  <Box
    fill="horizontal"
    height="60px"
    background="brand"
    direction="row"
    justify="between"
    align="center"
    pad="small"
  >
    <Text>{user ? `${user.name} - ${user.email}` : ''}</Text>
    <Button label="logout" onClick={logOut} />
  </Box>
);

export default wrap.default(store => ({
  user: store.user,
  logOut: store.logOut,
}))(TopBar);
