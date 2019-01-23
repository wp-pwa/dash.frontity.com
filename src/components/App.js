import React from 'react';
import { Grommet, Box, Heading } from 'grommet';
import { grommet } from 'grommet/themes';
import wrap from 'mobx-react-wrapper/dist/mobx-react-wrapper.js';

import Sites from './Sites';
import NewSite from './NewSite';
import Site from './Site';
import LogIn from './LogIn';
import SignUp from './SignUp';

const Page404 = () => <Heading>404</Heading>;

const getPageComponent = page => {
  switch (page) {
    case 'sites':
      return Sites;
    case 'new-site':
      return NewSite;
    case 'site':
      return Site;
    case 'login':
      return LogIn;
    case 'signup':
      return SignUp;
    default:
      return Page404;
  }
};

const App = ({ page }) => {
  const Page = getPageComponent(page);
  return (
    <Grommet theme={grommet}>
      <Box fill>
        <Page />
      </Box>
    </Grommet>
  );
};

export default wrap.default(store => ({
  page: store.router.page,
}))(App);
