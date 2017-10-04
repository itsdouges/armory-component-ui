// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import TooltipTrigger from '../TooltipTrigger';
import Icon from '../Icon';
import actions from '../../reducers/actions';

const selector = createSelector(
  (state, props) => state.guildUpgrades[props.id] || { icon: '', name: '...' },
  (upgrade) => ({
    upgrade,
  })
);

export default connect(selector, {
  fetch: actions.fetchGuildUpgrades,
})(
class Gw2GuildUpgrade extends Component<*> {
  props: {
    id: number,
    upgrade: { icon: string, name: string },
    fetch: ([number]) => void,
  };

  componentWillMount () {
    this.props.fetch([this.props.id]);
  }

  render () {
    const { upgrade } = this.props;

    return (
      <TooltipTrigger data={upgrade} type="guildUpgrade">
        <Icon src={upgrade.icon} size="small" />
      </TooltipTrigger>
    );
  }
}
);
