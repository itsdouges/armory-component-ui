import { configure } from '@storybook/react';
import { storiesOf } from '@storybook/react';
// eslint-disable-next-line
import 'style-loader!css-loader!../stories/styles.css';
import { persistToLocalStorage } from '../src';
import App from '../stories/App';

persistToLocalStorage(false);
global.App = App;
global.storiesOf = storiesOf;

const req = require.context('../src', true, /_stories\.js$/);

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module);
