import { SHOW_TOOLTIP } from '../actions/gw2';

export const defaultState = {
  show: false,
};

export default function reducer (state, action) {
  switch (action.type) {
    case SHOW_TOOLTIP:
      return {
        ...action.payload,
      };

    default:
      return state;
  }
}
