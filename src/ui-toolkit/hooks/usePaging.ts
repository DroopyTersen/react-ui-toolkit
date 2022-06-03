import { useEffect, useState } from "react";
import { useUpdateEffect } from "./useUpdateEffect";

function validatePageNumber(currentPage: number, totalPages: number): number {
  if (currentPage) {
    const qsPage = parseInt(currentPage + "");
    if (!Number.isNaN(qsPage)) {
      currentPage = qsPage;
    } else {
      return 1;
    }
  }

  // If current page is too high, set it to the last page
  // if (totalPages > 0 && currentPage > totalPages) return totalPages;

  // If current page is too high, set it to the first page
  if (totalPages > 0 && currentPage > totalPages) return 1;
  else if (currentPage < 1) return 1;

  return currentPage;
}

export function usePaging(totalPages: number, { initialPage = 1 } = {}) {
  const [currentPage, setCurrentPage] = useState(() => validatePageNumber(initialPage, totalPages));
  useEffect(() => {
    setCurrentPage(validatePageNumber(initialPage, totalPages));
  }, [initialPage, totalPages]);

  let goBack = () => {
    let newPage = currentPage - 1;
    if (newPage < 1) newPage = totalPages;
    setCurrentPage(newPage);
  };
  let goForward = () => {
    let newPage = currentPage + 1;
    if (newPage > totalPages) newPage = 1;
    setCurrentPage(newPage);
  };
  let goTo = (pageNumber: number) => {
    if (pageNumber > totalPages) pageNumber = totalPages;
    if (pageNumber < 1) pageNumber = 1;
    setCurrentPage(pageNumber);
  };

  return {
    currentPage,
    goForward,
    goBack,
    goTo,
    totalPages,
  } as PagingContext;
}

export const usePagedItems = function <T = any>(
  allItems: T[],
  itemsPerPage: number,
  { initialPage = 1 } = {}
) {
  let totalPages = Math.ceil(allItems.length / itemsPerPage);
  let paging = usePaging(totalPages, { initialPage });
  let startIndex = (paging.currentPage - 1) * itemsPerPage;
  let endIndex = startIndex + itemsPerPage;
  let isWrapping = endIndex > allItems.length;

  let items = allItems.slice(startIndex, endIndex);
  // if (isWrapping) {
  //   items = [...items, ...allItems.slice(0, endIndex - allItems.length)];
  // }

  useUpdateEffect(() => {
    paging.goTo(1);
  }, [allItems]);

  return [items, paging] as [T[], PagingContext];
};

export interface PagingContext {
  /** Go backwards one page. If you go below page 1, you will be sent to the last page. */
  goBack: () => void;
  /** Go forwards one page. If you exceed the max page, it will go back to the first page. */
  goForward: () => void;
  /** Jump to a specific page number */
  goTo: (page: number) => void;
  /** The current page in state */
  currentPage: number;
  /** The total number of pages */
  totalPages: number;
}
