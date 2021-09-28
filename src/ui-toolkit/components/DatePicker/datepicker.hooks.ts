import dayjs from "dayjs";
import * as React from "react";

import { parseDate } from "../../utils/dateUtils";
import useOnClickOutside from "../../hooks/useOnClickOutside";

import { formatValue, next, prev } from "./datepicker.utils";

export const useCalendarNavigation = (
  activeDateProp,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onSelect: (date: string) => void = () => {},
  checkEnabled: (date) => boolean = () => true
) => {
  const [activeDate, setActiveDate] = React.useState(formatValue(activeDateProp || new Date()));
  React.useEffect(() => {
    setActiveDate(activeDateProp);
  }, [activeDateProp]);

  const actions = React.useMemo(
    () => ({
      selectDate: (value) => {
        if (checkEnabled(value)) {
          setActiveDate(value);
          onSelect(value);
        }
      },
      setActiveDate: setActiveDate,
      prevMonth: () => setActiveDate((d) => prev(d, "month")),
      nextMonth: () => setActiveDate((d) => next(d, "month")),
      prevWeek: () => setActiveDate((d) => prev(d, "week")),
      nextWeek: () => setActiveDate((d) => next(d, "week")),
      prevDay: () => setActiveDate((d) => prev(d, "day")),
      nextDay: () => setActiveDate((d) => next(d, "day")),
    }),
    [setActiveDate, onSelect, checkEnabled]
  );

  return {
    activeDate,
    actions,
  };
};

export const useDatePickerInput = (value, setActiveDate) => {
  // TEXT INPUT
  const [inputValue, setInputValue] = React.useState(value);
  // If a new value comes in, sync it to the input
  React.useEffect(() => {
    if (value) {
      setInputValue(dayjs(value).toDate().toLocaleDateString());
    }
  }, [value]);
  // If the input value changes, see if it's a real date, if so
  // set the active date
  React.useEffect(() => {
    if (inputValue) {
      const parsedDate = parseDate(inputValue);

      if (parsedDate) {
        setActiveDate(formatValue(parsedDate));
      }
    }
  }, [inputValue, setActiveDate]);

  return [inputValue, setInputValue];
};

export const useDatePickerDropdown = (value, dropdownMode) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const elemRef = React.useRef();
  useOnClickOutside(elemRef, () => setIsOpen(false));
  const isDropdownShowing = isOpen || dropdownMode === "alwaysOpen";
  // When the value changes, try close the dropdwon
  React.useEffect(() => {
    if (value) {
      setTimeout(() => setIsOpen(false), 50);
    }
  }, [value]);

  return {
    isDropdownShowing,
    setIsOpen,
    containerProps: {
      ref: elemRef,
      onClick: () => setIsOpen(true),
    },
  };
};

export const useDatePickerEvents = ({ activeDate, actions, setIsOpen, containerRef }) => {
  const [isKeyboarding, setIsKeyboarding] = React.useState(false);
  const events = React.useMemo(() => {
    const codes = {
      37: actions.prevDay, // Left
      39: actions.nextDay, // Right
      38: actions.prevWeek, // Up
      40: actions.nextWeek, // Down,
      27: () => {
        setTimeout(() => setIsOpen(false), 50);
      },

      // Enter
      13: () => actions.selectDate(activeDate),
    };
    return {
      onFocus: () => {
        setIsOpen(true);
      },
      onBlur: () => {
        // We are blurring the last focusable element,
        // so close the dropdown
        setTimeout(() => {
          if (!document.querySelector(".datepicker:focus-within")) {
            // if (!dayjs(activeDate).isSame(dayjs(value))) {
            //   actions.selectDate(activeDate);
            // }
            setIsOpen(false);
          }
        }, 50);
      },
      onClick: () => setIsKeyboarding(false),
      onKeyDown: (event) => {
        // Ignore for pressing prev and next buttons
        if (event.target.type === "button" && event.keyCode === 13) return;
        // Pop it open when you type something as long as you aren't tabbing around
        // Tab and Shift
        if (event.keyCode !== 9 && event.keyCode !== 16) setIsOpen(true);
        const handler = codes[event.keyCode];
        if (handler) {
          event.preventDefault();
          handler();
          (containerRef as any)?.current?.querySelector("input")?.focus();
          setIsKeyboarding(true);
        }
      },
    };
  }, [activeDate, actions, setIsOpen, containerRef]);

  return {
    events,
    isKeyboarding,
  };
};
