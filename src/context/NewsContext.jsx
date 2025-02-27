import { Children, createContext, useReducer } from "react";
import { NewsReducer } from "./NewsReducer";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const intialState = {
    articles: [],
  };

  const [state, dispatch] = useReducer(NewsReducer, intialState);

  return (
    <NewsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContext;
