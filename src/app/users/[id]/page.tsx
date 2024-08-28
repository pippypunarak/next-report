"use client";

import HeaderLogin from "@/app/components/HeaderLogin";
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
      <HeaderLogin collapsed={collapsed} />
      <header
        className={`bg-white top-0 left-0 transition-all duration-300 ${
          collapsed
            ? "w-[calc(100%-80px)] ml-[80px]"
            : "w-[calc(100%-235px)] ml-[235px]"
        } text-[#491DC5] py-4 px-4 flex items-center`}
      >
        <Image
          src="/ic_arrow_viewmore.svg"
          alt="backUserList"
          width={26}
          height={14}
          onClick={() => router.back()}
          className="cursor-pointer"
        />
        <div className="text-lg font-bold ml-3">User Profile</div>
      </header>
      <div className="flex flex-1">
        <Sidebar collapsed={collapsed} toggleSidebar={toggleSidebar} />
        <main className="flex-1 bg-[#E6E6E6] p-4 overflow-auto">
          <div className="p-4 bg-white h-full">
            <UserbyID collapsed={collapsed} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
