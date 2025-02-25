import React from "react";

const Heading = () => {
  return (
    <div className="w-full flex justify-center items-center p-3 ">
      <div className="w-full border-2 border-gray-500 p-2 text-center">
        <h1 className="text-2xl md:text-4xl font-bold">
          Never Miss a Headline Get Live{" "}
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
