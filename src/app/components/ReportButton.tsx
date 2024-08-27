import React from "react";

interface CalendarProps {
  startDate: Date | undefined;
  endDate: Date | undefined;
  onDateChange: (start: Date | undefined, end: Date | undefined) => void;
}

const ReportButton: React.FC<CalendarProps> = ({
  startDate,
  endDate,
  onDateChange,
}) => {
  const [activeButton, setActiveButton] = React.useState<string>("Day");

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
    // You can pass button selection to onDateChange if needed
    // For example, you might adjust the date range here based on the button clicked
  };

  const buttonClass = (buttonName: string) =>
    `w-[80px] h-[32px] mr-2 rounded text-sm border-none ${
      activeButton === buttonName
        ? "bg-[#491DC5] text-white"
        : "text-[#4E4E4E] hover:bg-[#491DC5] hover:text-white"
    }`;

  return (
    <div className="flex">
      <button
        className={buttonClass("Day")}
        onClick={() => handleButtonClick("Day")}
      >
        Day
      </button>
      <button
        className={buttonClass("Week")}
        onClick={() => handleButtonClick("Week")}
      >
        Week
      </button>
      <button
        className={buttonClass("Month")}
        onClick={() => handleButtonClick("Month")}
      >
        Month
      </button>
      <button
        className={buttonClass("Year")}
        onClick={() => handleButtonClick("Year")}
      >
        Year
      </button>
    </div>
  );
};

export default ReportButton;
