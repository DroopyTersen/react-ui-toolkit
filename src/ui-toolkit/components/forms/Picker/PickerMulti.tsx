import React from "react";
import { forwardRef, useMemo, useState } from "react";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import { useDebouncedEffect } from "../../../hooks/useDebounce";
import { pickerStyles } from "./Picker.styles";
import { PickerMultiProps, PickerOption } from "./Picker.types";
import { useAutocompleteOptions } from "./useAutocompleteOptions";

const parseSelectedOptions = (values: PickerOption[] | string[], options?: PickerOption[]) => {
  if (!values?.length) return [];
  if ((values?.[0] as PickerOption)?.value) return values as PickerOption[];
  return values
    .map((value) => {
      return options?.find?.((o) => o.value === value) || { value, label: value };
    })
    .filter(Boolean);
};

export const PickerMulti = forwardRef<any, PickerMultiProps>(function PickerMulti(
  { initialValue, creatable, onChange, selectProps, options: optionsOrGetOptions, ...rest },
  ref
) {
  let SelectComponent = creatable === true ? CreatableSelect : Select;
  let [selectedOptions, setSelectedOptions] = useState(() =>
    parseSelectedOptions(initialValue, optionsOrGetOptions as any[])
  );
  let [inputValue, setInputValue] = useState("");
  let [options, { isLoading }] = useAutocompleteOptions(inputValue, optionsOrGetOptions);

  useDebouncedEffect(
    () => {
      onChange(selectedOptions);
    },
    selectedOptions,
    100
  );

  let optionsToShow = useMemo(() => {
    if (!options?.length) return selectedOptions || [];
    return options.filter((o) => !selectedOptions.find((so) => so.value + "" === o.value + ""));
  }, [selectedOptions, options]);
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
      defaultValue={selectedOptions}
      onChange={(options: PickerOption[]) => {
        setSelectedOptions(options);
      }}
      isMulti={true}
      options={optionsToShow}
    />
  );
});
