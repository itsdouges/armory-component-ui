// @flow

import React from 'react';
import Gw2GuildUpgrade from './';

storiesOf('Gw2GuildUpgrade', module)
  .add('default', () => <App><Gw2GuildUpgrade id={38} /></App>)
  .add('loading', () => <App><Gw2GuildUpgrade /></App>);
