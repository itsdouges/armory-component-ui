// @flow

import React from 'react';
import ArmoryBadge from './';

storiesOf('ArmoryBadge', module)
  .add('default', () => <ArmoryBadge />)
  .add('hotlink', () => <ArmoryBadge hotlink />);
