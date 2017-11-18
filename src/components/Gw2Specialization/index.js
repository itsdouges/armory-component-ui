// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import type { Traits, Specialization as SpecializationType, TraitClickCallback } from 'flowTypes';

import Specialization from '../Specialization';
import actions from '../../actions/gw2';

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
class Gw2Specialization extends Component<*> {
  props: {
    id: number,
    traits: Traits,
    activeTraits?: Array<number>,
    fetch: ([number]) => void,
    specialization: SpecializationType,
    onTraitClick?: TraitClickCallback,
    minorTraitClass?: string,
    majorTraitClass?: string,
  };

  componentDidMount () {
    this.props.fetch([this.props.id]);
  }

  render () {
    return (
      <Specialization {...this.props} />
    );
  }
}
);
