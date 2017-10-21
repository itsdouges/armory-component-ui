import React from 'react';
import { shallow } from 'enzyme';
import Infusion from './';

describe('<Infusion />', () => {
  const props = {
    data: {
      icon: 'http',
      name: 'Item infusion',
      details: {
        infix_upgrade: {
          buff: {
            description: [
              '+1 str',
              '+2 agi',
            ],
          },
        },
      },
    },
  };

  it('should show empty infusion when no data', () => {
    const wrapper = shallow(<Infusion />);

    expect(wrapper.text()).to.contain('Unused Infusion Slot');
  });

  it('should show icon', () => {
    const wrapper = shallow(<Infusion {...props} />);

    expect(wrapper.find('Icon').props()).to.include({
      src: props.data.icon,
      size: 'micro',
    });
  });

  it('should show text', () => {
    const wrapper = shallow(<Infusion {...props} />);

    expect(wrapper.find('div').first()).to.contain(props.data.name);
  });

  it('should print out descriptions', () => {
    const wrapper = shallow(<Infusion {...props} />);

    expect(wrapper.find('div').last()).to.contain('+2 agi');
  });
});
