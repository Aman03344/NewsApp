import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const NewsItems = ({ article }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`w-full border my-2 p-1
           ${theme === false ? `bg-white` : `bg-[#212121] text-white`} `}
    >
      <div className="w-full   p-2 md:flex ">
        <div className="w-full  md:w-[50%]">
          <img className=" rounded-md" src={article.image} alt="newsImage" />
        </div>
        <div className="w-full  md:w-[50%] ">
          <h1 className=" text-2xl font-bold md:text-4xl px-3 pt-2">
            {article.title}
          </h1>
          <p className="py-2 md:text-lg px-3">{article.description}</p>
        </div>
      </div>
      <p className="py-1 md:text-lg px-3">
        {article.content}
        <span className=" text-blue-600 text-sm px-3 cursor-pointer hover:underline">
          <a
            href={article.source.url} target="_blank">Readmore..</a>
        </span>
      </p>

      <span className="text-sm md:text-[12px] text-gray-600 font-bold  px-3 ">
        {article.publishedAt
          ? new Date(article.publishedAt).toLocaleDateString()
          : "Unknown Date"}
      </span>
    </div>
  );
};

export default NewsItems;
