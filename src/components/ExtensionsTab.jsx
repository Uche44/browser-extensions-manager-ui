import { useLightMode } from "../context/LightMode";

const ExtensionsTab = ({ activeIndex, setActiveIndex }) => {
  const { isLightMode } = useLightMode();
  const lists = ["All", "Active", "InActive"];

  return (
    <>
      <section className="w-full h-fit flex flex-col items-center mt-4 md:flex-row md:justify-between md:max-w-[1200px]">
        <h1
          className={`font-bold text-[2.8rem] ${
            isLightMode ? "text-[#141d57]" : "text-white"
          }`}
        >
          Extensions List
        </h1>

        <div className="h-fit w-full flex justify-between px-4 mt-3 md:w-[27%]">
          {lists.map((list, index) => (
            <div
              key={index}
              value={list}
              className={`text-[1.2em] py-2 px-5 border-gray-400 text-white border-2 cursor-pointer rounded-[2.5rem] ${
                activeIndex === list ? "bg-red-500" : "bg-gray-700"
              }`}
              onClick={() => setActiveIndex(list)}
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
