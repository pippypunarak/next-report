"use client";

import React, { useState } from "react";
import HeaderUser from "../components/HeaderUser";
import UsersTable from "../components/UsersTable";
import Sidebar from "../components/Sidebar";

const UserList = () => {
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
    <div className="flex flex-col h-screen">
      <HeaderUser title="User List" collapsed={collapsed} />
      <main className="flex-1 bg-[#E6E6E6] p-4">
        <div className="p-4 bg-white h-full overflow-auto">
          <UsersTable collapsed={collapsed} />
        </div>
      </main>
    </div>
  );
};

export default UserList;
