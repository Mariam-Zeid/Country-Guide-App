const PaginationItem = ({ children, className, onClick }) => {
  return (
    <li
      onClick={onClick}
      className={`cursor-pointer w-7 h-7 md:w-8 md:h-8 flex justify-center items-center bg-element rounded-md text-primary transition-all duration-100 shadow hover:bg-element/80 select-none ${className}`}
    >
      {children}
    </li>
  );
};

export default PaginationItem;
