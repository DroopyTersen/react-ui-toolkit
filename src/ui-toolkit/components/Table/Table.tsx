import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import TableSearchbox from "./TableSearchbox";

const Table = ({ children, className = null }) => {
  return (
    <div className={`overflow-auto flex-fill ${className}`}>
      <table className="table ui-toolkit-table table-hover">{children}</table>
    </div>
  );
};

const Header = ({ children, sortKey = null, sortDir = null, onSort = null, ...rest }) => {
  const hasSorting = onSort;
  const headers = !hasSorting
    ? children
    : React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          onSort,
          sortDir: child.props.id === sortKey ? sortDir : null,
          sortable: child.props.sortable,
        });
      });

  return (
    <thead {...rest}>
      <tr>{headers}</tr>
    </thead>
  );
};

const Column = ({
  children,
  id = null,
  sortDir = null,
  onSort = null,
  sortable = true,
  ...rest
}) => {
  const canSort = onSort && sortable;
  const isSorted = !!sortDir;

  return canSort ? (
    <th scope="col" className="sortable" onClick={() => onSort(id)} {...rest}>
      {children}{" "}
      {isSorted ? (
        sortDir === "asc" ? (
          <FaChevronUp color="grey" size=".75em" />
        ) : (
          <FaChevronDown color="grey" size=".75em" />
        )
      ) : null}
    </th>
  ) : (
    <th scope="col" {...rest}>
      {children}
    </th>
  );
};

const Body = ({ children, ...rest }) => {
  return <tbody {...rest}>{children}</tbody>;
};

const Footer = ({ children, ...rest }) => {
  return <tfoot {...rest}>{children}</tfoot>;
};

const Row = ({ children, ...rest }) => {
  return <tr {...rest}>{children}</tr>;
};

const Cell = ({ children, className = null, ...rest }) => {
  return (
    <td className={className} {...rest}>
      {children}
    </td>
  );
};

Table.Header = Header;
Table.Column = Column;
Table.Body = Body;
Table.Footer = Footer;
Table.Row = Row;
Table.Cell = Cell;
Table.Search = TableSearchbox;

export default Table;
