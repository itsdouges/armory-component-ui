// @flow

import React from 'react';
import get from 'lodash/get';
import colours from '../../styles/colours.less';
import Icon from '../Icon';

type Props = {
  data?: {
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

const Infusion = ({ data }: Props) => {
  if (!data) {
    return (
      <div>
        <span>Unused Infusion Slot</span>
      </div>
    );
  }

  return (
    <div className={colours.blue}>
      <div>
        <Icon src={data.icon} size="micro" />
        <span> {data.name}</span>
      </div>

      <div>
        {get(data.details, 'infix_upgrade.buff.description', [])
          .map((text) => <div key={text}>{text}</div>)}
      </div>
    </div>
  );
};

export default Infusion;
