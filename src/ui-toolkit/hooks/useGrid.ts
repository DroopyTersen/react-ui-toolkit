import { usePagedItems } from "./usePaging";

interface useGridProps {
  pageSize?: number;
}

export function useGrid<T>(allItems: T[], { pageSize = 25 }: useGridProps = {}) {
  pageSize = pageSize || allItems.length;
  const [showingItems, paging] = usePagedItems(allItems, pageSize);

  const stats = {
    totalItems: allItems.length,
    start: allItems.length > 0 ? (paging.currentPage - 1) * pageSize + 1 : 0,
    end: Math.min(paging.currentPage * pageSize, allItems.length),
  };

  return {
    showingItems,
    paging,
    stats,
  };
}
