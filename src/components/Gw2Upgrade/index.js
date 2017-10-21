// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import actions from '../../actions/gw2';
import Upgrade from '../Upgrade';
import PlaceholderInfusion from '../Infusion/Placeholder';

export const selector = createSelector(
  (state, props) => state.items[props.id],
  (data) => ({
    data,
  })
);

export default connect(selector, {
  fetch: actions.fetchItems,
})(
class Gw2Upgrade extends Component<*> {
  props: {
    id: number,
    fetch: ([number]) => void,
    data?: Object,
  };

  componentDidMount () {
    this.props.fetch([this.props.id]);
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.id === this.props.id) {
      return;
    }

    this.props.fetch([nextProps.id]);
  }

  render () {
    if ((!this.props.data || this.props.data.error) && this.props.id) {
      return <PlaceholderInfusion />;
    }

    return <Upgrade {...this.props} />;
  }
}
);
