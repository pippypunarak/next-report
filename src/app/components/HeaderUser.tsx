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
  collapsed: boolean; // Add this prop to handle sidebar state
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

const HeaderUser: React.FC<TitleProps> = ({ title, collapsed }) => {
  return (
    <header
      className={`bg-white top-[52px] left-0 py-4 px-4 flex justify-between ${
        collapsed
          ? "w-[calc(100%-80px)] ml-[80px]"
          : "w-[calc(100%-235px)] ml-[235px]"
      } text-white`}
    >
      <div className="text-lg text-black font-bold">{title}</div>
      <div className="flex gap-4 ml-auto">
        <Space direction="vertical">
          <Search
            placeholder="User ID, Name, Display Name, Phone"
            onSearch={onSearch}
            style={{ width: 258 }}
            className="border-[#491DC533]"
          />
        </Space>

        <Space direction="vertical">
          <DatePicker onChange={onChange} className="border-[#491DC533]" />
        </Space>

        <div className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-[#4E4E4E]">
            Activity
          </div>
          <select
            className="border border-[#491DC533] text-sm rounded-md pl-[70px] pr-3 py-2 w-[160px] h-[32px] text-right text-[#491DC5] bg-white"
            defaultValue="all"
          >
            <option value="all">All</option>
          </select>
        </div>
        <button className="bg-[#491DC5] rounded-md text-sm py-1.5 px-4">
          Add User
        </button>
      </div>
    </header>
  );
};

export default HeaderUser;
