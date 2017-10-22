// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import actions from '../../actions/gw2';
import Item from '../Item';

export const selector = createSelector(
  (state, props) => state.skins[props.id],
  (skin) => ({
    skin,
  })
);

export default connect(selector, {
  fetch: actions.fetchSkins,
})(
class Gw2Skin extends Component<*> {
  props: {
    id: number,
    skin: Object,
    fetch: ([number]) => void,
  };

  componentDidMount () {
    this.props.fetch([this.props.id]);
  }

  render () {
    return <Item {...this.props} tooltipType="skins" />;
  }
}
);
