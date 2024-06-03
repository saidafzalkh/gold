import classNames from "classnames";
import React from "react";

interface PaginationProps {
  currentPage: number;
  pages: number;
  onPaginate?: (pageIdx: number) => void;
  className?: string;
}

function PaginationWidget({
  currentPage,
  pages,
  className,
  onPaginate,
}: PaginationProps) {
  const allPages = Array(pages)
    .fill(null)
    .map((el, idx) => idx + 1);

  const baseClassName = classNames("pagination", className);

  return (
    <ul className={baseClassName}>
      <li className="page-item previous">
        <a onClick={() => onPaginate?.(currentPage - 1)} className="page-link">
          <i className="previous"></i>
        </a>
      </li>
      {allPages.map((page, idx) => (
        <li
          className={classNames("page-item", idx === currentPage && "active")}
        >
          <a onClick={() => onPaginate?.(idx)} className="page-link">
            {page}
          </a>
        </li>
      ))}
      <li className="page-item next">
        <a onClick={() => onPaginate?.(currentPage + 1)} className="page-link">
          <i className="next"></i>
        </a>
      </li>
    </ul>
  );
}

export { PaginationWidget };
