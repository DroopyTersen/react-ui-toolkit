import { useEffect, useRef, useState } from "react";
import { useDebouncedEffect } from "../../../hooks/useDebounce";
import { PickerOption, PickerOptions } from "./Picker.types";

export function useAutocompleteOptions(
  inputValue: string,
  getOptions: PickerOptions,
  config: { debounce?: number; getOptionsOnMount?: boolean } = {
    debounce: 200,
    getOptionsOnMount: true,
  }
) {
  const getOptionsRef = useRef(getOptions);
  useEffect(() => {
    if (typeof getOptions === "function") {
      getOptionsRef.current === getOptions;
    } else if (Array.isArray(getOptions)) {
      setOptions(getOptions);
    }
  }, [getOptions]);

  const isInitialMountRef = useRef(true);
  const [options, setOptions] = useState(() => {
    if (Array.isArray(getOptions)) {
      return getOptions;
    }
  });
  const [isLoading, setIsLoading] = useState(false);

  useDebouncedEffect(
    (debouncedInputValue) => {
      let isMounted = true;
      const shouldSkipGetOptions = isInitialMountRef.current && !config?.getOptionsOnMount;
      // If it's the initial mount, skip getting Options?
      if (
        !shouldSkipGetOptions &&
        getOptionsRef?.current &&
        typeof getOptionsRef.current === "function"
      ) {
        (async () => {
          setIsLoading(true);
          const newOptions = await (getOptionsRef?.current as any)?.(debouncedInputValue);
          if (isMounted) {
            setOptions(newOptions);
            setIsLoading(false);
          }
        })();
      }
      if (isInitialMountRef.current) {
        isInitialMountRef.current = false;
      }
      return () => {
        isMounted = false;
      };
    },
    inputValue,
    config.debounce || 250
  );

  return [options, { isLoading }] as [PickerOption[], { isLoading: boolean }];
}
