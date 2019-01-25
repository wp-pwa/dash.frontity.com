import React from 'react';
import { Heading } from 'grommet';
import wrap from 'mobx-react-wrapper/dist/mobx-react-wrapper.js';

import Sites from '../Sites';
import NewSite from '../NewSite';
import Site from '../Site';

const Page404 = () => <Heading>404 - Not found</Heading>;

const getPageComponent = page => {
  switch (page) {
    case 'sites':
      return Sites;
    case 'new-site':
      return NewSite;
    case 'site':
      return Site;
    default:
      return Page404;
  }
};

const Page = ({ page }) => {
  const CurrentPage = getPageComponent(page);
  return <CurrentPage />;
};

export default wrap.default(store => ({
  page: store.router.page,
}))(Page);
