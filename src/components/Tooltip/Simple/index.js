// @flow

import React from 'react';
import styles from './styles.less';

const SimpleTooltip = ({ data }: { data: string }) => (
  <div className={styles.simple}>{data}</div>
);

SimpleTooltip.defaultProps = {
  data: '',
};

export default SimpleTooltip;
