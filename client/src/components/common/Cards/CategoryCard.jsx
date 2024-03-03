import { Card } from "@nextui-org/react";
import React from "react";
import { Link, redirect } from "react-router-dom";

const CategoryCard = ({ title, description, iconPath, redirectPath }) => {
  const handleMouseEnter = (e) => {
    e.currentTarget.querySelector(".top-right-icon").style.opacity = "1";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.querySelector(".top-right-icon").style.opacity = "0";
  };

  return (
    <Card
      href="#"
      className="w-full p-6 relative overflow-hidden group bg-white dark:bg-gray-900"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primaryDark to-primaryLight dark:from-gray-700 dark:to-gray-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      {iconPath && (
        <img
          src={iconPath}
          alt={title}
          className="mx-auto mb-2 w-16 h-16 object-cover dark:invert"
        />
      )}

      <img
        src={iconPath} // Replace this with the appropriate icon for the top-right position
        alt={title}
        height="30px"
        width="40px"
        className="absolute z-10 -top-12 -right-12 text-9xl text-primary top-right-icon opacity-0 group-hover:opacity-100 group-hover:rotate-12 transition-transform duration-300"
      />

      <h2 className="font-semibold text-lg text-primaryLight dark:text-primaryLight-dark group-hover:text-white relative z-10 duration-300">
        {title}
      </h2>
      <p className="dark:text-primaryDark-dark group-hover:text-gray-50 dark:group-hover:text-primary-dark relative z-10 duration-300">
        {description}
      </p>

      <div className="flex justify-end mt-4">
        <Link
          to={redirectPath}
          className="text-lg text-white bg-primary hover:bg-primaryDark dark:bg-primary-dark dark:hover:bg-primaryDark-dark px-4 py-2 rounded-full relative z-10 duration-300"
        >
          Browse Gigs
        </Link>
      </div>
    </Card>
  );
};

export default CategoryCard;
