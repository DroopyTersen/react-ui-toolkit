import { useEffect, useRef } from "react";

export default function useOnClickOutside(ref, handler) {
  const handlerRef = useRef(handler);
  useEffect(() => {
    handlerRef.current = handler;
  });
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!handlerRef.current || !ref.current || ref.current.contains(event.target)) {
        return;
      }

      handlerRef.current(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref]); // Empty array ensures that effect is only run on mount and unmount
}
