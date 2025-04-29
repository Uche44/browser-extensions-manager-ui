import React from "react";
import { useEffect, useState } from "react";
import { ToggleRight, ToggleLeft } from "lucide-react";
import { useLightMode } from "../context/LightMode";

const Extensions = ({ activeIndex }) => {
  const { isLightMode } = useLightMode();
  const [extensions, setExtensions] = useState([]);

  const fetchExtensions = async () => {
    const response = await fetch("/data.json");
    const data = await response.json();
    if (activeIndex === 0) {
      setExtensions(data);
    }
    if (activeIndex === 1) {
      setExtensions(data.filter((extension) => extension.isActive));
    }
    if (activeIndex === 2) {
      setExtensions(data.filter((extension) => !extension.isActive));
    }
  };

  useEffect(() => {
    fetchExtensions();
  }, [activeIndex]);

  const removeExtension = (index) => {
    setExtensions((prevExtensions) =>
      prevExtensions.filter((_, i) => i !== index)
    );
  };

  return (
    <section className="w-full h-fit md:grid md:grid-cols-3 md:gap-x-4 ">
      {extensions.map((extension, index) => (
        <div
          key={index}
          className={`w-full h-[13rem] rounded-2xl flex justify-between px-4 py-5 mt-4 relative ${
            isLightMode ? "bg-white" : "bg-gray-600"
          }`}
        >
          <div className="flex ">
            <img
              src={extension.logo}
              alt=""
              className="w-[3.5rem] h-[3.5rem] rounded-[12px]"
            />
            <div className="ml-4">
              <h1 className="text-white font-bold text-[1.6rem]">
                {extension.name}
              </h1>
              <p className="text-gray-400 text-[1rem]">
                {extension.description}
              </p>
            </div>
          </div>

          <div className="flex w-70 items-center justify-between absolute bottom-[1rem] md:w-[90%]">
            <button
              className={`text-white px-3 py-1 rounded-[2rem] border-gray-200 border-1 ${
                isLightMode ? "border-gray-700" : "border-gray-200"
              }`}
              onClick={() => removeExtension(index)}
            >
              Remove
            </button>

            {extension.isActive ? (
              <ToggleRight className="text-green-500" />
            ) : (
              <ToggleLeft className="text-red-500" />
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Extensions;
