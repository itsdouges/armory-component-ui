// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import Specialization from '../Specialization';
import actions from '../../reducers/actions';

const selector = createSelector(
  (state, props) => state.specializations[props.id],
  (state) => state.traits,
  (specialization, traits) => ({
    specialization,
    traits,
  })
);

export default connect(selector, {
  fetch: actions.fetchSpecializations,
  fetchTraits: actions.fetchTraits,
})(
class Gw2Title extends Component<*> {
  props: {
    id: number,
    traits: Array<number>,
    activeTraits?: Array<number>,
    fetch: ([number]) => void,
  };

  componentWillMount () {
    this.props.fetch([this.props.id]);
  }

  render () {
    return (
      <Specialization {...this.props} />
    );
  }
}
);
