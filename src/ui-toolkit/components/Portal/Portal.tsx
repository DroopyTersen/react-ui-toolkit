import React, { useRef } from "react";
import ReactDOM from "react-dom";

export const Portal = ({ children, selector }: PortalProps) => {
  const domRef = useRef(document.querySelector(selector));

  if (!domRef.current) {
    console.error("Unable to find dom element", selector);
    return null;
  }

  return ReactDOM.createPortal(children, domRef.current);
};

interface PortalProps {
  children: React.ReactNode;
  selector: string;
}
