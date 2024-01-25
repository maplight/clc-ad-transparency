import type { ReactElement } from "react";
import { CalendarIcon } from "@heroicons/react/24/outline";
import ReactDatePicker from "react-datepicker";
import type { UseRangeProps } from "react-instantsearch";
import { useRange } from "react-instantsearch";
import { useState, useEffect } from "react";

import "react-datepicker/dist/react-datepicker.css";

const DatePicker =
  (ReactDatePicker as unknown as { default: typeof ReactDatePicker }).default ??
  ReactDatePicker;

const DateSelect = (props: UseRangeProps): ReactElement => {
  const { range, refine, start } = useRange(props);

  const { min, max } = range;

  const [from, setFrom] = useState(min);
  const [to, setTo] = useState(max);

  const refineEndDate = (fromDate: Date | null, toDate: Date | null) => {
    // Convert to Unix timestamp before refining
    const min = fromDate ? fromDate.getTime() : undefined;
    const max = toDate ? toDate.getTime() : undefined;
    refine([min, max]);
  };

  const handleFromDateChange = (date: Date | null) => {
    if (to && date && date.getTime() > to) {
      refineEndDate(date ?? null, null);
    } else {
      refineEndDate(date ?? null, to ? new Date(to) : null);
    }
  };

  const handleToDateChange = (date: Date | null) => {
    if (from && date && date.getTime() < from) {
      refineEndDate(null, date);
    } else {
      refineEndDate(from ? new Date(from) : null, date);
    }
  };
  const rangeFrom = Math.max(
    Number(min),
    Number.isFinite(Number(start[0])) ? Number(start[0]) : Number(min)
  );
  const rangeTo = Math.min(
    Number(max),
    Number.isFinite(Number(start[1])) ? Number(start[1]) : Number(max)
  );

  useEffect(() => {
    setFrom(rangeFrom);
    setTo(rangeTo);
  }, [rangeFrom, rangeTo]);

  return (
    <div className="flex flex-col gap-3">
      <label className="block text-sm font-medium text-gray-700">From</label>
      <DatePicker
        className="block h-full w-full border-0 py-2 pr-0 text-gray-900 placeholder:text-gray-400 ring-1 ring-primary-500 focus:ring-2 focus:ring-primary-600 sm:text-sm rounded"
        icon={<CalendarIcon className="h-3 w-3" />}
        showIcon
        minDate={min ? new Date(min) : undefined}
        maxDate={max ? new Date(max) : undefined}
        selected={from ? new Date(from) : undefined}
        onChange={handleFromDateChange}
        withPortal
      />
      <label className="block text-sm font-medium text-gray-700">To</label>
      <DatePicker
        className="block h-full w-full border-0 py-2 pr-0 text-gray-900 placeholder:text-gray-400 ring-1 ring-primary-500 focus:ring-2 focus:ring-primary-600 sm:text-sm rounded"
        icon={<CalendarIcon className="h-3 w-3" />}
        showIcon
        minDate={from ? new Date(from) : undefined}
        maxDate={max ? new Date(max) : undefined}
        selected={to ? new Date(to) : undefined}
        onChange={handleToDateChange}
        withPortal
      />
    </div>
  );
};

export default DateSelect;
