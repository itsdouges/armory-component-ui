// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import cx from 'classnames';

import { showTooltip } from '../../reducers/actions';
import ArmoryBadge from '../ArmoryBadge';
import MouseFollow from '../MouseFollow';
import AmuletTooltip from './Amulet';
import ItemTooltip from './Item';
import SkillTooltip from './Skill';
import SimpleTooltip from './Simple';
import Background from './Background';
import AchievementTooltip from './Achievement';
import GuildUpgradeTooltip from './GuildUpgrade';
import styles from './styles.less';

const selector = createSelector(
  (state) => state.tooltip,
  (tooltip) => ({
    tooltip,
  })
);

export type Props = {
  tooltip?: {
    show: boolean,
    type: string,
    data: Object,
  },
  showTooltip?: (boolean) => void,
  showBadge?: boolean,
  className?: string,
};

export const BaseTooltip = (props: Props) => {
  const { tooltip, showBadge, className } = props;

  if (!tooltip || !tooltip.show) return null;

  let content;

  if (typeof tooltip.data === 'string' || tooltip.data.error) {
    const message = typeof tooltip.data === 'string'
      ? tooltip.data
      : tooltip.data.error;

    content = <Background><SimpleTooltip data={message} /></Background>;
  } else {
    switch (tooltip.type) {
      case 'items':
        content = <ItemTooltip {...tooltip.data} />;
        break;

      case 'amulets':
        content = <AmuletTooltip {...tooltip.data} />;
        break;

      case 'trait':
      case 'skill':
        content = <SkillTooltip {...tooltip.data} />;
        break;

      case 'achievement':
        content = <AchievementTooltip {...tooltip.data} />;
        break;

      case 'guildUpgrade':
        content = <GuildUpgradeTooltip {...tooltip.data} />;
    }
  }

  return (
    <div className={cx(styles.root, className)}>
      {content}
      {showBadge && <Background className={styles.badge}><ArmoryBadge /></Background>}
    </div>
  );
};

export default connect(selector, {
  showTooltip,
})(
  class ConnectedTooltip extends Component<Props> {
    props: Props;

    close = () => {
      this.props.showTooltip && this.props.showTooltip(false);
    };

    render () {
      return (
        <MouseFollow onTouchEnd={this.close}>
          <BaseTooltip {...this.props} />
        </MouseFollow>
      );
    }
  }
);
