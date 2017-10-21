import React from 'react';
import { shallow } from 'enzyme';
import proxyquire from 'proxyquire';

const styles = {
  human: 'human',
  root: 'root',
  compact: 'compact',
  portrait: 'portrait',
  portraitBottomIn: 'portraitBottomIn',
  borderStrip2: 'borderStrip2',
};

const { default: CharacterPortrait } = proxyquire('./', {
  './styles.less': styles,
});

describe('<CharacterPortrait />', () => {
  it('should not blowup with no data', () => {
    shallow(<CharacterPortrait />);
  });

  it('should build background image', () => {
    const wrapper = shallow(
      <CharacterPortrait
        name="Quatermile"
        race="Human"
        alias="madou"
      />
    );

    expect(wrapper.find(`.${styles.portrait}`)).to.have.prop('style').eql({
      backgroundImage: 'url(https://images.gw2armory.com/madou/characters/Quatermile)',
    });
  });

  it('should set race bg', () => {
    const wrapper = shallow(
      <CharacterPortrait
        name="Quatermile"
        race="Human"
        alias="madou"
      />
    );

    expect(wrapper.find(`.${styles.root}`)).to.have.className(styles.human);
  });
});
