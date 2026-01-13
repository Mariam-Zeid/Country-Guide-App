"use client";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import PaginationItem from "./components/pagination-item";

const Pagination = ({
  currentPage,
  totalPages,
  nextPage,
  prevPage,
  goToPage,
}) => {
  if (totalPages <= 1) return null;

  const pages = [];

  // Always show first page
  pages.push(1);

  // Middle logic
  let startPage;
  let endPage;

  if (currentPage <= 4) {
    // Near the start
    startPage = 2;
    endPage = Math.min(5, totalPages - 1);
  } else if (currentPage >= totalPages - 2) {
    // Near the end
    startPage = Math.max(totalPages - 4, 2);
    endPage = totalPages - 1;
  } else {
    // In the middle
    startPage = currentPage - 1;
    endPage = currentPage + 1;
  }

  if (startPage > 2) pages.push("...");

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  if (endPage < totalPages - 1) pages.push("...");

  // Always show last page
  pages.push(totalPages);

  return (
    <ul className="flex items-center mt-10 gap-2 flex-wrap justify-end">
      <PaginationItem
        onClick={prevPage}
        disabled={currentPage === 1}
        className={
          currentPage === 1
            ? "opacity-50 bg-element/50 cursor-not-allowed!"
            : ""
        }
      >
        <FaAngleLeft size={20} />
      </PaginationItem>

      {/* Pages */}
      {pages.map((page, idx) =>
        page === "..." ? (
          <PaginationItem
            key={`dots-${idx}`}
            className="shadow-none hover:bg-transparent cursor-default select-none"
          >
            &#8230;
          </PaginationItem>
        ) : (
          <PaginationItem
            key={page}
            onClick={() => goToPage(page)}
            className={
              currentPage === page
                ? "bg-sky-600 text-white font-semibold"
                : "bg-element/50 hover:bg-element/80"
            }
          >
            {page}
          </PaginationItem>
        )
      )}

      <PaginationItem
        onClick={nextPage}
        disabled={currentPage === totalPages}
        className={
          currentPage === totalPages
            ? "opacity-50 bg-element/50 cursor-not-allowed!"
            : ""
        }
      >
        <FaAngleRight />
      </PaginationItem>
    </ul>
  );
};

export default Pagination;
