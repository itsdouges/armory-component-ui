// @flow

import React from 'react';
import Gw2Skill from './';

storiesOf('Gw2Skill', module)
  .add('default', () => <App><Gw2Skill id={1141} /></App>)
  .add('inline text', () => <App><Gw2Skill inlineText="wiki" id={1141} /></App>)
  .add('not found', () => <App><Gw2Skill id={112233} /></App>)
  .add('loading', () => <App><Gw2Skill /></App>);
