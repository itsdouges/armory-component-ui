// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import TooltipTrigger from '../TooltipTrigger';
import Icon from '../Icon';
import actions from '../../actions/gw2';
import T from 'i18n-react';

const selector = createSelector(
  (state, props) => state.titles[props.id] || { name: '...' },
  (title) => ({
    title,
  })
);

export default connect(selector, {
  fetch: actions.fetchTitles,
})(
class Gw2Title extends Component<*> {
  props: {
    id: number,
    title: { name: string },
    fetch: ([number]) => void,
  };

  componentDidMount () {
    this.props.fetch([this.props.id]);
  }

  render () {
    return (
      <TooltipTrigger data={`${T.translate('words.title')}: ${this.props.title.name}`}>
        <Icon name="title-crown.png" size="xsmall" />
      </TooltipTrigger>
    );
  }
}
);
