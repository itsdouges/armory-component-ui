import proxyquire from 'proxyquire';
import characterData from '../../test/data/character.json';

const { mergeEliteSpec, default: reducer } = proxyquire('./characters.reducer', {
  '../actions/gw2': {
    '@noCallThru': true,
  },
  'i18n-react': {
    default: {
      translate: (str) => str,
    },
  },
});

describe('characters.reducer.js', () => {
  describe('elite spec extractor', () => {
    const mode = 'pve';

    it('should map elite spec', () => {
      const character = {
        name: 'Blastrn',
        profession: 'Engineer',
        specializations: {
          [mode]: [{}, {}, { id: 60 }],
        },
      };

      const data = mergeEliteSpec(character);

      expect(data.eliteSpecialization).to.equal('classes.scourge');
    });

    it('should default to profession name', () => {
      const character = {
        name: 'Blastrn',
        profession: 'Engineer',
        specializations: {
          [mode]: [{}, {}, {}],
        },
      };

      const data = mergeEliteSpec(character);

      expect(data.eliteSpecialization).to.equal('Engineer');
    });
  });

  it('should count total upgrades', () => {
    const state = reducer({}, {
      type: 'FETCH_CHARACTER_RESULT',
      payload: {
        name,
        data: characterData,
      },
    });

    const upgradeCounts = Object.values(state.data[name].equipment).reduce((arr, value) => {
      arr.push(value.upgradeCounts);
      return arr;
    }, []).filter(Boolean);

    expect(upgradeCounts).to.eql([
      { 24815: 7 },
      { 24543: 6 },
      { 24815: 7 },
      { 24815: 7 },
      { 24815: 7 },
      { 24815: 7 },
      { 24815: 7 },
      { 24815: 7 },
      { 24543: 6 },
      { 24543: 6 },
      { 24543: 6 },
      { 24543: 6 },
      { 24543: 6 },
      { 24615: 4, 24618: 4 },
      { 24615: 4, 24618: 4 },
      { 24615: 4, 24618: 4 },
      { 24615: 4, 24618: 4 },
    ]);
  });
});
