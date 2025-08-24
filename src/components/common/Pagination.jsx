import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const DOTS_LEFT = "DOTS_LEFT";
const DOTS_RIGHT = "DOTS_RIGHT";

const Pagination = ({ page, totalPages, onPageChange }) => {
  const getPagination = () => {
    const pages = [];
    const delta = 2;
    const left = Math.max(2, page - delta);
    const right = Math.min(totalPages - 1, page + delta);

    pages.push(1);

    if (left > 2) pages.push(DOTS_LEFT);

    for (let i = left; i <= right; i++) {
      pages.push(i);
    }

    if (right < totalPages - 1) pages.push(DOTS_RIGHT);

    if (totalPages > 1) pages.push(totalPages);

    return pages;
  };

  const pagination = getPagination();

  const goToPage = (p) => {
    if (typeof p !== "number") return;
    if (p < 1 || p > totalPages) return;
    onPageChange(p);
  };

  return (
    <div className="flex items-center justify-center mt-10 gap-2">
      {/* Prev */}
      <button
        disabled={page <= 1}
        onClick={() => goToPage(page - 1)}
        className={`p-2 rounded-lg ${
          page <= 1
            ? "bg-gray-600 cursor-not-allowed"
            : "bg-emerald-500 hover:bg-emerald-400"
        } text-white`}
        aria-label="Previous page"
      >
        <FiChevronLeft />
      </button>

      {/* Numbers + dots */}
      {pagination.map((token) => {
        if (token === DOTS_LEFT || token === DOTS_RIGHT) {
          return (
            <span key={token} className="px-3 py-2 text-gray-400 select-none">
              …
            </span>
          );
        }
        const num = token;
        const isActive = num === page;
        return (
          <button
            key={`page-${num}`}
            onClick={() => goToPage(num)}
            disabled={isActive}
            aria-current={isActive ? "page" : undefined}
            className={`px-4 py-2 rounded-lg ${
              isActive
                ? "bg-emerald-500 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {num}
          </button>
        );
      })}

      {/* Next */}
      <button
        disabled={page >= totalPages}
        onClick={() => goToPage(page + 1)}
        className={`p-2 rounded-lg ${
          page >= totalPages
            ? "bg-gray-600 cursor-not-allowed"
            : "bg-emerald-500 hover:bg-emerald-400"
        } text-white`}
        aria-label="Next page"
      >
        <FiChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
