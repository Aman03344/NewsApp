import { createContext, useReducer } from "react";
import { WeatherReducer } from "./WeatherReducer";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const initialState = {
    data: {
      city: "Indore",
      region: "MP",
      temp: "29°C",
      time: "12:00",
      icon: "https://cdn.weatherapi.com/weather/64x64/night/143.png",
    },
  };

  const [state, dispatch] = useReducer(WeatherReducer, initialState);

  return (
    <WeatherContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
