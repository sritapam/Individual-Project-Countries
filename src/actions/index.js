import axios from 'axios';

export const getCountries = () => {
  return async function (dispatch) {
    try {
      var json = await axios('http://localhost:3001/countries');
      return dispatch({
        type: 'GET_COUNTRIES',
        payload: json.data,
      });
    } catch (e) {
      console.error(e);
    }
  };
};

export const filterByAlphabet = (payload) => {
  return {
    type: 'FILTER_BY_ALPHABET',
    payload,
  };
};