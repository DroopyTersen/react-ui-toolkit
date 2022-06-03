import React from "react";
import { usePagedItems } from "../../hooks/usePaging";
import { PagingComponent } from "./PagingComponent";

const storyConfig = {
  title: "Forms & Inputs/PagingComponent",
  component: PagingComponent,
  argTypes: { children: { control: false } },
};

export const Basic = () => {
  const data = [
    { number: "1", name: "Test" },
    { number: "2", name: "Test 2" },
  ];

  const itemsPerPage = 25;

  const [items, paging] = usePagedItems(data, itemsPerPage);

  return (
    <>
      <PagingComponent
        totalPages={paging.totalPages}
        currentPage={paging.currentPage}
        onChange={paging.goTo}
      />
    </>
  );
};

export default storyConfig;
