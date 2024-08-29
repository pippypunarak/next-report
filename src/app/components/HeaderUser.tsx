"use client";
import React from "react";
import type { DatePickerProps } from "antd";
import { DatePicker } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import type { GetProps } from "antd";
import Search from "antd/es/input/Search";

type SearchProps = GetProps<typeof Input.Search>;

interface TitleProps {
  title: string;
}

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);

const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);
const onChange: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};

const HeaderUser: React.FC<TitleProps> = ({ title }) => {
  return (
    <header className="bg-white top-[52px] left-0 mb-4 flex justify-between items-center flex-wrap ">
      <div className="text-lg text-black font-bold mb-2 md:mb-0">{title}</div>
      <div className="flex flex-wrap gap-4 ml-auto items-center justify-end w-full md:w-auto">
        <Space direction="vertical" className="w-full md:w-auto">
          <Search
            placeholder="User ID, Name, Display Name, Phone"
            onSearch={onSearch}
            style={{ width: "100%" }}
            className="border-[#491DC533] w-full md:w-[258px]"
          />
        </Space>

        <Space direction="vertical" className="w-full md:w-auto">
          <DatePicker
            onChange={onChange}
            className="border-[#491DC533] w-full md:w-auto"
          />
        </Space>

        <div className="relative w-full md:w-auto mb-2 md:mb-0">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-[#4E4E4E]">
            Activity
          </div>
          <select
            className="border border-[#491DC533] text-sm rounded-md pl-[70px] pr-3 py-2 w-full md:w-[160px] h-[32px] text-right text-[#491DC5] bg-white"
            defaultValue="all"
          >
            <option value="all">All</option>
          </select>
        </div>
        <button className="bg-[#491DC5] rounded-md text-sm text-white py-1.5 px-4 w-full md:w-auto">
          Add User
        </button>
      </div>
    </header>
  );
};

export default HeaderUser;
