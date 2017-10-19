// @flow

import React from 'react';
import Gw2Map from './';

storiesOf('Gw2Map', module)
  .add('default', () => <App><Gw2Map id={549} /></App>)
  .add('loading', () => <App><Gw2Map /></App>)
  .add('not found', () => <App><Gw2Map id={112233} /></App>)
  .add('no map image', () => <App><Gw2Map id={23} /></App>);
