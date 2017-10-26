import { readSpecializations } from '../lib/gw2';
import createReducer from './reducerFactory';

const { defaultState, reducer } = createReducer('specializations', readSpecializations);

export { defaultState };
export default reducer;
