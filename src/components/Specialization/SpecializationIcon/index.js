// @flow

import React from 'react';
import cx from 'classnames';
import styles from './styles.less';
import TooltipTrigger from '../../TooltipTrigger';

type Props = {
  data: {
    error?: string,
    name?: string,
    background?: string,
  },
  className?: string,
};

const SpecializationIcon = ({ data, className }: Props) => (
  <TooltipTrigger data={data.error || data.name}>
    <div
      className={cx(styles.bigIcon, className)}
      style={{ backgroundImage: `url(${data.background || ''})` }}
    >
      <div className={styles.bigIconTop} />
      <div className={styles.bigIconBottom} />
    </div>
  </TooltipTrigger>
);

export default SpecializationIcon;
