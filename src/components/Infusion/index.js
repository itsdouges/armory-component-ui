// @flow

import React from 'react';
import get from 'lodash/get';
import colours from '../../../styles/colours.less';
import Icon from '../../Icon';

type Props = {
  data: {
    name: string,
    icon: string,
    details: {
      infix_upgrade: {
        buff: {
          description: Array<string>,
        },
      },
    },
  },
};

const ItemInfusion = ({ data, data: {
  name,
  icon,
  details },
}: Props) => {
  if (!data || !details) {
    return (
      <div>
        <span>Unused Infusion Slot</span>
      </div>
    );
  }

  return (
    <div className={colours.blue}>
      <div>
        <Icon src={icon} size="micro" />
        <span> {name}</span>
      </div>

      <div>{get(details, 'infix_upgrade.buff.description', []).map((descrip) => <div key={descrip}>{descrip}</div>)}</div>
    </div>
  );
};

export default ItemInfusion;
