import React from 'react';
import { Box, Heading, Text, Anchor, Button } from 'grommet';
import wrap from 'mobx-react-wrapper/dist/mobx-react-wrapper.js';

const Sites = ({ user, openSitePageById, openNewSitePage, logOut }) => (
  <Box fill pad="xlarge">
    <Box width="large" gap="medium" align="start">
      <Heading>Sites</Heading>
      <Text>
        <Anchor onClick={() => openSitePageById('test-frontity-io')}>
          test-frontity-io
        </Anchor>
      </Text>
      <Text>
        <Anchor onClick={() => openSitePageById('blog-frontity-com')}>
          blog-frontity-com
        </Anchor>
      </Text>
      <Button primary label="new site" onClick={openNewSitePage} />
    </Box>
  </Box>
);

export default wrap.default(store => ({
  openSitePageById: store.router.openSitePageById,
  openNewSitePage: store.router.openNewSitePage,
  logOut: store.logOut,
  user: store.user,
}))(Sites);
