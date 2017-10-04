// @flow

import React from 'react';
import cx from 'classnames';
import styles from './styles.less';
import TooltipTrigger from '../../TooltipTrigger';

type Props = {
  error: string,
  name: string,
  background: string,
  className?: string,
};

const SpecializationIcon = ({ error, name, background, className }: Props) => (
  <TooltipTrigger data={error || name}>
    <div
      className={cx(styles.bigIcon, className)}
      style={{ backgroundImage: `url(${background || ''})` }}
    >
      <div className={styles.bigIconTop} />
      <div className={styles.bigIconBottom} />
    </div>
  </TooltipTrigger>
);

SpecializationIcon.defaultProps = {
  error: '',
  name: '',
  background: '',
};

export default SpecializationIcon;
