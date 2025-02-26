import React, { useContext } from "react";
import NewsItems from "./NewsItems";
import ThemeContext from "../context/ThemeContext";
import NewsContext from "../context/NewsContext";

const NewsGroup = () => {
  const { theme ,} = useContext(ThemeContext);

  const { articles } = useContext(NewsContext)

  return (
    <div
      className={`w-full pt-5 p-3 flex flex-wrap justify-start items-center 
        ${theme === false ? "bg-white" : "bg-[#212121] text-white"}  
      `}
    >
      {
        articles.map((article , index)=> <NewsItems key={index} article={article}/>)
      }
     
    </div>
  );
};

export default NewsGroup;
