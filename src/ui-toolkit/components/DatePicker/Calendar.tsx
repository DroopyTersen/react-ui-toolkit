import dayjs from "dayjs";
import * as React from "react";

import { Button } from "../Button/Button";

import { formatValue, VALUE_FORMAT } from "./datepicker.utils";

const DAYS_OF_WEEK = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const getDaysInMonth = (activeDate: string) => {
  const date = dayjs(activeDate);
  const numDays = date.daysInMonth();
  return Array.from({ length: numDays }, (_, i) => date.date(i + 1));
};

interface CalendarProps {
  activeDate?: string;
  onSelect?: (date: string) => void;
  /** Allows you to inject CSS classes onto a Calendar day */
  getDayClass?: (date: string) => string;
  prevMonth?: () => void;
  nextMonth?: () => void;
  options?: {
    displayActive?: boolean;
  };
}
const defaultOptions = {
  displayActive: false,
};

export const Calendar = ({
  activeDate = formatValue(new Date()),
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onSelect = () => {},
  prevMonth,
  nextMonth,
  getDayClass = () => "",
  options: optionsProp = {},
}: CalendarProps) => {
  const { displayActive } = { ...defaultOptions, ...optionsProp };
  // let { activeDate, actions } = useCalendar(props);

  const days = React.useMemo(() => getDaysInMonth(activeDate), [activeDate]);
  return (
    <div className={`datepicker__theme calendar ${displayActive ? "calendar--displayActive" : ""}`}>
      <div className="calendar__header">
        {prevMonth && (
          <Button variant="link" type="button" onClick={prevMonth}>
            <span>‹</span>
          </Button>
        )}
        <div style={{ flex: "1" }}>
          <div className="calendar__header-label">{dayjs(activeDate).format("MMMM YYYY")}</div>

          <div className="calendar__active-date">
            {activeDate ? dayjs(activeDate).toDate().toLocaleDateString() : "No active date"}
          </div>
        </div>
        {nextMonth && (
          <Button variant="link" type="button" onClick={nextMonth} id="datepicker__last-focusable">
            <span>›</span>
          </Button>
        )}
      </div>
      <div className="calendar__days-header">
        {DAYS_OF_WEEK.map((label) => (
          <div key={label} className="calendar__header-item">
            {label}
          </div>
        ))}
      </div>
      <div className="calendar__date-grid">
        {days.map((d, index) => {
          const current = d.format(VALUE_FORMAT);
          const isActive = current === activeDate;

          return (
            <div
              key={current}
              className={[
                "calendar__day",
                isActive ? "calendar__day--active" : "",
                getDayClass(current),
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => onSelect(current)}
              style={index === 0 ? { gridColumn: d.day() + 1 } : {}}
            >
              <div className="calendar__day-number">{d.date()}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
