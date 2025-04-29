import { useState } from "react";
import Navbar from "../components/Navbar";
import ExtensionsTab from "../components/ExtensionsTab";
import Extensions from "../components/Extensions";
import { useLightMode } from "../context/LightMode";

const HomePage = () => {
  const { isLightMode } = useLightMode();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className={`w-full min-h-screen p-4 flex flex-col items-center md:px-[5rem] ${
        isLightMode ? "bg-[#cbd9f2]" : "bg-[#141d57]"
      }`}
    >
      <Navbar />
      <ExtensionsTab
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <Extensions
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </section>
  );
};

export default HomePage;
