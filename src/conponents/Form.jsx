import React, { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext";

const Form = () => {


  const { theme } =useContext(ThemeContext)

  const [search , setSearch] = useState("bollywood")

  const FetchNews = async()=>{
    const  response = await fetch(`https://gnews.io/api/v4/search?q=example&apikey=094bc946b8704e9a01229c77445ebf8e`)
    const data = await response.json()
    console.log(data.articles[0].content); 

   

  }
  FetchNews()



  const handleSub =(e)=>{
    e.preventDefault()
   

  }


  return (
    <form onSubmit={handleSub} className={`w-full px-3 ${theme === false ? "bg-white" : "bg-[#212121]"}`}>
      <div className="flex flex-col md:flex-row md:items-center gap-2">
        <div className="p-1 border-2 border-gray-500 flex items-center px-2 text-gray-500 w-full">
          <i className="ri-search-2-line text-2xl"></i>
          <input
            onChange={(e)=>setSearch(e.target.value)}
            value={(search)}
            className={`px-2 w-full outline-none ${theme === false ? "text-black" : "text-white"}`}
            type="text"
            placeholder="Explore news"
          />
        </div>
        <button className={`hidden md:block font-bold px-4 py-2.5 md:ml-1 ${theme === false ? "bg-black text-white" : "bg-white text-black"}`}>
          Search
        </button>
      </div>
    </form>
  );
};

export default Form;
