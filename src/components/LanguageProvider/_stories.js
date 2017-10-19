// @flow

import React from 'react';
import LanguageProvider from './';
import Gw2Item from '../Gw2Item';

const makeLangApp = (lang) => (
  <LanguageProvider lang={lang} key={lang}>
    <App>
      <Gw2Item id={80923} />
    </App>
  </LanguageProvider>
);

storiesOf('LanguageProvider', module)
  .add('en', () => makeLangApp('en'))
  .add('fr', () => makeLangApp('fr'))
  .add('zh', () => makeLangApp('zh'))
  .add('ru', () => makeLangApp('ru'))
  .add('es', () => makeLangApp('es'))
  .add('de', () => makeLangApp('de'));
