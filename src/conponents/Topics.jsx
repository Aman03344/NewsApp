import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Topics = () => {
  const topics = [
    "Political",
    "Economic",
    "Crime",
    "Technology",
    "Weather",
    "Entertainment",
    "Sports",
    "Lifestyle",
    "Health",
    "Editorials",
    "Investigative",
    "Cultural",
  ];

  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`w-full flex justify-center items-center flex-nowrap overflow-x-auto p-3 gap-2 py-3 transition
        ${theme === false ? "bg-white text-black" : "bg-[#212121] text-white"}
      `}
    >
      {topics.map((topic, index) => (
        <div
          key={index}
          className={`flex justify-center items-center border px-2 py-1.5 rounded-sm cursor-pointer transition
            ${
              index === 0
                ? "bg-black text-white"
                : "border-gray-500 hover:bg-black hover:text-white"
            }
          `}
        >
          {topic}
        </div>
      ))}
    </div>
  );
};

export default Topics;
