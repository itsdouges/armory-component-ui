// @flow

import React from 'react';
import Gw2Title from './';

storiesOf('Gw2Title', module)
  .add('default', () => <App><Gw2Title id={270} /></App>)
  .add('not found', () => <App><Gw2Title id={112233} /></App>)
  .add('loading', () => <App><Gw2Title /></App>);
