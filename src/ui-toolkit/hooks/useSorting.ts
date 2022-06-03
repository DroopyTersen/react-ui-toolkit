import { useEffect, useMemo, useRef, useState } from "react";
import { getValue } from "../utils";

function defaultSortMethod<T>(items: T[], sortKey: string, sortDir: SortDirType) {
  // Just in case we didn't specify a sort key
  if (!sortKey) return items;

  const sortItems = [...items];
  sortItems.sort((a, b) => {
    let lhs = getValue(a, sortKey);
    lhs = lhs !== null && lhs !== undefined ? lhs : "";

    let rhs = getValue(b, sortKey);
    rhs = rhs !== null && rhs !== undefined ? rhs : "";

    if (lhs.localeCompare && rhs.localeCompare) {
      // Perform string comparison
      return sortDir === "asc" ? lhs.localeCompare(rhs) : rhs.localeCompare(lhs);
    }

    return sortDir === "asc" ? lhs - rhs : rhs - lhs;
  });

  return sortItems;
}

interface SortStateType {
  sortKey: string;
  sortDir: SortDirType;
}

export type SortDirType = "asc" | "desc";

// Based off of https://codesandbox.io/s/compount-components-with-a-hook-txolo?from-embed=&file=/hooks/useSorting.js
export function useSortedItems<T>(items: Array<T>, initial = {}, sortMethod = defaultSortMethod) {
  // We don't want to re-render if the sort fn changes
  // because most likely it changed "accidentally" by
  // consumer re-creating the same function definition
  const sortMethodRef = useRef(sortMethod);

  useEffect(() => {
    sortMethodRef.current = sortMethod;
  }, [sortMethod]);

  const [sort, setSort] = useState<SortStateType>({
    sortDir: "asc",
    sortKey: "",
    ...initial,
  });

  const onSort = (newSortKey: string) => {
    const isAsc = sort.sortKey === newSortKey && sort.sortDir === "asc";
    setSort({
      sortKey: newSortKey,
      sortDir: isAsc ? "desc" : "asc",
    });
  };

  // Sort case-insensitive by whatever column is selected
  const sortedItems = useMemo(
    () => sortMethodRef.current(items, sort.sortKey, sort.sortDir),
    [items, sort]
  );

  return {
    sortedItems,
    onSort,
    ...sort,
  };
}
