import { useLightMode } from "../context/LightMode";

const Navbar = () => {
  const { isLightMode, toggleLightMode } = useLightMode();

  return (
    <header
      className={`h-[4.5rem] w-full ${
        isLightMode ? "bg-white" : "bg-gray-600"
      } rounded-2xl flex justify-between p-4 `}
    >
      <img
        src="/assets/images/logo.svg"
        alt=""
      />
      <button
        onClick={toggleLightMode}
        className="w-12 h-full  rounded-xl bg-gray-500 grid place-content-center cursor-pointer"
      >
        <img
          src={
            isLightMode
              ? "/assets/images/icon-moon.svg"
              : "/assets/images/icon-sun.svg"
          }
          alt=""
        />
      </button>
    </header>
  );
};

export default Navbar;
