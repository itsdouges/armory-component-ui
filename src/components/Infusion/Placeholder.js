
// @flow

import React from 'react';
import LoadingStrip from '../LoadingStrip';
import styles from './styles.less';

const PlaceholderInfusion = () => {
  return (
    <div className={styles.root}>
      <div><LoadingStrip long /></div>
      <div><LoadingStrip long /></div>
    </div>
  );
};

export default PlaceholderInfusion;
