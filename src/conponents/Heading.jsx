import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Heading = () => {

  const { theme } = useContext(ThemeContext)



  return (
    <div className={`w-full flex justify-center items-center pt-22 p-3 ${theme === false ? "bg-white" : "bg-[#212121] text-white"} `}>
      <div className="w-full border-2 border-gray-500 p-2 text-center">
        <h1 className="text-2xl md:text-4xl font-bold">
          Never Miss a Headline Get Live
          <span className="underline px-1 rounded-sm">NewsPaper</span>
        </h1>
        <p className=" text-sm md:text-lg py-1 ">
          Stay Updated with Breaking News Anytime, Anywhere
        </p>
      </div>
    </div>
  );
};

export default Heading;
