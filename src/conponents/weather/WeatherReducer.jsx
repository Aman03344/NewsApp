export const WeatherReducer = (state, action) => {



  switch (action.type) {
    case "SET_WEATHER":
      return { 
        ...state, 
        data: action.payload 
      };
      


    default:
      return state;
  }
};
