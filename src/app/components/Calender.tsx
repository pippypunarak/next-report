import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";
import ReportButton from "./ReportButton"; // Adjust the import path as necessary

interface CalendarProps {
  startDate: Date | undefined;
  endDate: Date | undefined;
  onDateChange: (start: Date | undefined, end: Date | undefined) => void;
}

const Calendar: React.FC<CalendarProps> = ({
  startDate,
  endDate,
  onDateChange,
}) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    if (start && end) {
      onDateChange(start, end);
      setIsCalendarOpen(false);
    } else if (start) {
      onDateChange(start, undefined);
    }
  };

  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  return (
    <div className="flex flex-row justify-between items-start">
      <div className="flex flex-row">
        <div
          onClick={toggleCalendar}
          className="mt-1 cursor-pointer text-[#491DC5] text-sm"
          aria-label="Select date range"
        >
          {startDate && endDate
            ? `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`
            : "Select Date Range"}
        </div>
        <div className="relative ml-4">
          <Image
            alt="calendar"
            src="/btn_date.svg"
            width={32}
            height={32}
            className="cursor-pointer"
            onClick={toggleCalendar}
            aria-label="Toggle calendar"
          />
          {isCalendarOpen && (
            <div className="absolute mt-2 z-10">
              <DatePicker
                selected={startDate}
                startDate={startDate}
                endDate={endDate}
                onChange={handleDateChange}
                selectsRange
                inline
              />
            </div>
          )}
        </div>
      </div>
      <div className="flex ml-4">
        <ReportButton
          startDate={startDate}
          endDate={endDate}
          onDateChange={onDateChange}
        />
      </div>
    </div>
  );
};

export default Calendar;
