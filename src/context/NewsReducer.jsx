export const NewsReducer = (state, action) => {



  switch (action.type) {
    case "GET_DATA":
      return{
        ...state,
        articles : action.payload
      }



    
    default:
      return state;
  }
};
