// @flow

import React from 'react';
import cx from 'classnames';

import colours from '../../../styles/colours.less';
import Icon from '../../Icon';
import styles from './styles.less';

type Props = {
  icon: string,
  name: string,
  rarity: string,
  borderAppearance: 'light' | 'dark',
};

const ItemHeader = ({ icon, name, rarity, borderAppearance }: Props) => (
  <div className={cx(styles.itemHeader, styles[borderAppearance])}>
    <Icon size="mini" src={icon} className={styles.tooltipIcon} />
    <span className={cx(styles.itemName, rarity && colours[rarity.toLowerCase()])}>
      {name}
    </span>
  </div>
);

ItemHeader.defaultProps = {
  borderAppearance: 'dark',
};

export default ItemHeader;
