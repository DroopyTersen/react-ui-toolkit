import React from "react";
import { Link } from "react-router-dom";

interface DropdownMenuProps {
  /** The child menu items */
  children: React.ReactNode;
  /** The menu button label. Can be a JSX element or a string */
  label: React.ReactNode | string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Defaults to align the dropdown to the left */
  align?: "left" | "right";
  /** Show the built in down caret. Defaults to false */
  showCaret?: boolean;
  /** Auto-Close behavior. Defaults to true. */
  autoClose?: "true" | "inside" | "outside" | "false";
  classNames?: {
    container?: string;
    button?: string;
    buttonOverride?: boolean;
    menu?: string;
  };
  disabled?: boolean;
}

export function DropdownMenu({
  label,
  children,
  onClick,
  showCaret = false,
  align = "left",
  autoClose = "true",
  classNames = {},
  disabled = false,
}: DropdownMenuProps) {
  let containerCssClass = ["dropdown", classNames.container].filter(Boolean).join(" ");
  let buttonCssClass = [
    !classNames.buttonOverride ? "btn btn-sm bg-transparent border-0 rounded-1" : "",
    showCaret ? "dropdown-toggle" : "",
    classNames.button,
  ]
    .filter(Boolean)
    .join(" ");
  let menuCssClass = [
    "dropdown-menu shadow",
    align === "right" ? "dropdown-menu-end" : "",
    classNames.menu,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={containerCssClass}>
      <button
        className={buttonCssClass}
        data-bs-toggle="dropdown"
        data-bs-auto-close={autoClose}
        disabled={disabled}
        onClick={onClick}
      >
        {label}
        <span className="rou"></span>
        <span className="dropdown-menu-"></span>
      </button>
      <ul className={menuCssClass}>{children}</ul>
    </div>
  );
}

DropdownMenu.Divider = () => (
  <li>
    <hr className="dropdown-divider" />
  </li>
);

DropdownMenu.Header = ({ children }) => (
  <li>
    <h6 className="dropdown-header">{children}</h6>
  </li>
);

interface DropdownMenuItemProps {
  children: React.ReactNode;
  className?: string;
  /** If you pass an onClick a button will be used */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** If you pass an href a Link will be used */
  href?: string;
  /**
   * The HTML element to use.
   * If you pass an HREF, defaults to a Link,
   * if you pass onClick, defaults to a button,
   * otherwise defaults to a div.
   */
  as?: any;
  [key: string]: any;
}
function DropdownMenuItem({
  children,
  onClick,
  className = "",
  href,
  as,
  ...rest
}: DropdownMenuItemProps) {
  let Element = as || (href ? Link : onClick ? "button" : "div");
  let props = {
    onClick,
    href,
    className: "dropdown-item py-2 px-3" + className,
    ...rest,
  };
  return (
    <li>
      <Element {...props}>{children}</Element>
    </li>
  );
}

DropdownMenu.Item = DropdownMenuItem;
