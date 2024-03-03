import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { DarkModeProvider } from "./context/DarkModeContext.jsx";
import { NextUIProvider } from "@nextui-org/react";
import "./index.css";
import "./fonts.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </NextUIProvider>
  </React.StrictMode>
);
