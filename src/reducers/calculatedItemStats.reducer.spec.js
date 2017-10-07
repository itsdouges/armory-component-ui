import { merge } from 'lodash';
import reducer from './calculatedItemStats.reducer';

describe('calculated item stats reducer', () => {
  const itemId = 76377;

  const state = {
    [itemId]: {
      1379: {
        id: 1379,
        name: 'Greiving',
        attributes: [],
      },
    },
  };

  it('should reduce a array of stats onto state', () => {
    const newState = reducer(state, {
      type: 'FETCH_CALCULATED_ITEMSTATS',
      payload: [{
        id: 1130,
        name: 'Viper\'s',
        itemId,
        attributes: [],
      }],
    });

    expect(newState).to.eql(merge({}, state, {
      [itemId]: {
        1130: {
          id: 1130,
          name: 'Viper\'s',
          attributes: [],
        },
      },
    }));
  });
});
