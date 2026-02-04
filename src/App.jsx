import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./components/Home";
import "./index.css";
import BackgroundEffect from "./components/background/BackgroundEffect";

function App() {
  return (
    <ThemeProvider>
      <BackgroundEffect />
      <Home />
    </ThemeProvider>
  );
}

export default App;
