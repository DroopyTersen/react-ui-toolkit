import React from "react";

interface PagingComponentProps {
  totalPages: number;
  currentPage: number;
  onChange: (page: number) => void;
  maxPagesToDisplay?: number;
  className?: string;
}

interface Pages {
  page: number;
  display: string;
}

export function PagingComponent({
  totalPages,
  currentPage,
  onChange,
  maxPagesToDisplay = 5,
  className = "",
}: PagingComponentProps) {
  const pages: Array<Pages> = [];

  if (totalPages <= maxPagesToDisplay + 1) {
    for (let i = 1; i <= totalPages; ++i) {
      pages.push({ page: i, display: i.toString() });
    }
  } else {
    const pageGroup = Math.floor((currentPage - 1) / maxPagesToDisplay);
    const anchor = pageGroup * maxPagesToDisplay;
    const start = anchor + 1;
    const end = Math.min(anchor + maxPagesToDisplay, totalPages);

    if (pageGroup > 0) {
      pages.push({ page: 1, display: "1" });
      pages.push({ page: start - 1, display: "..." });
    }

    for (let i = start; i <= end; ++i) {
      pages.push({ page: i, display: i.toString() });
    }

    if (end < totalPages) {
      pages.push({ page: end + 1, display: "..." });
      pages.push({ page: totalPages, display: totalPages.toString() });
    }
  }

  const canGoBack = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  return (
    <nav className={className + " mb-3"}>
      <ul className="pagination justify-content-end mb-0">
        <li className={"page-item" + (!canGoBack ? " disabled" : "")}>
          <a
            className={"page-link" + (canGoBack ? " text-dark" : "")}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onChange(currentPage - 1);
            }}
          >
            Previous
          </a>
        </li>
        {pages.map((value) => (
          <li
            className={"page-item" + (currentPage == value.page ? " active" : "")}
            key={value.page}
          >
            <a
              className={"page-link " + (currentPage == value.page ? "bg-dark" : "text-dark")}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onChange(value.page);
              }}
            >
              {value.display}
            </a>
          </li>
        ))}
        <li className={"page-item" + (!canGoNext ? " disabled" : "")}>
          <a
            className={"page-link" + (canGoNext ? " text-dark" : "")}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onChange(currentPage + 1);
            }}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}
