
const initialState = {
  countries: [],
  allCountries: [],
  activities:[],
  country: [],
  
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
      };
      case 'GET_NAME_COUNTRIES':
        return {
          ...state,
          countries: action.payload
        }
    case "FILTER_BY_CONTINENT":
      const allCountries = state.allCountries;
      const continentFound =
        action.payload === "All"
          ? allCountries
          : allCountries.filter((c) => c.continent === action.payload);
      return {
        ...state,
        countries: continentFound,
      };
      case 'GET_ACTIVITIES':
      return {
        ...state,
        activities: action.payload,
      };
      case 'POST_ACTIVITY':
        return {
          ...state,
        };
        case 'FILTER_BY_ACTIVITY':
        const countryActivity = state.allCountries
        const countryFounded = countryActivity.filter(c=>{
          if(c.Activities.length > 0){
            for(let i= 0; i< c.Activities.length; i++){
              if(c.Activities[i].name === action.payload)
              return c;
            }
          }
        })
        return {
            ...state,
            countries: countryFounded
          };
    case "FILTER_BY_ALPHABET":
      let sortedArray = action.payload ==='asc' ?
      state.countries.sort(function(a,b){
        if (a.name > b.name){
          return 1;
        }
        if (b.name > a.name){
          return -1;
        }
        return 0;
      }) :
      state.countries.sort(function(a,b){
        if(a.name > b.name){
          return -1;
        }
        if(b.name > a.name){
          return 1;
        }
        return 0;
      })
      return {
        ...state,
        countries : sortedArray
      };
      case 'FILTER_BY_AREA':
      let sortedArea = action.payload ==='asc' ?
      state.countries.sort(function(a,b){
        if (a.area > b.area){
          return 1;
        }
        if (b.area > a.area){
          return -1;
        }
        return 0;
      }) :
      state.countries.sort(function(a,b){
        if(a.area > b.area){
          return -1;
        }
        if(b.area > a.area){
          return 1;
        }
        return 0;
      })
      return {
        ...state,
        countries : sortedArea
      };
      case 'GET_COUNTRIES_BY_ID':
      return {
        ...state,
        country: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
