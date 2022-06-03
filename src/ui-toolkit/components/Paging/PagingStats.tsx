import React from "react";

interface PagingStatsProps {
  start: number;
  end: number;
  totalItems: number;
  className?: string;
}

export function PagingStats({ start, end, totalItems, className = "" }: PagingStatsProps) {
  return (
    <div className={className}>
      {start.toLocaleString()} - {end.toLocaleString()} of {totalItems.toLocaleString()}
    </div>
  );
}
