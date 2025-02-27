import React, { useContext, useEffect, useState } from "react";
import WeatherContext from "./weather/Weather";

const Weather = () => {
  const { data, dispatch } = useContext(WeatherContext);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchWeather = async (query = "indore") => {
    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=7066c5b0509c4eca9c2113059241512&q=${query}&aqi=yes`
    );
    const result = await res.json();

    dispatch({
      type: "SET_WEATHER",
      payload: {
        city: result.location.name,
        region: result.location.region,
        Temp: `${result.current.temp_c}°C`,
        time: result.location.localtime,
        icon: result.current.condition.icon,
      },
    });
  };

  useEffect(() => {
    fetchWeather("mumbai");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(searchQuery);
  };

  return (
    <div className="w-full md:w-[50%] px-3 pt-5">
      <div className="w-full px-3 py-2 border border-gray-500">
        <form onSubmit={handleSubmit} className="w-full flex">
          <input
            className="w-[80%] mx-4 px-2 md:w-[90%] border outline-none"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Weather"
          />
          <button type="submit" className="border px-5 py-1">
            <i className="ri-search-2-line text-2xl"></i>
          </button>
        </form>

        <div className="mt-5 w-full border p-2">
          <img className="float-end" src={data.icon} alt="Weather Icon" />
          <h1 className="text-2xl">
            {data.city}
            <span className="text-sm text-gray-500 mx-2">{data.region}</span>
          </h1>

          <p>Temp: {data.Temp}</p>
          <h1>Time: {new Date(data.time).toLocaleString("en-IN")}</h1>
        </div>
      </div>
    </div>
  );
};

export default Weather;
