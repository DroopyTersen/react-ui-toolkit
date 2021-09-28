import "./DatePicker.scss";

import * as React from "react";

import { parseDate } from "../../utils/dateUtils";
import { Button } from "../Button/Button";
import { Input, InputSuffixButton } from "../forms";

import { Calendar } from "./Calendar";
import {
  useCalendarNavigation,
  useDatePickerDropdown,
  useDatePickerEvents,
  useDatePickerInput,
} from "./datepicker.hooks";
import { formatValue } from "./datepicker.utils";

interface DatePickerOptions {
  /** The dayjs format string */
  dropdownMode?: "alwaysOpen" | "closeOnSelect";
  getDayClass?: (date: string) => string;
  checkEnabled?: (date: string) => boolean;
}
const defaultOptions: DatePickerOptions = {
  dropdownMode: "closeOnSelect",
  getDayClass: () => "",
  checkEnabled: () => true,
};

export interface DatePickerProps {
  value?: string;
  onChange?: (string) => void;
  options?: DatePickerOptions;
  [key: string]: any;
}

const TODAY = formatValue(new Date());

export const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
  // eslint-disable-next-line
  function DatePicker({ value, onChange, options, ...props }, ref) {
    const opts = { ...defaultOptions, ...options };
    const { activeDate, actions } = useCalendarNavigation(
      value || TODAY,
      onChange,
      opts.checkEnabled
    );

    // TEXT INPUT
    const [inputValue, setInputValue] = useDatePickerInput(value, actions.setActiveDate);

    // Dropdown Management
    const { setIsOpen, isDropdownShowing, containerProps } = useDatePickerDropdown(
      value,
      opts.dropdownMode
    );

    // Keyboard and Focus management
    const { events, isKeyboarding } = useDatePickerEvents({
      activeDate,
      setIsOpen,
      actions,
      containerRef: containerProps.ref,
    });

    return (
      <>
        <div
          {...containerProps}
          {...events}
          className={`datepicker__theme datepicker datepicker--${
            isDropdownShowing ? "open" : "closed"
          } datepicker--${opts.dropdownMode}`}
          tabIndex={isDropdownShowing ? -1 : undefined}
        >
          <div className="datepicker__input-container">
            <Input
              className="datepicker__input"
              placeholder="Date..."
              // Chrome didnt support autoComplete="off".  This article suggested setting it to another value. https://stackoverflow.com/questions/30053167/autocomplete-off-vs-false
              autoComplete="dont-show"
              {...props}
              value={inputValue || ""}
              ref={ref}
              onBlur={() => {
                if (inputValue) {
                  const parsedDate = parseDate(inputValue);

                  if (parsedDate) {
                    onChange(formatValue(parsedDate));
                  } else {
                    onChange(inputValue);
                  }
                } else {
                  onChange("");
                }
              }}
              onChange={(e) => {
                setInputValue(e.currentTarget.value);
              }}
              suffix={
                <InputSuffixButton>
                  <i className="bi bi-calendar-event text-body" />
                </InputSuffixButton>
              }
            />
          </div>
          {isDropdownShowing && (
            <div
              className={`datepicker__dropdown datepicker__dropdown--${opts.dropdownMode} bg-white absolute shadow rounded border`}
            >
              <Calendar
                activeDate={activeDate}
                onSelect={actions.selectDate}
                getDayClass={(day) =>
                  [
                    opts.getDayClass(day),
                    day === value ? "calendar__day--selected" : "",
                    opts.checkEnabled(day) ? "" : "calendar__day--disabled",
                  ]
                    .filter(Boolean)
                    .join(" ")
                }
                prevMonth={actions.prevMonth}
                nextMonth={actions.nextMonth}
                options={{ displayActive: isKeyboarding }}
              />
            </div>
          )}
        </div>
      </>
    );
  }
);
