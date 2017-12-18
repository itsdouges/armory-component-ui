// @flow

import type { Item as ItemType } from 'flowTypes';
import React from 'react';
import cx from 'classnames';

import TooltipTrigger from '../TooltipTrigger';
import Gw2Icon from '../Gw2Icon';
import Icon from '../Icon';
import ResourceLink, { buildLink as buildDefaultLink } from '../ResourceLink';

import styles from './styles.less';

const buildLink = (inlineText, { name, id }) => {
  switch (inlineText) {
    case 'gw2spidy':
      return `https://www.gw2spidy.com/item/${id || ''}`;

    default:
      return buildDefaultLink(inlineText, name);
  }
};

type Props = {
  type?: string,
  busy?: boolean,
  name?: string,
  item?: ItemType,
  skin?: {
    icon?: string,
  },
  upgrades?: [],
  infusions?: [],
  stats?: {},
  upgradeCounts?: {},
  small?: boolean,
  tooltipType: string,
  className?: string,
  tooltipTextOverride?: string,
  equipped?: boolean,
  inline?: boolean,
  count?: number,
  onClick?: (SyntheticEvent<*>) => void,
  size?: number,
  inlineText?: string,
};

const Item = ({
  type = '',
  busy,
  name,
  item,
  skin,
  upgrades,
  infusions,
  stats,
  upgradeCounts,
  small,
  tooltipType,
  className,
  inline,
  tooltipTextOverride,
  equipped,
  count,
  onClick,
  size,
  inlineText,
  ...props
}: Props) => {
  let tooltipData;

  switch (tooltipType) {
    case 'items':
    case 'amulets': {
      // $FlowFixMe
      const error = item && item.error;
      const itemLoaded = !error && item && !!Object.keys(item).length;
      if (error) {
        tooltipData = error;
      } else if (itemLoaded) {
        tooltipData = {
          name,
          item,
          skin,
          infusions,
          upgrades,
          upgradeCounts,
          stats,
          equipped,
          count,
        };
      } else {
        tooltipData = name;
      }
      break;
    }

    case 'skins':
      tooltipData = skin;
      break;

    default:
      tooltipData = name;
      break;
  }

  return (
    <TooltipTrigger
      type={tooltipType}
      data={tooltipTextOverride || tooltipData}
      {...props}
    >
      <ResourceLink text={item && item.name} href={item && buildLink(inlineText, item)}>
        <Icon
          name={type && `${type}-slot-icon.png`}
          className={cx(styles.root, className, {
            [styles.small]: small,
            [styles.emptyBg]: !type,
            [styles.inline]: inline,
          })}
          onClick={onClick}
          sizePx={size}
        >
          <Gw2Icon
            count={count}
            className={styles.item}
            src={(skin && skin.icon) || (item && item.icon) || ''}
          />
        </Icon>
      </ResourceLink>
    </TooltipTrigger>
  );
};

Item.defaultProps = {
  tooltipType: 'items',
};

export default Item;
