// @flow

import React from 'react';
import CharacterPortrait from './';

// eslint-disable-next-line
const Container = ({ children }) => <div style={{ width: 400 }}>{children}</div>

storiesOf('CharacterPortrait', module)
  .add('default', () =>
    <Container>
      <CharacterPortrait name="Quartermile" alias="madou" race="Norn" />
    </Container>
  )
  .add('compact', () =>
    <Container>
      <CharacterPortrait name="Quartermile" alias="madou" race="Norn" appearance="compact" />
    </Container>
  );
