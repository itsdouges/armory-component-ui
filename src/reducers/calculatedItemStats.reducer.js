import merge from 'lodash/merge';
import { FETCH_CALCULATED_ITEMSTATS } from './actions';

export const defaultState = {};

function reduceStats (stats) {
  return stats.reduce((obj, stat) => {
    const { itemId, ...data } = stat;
    if (!obj[itemId]) {
      // eslint-disable-next-line no-param-reassign
      obj[itemId] = {};
    }
    // eslint-disable-next-line no-param-reassign
    obj[itemId][data.id] = data;
    return obj;
  }, {});
}

export default (state, action) => {
  switch (action.type) {
    case FETCH_CALCULATED_ITEMSTATS:
      return merge({}, state, reduceStats(action.payload));

    default:
      return state;
  }
};
