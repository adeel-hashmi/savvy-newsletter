import React from "react";

const HeroCard = ({ icon, title, description, showDescription }) => {
  return (
    <div className="max-w-sm p-4 flex gap-4 bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="bg-primary  dark:bg-primary-dark p-2 my-auto rounded-full flex items-center justify-center">
        {icon}
      </div>
      <div className="py-auto my-auto">
        <h5 className="mb-1 text-normal font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        {showDescription && (
          <p className="text-xs font-normal text-gray-500 dark:text-gray-400">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default HeroCard;
