import { GET_PRICE_FROM_API, CHANGE_INPUT_VALUE } from '../types';

export const getPriceFromApi = id =>
    ({
      type: GET_PRICE_FROM_API,
      promise: fetch(`/api/getprice/${id}`)
            .then(res => res.json()),
    });

export const changeInputValue = inputValue =>
    ({ type: CHANGE_INPUT_VALUE, inputValue });
