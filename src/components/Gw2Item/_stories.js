// @flow

import React from 'react';
import Gw2Item from './';

storiesOf('Gw2Item', module)
  .add('default', () => <App><Gw2Item id={305} /></App>)
  .add('stats', () =>
    <App>
      <Gw2Item id={80648} inlineText="wiki" statsId={1379} />
      <br />
      <Gw2Item id={80648} inlineText="wiki" statsId={1130} />
    </App>
  )
  .add('no stats', () => <App><Gw2Item id={80648} /></App>)
  .add('invalid stats', () => <App><Gw2Item id={80648} inlineText="wiki" statsId={221133} /></App>)
  .add('with skin', () => <App><Gw2Item id={80648} skinId={176} /></App>)
  .add('with count', () => <App><Gw2Item id={43593} count={10} /></App>)
  .add('inline text', () => <App><Gw2Item inlineText="gw2spidy" id={76164} /></App>)
  .add('not found', () => <App><Gw2Item id={112233} /></App>)
  .add('loading', () => <App><Gw2Item /></App>);
