"use client";
import HeaderLogin from "@/app/components/HeaderLogin";
import Navbar from "@/app/components/Sidebar";
import { useRouter, useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import UserbyID from "@/app/components/UserByID";
import Sidebar from "@/app/components/Sidebar";

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
      <div className="flex flex-col">
        <div>
          <HeaderLogin collapsed={collapsed} />
        </div>
        <div className="mt-14">
          <header
            className={`bg-white top-[52px] left-0 transition-all duration-300 ${
              collapsed
                ? "w-[calc(100%-80px)] ml-[80px]" // ปรับขนาดตาม sidebar ที่ยุบ
                : "w-[calc(100%-235px)] ml-[235px]" // ขนาดเมื่อ sidebar เปิดอยู่
            } text-[#491DC5] py-4 px-4 flex flex-row items-center`}
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
        </div>
      </div>
      <div className="flex flex-1 h-full">
        <Sidebar collapsed={collapsed} toggleSidebar={toggleSidebar} />
        <main className="flex-1 bg-[#E6E6E6] p-4">
          <div className="p-4 bg-white overflow-auto">
            <UserbyID collapsed={collapsed} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
