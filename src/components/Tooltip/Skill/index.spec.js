import proxyquire from 'proxyquire';
import React from 'react';
import { shallow } from 'enzyme';
import { stubStyles } from '../../../../test/utils';

const sandbox = sinon.sandbox.create();
const markup = sandbox.stub();
const parse = sandbox.stub();

const styles = stubStyles(['description']);

const SkillTooltip = proxyquire('./', {
  '../../../lib/gw2/parse': { markup },
  './parser': { default: parse },
  './styles.less': styles,
}).default;

describe('<SkillTooltip />', () => {
  it('should parse description', () => {
    const props = {
      name: 'Skill Name',
      description: 'cool',
    };
    const parsedDescription = 'parsedDescription';
    const markupDescription = 'markupDescription';
    parse.withArgs(props.description).returns(parsedDescription);
    markup.withArgs(parsedDescription).returns(markupDescription);

    const wrapper = shallow(<SkillTooltip {...props} />);

    expect(wrapper.find(`.${styles.description}`)).to.contain(markupDescription);
  });
});
