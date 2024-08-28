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
  };

  const buttonClass = (buttonName: string) =>
    `w-[60px] h-[28px] sm:w-[70px] sm:h-[30px] md:w-[80px] md:h-[32px] lg:w-[90px] lg:h-[34px] xl:w-[100px] xl:h-[36px] 
    mr-2 rounded text-xs sm:text-sm md:text-base border-none ${
      activeButton === buttonName
        ? "bg-[#491DC5] text-white"
        : "text-[#4E4E4E] hover:bg-[#491DC5] hover:text-white"
    }`;

  return (
    <div className="flex flex-row flex-wrap">
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
