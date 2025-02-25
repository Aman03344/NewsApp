import React from 'react'

const Topics = () => {
  return (
    <div className=" w-full flex flex-nowrap overflow-x-auto p-3 gap-2 mt-2">
        <div className="flex justify-center items-center border bg-black px-2 py-1.5 rounded-sm text-white">Political </div>
        <div className="flex justify-center items-center border border-gray-500 px-2 py-1 hover:bg-black hover:text-white transition-all duration-300 rounded-sm">Economic</div>
        <div className="flex justify-center items-center border border-gray-500 px-2 py-1 hover:bg-black hover:text-white transition-all duration-300 rounded-sm">Crime</div>
        <div className="flex justify-center items-center border border-gray-500 px-2 py-1 hover:bg-black hover:text-white transition-all duration-300 rounded-sm">Technology</div>
        <div className="flex justify-center items-center border border-gray-500 px-2 py-1 hover:bg-black hover:text-white transition-all duration-300 rounded-sm">Weather</div>
        <div className="flex justify-center items-center border border-gray-500 px-2 py-1 hover:bg-black hover:text-white transition-all duration-300 rounded-sm">Entertainment</div>
        <div className="flex justify-center items-center border border-gray-500 px-2 py-1 hover:bg-black hover:text-white transition-all duration-300 rounded-sm">Sports</div>
        <div className="flex justify-center items-center border border-gray-500 px-2 py-1 hover:bg-black hover:text-white transition-all duration-300 rounded-sm"> Lifestyle</div>
        <div className="flex justify-center items-center border border-gray-500 px-2 py-1 hover:bg-black hover:text-white transition-all duration-300 rounded-sm">Health </div>
        <div className="flex justify-center items-center border border-gray-500 px-2 py-1 hover:bg-black hover:text-white transition-all duration-300 rounded-sm">Editorials</div>
        <div className="flex justify-center items-center border border-gray-500 px-2 py-1 hover:bg-black hover:text-white transition-all duration-300 rounded-sm">Investigative</div>
        <div className="flex justify-center items-center border border-gray-500 px-2 py-1 hover:bg-black hover:text-white transition-all duration-300 rounded-sm">Cultural</div>
    </div>
  )
}

export default Topics
