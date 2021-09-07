// import "./Autocomplete.scss";

import { useCombobox } from "downshift";
import React, { useEffect, useRef, useState } from "react";

import { Button } from "../Button/Button";
import { Input } from "../forms";

import { useDebouncedEffect } from "../../hooks/useDebounce";

export interface RenderOptionData<OptionType = any> {
  option: OptionType;
  index: number;
  selected: boolean;
  highlighted: boolean;
  props: any;
}
export interface AutocompleteProps<OptionType> {
  /** Function that provides the available options based on the provided input value. */
  getOptions: (
    inputValue: string,
    selectedOption?: OptionType
  ) => OptionType[] | Promise<OptionType[]>;
  /** The initial value of the input */
  initialValue?: string;
  /** On change provides both the raw input value and the selected option */
  onChange?: (inputValue: string, selectedOption?: OptionType) => void;
  /** What should each option look like? */
  renderOption: (data: RenderOptionData<OptionType>) => React.ReactNode;
  /** What should display in the input when an option is selected? */
  getInputValue?: (option: OptionType) => string;
  /** What should be used for the React key? */
  getKey?: (option: OptionType) => string;
  /** Used to identify the form control */
  id?: string;
  /** Additional autocomplete configuration */
  config?: AutocompleteConfig;
}
export interface AutocompleteConfig {
  /** How long to delay the call to getOptions. Defaults to 0. */
  debounce?: number;
  /** Max height of dropdown. Defaults to "250px" */
  dropdownHeight?: string;
  /** Call getOptions on mount? Or only when input changes? Defaults to true */
  getOptionsOnMount?: boolean;
}

const defaultConfig: AutocompleteConfig = {
  debounce: 0,
  dropdownHeight: "250px",
  getOptionsOnMount: true,
};
export function Autocomplete<OptionType>({
  initialValue = "",
  getInputValue = (item) => JSON.stringify(item),
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange,
  renderOption = () => null,
  getKey,
  id,
  getOptions,
  config,
}: AutocompleteProps<OptionType>) {
  const { dropdownHeight, debounce, getOptionsOnMount } = {
    ...defaultConfig,
    ...config,
  };
  const isInitialMountRef = useRef(true);
  const [options, setOptions] = useState([]);
  const selectedItemRef = useRef(null);
  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
    inputValue,
  } = useCombobox({
    initialInputValue: initialValue,
    items: options,
    itemToString: getInputValue,
    id,
  });

  const onChangeRef = useRef(onChange);
  const getOptionsRef = useRef(getOptions);
  const getInputValueRef = useRef(getInputValue);

  useEffect(() => {
    getOptionsRef.current = getOptions;
    onChangeRef.current = onChange;
    getInputValueRef.current = getInputValue;
  });

  useEffect(() => {
    selectedItemRef.current =
      options.find((o) => getInputValueRef.current(o) === inputValue) || null;
    onChangeRef.current?.(inputValue, selectedItemRef.current);
  }, [inputValue, options, initialValue]);

  useDebouncedEffect(
    (debouncedInputValue) => {
      let isMounted = true;
      const shouldSkipGetOptions = isInitialMountRef.current && !getOptionsOnMount;
      // If it's the initial mount, skip getting Options?
      if (!shouldSkipGetOptions && getOptionsRef?.current) {
        (async () => {
          const newOptions = await getOptionsRef?.current(
            debouncedInputValue,
            selectedItemRef.current
          );
          if (isMounted) {
            setOptions(newOptions);
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
    debounce
  );

  return (
    <div className="autocomplete">
      <div {...getComboboxProps()} className="">
        <Input
          {...getInputProps()}
          id={id}
          aria-labelledby={null}
          suffix={
            !!options?.length && (
              <Button
                {...getToggleButtonProps()}
                variant="link"
                type="button"
                aria-label="toggle menu"
                style={{
                  border: "none",
                  borderRadius: "0 .25rem .25rem 0",
                  background: "white",
                  marginLeft: "-2px",
                }}
              >
                <i
                  className="bi bi-chevron-down text-body"
                  style={{ position: "relative", top: "3px" }}
                ></i>
              </Button>
            )
          }
        />
      </div>
      <div
        {...getMenuProps()}
        aria-labelledby={null}
        className="autocomplete-menu shadow position-absolute w-100 rounded overflow-auto"
        style={{ maxHeight: dropdownHeight, zIndex: 1000 }}
      >
        {isOpen &&
          options.map((item, index) => (
            <React.Fragment key={getKey?.(item) || getInputValue?.(item) || index}>
              {renderOption({
                option: item,
                index,
                highlighted: highlightedIndex === index,
                selected: selectedItemRef.current === item,
                props: getItemProps({ item, index }),
              })}
            </React.Fragment>
          ))}
      </div>
    </div>
  );
}
export const AutocompleteOption = React.forwardRef(function AutoCompleteOption(
  {
    highlighted = false,
    selected = false,
    children,
    className = "",
    props,
  }: Partial<RenderOptionData<any>> & { className?: string; children: React.ReactNode },
  ref
) {
  const cssClass = [
    className,
    "px-2 py-1",
    highlighted ? "bg-light" : "bg-white",
    selected ? "fw-bold" : "fw-normal",
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={cssClass} ref={ref} {...props}>
      {children}
    </div>
  );
});
