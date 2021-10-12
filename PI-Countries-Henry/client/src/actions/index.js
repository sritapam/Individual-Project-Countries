import axios from 'axios';

export const getCountries = () => {
  return async function (dispatch) {
    try {
      var json = await axios.get('http://localhost:3001/countries');
      return dispatch({
        type: 'GET_COUNTRIES',
        payload: json.data,
      });
    } catch (e) {
      console.error(e);
    }
  };
};

export const filterCountryByContinent = (payload) => {
  return {
    type: 'FILTER_BY_CONTINENT',
    payload,
  };
};


export const filterByAlphabet = (payload) => {
  return {
    type: 'FILTER_BY_ALPHABET',
    payload,
  };
};

export const filterByArea = (payload) => {
  return {
    type: 'FILTER_BY_AREA',
    payload,
  };
};

export function filterByActivity(payload) {
  return {
    type: 'FILTER_BY_ACTIVITY',
    payload,
  };
}

export const getNameCountries = (name) =>{
  return async function (dispatch){
    try {
    var json = await axios.get(`http://localhost:3001/countries?name=${name}`);
    return dispatch({
      type: 'GET_NAME_COUNTRIES',
      payload: json.data
    })
  } catch (e){
    console.log(e)
  }
}
};

export const getCountryByParams = (id) => {
  return async function (dispatch) {
    try {
      var json = await axios.get(`http://localhost:3001/countries/${id}`);
      return dispatch({
        type: 'GET_COUNTRIES_BY_ID',
        payload: json.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const getActivities = () => {
  return async function (dispatch) {
    try {
      var info = await axios.get('http://localhost:3001/activity');
      return dispatch({
        type: 'GET_ACTIVITIES',
        payload: info.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const postActivity = (payload) => {
  return async function (dispatch) {
    
    try {
      
      const response = await axios.post('http://localhost:3001/activity', payload);
      return response;
    } catch (e) {
      console.error(e); 
    }
  };
};
