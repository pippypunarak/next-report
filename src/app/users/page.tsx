"use client";

import React from "react";
import HeaderUser from "../components/HeaderUser";
import UsersTable from "../components/UsersTable";

const UserList = () => {
  return (
    <div className="flex flex-col h-screen">
      <HeaderUser title="User List" />
      <main className="flex-1 bg-[#E6E6E6] p-4">
        <div className="p-4 bg-white h-full overflow-auto">
          <UsersTable />
        </div>
      </main>
    </div>
  );
};

export default UserList;
