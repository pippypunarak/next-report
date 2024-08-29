"use client";

import { useRouter, useParams } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import { Col, Layout, Menu, Row } from "antd";
import UserCalendar from "@/app/components/UserCalender";
import UserByIDChart from "@/app/components/UserByIDChart";

const App = () => {
  const { id } = useParams();
  const router = useRouter();
  const { Header, Content, Sider } = Layout;

  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  const handleDateChange = (start: Date | undefined, end: Date | undefined) => {
    setStartDate(start);
    setEndDate(end);
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
          <Layout className="h-full">
            <Sider theme="light" breakpoint="lg" collapsedWidth="0">
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
              <div className="text-xs text-center mt-2">
                Register Date 04/04/2022
              </div>
              <Menu mode="inline" className="mt-4">
                <Menu.Item key="1">Summary</Menu.Item>
                <Menu.Item key="2">All Activities</Menu.Item>
                <Menu.Item key="3">Weight History</Menu.Item>
                <Menu.Item key="4">About</Menu.Item>
              </Menu>
            </Sider>
            <Layout className="flex flex-col h-full bg-white">
              <Header style={{ padding: 0, background: "#fff" }}>
                <div className="flex flex-wrap justify-between items-center px-4">
                  <div className="text-lg font-bold mt-6">Summary</div>
                  <div className="flex flex-wrap gap-4 items-center">
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
                        <option value="export">Export data</option>
                        <option value="exportCsv">Export as CSV</option>
                        <option value="exportPdf">Export as PDF</option>
                      </select>
                    </div>
                  </div>
                </div>
              </Header>
              <Content
                style={{
                  margin: "24px 16px 0",
                  background: "#FFFFFF",
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                  overflowY: "auto",
                }}
              >
                <div className="flex flex-col gap-4 flex-grow">
                  <div className="bg-white p-4 rounded-lg">
                    <Row gutter={[16, 16]}>
                      <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                        <div className="bg-[#FFF7EF] h-[100px] rounded-lg py-2">
                          <div className="flex items-center ml-2">
                            <Image
                              src="/Component 1-1.svg"
                              alt="logo1"
                              width={24}
                              height={24}
                            />
                            <div className="text-sm sm:text-md font-semibold ml-2">
                              Total Calories
                            </div>
                          </div>
                          <div className="text-xl sm:text-2xl md:text-3xl font-bold ml-10">
                            1,790
                          </div>
                          <div className="text-xxs sm:text-xs ml-9">Out</div>
                        </div>
                      </Col>
                      <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                        <div className="bg-[#D9F6FF] h-[100px] rounded-lg py-2">
                          <div className="flex items-center ml-2">
                            <Image
                              src="/Component 1-2.svg"
                              alt="logo1"
                              width={24}
                              height={24}
                            />
                            <div className="text-sm sm:text-md font-semibold ml-2">
                              Total Activities
                            </div>
                          </div>
                          <div className="text-xl sm:text-2xl md:text-3xl font-bold ml-10">
                            6
                          </div>
                        </div>
                      </Col>
                      <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                        <div className="bg-[#ECEEFF] h-[100px] rounded-lg py-2">
                          <div className="flex items-center ml-2">
                            <Image
                              src="/Component 1-3.svg"
                              alt="logo3"
                              width={24}
                              height={24}
                            />
                            <div className="text-sm sm:text-md font-semibold ml-2">
                              Steps
                            </div>
                          </div>
                          <div className="text-xl sm:text-2xl md:text-3xl font-bold ml-10">
                            3,497
                          </div>
                        </div>
                      </Col>
                      <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                        <div className="bg-[#EBF7F9] h-[100px] rounded-lg py-2">
                          <div className="flex items-center ml-2">
                            <Image
                              src="/Component 1-4.svg"
                              alt="logo1"
                              width={24}
                              height={24}
                            />
                            <div className="text-sm sm:text-md font-semibold ml-2">
                              Stress Level
                            </div>
                          </div>
                          <div className="text-xl sm:text-2xl md:text-3xl font-bold ml-10">
                            0
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="flex-1 bg-white p-4 rounded-lg overflow-hidden">
                    <div className="flex flex-col h-full max-h-[350px] overflow-y-auto">
                      <UserByIDChart startDate={startDate} endDate={endDate} />
                    </div>
                  </div>
                </div>
              </Content>
            </Layout>
          </Layout>
        </div>
      </main>
    </div>
  );
};

export default App;
