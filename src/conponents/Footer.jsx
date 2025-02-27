import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Footer = () => {

  const {theme} = useContext(ThemeContext)

  return (
    <footer className={`w-full py-5  flex items-center justify-center  ${theme === false ? "bg-gray-200 text-gray-600" : "bg-[#212121] text-white"}`}>
      <p className=" text-sm">
        &copy; NewsPaper All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
