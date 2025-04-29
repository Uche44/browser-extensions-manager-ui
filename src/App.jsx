import React from "react";
import HomePage from "./pages/HomePage";
import { LightModeProvider } from "./context/LightMode";
const App = () => {
  return (
    <div>
      <LightModeProvider>
        <HomePage />
      </LightModeProvider>
    </div>
  );
};

export default App;
