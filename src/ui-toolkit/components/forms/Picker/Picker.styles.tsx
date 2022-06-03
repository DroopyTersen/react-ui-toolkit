import type { StylesConfig } from "react-select";

export const pickerStyles: StylesConfig = {
  control: (base, state) => ({
    ...base,
    // "&:hover": {
    //   borderColor: "var(--tan-500)",
    // },
    // borderColor: state.isFocused ? "var(--tan-500)" : base.borderColor,
    // boxShadow: state.isFocused ? "0 0 0 0.25rem rgb(177 155 129 / 25%)" : "none",
  }),

  option: (base, state) => ({
    ...base,
    // color: "var(--secondary-800)",
    // backgroundColor: state.isSelected
    //   ? "var(--tan-400)"
    //   : state.isFocused
    //   ? "var(--tan-200)"
    //   : base.backgroundColor,
    // "&:active": {
    //   background: "var(--tan-300)",
    // },
  }),
  multiValue: (base, state) => ({
    ...base,
    // background: "var(--tan-300)",
    padding: ".1rem 0.5rem",
    borderRadius: "50rem",
  }),
  multiValueRemove: (base, state) => ({
    ...base,
    borderRadius: "50rem",
    paddingLeft: ".5rem",
    paddingRight: ".5rem",
    marginRight: "-0.5rem",
  }),
};
