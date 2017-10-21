// @flow

import React from 'react';
import Icon from './';

storiesOf('Icon', module)
  .add('default', () => <Icon name="pie-blue.png" />)
  .add('nano', () => <Icon name="pie-blue.png" size="nano" />)
  .add('micro', () => <Icon name="pie-blue.png" size="micro" />)
  .add('small', () => <Icon name="pie-blue.png" size="small" />)
  .add('medium', () => <Icon name="pie-blue.png" size="medium" />)
  .add('large', () => <Icon name="pie-blue.png" size="large" />)
  .add('xlarge', () => <Icon name="pie-blue.png" size="xlarge" />)
  .add('custom', () => <Icon name="pie-blue.png" sizePx={128} />);
