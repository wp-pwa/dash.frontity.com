import React from 'react';
import { Box, Heading, Text, Anchor, Button } from 'grommet';
import wrap from 'mobx-react-wrapper/dist/mobx-react-wrapper.js';

const Sites = ({ openSitePageById, openNewSitePage, openLogInPage }) => (
  <Box fill pad="xlarge" gap="xlarge">
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
    <Button label="logout" onClick={openLogInPage} />
  </Box>
);

export default wrap.default(store => ({
  openSitePageById: store.router.openSitePageById,
  openNewSitePage: store.router.openNewSitePage,
  openLogInPage: store.router.openLogInPage,
}))(Sites);
