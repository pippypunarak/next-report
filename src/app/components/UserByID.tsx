"use client";
import React, { useState } from "react";
import { Col, Layout, Menu, Row } from "antd";
import Image from "next/image";
import UserByIDChart from "./UserByIDChart";
import UserCalendar from "./UserCalender";

const { Header, Content, Sider } = Layout;

const UserbyID = () => {
  // State to manage the start and end dates
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  // Handler to update the date range
  const handleDateChange = (start: Date | undefined, end: Date | undefined) => {
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <Layout className="min-h-[100vh]">
      <Sider theme="light">
        <div className="demo-logo-vertical" />
        <div className="flex justify-center h-[134px] mt-4">
          <Image
            src="https://cdn.pixabay.com/photo/2021/04/02/12/06/woman-6144774_1280.jpg"
            alt="picUser"
            width={134}
            height={134}
            className="rounded-full"
          />
        </div>
        <div className="text-lg text-center font-bold mt-2">Name</div>
        <div className="text-lg text-center font-bold">Surname</div>
        <div className="text-xs text-center mt-2">Register Date 04/04/2022</div>
        <Menu mode="vertical" className="mt-4">
          <Menu.Item>Summary​</Menu.Item>
          <Menu.Item>All Activities​</Menu.Item>
          <Menu.Item>Weight History​</Menu.Item>
          <Menu.Item>About​</Menu.Item>
        </Menu>
      </Sider>
      <Layout className="bg-white">
        <Header style={{ padding: 0, background: "#fff" }}>
          <div className="flex flex-row justify-between items-center px-4">
            <div className="text-lg font-bold mt-6">Summary</div>
            <div className="flex gap-4 items-center">
              <UserCalendar
                startDate={startDate}
                endDate={endDate}
                onDateChange={handleDateChange}
              />

              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sm text-[#4E4E4E]">
                  <Image
                    src="/Component 270 – 10.svg"
                    alt="logo"
                    width={54}
                    height={18}
                  />
                </div>
                <select className="border border-[#491DC533] text-sm rounded-md w-[120px] h-[32px] text-right text-[#491DC5]">
                  <option value="all"></option>
                </select>
              </div>
              <div>
                <select className="border border-[#491DC533] text-sm rounded-md w-[137px] h-[32px] text-center text-[#491DC5] bg-[#ECEEFF]">
                  <option value="all">Export data</option>
                </select>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px 0",
            display: "flex",
            flexDirection: "column",
            background: "#FFFFFF",
          }}
        >
          <div className="flex justify-center mt-3 mb-6">
            <Row gutter={16} className="w-full">
              <Col span={6}>
                <div className="bg-[#FFF7EF] h-[100px] rounded-lg py-2">
                  <div className="flex flex-row ml-2">
                    <Image
                      src="/Component 1-1.svg"
                      alt="logo1"
                      width={24}
                      height={24}
                    />
                    <div className="text-md font-semibold ml-2">
                      Total Calories
                    </div>
                  </div>
                  <div className="text-3xl font-bold ml-10">1,790</div>
                  <div className="text-xs ml-9">Out</div>
                </div>
              </Col>
              <Col span={6}>
                <div className="bg-[#D9F6FF] h-[100px] rounded-lg py-2">
                  <div className="flex flex-row ml-2">
                    <Image
                      src="/Component 1-2.svg"
                      alt="logo1"
                      width={24}
                      height={24}
                    />
                    <div className="text-md font-semibold ml-2">
                      Total Activities
                    </div>
                  </div>
                  <div className="text-3xl font-bold ml-10">6</div>
                </div>
              </Col>
              <Col span={6}>
                <div className="bg-[#ECEEFF] h-[100px] rounded-lg py-2">
                  <div className="flex flex-row ml-2">
                    <Image
                      src="/Component 1-3.svg"
                      alt="logo3"
                      width={24}
                      height={24}
                    />
                    <div className="text-md font-semibold ml-2">Steps</div>
                  </div>
                  <div className="text-3xl font-bold ml-10">3,497</div>
                </div>
              </Col>
              <Col span={6}>
                <div className="bg-[#EBF7F9] h-[100px] rounded-lg py-2">
                  <div className="flex flex-row ml-2">
                    <Image
                      src="/Component 1-4.svg"
                      alt="logo1"
                      width={24}
                      height={24}
                    />
                    <div className="text-md font-semibold ml-2">
                      Stress Level
                    </div>
                  </div>
                  <div className="text-3xl font-bold ml-10">0</div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="p-6 bg-white rounded-lg flex-1">
            <UserByIDChart startDate={startDate} endDate={endDate} />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default UserbyID;
