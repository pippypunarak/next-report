import React from "react";

interface TitleProps {
  title: string;
}

const HeaderSearch: React.FC<TitleProps> = ({ title }) => {
  return (
    <header className="fixed bg-white top-[52px] left-0 w-[calc(100%-235px)] ml-[235px] text-white py-4 px-4 flex justify-between">
      <div className="text-lg text-black font-bold">{title}</div>
      <div className="flex gap-4 ml-auto">
        <div className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-[#4E4E4E]">
            Partner
          </div>
          <select
            className="border border-[#491DC5] text-sm rounded-md pl-[70px] pr-3 py-2 w-[160px] h-[32px] text-right text-[#491DC5] bg-white"
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

        <div className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-[#4E4E4E]">
            Gender
          </div>
          <select
            className="border border-[#491DC5] text-sm rounded-md pl-[70px] pr-3 py-2 w-[160px] h-[32px] text-right text-[#491DC5] bg-white"
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

        <div className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-[#4E4E4E]">
            Activity
          </div>
          <select
            className="border border-[#491DC5] text-sm rounded-md pl-[70px] pr-3 py-2 w-[160px] h-[32px] text-right text-[#491DC5] bg-white"
            defaultValue="all"
          >
            <option value="all">All</option>
          </select>
        </div>

        <div className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-[#4E4E4E]">
            Age Range
          </div>
          <select
            className="border border-[#491DC5] text-sm rounded-md pl-[70px] pr-3 py-2 w-[160px] h-[32px] text-right text-[#491DC5] bg-white"
            defaultValue="all"
          >
            <option value="all">All</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default HeaderSearch;
