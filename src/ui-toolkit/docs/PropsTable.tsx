import React from "react";
import "./PropsTable.scss";
export function PropsTable({ properties = [] }: PropsTableProps) {
  return (
    <div className="props-table">
      {properties.map(({ name, description, type, isRequired }) => (
        <div className="row" key={name}>
          <div className="name">{name}</div>
          <div className={isRequired}>{isRequired}</div>
          <div className="type">
            <code>{type}</code>
          </div>
          <div className="description">{description}</div>
        </div>
      ))}
    </div>
  );
}

export interface PropsTableProps {
  /** Optional override to pass in your own props */
  properties?: Property[];
}

export interface Property {
  name: string;
  description?: string;
  isRequired: "Required" | "Optional";
  type: string;
}
