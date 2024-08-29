import React from "react";

interface HeaderSearchProps {
  title: string;
}

const HeaderSearch: React.FC<HeaderSearchProps> = ({ title }) => {
  return (
    <div className="bg-white top-[52px] left-0 text-black py-4 mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <div className="text-lg font-bold">{title}</div>
      <div className="flex flex-col sm:flex-row sm:gap-4 ml-auto mt-4 sm:mt-0">
        <div className="relative mb-2 sm:mb-0 sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[220px]">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-[#4E4E4E]">
            Partner
          </div>
          <select
            className="border border-[#491DC5] text-sm rounded-md pl-[70px] pr-3 py-2 w-full h-[32px] text-right text-[#491DC5] bg-white"
            defaultValue="all"
          >
            <option value="all">All</option>
            <option value="insurance" className="text-black">
              Insurance
            </option>
            <option value="hospital" className="text-black">
              Hospital
            </option>
          </select>
        </div>

        {/** Dropdown for Gender */}
        <div className="relative mb-2 sm:mb-0 sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[220px]">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-[#4E4E4E]">
            Gender
          </div>
          <select
            className="border border-[#491DC5] text-sm rounded-md pl-[70px] pr-3 py-2 w-full h-[32px] text-right text-[#491DC5] bg-white"
            defaultValue="all"
          >
            <option value="all">All</option>
            <option value="male" className="text-black">
              Male
            </option>
            <option value="female" className="text-black">
              Female
            </option>
          </select>
        </div>

        {/** Dropdown for Activity */}
        <div className="relative mb-2 sm:mb-0 sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[220px]">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-[#4E4E4E]">
            Activity
          </div>
          <select
            className="border border-[#491DC5] text-sm rounded-md pl-[70px] pr-3 py-2 w-full h-[32px] text-right text-[#491DC5] bg-white"
            defaultValue="all"
          >
            <option value="all">All</option>
          </select>
        </div>

        {/** Dropdown for Age Range */}
        <div className="relative mb-2 sm:mb-0 sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[220px]">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-[#4E4E4E]">
            Age Range
          </div>
          <select
            className="border border-[#491DC5] text-sm rounded-md pl-[70px] pr-3 py-2 w-full h-[32px] text-right text-[#491DC5] bg-white"
            defaultValue="all"
          >
            <option value="all">All</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default HeaderSearch;
