import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { SlMagnifier } from "react-icons/sl";
import logo from "/assets/logo/logo.png";
import logoFull from "/assets/logo/full_logo.png";
import logoBlack from "/assets/logo/logo_black.png";
import slogan from "/assets/logo/slogan.png";
import sloganBlack from "/assets/logo/slogan_black.png";
import DarkModeToggle from "/src/utils/DarkModeToggle";
import { DarkModeContext } from "/src/context/DarkModeContext";
import { useDisclosure } from "@nextui-org/react";
// import { useStickToTop } from "../../context/StickToTopProvider";

const Header = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [isRegistered, setIsRegistered] = useState(null);
  const isDarkModeContext = useContext(DarkModeContext); // Use the DarkModeContext
  //   const { disableStickToTop } = useStickToTop();

  const toggleMenu = () => {
    setMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const openLoginModal = () => {
  //   setIsRegistered(true);
  //   onOpen();
  // };

  const openLoginModal = (isRegisteredValue) => {
    setIsRegistered(isRegisteredValue);
    onOpen();
  };

  const openSignupModal = () => {
    setIsRegistered(false);
    onOpen();
  };

  return (
    <header>
      {/* Desktop Navigation */}
      <nav
        className={`hidden lg:flex justify-center w-full z-50 -mb-28 ${
          scrolling
            ? "dark:bg-gray-900 bg-white backdrop-blur-md"
            : "relative transition-all duration-300 ease-in-out"
        } ${"fixed"}`}
      >
        <div
          className={`lg:my-4 w-10/12 lg:flex sm:mx-10 md:mx-20 justify-between items-center ${
            scrolling ? "text-primary dark:text-primary-dark" : "text-white"
          }`}
        >
          {/* Logo and Slogan */}
          <Link to="/" className="text-3xl font-bold leading-none">
            <div className="flex items-center">
              <img
                src={logo}
                alt="Logo"
                className="h-14 w-14 mr-2 drop-shadow-xl"
              />
              <img
                src={
                  isDarkModeContext.darkMode || scrolling ? slogan : sloganBlack
                }
                alt="Slogan"
                className="h-10"
              />
            </div>
          </Link>

          {/* Search Icon */}
          <div className="hidden lg:inline-block lg:ml-auto lg:mr-3">
            {/* <Link
              to="/categories"
              className="py-2 px-3 hover:bg-gray-100 hover:text-primary dark:hover:text-primary-dark inline-flex items-center rounded-full transition duration-200"
            >
              <SlMagnifier className="h-6" />
            </Link> */}
          </div>

          {/* Navigation Links */}

          <div className="hidden lg:inline-block lg:mr-2">
            <Link
              onClick={openSignupModal}
              className="p-3 hover:bg-gray-100 hover:text-primary dark:hover:text-primary-dark rounded-full transition duration-200"
            >
              About
            </Link>
          </div>

          <div className="hidden lg:inline-block lg:mr-3">
            {/* <button
              onClick={openLoginModal}
              // to="sign-in"
              className="p-3 hover:bg-gray-100 hover:text-primary dark:hover:text-primary-dark rounded-full transition duration-200"
            >
              Log In
            </button> */}
          </div>

          <div className="hidden lg:inline-block">
            <Link
              onClick={openSignupModal}
              // to="sign-up"
              className="py-3 px-6 bg-primary hover:bg-primaryDark dark:bg-primary-dark dark:hover:bg-primaryDark-dark text-sm text-white rounded-full transition duration-200"
            >
              Get Early Bird Access
            </Link>
          </div>
          <DarkModeToggle />
        </div>
      </nav>

      {/* Mobile Navigation */}

      <nav className="lg:hidden relative -mb-14 w-full flex justify-between items-center px-6 z-50 ">
        <Link to="/" className="text-3xl font-bold leading-none">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-14 " />
            <img
              src={isDarkModeContext.darkMode ? slogan : sloganBlack}
              alt="Slogan"
              className="h-8"
            />
          </div>
        </Link>

        <div>
          <button
            className="navbar-burger flex items-center px-6 py-3 rounded-full bg-primary dark:bg-primary-dark"
            onClick={toggleMenu}
          >
            <svg
              className="block h-4 w-4 fill-white "
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden navbar-menu relative z-50 ${
          isMenuOpen ? "" : "hidden"
        }`}
      >
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto dark:bg-gray-800">
          <div className="flex items-center mb-8">
            <Link to="/" className="mr-auto text-3xl font-bold leading-none">
              <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
            </Link>
            <button
              className="navbar-close dark:bg-gray-700 dark:rounded-md"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500 hover:bg-gray-50"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {/* <div>
            <ul className="text-primary dark:text-primary-dark">
              <li className="mb-1">
                <Link
                  to="/"
                  className="block p-4 bg-gray-50 hover:bg-gray-100 rounded dark:bg-gray-700"
                >
                  Home
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  onClick={openSignupModal}
                  className="block p-4 bg-gray-50 hover:bg-gray-100 rounded dark:bg-gray-700"
                >
                  Become a Seller
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/categories"
                  className="block p-4 bg-gray-50 hover:bg-gray-100 rounded dark:bg-gray-700"
                >
                  Browse Categories
                </Link>
              </li>
            </ul>
          </div> */}
          <div className="mt-auto text-primary dark:text-primary-dark">
            {/* DarkModeToggle inside the mobile menu */}
            <div
              className="px-4 py-3 leading-loose flex bg-gray-50 hover:bg-gray-100 rounded-full justify-center dark:bg-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              Switch Theme <DarkModeToggle />
            </div>
            <div className="pt-6">
              {/* <button
                onClick={openLoginModal}
                to="sign-in"
                className="block w-full px-4 py-3 mb-3 leading-loose text-center bg-gray-50 hover:bg-gray-100 rounded-full text-primary dark:text-primary-dark dark:bg-gray-700"
              >
                Log In
              </button> */}
              <button
                onClick={openSignupModal}
                className="w-full block px-4 py-3 mb-2 leading-loose text-center text-white bg-primary dark:bg-primary-dark hover:bg-yellow-600 rounded-full"
              >
                Get Early Bird Access
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
