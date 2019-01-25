import React from 'react';
import { Layer } from 'grommet';
import wrap from 'mobx-react-wrapper/dist/mobx-react-wrapper.js';

import Spinner from './Spinner';

const InProgress = ({ isWaiting }) =>
  isWaiting ? (
    <Layer modal position="center">
      <Spinner />
    </Layer>
  ) : null;

export default wrap.default(store => ({
  isWaiting: store.isWaitingForUser,
}))(InProgress);
