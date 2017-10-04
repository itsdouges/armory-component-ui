import proxyquire from 'proxyquire';
import React from 'react';
import { shallow } from 'enzyme';

import { stubRedux, stubDecoratorWithArgs } from '../../../test/utils';

const sandbox = sinon.sandbox.create();
const showTooltip = sandbox.spy();

const stubs = {
  'react-debounce-decorator': stubDecoratorWithArgs,
  'reducers/actions': { showTooltip },
};

const TooltipTrigger = proxyquire.noCallThru()('./', {
  ...stubRedux,
  ...stubs,
}).default;

describe('<TooltipTrigger />', () => {
  const props = {
    onMouseEnter: sandbox.spy(),
    onMouseLeave: sandbox.spy(),
    show: (cb) => cb(),
    hide: (cb) => cb(),
    data: 'neat',
    type: 'item',
    showTooltip,
  };

  let wrapper;
  let onMouseEnter;
  let onMouseLeave;

  before(() => {
    wrapper = shallow(
      <TooltipTrigger {...props}>
        <div />
      </TooltipTrigger>
    );

    ({ onMouseLeave, onMouseEnter } = wrapper.find('div').props());
  });

  afterEach(() => {
    sandbox.reset();
  });

  context('when children is null', () => {
    it('should render nothing', () => {
      const emptyWrapper = shallow(<TooltipTrigger />);

      expect(emptyWrapper.html()).to.not.exist;
    });
  });

  describe('showing', () => {
    const e = {};

    beforeEach(() => {
      onMouseEnter(e);
    });

    it('should call passed down onMouseEnter', () => {
      expect(props.onMouseEnter).to.have.been.calledWith(e);
    });

    it('should show tooltip', () => {
      expect(showTooltip).to.have.been.calledWith(true, {
        data: props.data,
        type: props.type,
      });
    });
  });

  describe('hiding', () => {
    const e = {};

    beforeEach(() => {
      onMouseLeave(e);
    });

    it('should call passed down onMouseLeave', () => {
      expect(props.onMouseLeave).to.have.been.calledWith(e);
    });

    it('should hide tooltip', () => {
      expect(showTooltip).to.have.been.calledWith(false);
    });
  });
});
