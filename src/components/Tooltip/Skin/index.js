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
        {skin.type === 'Weapon' && skin.details.type}

        {skin.type === 'Armor' && [
          skin.details.weight_class,
          <br key="br" />,
          skin.details.type,
        ]}
      </div>

    </Background>
  );
};

export default SkinTooltip;
