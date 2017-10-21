// @flow

import type { Item as ItemType } from 'flowTypes';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import get from 'lodash/get';

import Item from '../Item';
import actions from '../../actions/gw2';

const selector = createSelector(
  (state, props) => {
    const item = state.items[props.id];
    const stat = get(state.calculatedItemStats, `${props.id}${props.statsId}`);

    if (item && item.details && !stat && props.statsId) {
      // We have an item.
      // We know we will have a stat, but just not yet.
      return {
        ...item,
        name: `... ${item.name}`,
      };
    }

    if (item && stat && item.details && stat.error) {
      return {
        ...item,
        name: `[404] ${item.name}`,
      };
    }

    if (item && stat && item.details) {
      return {
        ...item,
        name: `${stat.name} ${item.name}`,
        details: {
          ...item.details,
          infix_upgrade: stat,
        },
      };
    }

    return item;
  },
  (state, props) => state.skins[props.skinId],
  (item, skin) => ({
    item,
    skin,
  })
);

export default connect(selector, {
  fetch: actions.fetchItems,
  fetchSkins: actions.fetchSkins,
  fetchCalculatedItemStats: actions.fetchCalculatedItemStats,
})(
class Gw2Item extends Component<*> {
  props: {
    id: number,
    statsId?: number,
    skinId?: number,
    item?: ItemType,
    fetch: ([number]) => Promise<*>,
    fetchSkins: ([number]) => Promise<*>,
    fetchCalculatedItemStats: (Array<Object>) => Promise<*>,
  };

  componentDidMount () {
    this.load(this.props);
  }

  componentWillReceiveProps (nextProps) {
    const { id, skinId } = this.props;
    const { id: nextId, skinId: nextSkinId } = nextProps;

    if (id !== nextId || skinId !== nextSkinId) {
      this.load({ id: nextId, skinId: nextSkinId });
    }
  }

  load ({ id, skinId }) {
    skinId && this.props.fetchSkins([skinId]);

    this.props.fetch([id])
      .then(() => {
        const { item, statsId, fetchCalculatedItemStats } = this.props;
        if (!item || !statsId) {
          return;
        }

        const statsDef = {
          // TODO: This is pretty terrible. We need the system to properly support
          // calculated ids instead of relying on this. Why? Because it means
          // every consumer needs to do this. Leaky abstraction! Not good!
          calculatedId: `${id}${statsId}`,
          id: statsId,
          itemId: id,
          type: (item.details && item.details.type) || item.type,
          rarity: item.rarity,
          level: item.level,
        };

        fetchCalculatedItemStats([statsDef]);
      });
  }

  render () {
    const {
      id,
      skinId,
      statsId,
      fetchSkins,
      fetchCalculatedItemStats,
      fetch,
      // Removed props that shouldn't be passed down.
      ...props
    } = this.props;

    return <Item {...props} />;
  }
}
);
