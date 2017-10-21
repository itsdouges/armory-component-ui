// @flow

import React from 'react';
import ResourceCard from './';

storiesOf('ResourceCard', module)
  .add('big loading', () => <ResourceCard />)
  .add('big loaded', () =>
    <ResourceCard title="Quartermile" subTitle="Ranger" imageName="elementalist-icon.png" />
  )
  .add('small loading', () => <ResourceCard appearance="small" />)
  .add('small loaded', () =>
    <ResourceCard
      title="Quartermile"
      subTitle="Ranger"
      appearance="small"
      imageName="elementalist-icon-small.png"
    />
  );
