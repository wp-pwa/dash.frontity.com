import React from 'react';
import { Box, Heading, Text, Anchor, Button } from 'grommet';
import wrap from 'mobx-react-wrapper/dist/mobx-react-wrapper.js';

const Sites = ({ user, openSitePage, openNewSitePage }) => (
  <Box fill pad="xlarge">
    <Box width="large" gap="medium" align="start">
      <Heading margin="0">Sites</Heading>
      {user &&
        user.sites.map(site => (
          <Box key={site.id}>
            <Text>
              <Anchor onClick={() => openSitePage(site)}>{site.url}</Anchor>
            </Text>
          </Box>
        ))}
      <Button primary label="new site" onClick={openNewSitePage} />
    </Box>
  </Box>
);

export default wrap.default(store => ({
  user: store.user,
  openSitePage: store.router.openSitePage,
  openNewSitePage: store.router.openNewSitePage,
}))(Sites);
