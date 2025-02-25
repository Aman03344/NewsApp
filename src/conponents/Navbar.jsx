import React from "react";

const Navbar = () => {
  return (
    <nav className=" w-full flex justify-start items-center border border-b-gray-500  px-5 py-2">
      <div className=" bg-black font-bold text-2xl text-white py-1 px-2 uppercase">news</div>
      <div className=" font-bold text-3xl p-1 uppercase">paper</div>
    </nav>
  );
};

export default Navbar;
