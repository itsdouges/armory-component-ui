import React from 'react';
import { shallow } from 'enzyme';
import SkinTooltip from './';

describe('<SkinTooltip />', () => {
  it('should render the detail type for weapons', () => {
    const testData = {
      type: 'Weapon',
      details: {
        type: 'Axe',
      },
    };

    const wrapper = shallow(<SkinTooltip {...testData} />);

    expect(wrapper.find('div').text()).to.equal('Axe');
  });

  it('should render the weight and detail type for armor', () => {
    const testData = {
      type: 'Armor',
      details: {
        type: 'Helm',
        weight_class: 'Heavy',
      },
    };

    const wrapper = shallow(<SkinTooltip {...testData} />);

    expect(wrapper.find('div').html()).to.contain('Heavy<br/>Helm');
  });
});
