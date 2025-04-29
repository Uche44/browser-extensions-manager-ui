import { createContext, useState, useContext } from "react";

const LightModeContext = createContext();

export const LightModeProvider = ({ children }) => {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleLightMode = () => {
    setIsLightMode((prev) => !prev);
  };

  return (
    <LightModeContext.Provider value={{ isLightMode, toggleLightMode }}>
      {children}
    </LightModeContext.Provider>
  );
};
export const useLightMode = () => {
  const context = useContext(LightModeContext);
  if (!context) {
    throw new Error("useLightMode must be used within a LightModeProvider");
  }
  return context;
}