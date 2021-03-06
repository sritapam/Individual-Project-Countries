import axios from "axios";

export const getCountries = () => {
  return async function (dispatch) {
    try {
      var json = await axios.get('/countries');
      return dispatch({
        type: 'GET_COUNTRIES',
        payload: json.data,
      });
    } catch (e) {
      console.error(e);
    }
  };
};

// export const getCountries = () => {
//   return function (dispatch) {
//     return fetch("http://localhost:3001/countries")
//       .then((resp) => resp.json())
//       .then((json) => {
//         return dispatch({
//           type: "GET_COUNTRIES",
//           payload: json,
//         });
//       });
//   };
// };

export const filterCountryByContinent = (payload) => {
  return {
    type: "FILTER_BY_CONTINENT",
    payload,
  };
};

export const filterByAlphabet = (payload) => {
  return {
    type: "FILTER_BY_ALPHABET",
    payload,
  };
};

export const filterByArea = (payload) => {
  return {
    type: "FILTER_BY_AREA",
    payload,
  };
};

export function filterByActivity(payload) {
  return {
    type: "FILTER_BY_ACTIVITY",
    payload,
  };
}

export const getNameCountries = (name) => {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        `/countries?name=${name}`
      );
      return dispatch({
        type: "GET_NAME_COUNTRIES",
        payload: json.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const getCountryByParams = (id) => {
  return async function (dispatch) {
    try {
      var json = await axios.get(`/countries/${id}`);
      return dispatch({
        type: "GET_COUNTRIES_BY_ID",
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
      var info = await axios.get("/activity");
      return dispatch({
        type: "GET_ACTIVITIES",
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
      const response = await axios.post(
        "/activity",
        payload
      );
      return response;
    } catch (e) {
      console.error(e);
    }
  };
};

// export const deleteActivity = (payload) => {
//   return async function (dispatch) {

//     try {
//       const response = await axios.delete('http://localhost:3001/activity?name=' + payload);
//       return dispatch({
//         type: 'REMOVE_ACTION',
//         payload: response.data
//       });
//     } catch (e) {
//       console.error(e);
//     }
//   };
// };

// export const GetCountries = ()=> {
//   return async function (dispatch) {
//     fetch('http://localhost:3001/countries')
//     .then(resp=> resp.json())
//     .then(data=>{
//       dispatch({
//         type: 'GET_COUNTRIES',
//         payload: json.data,
//       })
//     })
//   }
// }
