import BootstrapPopover from "bootstrap/js/dist/popover.js";
import React, { useEffect, useRef } from "react";
function usePopover(popoverRef, { title, content }) {
  useEffect(() => {
    const popover = new BootstrapPopover(popoverRef.current, {
      content: content,
      title: title,
      trigger: "focus",
      html: true,
    });

    return () => {
      popover.dispose();
    };
  }, [popoverRef, title, content]);
}
export function Popover({ children, title, content }) {
  const buttonRef = useRef();
  usePopover(buttonRef, { title, content });
  return (
    <a
      role="button"
      ref={buttonRef}
      className="btn info"
      tabIndex={0}
      data-bs-toggle="popover"
      data-bs-trigger="focus"
    >
      {children}
    </a>
  );
}
