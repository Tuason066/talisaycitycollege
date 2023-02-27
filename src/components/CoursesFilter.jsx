const CoursesFilter = ({ departments, handleFilterButtons, currentFilter }) => (
  <>
    {departments.map((department, index) => (
      <button
        key={index}
        type='button'
        onClick={handleFilterButtons}
        className={`${
          currentFilter === department
            ? 'bg-customYellow-500 text-customBlue-500'
            : 'bg-customBlue-500 text-white'
        } hover:bg-customYellow-500 hover:text-customBlue-500 text-base px-lg py-base rounded inline-block m-1 md:m-2 shadow transition-all duration-300`}
      >
        {department}
      </button>
    ))}
  </>
);
export default CoursesFilter;
