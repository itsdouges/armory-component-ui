// @flow

import React from 'react';
import get from 'lodash/get';
import map from 'lodash/map';

import { markup } from '../../../lib/gw2/parse';
import colours from '../../../styles/colours.less';
import SimpleTooltip from '../Simple';
import Background from '../Background';
import ItemHeader from '../ItemHeader';

type AmuletProps = {
  item: Object,
  name: string,
};

const AmuletTooltip = ({ item, name }: AmuletProps) => {
  if (!item.name) {
    return <Background><SimpleTooltip data={name || 'Amulet'} /></Background>;
  }

  return (
    <Background>
      <ItemHeader name={item.name} icon={item.icon} rarity={item.rarity} />

      <div>
        {get(item.details, 'infix_upgrade.buff.description', []).map((description) => (
          <div key={description}>
            {markup(description)}
          </div>
        ))}
      </div>

      <div className={colours.green}>
        {map(item.attributes, (value, attrName) => (
          <div key={`${value}${attrName}`}>{`+${value} ${attrName}`}</div>
        ))}
      </div>
    </Background>
  );
};

export default AmuletTooltip;
