import { handle } from 'redux-pack';
import { GET_PRICE_FROM_API, CHANGE_INPUT_VALUE } from '../types';

const initialState = {
  inputValue: 'all',
  isLoading: false,
  error: null,
  response: null,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PRICE_FROM_API:
      return handle(state, action, {
        start: s => ({ ...s, isLoading: true, error: null, response: null }),
        finish: s => ({ ...s, isLoading: false }),
        failure: s => ({ ...s, error: payload }),
        success: s => ({ ...s, response: payload }),
      });

    case CHANGE_INPUT_VALUE:
      return Object.assign({}, state, { inputValue: action.inputValue });

    default:
      return state;
  }
};
