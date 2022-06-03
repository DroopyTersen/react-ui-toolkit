import React, { useState } from "react";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import { useDebouncedUpdateEffect } from "../../../hooks/useDebounce";
import { pickerStyles } from "./Picker.styles";
import { PickerOption, PickerSingleProps } from "./Picker.types";
import { useAutocompleteOptions } from "./useAutocompleteOptions";

const parseSelectedOption = (value: string, options?: PickerOption[]) => {
  if (!value) return null;

  return options?.find((o) => o.value === value) || { value, label: value };
};

export const PickerSingle = React.forwardRef<any, PickerSingleProps>(function PickerSingle(
  { initialValue, creatable, onChange, selectProps, options: optionsOrGetOptions, ...rest },
  ref
) {
  let SelectComponent = creatable === true ? CreatableSelect : Select;
  let [selectedOption, setSelectedOption] = useState(() =>
    parseSelectedOption(initialValue, optionsOrGetOptions as any[])
  );
  let [inputValue, setInputValue] = useState(selectedOption?.label || "");
  let [options, { isLoading }] = useAutocompleteOptions(inputValue, optionsOrGetOptions);

  useDebouncedUpdateEffect(
    () => {
      onChange(selectedOption?.value || "", selectedOption);
    },
    selectedOption,
    100
  );

  let optionsToShow = options?.length > 0 ? options : selectedOption ? [selectedOption] : [];
  return (
    <SelectComponent
      styles={pickerStyles}
      ref={ref}
      {...rest}
      isLoading={isLoading}
      {...selectProps}
      classNamePrefix="kolbe-picker"
      onInputChange={(val) => {
        setInputValue(val);
      }}
      // If they pass a 'getOptions' function we'll assume that is responsible for filtering
      // the options. If they pass an array of options we'll leverage the default filtering
      filterOption={typeof optionsOrGetOptions === "function" ? () => true : undefined}
      defaultValue={selectedOption}
      onChange={(option: PickerOption) => {
        setSelectedOption(option);
      }}
      options={optionsToShow}
    />
  );
});
