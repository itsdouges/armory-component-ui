// @flow

import axios from 'axios';

export const FETCH_CHARACTER_RESULT = 'FETCH_CHARACTER_RESULT';
export const FETCHING_CHARACTER = 'FETCHING_CHARACTER';

const fetchingCharacter = (fetching) => ({
  type: FETCHING_CHARACTER,
  payload: fetching,
});

const fetchCharacterResultSuccess = (name, data) => ({
  type: FETCH_CHARACTER_RESULT,
  payload: {
    name,
    data,
  },
});

export function fetchCharacter (character: string): ReduxThunk {
  return (dispatch) => {
    dispatch(fetchingCharacter(true));

    return axios.get(`https://api.gw2armory.com/characters/${character}`)
      .then(({ data }) => {
        dispatch(fetchCharacterResultSuccess(character, data));
        dispatch(fetchingCharacter(false));
      });
  };
}
