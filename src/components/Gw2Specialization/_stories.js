// @flow

import React from 'react';
import Gw2Specialization from './';
import { action } from '@storybook/addon-actions';

const traitClick = action('trait clicked');

storiesOf('Gw2Specialization', module)
  .add('default', () => <App><Gw2Specialization id={57} /></App>)
  .add('active traits', () => <App><Gw2Specialization id={56} activeTraits={[2177, 2061, 2138]} /></App>)
  .add('not found', () =>
    <App>
      <Gw2Specialization id={112233} />
      <Gw2Specialization id={57} />
    </App>
  )
  .add('loading', () => <App><Gw2Specialization /></App>)
  .add('interactive', () =>
    <App>
      <Gw2Specialization id={112233} onTraitClick={traitClick} majorTraitClass={'cursor-pointer'} minorTraitClass={'cursor-help'} />
      <Gw2Specialization id={5} onTraitClick={traitClick} majorTraitClass={'cursor-pointer'} minorTraitClass={'cursor-help'} />
    </App>
  );
