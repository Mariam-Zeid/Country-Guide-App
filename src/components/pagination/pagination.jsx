"use client";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import PaginationItem from "./components/pagination-item";

const Pagination = () => {
  return (
    <ul className="flex items-center mt-10 gap-2 flex-wrap justify-end">
      <PaginationItem className="opacity-50 bg-element/50 cursor-not-allowed">
        <FaAngleLeft size={20} />
      </PaginationItem>

      <PaginationItem className="shadow-none hover:bg-transparent cursor-default select-none">
        &#8230;
      </PaginationItem>

      <PaginationItem className="bg-sky-600 text-white font-semibold hover:bg-sky-500/90">
        1
      </PaginationItem>
      <PaginationItem>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
      <PaginationItem>4</PaginationItem>

      <PaginationItem className="opacity-50 bg-element/50 cursor-not-allowed">
        <FaAngleRight />
      </PaginationItem>
    </ul>
  );
};

export default Pagination;
