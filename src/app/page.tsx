"use client";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeaderLogin from "./components/HeaderLogin";
import HeaderSearch from "./components/HeaderSearch";
import Calendar from "./components/Calender";
import ActivityChart from "./components/ActivitiesChart";

const App = () => {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  const handleDateChange = (start: Date | undefined, end: Date | undefined) => {
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className="flex flex-col h-screen">
      <HeaderLogin />
      <HeaderSearch title="Total Activities" />
      <div className="flex flex-1">
        <Navbar />
        <main className="flex-1 bg-[#E6E6E6] p-4">
          <div className="mt-[115px] p-4 bg-white h-[calc(100%-115px)]">
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
