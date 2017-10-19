// @flow

import React from 'react';
import Gw2Skin from './';

storiesOf('Gw2Skin', module)
  .add('default', () => <App><Gw2Skin id={191} /></App>)
  .add('inline text', () => <App><Gw2Skin inlineText="gw2spidy" id={191} /></App>)
  .add('not found', () => <App><Gw2Skin id={112233} /></App>)
  .add('loading', () => <App><Gw2Skin /></App>);
