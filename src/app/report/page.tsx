"use client";
import React, { useState } from "react";
import HeaderSearch from "../components/HeaderSearch";
import Calendar from "../components/Calender";
import ActivityChart from "../components/ActivitiesChart";

const App = () => {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [collapsed, setCollapsed] = useState(false);

  const handleDateChange = (start: Date | undefined, end: Date | undefined) => {
    setStartDate(start);
    setEndDate(end);
  };

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        <HeaderSearch title="Total Activities" collapsed={collapsed} />
        <div>
          <div className="flex-1 bg-[#E6E6E6] p-4">
            <div className="p-4 bg-white h-full">
              <Calendar
                startDate={startDate}
                endDate={endDate}
                onDateChange={handleDateChange}
              />
              <ActivityChart startDate={startDate} endDate={endDate} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
