import React from 'react';
import proxyquire from 'proxyquire';
import { shallow } from 'enzyme';

const { default: Gw2Upgrade } = proxyquire('./', {
  'react-redux': { connect: () => (Component) => Component },
});

describe('<Gw2Upgrade />', () => {
  it('should fetch on mount', () => {
    const fetch = sinon.spy();

    shallow(<Gw2Upgrade id={23} fetch={fetch} />, {
      lifecycleExperimental: true,
    });

    expect(fetch).to.have.been.calledWith([23]);
  });

  it('should fetch on update', () => {
    const fetch = sinon.spy();
    const wrapper = shallow(<Gw2Upgrade id={23} fetch={fetch} />);

    wrapper.setProps({
      id: 25,
    });

    expect(fetch).to.have.been.calledWith([25]);
  });

  it('should render placeholder when id and no data', () => {
    const wrapper = shallow(<Gw2Upgrade id={23} />);

    expect(wrapper.find('PlaceholderInfusion')).to.exist;
  });

  it('should render infusion when no id', () => {
    const wrapper = shallow(<Gw2Upgrade />);

    expect(wrapper.find('Upgrade')).to.exist;
  });

  it('should render infusion when data', () => {
    const wrapper = shallow(<Gw2Upgrade data={{}} />);

    expect(wrapper.find('Upgrade')).to.exist;
  });

  it('should render placeholder when error', () => {
    const wrapper = shallow(<Gw2Upgrade data={{ error: true }} id={23} />);

    expect(wrapper.find('PlaceholderInfusion')).to.exist;
  });
});
