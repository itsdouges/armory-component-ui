// @flow

import React from 'react';
import Gold from './';

storiesOf('Gold', module)
  .add('lots of coins', () => <Gold coins={1123123} />)
  .add('some coins', () => <Gold coins={3123} />)
  .add('little coins', () => <Gold coins={23} />)
  .add('no coins', () => <Gold coins={0} />);
