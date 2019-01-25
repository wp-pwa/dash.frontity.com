import React from 'react';
import { Box, Heading, Button } from 'grommet';
import wrap from 'mobx-react-wrapper/dist/mobx-react-wrapper.js';

const Sites = ({ openSitePageById }) => (
  <Box fill pad="xlarge" gap="xlarge">
    <Heading>New Site</Heading>
    <Button
      primary
      label="create"
      onClick={() => openSitePageById('new-site-com')}
    />
  </Box>
);

export default wrap.default(store => ({
  openSitePageById: store.router.openSitePageById,
}))(Sites);
