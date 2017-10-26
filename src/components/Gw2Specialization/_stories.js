// @flow

import React from 'react';
import Gw2Specialization from './';

storiesOf('Gw2Specialization', module)
  .add('default', () => <App><Gw2Specialization id={57} /></App>)
  .add('active traits', () => <App><Gw2Specialization id={56} activeTraits={[2177, 2061, 2138]} /></App>)
  .add('not found', () =>
    <App>
      <Gw2Specialization id={112233} />
    </App>
  )
  .add('loading', () => <App><Gw2Specialization /></App>);
