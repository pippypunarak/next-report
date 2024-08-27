"use client";
import HeaderLogin from "@/app/components/HeaderLogin";
import Navbar from "@/app/components/Navbar";
import { useRouter, useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import UserbyID from "@/app/components/UserByID";

interface User {
  userName: string;
}

const App = () => {
  const { id } = useParams();
  const router = useRouter();
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  const handleDateChange = (start: Date | undefined, end: Date | undefined) => {
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className="flex flex-col h-screen">
      <HeaderLogin />
      <header className="fixed bg-white top-[52px] left-0 w-[calc(100%-235px)] ml-[235px] text-white py-4 px-4 flex flex-row">
        <Image
          src="/ic_arrow_viewmore.svg"
          alt="backUserList"
          width={26}
          height={14}
          onClick={() => router.back()}
          className="cursor-pointer"
        />
        <div className="text-lg text-[#491DC5] font-bold ml-3">
          User Profile
        </div>
      </header>
      <div className="flex flex-1 h-full">
        <Navbar />
        <main className="flex-1 bg-[#E6E6E6] p-4">
          <div className="mt-[115px] p-4 bg-white h-[calc(100%-110px)] overflow-auto">
            <UserbyID />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
