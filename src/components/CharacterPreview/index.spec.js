import React from 'react';
import { shallow } from 'enzyme';
import proxyquire from 'proxyquire';
import _ from 'lodash';

const styles = {
  cover: 'cover',
  litePortrait: 'litePortrait',
  header: 'header',
};

const { default: CharacterPreview } = proxyquire('./', {
  './styles.less': styles,
  'react-redux': { connect: () => (Component) => Component },
});

describe('<CharacterPreview />', () => {
  const props = {
    character: {
      alias: 'madou',
      name: 'Quatermile',
      profession: 'Ranger',
      race: 'Human',
      eliteSpecialization: 'Soul Beast',
      level: 80,
    },
  };

  it('should render portrait', () => {
    const wrapper = shallow(<CharacterPreview {...props} />);

    expect(wrapper.find(`.${styles.cover}`).find('CharacterPortrait').props()).to.include({
      name: props.character.name,
      alias: props.character.alias,
      race: props.character.race,
      className: styles.litePortrait,
    });
  });

  describe('resource card', () => {
    it('should link to character page', () => {
      const wrapper = shallow(<CharacterPreview {...props} />);

      expect(wrapper.find('.header')).to.have.prop('href').equal('https://gw2armory.com/madou/c/Quatermile');
    });

    it('should show with guild tag', () => {
      const wrapper = shallow(
        <CharacterPreview
          {..._.merge({}, props, {
            character: {
              guild_tag: 'LUX',
            },
          })}
        />
      );

      expect(wrapper.find('ResourceCard').props()).to.include({
        title: 'Quatermile [LUX]',
      });
    });

    it('should show data', () => {
      const wrapper = shallow(<CharacterPreview {...props} />);

      expect(wrapper.find('ResourceCard').props()).to.include({
        imageName: 'ranger-icon-small.png',
        subTitle: '80 Human Soul Beast',
        appearance: 'small',
      });
    });

    it('should show without guild tag', () => {
      const wrapper = shallow(<CharacterPreview {...props} />);

      expect(wrapper.find('ResourceCard').props()).to.include({
        title: 'Quatermile',
      });
    });
  });
});
