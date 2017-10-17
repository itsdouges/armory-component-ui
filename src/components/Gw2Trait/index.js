// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import Trait from '../Trait';
import actions from '../../actions/gw2';

export const selector = createSelector(
  (state, props) => state.traits[props.id],
  (data) => ({
    data,
  })
);

export default connect(selector, {
  fetch: actions.fetchTraits,
})(
class Gw2Trait extends Component<*> {
  props: {
    id: number,
    fetch: ([number]) => void,
  };

  componentDidMount () {
    this.props.fetch([this.props.id]);
  }

  render () {
    return <Trait {...this.props} />;
  }
}
);
