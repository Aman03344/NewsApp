import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Footer = () => {

  const {theme} = useContext(ThemeContext)

  return (
    <footer className={`w-full py-5 bg-gray-200 flex items-center justify-center shadow-md `}>
      <p className="text-gray-600 text-sm">
        &copy; NewsPaper All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
