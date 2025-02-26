import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { IoMoonOutline, IoSunny } from "react-icons/io5";

const Navbar = () => {
  const { theme, dispatch } = useContext(ThemeContext);

  const toggleMode = () => {
    dispatch({
      type: "CHANGE_THEME",
    });
    localStorage.setItem('theme', JSON.stringify(!theme))
  };

  return (
    <nav
      className={`w-full flex justify-start items-center border-b border-gray-500 fixed top-0 px-5 py-2 ${
        theme === false ? `bg-white` : `bg-[#212121] border-b`
      }  `}
    >
      <div
        className={`  font-bold text-2xl  py-1 px-2 uppercase ${
          theme === false
            ? `bg-black text-white`
            : `bg-white text-black font-black`
        }`}
      >
        news
      </div>
      <div
        className={`font-bold  text-3xl p-1 uppercase${
          theme === false ? ` text-black uppercase` : ` text-white uppercase`
        }`}
      >
        paper
      </div>
      <button
        onClick={toggleMode}
        className="ml-auto w-12 h-12 text-white bg-black p-2 rounded-full text-xl flex items-center justify-center"
      >
        {theme ?  <IoSunny /> : <IoMoonOutline />}
      </button>
    </nav>
  );
};

export default Navbar;
