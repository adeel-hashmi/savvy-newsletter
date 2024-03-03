function GoButton({ title, width, height }) {
  return (
    <span className={`bg-primary dark:bg-primary-dark text-white rounded-full inline-flex w-full`}>
      <span className={`flex-grow px-${width} py-${height} flex justify-center items-center`}>
        {title}
      </span>
      <span className="bg-white rounded-full my-auto p-3 mx-1 flex items-center">
        <svg
          className="h-4 w-4 text-primary dark:text-yellow-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </span>
    </span>
  );
}

export default GoButton;
