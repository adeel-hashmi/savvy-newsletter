import React, { createContext, useState } from "react";

// Create a context for dark mode
export const DarkModeContext = createContext();

// DarkModeProvider component to provide dark mode context to its children
export const DarkModeProvider = ({ children }) => {
  // State to manage dark mode
  const [darkMode, setDarkMode] = useState(true);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Provide the dark mode state and toggle function to the context
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
