import React, { useEffect, useState, useRef } from "react";
import { ToggleRight, ToggleLeft } from "lucide-react";
import { useLightMode } from "../context/LightMode";
import { animate } from "motion";
import { extensionsInitial } from "../lib/constants";

// const Extensions = () => {
const Extensions = ({ activeIndex }) => {
  const { isLightMode } = useLightMode();
  const [extensions, setExtensions] = useState(extensionsInitial);
  const cardsRef = useRef([]);

  const filteredExtensions =
    activeIndex === "All"
      ? extensions
      : extensions.filter((ex) =>
          activeIndex === "Active"
            ? ex.isActive === true
            : ex.isActive === false
        );

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      if (card) {
        animate(
          card,
          { opacity: [0, 1], y: [40, 0] },
          { delay: i * 0.05, duration: 0.4, easing: "ease-out" }
        );
      }
    });
  }, [filteredExtensions]);

  const removeExtension = (index) => {
    setExtensions((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <section className="w-full h-fit mt-4 md:grid md:grid-cols-3 md:gap-x-4 md:max-w-[1200px]">
      {filteredExtensions.map((extension, index) => (
        <div
          key={index}
          ref={(el) => (cardsRef.current[index] = el)}
          className={`w-full h-[13rem] rounded-2xl flex justify-between px-4 py-5 mt-4 relative ${
            isLightMode ? "bg-white" : "bg-gray-600"
          }`}
        >
          <div className="flex">
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
              className={`px-3 py-1 rounded-[2rem] border-1 cursor-pointer ${
                isLightMode
                  ? "border-gray-700 text-gray-700"
                  : "border-gray-200 text-white"
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
