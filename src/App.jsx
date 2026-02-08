import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./components/Home";
import "./index.css";
import BackgroundEffect from "./components/background/BackgroundEffect";
import Cursor from "./components/ui/Cursor";

function App() {
  return (
    <ThemeProvider>
      <Cursor />
      <BackgroundEffect />
      <Home />
    </ThemeProvider>
  );
}

export default App;
