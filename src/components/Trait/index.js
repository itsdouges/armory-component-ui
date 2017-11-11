// @flow

import React from 'react';
import cx from 'classnames';

import ResourceLink, { buildLink } from '../ResourceLink';
import TooltipTrigger from '../TooltipTrigger';
import Icon from '../Icon';
import colours from '../../styles/colours';

import styles from './styles.less';

type Props = {
  data?: {
    icon?: string,
    name: string,
  },
  className?: string,
  active?: boolean,
  tooltipTextOverride?: string,
  size?: number,
  inlineText?: string,
  onClick?: (SyntheticEvent<*>) => void,
};

const Trait = ({ data, className, active, tooltipTextOverride, size, inlineText, onClick }: Props) => (
  <TooltipTrigger type="trait" data={tooltipTextOverride || data}>
    <ResourceLink text={data && data.name} href={buildLink(inlineText, data && data.name)}>
      <Icon
        className={cx(styles.root, className, { [styles.active]: active })}
        src={data && data.icon}
        style={{ backgroundColor: data && data.icon && colours._black }}
        sizePx={size}
        onClick={onClick}
      />
    </ResourceLink>
  </TooltipTrigger>
);

export default Trait;
