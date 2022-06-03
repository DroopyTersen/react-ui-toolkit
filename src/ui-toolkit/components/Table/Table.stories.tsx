import React from "react";
import Table from "./Table";

const storyConfig = {
  title: "Surfaces/Table",
  component: Table,
  argTypes: { children: { control: false } },
};

export const Basic = () => {
  const data = [
    { number: "1", name: "Test" },
    { number: "2", name: "Test 2" },
  ];

  return (
    <Table>
      <Table.Header>
        <Table.Column>Number</Table.Column>
        <Table.Column>Name</Table.Column>
      </Table.Header>
      <Table.Body>
        {data.map((quote) => (
          <Table.Row key={quote.number}>
            <Table.Cell>{quote.number}</Table.Cell>
            <Table.Cell>{quote.name}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default storyConfig;
