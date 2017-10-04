// @flow

import React from 'react';
import { set } from '../../lib/i18n';

export default class Language extends React.Component {
  props: {
    lang: 'en' | 'de' | 'fr' | 'zh' | 'ru' | 'es',
  };

  componentDidMount () {
    set(this.props.lang);
  }

  render () {
    return null;
  }
}
