// @flow

import React from 'react';
import Gw2Specialization from './';

class Selectable extends React.Component {
  state = {
    activeTraits: [2134, 2085, 2128],
  };

  onTraitClick = (column, id) => {
    this.setState((prevState) => {
      const activeTraits = [].concat(prevState.activeTraits);
      activeTraits[column] = id;

      return {
        activeTraits,
      };
    });
  };

  render () {
    return (
      <Gw2Specialization
        id={55}
        activeTraits={this.state.activeTraits}
        onTraitClick={this.onTraitClick}
      />
    );
  }
}

storiesOf('Gw2Specialization', module)
  .add('default', () => <App><Gw2Specialization id={57} /></App>)
  .add('active traits', () => <App><Gw2Specialization id={56} activeTraits={[2177, 2061, 2138]} /></App>)
  .add('selectable', () => <App><Selectable /></App>)
  .add('not found', () =>
    <App>
      <Gw2Specialization id={112233} />
    </App>
  )
  .add('loading', () => <App><Gw2Specialization /></App>);
