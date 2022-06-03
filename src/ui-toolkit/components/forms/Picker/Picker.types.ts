import Select from "react-select";
export interface PickerOption {
  value: string;
  label: string;
  [key: string]: any;
}

export type PickerOptions =
  | PickerOption[]
  | ((inputValue: string) => Promise<PickerOption[]> | PickerOption[]);

export interface PickerBaseProps {
  /** Allow the user to enter their own value? */
  creatable?: boolean;
  /** Function that provides the available options based on the provided input value. */
  options: PickerOptions;

  name?: string;
  className?: string;
  /** React Select props */
  selectProps?: React.ComponentProps<typeof Select>;
}

export interface PickerSingleProps extends PickerBaseProps {
  initialValue?: string;
  /** On change provides both the raw input value and the selected option */
  onChange?: (inputValue: string, selectedOption?: PickerOption) => void;
}

export interface PickerMultiProps extends PickerBaseProps {
  initialValue?: PickerOption[] | string[];
  /** On change provides both the raw input value and the selected option */
  onChange?: (selectedOptions?: PickerOption[]) => void;
}
