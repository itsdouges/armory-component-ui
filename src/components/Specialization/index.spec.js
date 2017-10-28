import React from 'react';
import proxyquire from 'proxyquire';
import { shallow } from 'enzyme';
import { stubComponent, stubStyles } from '../../../test/utils';

const Dot = stubComponent('Dot');
const Gw2Trait = stubComponent('Gw2Trait');
const styles = stubStyles([
  'trait',
  'bigIcon',
  'root',
  'background',
  'traits',
  'minorTraitColumn',
  'majorTraitColumn',
]);

const Specialization = proxyquire.noPreserveCache().noCallThru()('./', {
  '../../styles/colours': {},
  '../Gw2Trait': Gw2Trait,
  './styles.less': styles,
  'react-connect-the-dots': { default: Dot },
}).default;

describe.only('<Specialization />', () => {
  const props = {
    id: 50,
    activeTraits: [20, 23, 27],
    specialization: {
      name: 'Engineer',
      background: 'https://image.com',
      minor_traits: [10, 11, 12],
      major_traits: [20, 21, 22, 23, 24, 25, 26, 27, 28],
    },
  };

  it('should create pairs', () => {
    const wrapper = shallow(<Specialization {...props} />);

    wrapper.find('TraitDots').forEach((dots) => {
      console.log(dots.props().pairs);
    });
  });
});
