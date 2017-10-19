// @flow

import React from 'react';
import Gw2Trait from './';

storiesOf('Gw2Trait', module)
  .add('default', () => <App><Gw2Trait id={2177} /></App>)
  .add('active', () => <App><Gw2Trait id={2177} active /></App>)
  .add('inline text', () => <App><Gw2Trait inlineText="wiki" id={2177} /></App>)
  .add('not found', () => <App><Gw2Trait id={112233} /></App>)
  .add('loading', () => <App><Gw2Trait /></App>);
