import propTypes from "prop-types";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { Input } from "../forms";

const TableSearchbox = ({ onChange, value, placeholder = "Search...", className = null }) => {
  return (
    <div className={`search-bar ${className}`}>
      <Input
        placeholder={placeholder}
        value={value}
        prefix={<FaSearch className="mt-1" />}
        type="search"
        className="text-truncate"
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    </div>
  );
};

TableSearchbox.propTypes = {
  onChange: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
};

export default TableSearchbox;
