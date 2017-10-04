// @flow

import type { Node } from 'react';
import React from 'react';
import { set } from '../../lib/i18n';

export default class LanguageProvider extends React.Component<*> {
  props: {
    lang: 'en' | 'de' | 'fr' | 'zh' | 'ru' | 'es',
    children: Node,
  };

  componentDidMount () {
    set(this.props.lang);
  }

  render () {
    return this.props.children;
  }
}
