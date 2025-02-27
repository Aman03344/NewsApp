import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import NewsContext from "../context/NewsContext";

const Form = () => {
  const { theme } = useContext(ThemeContext);
  const { dispatch } = useContext(NewsContext);

  const [search , setSearch]= useState()


  const FetchNews = async (query = "indore") => {
    const res = await fetch(
      `https://gnews.io/api/v4/search?q=${query}&apikey=11a0b21fdf9881e2ec04df9f82afdd16`
    );
    const data = await res.json();

    const newArray = data.articles.map((news) => ({
      title: news.title,
      content: news.content,
      description: news.description,
      image: news.image,
      publishedAt: news.publishedAt,
      source: {
        url:news.url
      }
    }));

    
    dispatch({ type: "GET_DATA", payload: newArray });
  };


  useEffect(() => {
    FetchNews();
  }, []);

  const handleSub = (e) => {
    e.preventDefault();
    FetchNews(search)
    setSearch("")
  };

  return (

    <form
      onSubmit={handleSub}
      className={`w-full px-3 ${theme === false ? "bg-white" : "bg-[#212121]"}`}
    >
      <div className="flex flex-col md:flex-row md:items-center gap-2">
        <div className="p-1 border-2 border-gray-500 flex items-center px-2 text-gray-500 w-full">
          <i className="ri-search-2-line text-2xl"></i>
          <input
          onChange={(e)=>setSearch(e.target.value)}
          value={search}
            className={`px-2 w-full outline-none ${
              theme === false ? "text-black" : "text-white"
            }`}
            type="text"
            placeholder="Explore news"
          />
        </div>
        <button
          className={`hidden md:block font-bold px-4 py-2.5 md:ml-1 ${
            theme === false ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Form;
