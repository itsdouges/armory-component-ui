// @flow

import React from 'react';
import PieChart from './';

const dataValues = [{
  color: 'lightgreen',
  name: 'Sylvari',
  value: 5455,
}, {
  color: 'yellow',
  name: 'Human',
  value: 1000,
}];

storiesOf('PieChart', module)
  .add('default', () => <PieChart dataValues={dataValues} />)
  .add('custom size', () => <PieChart dataValues={dataValues} size={128} />);
