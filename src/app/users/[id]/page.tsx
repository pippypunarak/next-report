"use client";

import Sidebar from "@/app/components/Sidebar";
import { useRouter, useParams } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import UserbyID from "@/app/components/UserByID";

const App = () => {
  const { id } = useParams();
  const router = useRouter();
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
      <div className="flex flex-row mb-4">
        <Image
          src="/ic_arrow_viewmore.svg"
          alt="backUserList"
          width={26}
          height={14}
          onClick={() => router.back()}
          className="cursor-pointer"
        />
        <div className="text-lg font-bold ml-3">User Profile</div>
      </div>
      <main className="flex-1 bg-[#E6E6E6] p-4">
        <div className="p-4 bg-white h-full">
          <UserbyID />
        </div>
      </main>
    </div>
  );
};

export default App;
