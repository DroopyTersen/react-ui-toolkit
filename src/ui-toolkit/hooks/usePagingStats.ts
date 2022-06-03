import { useMemo } from "react";

export function usePagingStats(totalItems: number, itemsPerPage: number, currentPage: number) {
  return useMemo(() => {
    return {
      totalItems: totalItems,
      totalPages: Math.ceil(totalItems / itemsPerPage),
      start: totalItems > 0 ? Math.min((currentPage - 1) * itemsPerPage + 1, totalItems) : 0,
      end: Math.min(currentPage * itemsPerPage, totalItems),
    };
  }, [totalItems, itemsPerPage, currentPage]);
}
