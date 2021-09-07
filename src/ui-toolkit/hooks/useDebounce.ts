import { useEffect, useRef, useState } from "react";
// https://dev.to/droopytersen/usedebouncedeffect-hook-4204

export function useDebouncedValue(value, delay) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    let isMounted = true;
    // Update state to the passed in value after the specified delay
    const handler = setTimeout(() => {
      if (isMounted) {
        setDebouncedValue(value);
      }
    }, delay);

    return () => {
      // If our value changes (or the component unmounts), React will
      // run this cleanup function to cancel the state update.
      clearTimeout(handler);
      isMounted = false;
    };
    // These are the dependencies, if the value or the delay amount
    // changes, then cancel any existing timeout and start waiting again
  }, [value, delay]);

  return debouncedValue;
}

export function useDebouncedEffect<T>(
  effectFn: (debouncedValue: T) => void | (() => void),
  value: T,
  delay: number
) {
  const effectRef = useRef(effectFn);
  const updatedValue = useDebouncedValue(value, delay);
  useEffect(() => {
    effectRef.current = effectFn;
  }, [effectFn]);
  useEffect(() => {
    if (effectRef.current) {
      // return the Effect Fn so that the caller has the opportunity
      // to provide a cleanup function.
      return effectRef.current(updatedValue);
    }
  }, [updatedValue]);
}
