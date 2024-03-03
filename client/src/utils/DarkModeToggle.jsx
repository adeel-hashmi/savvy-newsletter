import React, { useState, useEffect, useContext } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { DarkModeContext } from "../context/DarkModeContext";

const DarkModeToggle = () => {
  // Access dark mode state and toggle function from the context
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  // Effect to update the body class when dark mode changes
  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="flex items-center pl-2">
      {/* Hidden checkbox to handle dark mode state */}
      <input
        type="checkbox"
        id="darkModeToggle"
        className="hidden"
        checked={darkMode}
        onChange={toggleDarkMode}
        aria-label="Toggle Dark Mode"
      />

      {/* Custom toggle button */}
      <label
        htmlFor="darkModeToggle"
        className="cursor-pointer flex items-center"
      >
        <div className="relative">
          <div className="toggle__line w-10 h-8 bg-gray-400 rounded-full shadow-inner">
            <div
              className={`toggle__dot absolute w-8 h-8 bg-white rounded-full shadow -left-1 transform ${
                darkMode ? "translate-x-full" : "translate-x-0"
              } flex items-center justify-center`}
              style={{ marginLeft: darkMode ? "-12px" : "0" }}
            >
              {/* Display sun or moon icon based on dark mode state */}
              {darkMode ? (
                <FaMoon className="text-gray-800 w-4 h-4" />
              ) : (
                <FaSun className="text-primary dark:text-primary-dark w-4 h-4" />
              )}
            </div>
          </div>
        </div>
      </label>
    </div>
  );
};

export default DarkModeToggle;
