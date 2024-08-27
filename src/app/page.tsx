"use client";
import React, { useState } from "react";
import HeaderLogin from "./components/HeaderLogin";
import HeaderSearch from "./components/HeaderSearch";
import Calendar from "./components/Calender";
import ActivityChart from "./components/ActivitiesChart";
import Sidebar from "./components/Sidebar";

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
    <div className="flex flex-col h-screen overflow-hidden  ">
      <div className="flex flex-col">
        <div>
          <HeaderLogin collapsed={collapsed} />
        </div>
        <div className="mt-14">
          <HeaderSearch title="Total Activities" collapsed={collapsed} />
        </div>
      </div>
      <div className="flex flex-1 overflow-hidden">
        <Sidebar collapsed={collapsed} toggleSidebar={toggleSidebar} />
        <main
          className={`flex-1 bg-[#E6E6E6] p-4 overflow-y-auto transition-all duration-300 ${
            collapsed ? "ml-20" : "ml-60"
          }`}
        >
          <div className="p-4 bg-white h-full">
            <Calendar
              startDate={startDate}
              endDate={endDate}
              onDateChange={handleDateChange}
            />
            <ActivityChart startDate={startDate} endDate={endDate} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
