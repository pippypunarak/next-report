"use client";
import React, { useState } from "react";
import HeaderLogin from "../components/HeaderLogin";
import Navbar from "../components/Navbar";
import HeaderUser from "../components/HeaderUser";
import UsersTable from "../components/UsersTable";

const UserList = () => {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  const handleDateChange = (start: Date | undefined, end: Date | undefined) => {
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className="flex flex-col h-screen">
      <HeaderLogin />
      <HeaderUser title="User List" />
      <div className="flex flex-1">
        <Navbar />
        <main className="flex-1 bg-[#E6E6E6] p-4">
          <div className="mt-[115px] p-4 bg-white h-[calc(100%-115px)] overflow-auto">
            <UsersTable />
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserList;
