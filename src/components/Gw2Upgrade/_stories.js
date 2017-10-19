// @flow

import React from 'react';
import Gw2Upgrade from './';

storiesOf('Gw2Upgrade', module)
  .add('sigil', () => <App><Gw2Upgrade id={24615} /></App>)
  .add('rune', () => <App><Gw2Upgrade id={24815} /></App>)
  .add('rune with count', () => <App><Gw2Upgrade id={24815} count={3} /></App>)
  .add('loading', () => <App><Gw2Upgrade id={3333333} /></App>)
  .add('empty', () => <App><Gw2Upgrade /></App>);
