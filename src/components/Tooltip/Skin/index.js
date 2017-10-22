// @flow

import React from 'react';
import ItemHeader from '../ItemHeader';
import Background from '../Background';
import styles from './styles.less';

type Props = {
  name: string,
  icon: string,
  details: {
    type: string,
    weight_class: string,
  },
};

const SkinTooltip = (skin: Props) => {
  return (
    <Background>
      <ItemHeader
        name={skin.name}
        icon={skin.icon}
        rarity="white"
        borderAppearance="light"
      />

      <div className={styles.skinTypeText}>
        {skin.type === 'Weapon' && (
          <span className={styles.skinTypeText}>{skin.details.type}</span>
        )}

        {skin.type === 'Armor' && [
          <span key="weight">{skin.details.weight_class}</span>,
          <br key="br" />,
          <span key="type" className={styles.skinTypeText}>{skin.details.type}</span>,
        ]}
      </div>

    </Background>
  );
};

export default SkinTooltip;
