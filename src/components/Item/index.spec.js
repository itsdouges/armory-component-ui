import React from 'react';
import { shallow } from 'enzyme';
import proxyquire from 'proxyquire';
import { stubComponent } from '../../../test/utils';

const TooltipTrigger = stubComponent('TooltipTrigger');

const { default: Item } = proxyquire.noPreserveCache()('./', {
  '../TooltipTrigger': { default: TooltipTrigger },
});

describe('<Gw2Item />', () => {
  const props = {
    item: {
      id: 23,
      icon: 'http',
      name: 'Cool Item',
    },
    skin: {},
    upgrades: [],
    infusions: [],
    upgradeCounts: {},
    stats: [],
    equipped: true,
    count: 3,
  };

  describe('tooltip trigger', () => {
    it('should render with default props', () => {
      const wrapper = shallow(<Item tooltipTextOverride="text" />);

      expect(wrapper.find('TooltipTrigger').props()).to.include({
        type: 'items',
        data: 'text',
      });
    });

    it('should render loaded', () => {
      const wrapper = shallow(<Item {...props} />);

      expect(wrapper.find('TooltipTrigger').props().data).to.include(props);
    });

    it('should render not loaded', () => {
      const wrapper = shallow(<Item name="Cool" />);

      expect(wrapper.find('TooltipTrigger').props()).to.include({
        data: 'Cool',
      });
    });

    it('should render error', () => {
      const wrapper = shallow(<Item item={{ error: 'error' }} />);

      expect(wrapper.find('TooltipTrigger').props()).to.include({
        data: 'error',
      });
    });
  });

  it('should render resource link with gw2spidy', () => {
    const wrapper = shallow(<Item {...props} inlineText="gw2spidy" />);

    expect(wrapper.find('ResourceLink').props()).to.include({
      text: props.item.name,
      href: 'https://www.gw2spidy.com/item/23',
    });
  });

  it('should render icon if type', () => {
    const wrapper = shallow(<Item {...props} type="chest" />);

    expect(wrapper.find('Icon').props()).to.include({
      name: 'chest-slot-icon.png',
    });
  });

  it('should render no icon', () => {
    const wrapper = shallow(<Item {...props} />);

    expect(wrapper.find('Icon').props()).to.include({
      name: '',
    });
  });

  it('should gw2 count', () => {
    const wrapper = shallow(<Item {...props} />);

    expect(wrapper.find('Gw2Icon').props()).to.include({
      count: 3,
    });
  });

  it('should gw2 bg', () => {
    const wrapper = shallow(<Item {...props} />);

    expect(wrapper.find('Gw2Icon').props()).to.include({
      src: props.item.icon,
    });
  });
});
