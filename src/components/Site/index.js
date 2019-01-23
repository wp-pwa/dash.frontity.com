import React from 'react';
import { Box, Heading, Text, Anchor } from 'grommet';
import wrap from 'mobx-react-wrapper/dist/mobx-react-wrapper.js';

const Sites = ({ openSitesPage, selectedSiteId }) => (
  <Box fill pad="xlarge" gap="xlarge">
    <Heading>Site</Heading>
    <Text>id: {selectedSiteId} </Text>
    <Text>
      <Anchor onClick={openSitesPage}>back to sites</Anchor>
    </Text>
  </Box>
);

export default wrap.default(store => ({
  openSitesPage: store.router.openSitesPage,
  selectedSiteId: store.router.selectedSiteId,
}))(Sites);
