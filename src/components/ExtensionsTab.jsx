import React from "react";
// import { useState } from "react";

const ExtensionsTab = ({ activeIndex, setActiveIndex }) => {
  const lists = ["All", "Active", "Inactive"];

  return (
    <>
      <section className="w-full h-fit flex flex-col items-center mt-4 md:flex-row md:justify-between">
        <h1 className="text-white font-bold text-[2.8rem]">Extensions List</h1>

        <div className="h-fit w-full flex justify-between px-4 mt-3 md:w-[27%]">
          {lists.map((list, index) => (
            <div
              key={index}
              value={list}
              className={`text-[1.2em] py-2 px-5 border-gray-400 text-white border-2 cursor-pointer rounded-[2.5rem] ${
                activeIndex === index ? "bg-red-500" : "bg-gray-700"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {list}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ExtensionsTab;
