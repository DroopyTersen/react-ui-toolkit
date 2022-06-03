import { useEffect, useRef, useState } from "react";
// https://dev.to/droopytersen/usedebouncedeffect-hook-4204

export function useDebouncedEffect<T>(
  effectFn: (debouncedValue: T) => void | (() => void),
  value: T,
  delay: number
) {
  let effectRef = useRef(effectFn);
  let updatedValue = useDebouncedValue(value, delay);
  useEffect(() => {
    effectRef.current = effectFn;
  }, [effectFn]);
  useEffect(() => {
    if (effectRef.current) {
      return effectRef.current(updatedValue);
    }
  }, [updatedValue]);
}

export function useDebouncedUpdateEffect<T>(
  effectFn: (debouncedValue: T) => void | (() => void),
  value: T,
  delay: number
) {
  let effectRef = useRef(effectFn);
  let isFirstPass = useRef(true);
  let updatedValue = useDebouncedValue(value, delay);
  useEffect(() => {
    effectRef.current = effectFn;
  }, [effectFn]);
  useEffect(() => {
    if (effectRef.current && !isFirstPass.current) {
      return effectRef.current(updatedValue);
    }
    if (isFirstPass.current) {
      isFirstPass.current = false;
    }
  }, [updatedValue]);
}

// EXAMPLE USAGE
// function SearchBox({ onChange, defaultValue = "" }) {
//   // We store one value for the instant updates
//   let [value, setValue] = useState(defaultValue);

//   useDebouncedEffect(
//     (debouncedValue) => {
//       console.log("Firing onchange", debouncedValue);
//       onChange(debouncedValue);
//     },
//     value,
//     300
//   );

//   return <input value={value} onChange={(e) => setValue(e.target.value)} />;
// }

export function useDebouncedValue(value, delay) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Update state to the passed in value after the specified delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      // If our value changes (or the component unmounts), React will
      // run this cleanup function to cancel the state update.
      clearTimeout(handler);
    };
    // These are the dependencies, if the value or the delay amount
    // changes, then cancel any existing timeout and start waiting again
  }, [value, delay]);

  return debouncedValue;
}

export function useDebouncedValues(values, delay) {
  // State and setters for debounced value
  const [debouncedValues, setDebouncedValues] = useState(values);

  useEffect(() => {
    // Update state to the passed in value after the specified delay
    const handler = setTimeout(() => {
      setDebouncedValues(values);
    }, delay);

    return () => {
      // If our value changes (or the component unmounts), React will
      // run this cleanup function to cancel the state update.
      clearTimeout(handler);
    };
    // These are the dependencies, if the value or the delay amount
    // changes, then cancel any existing timeout and start waiting again
  }, [...values, delay]);

  return debouncedValues;
}
