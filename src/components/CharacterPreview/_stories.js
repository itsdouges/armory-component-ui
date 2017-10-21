// @flow

import React from 'react';
import App from '../../../stories/App';
import CharacterPreview from './';

storiesOf('CharacterPreview', module)
  .add('default', () => <App><CharacterPreview name="Quartermile" /></App>)
  .add('elite spec', () => <App><CharacterPreview name="Blastrn" /></App>);
