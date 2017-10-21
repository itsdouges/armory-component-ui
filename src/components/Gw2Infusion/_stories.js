// @flow

import React from 'react';
import Gw2Infusion from './';

storiesOf('Gw2Infusion', module)
  .add('default', () => <App><Gw2Infusion id={49426} /></App>)
  .add('loading', () => <App><Gw2Infusion id={3333333} /></App>)
  .add('empty', () => <App><Gw2Infusion /></App>);
