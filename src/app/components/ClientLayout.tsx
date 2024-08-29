"use client";
import React, { useState } from "react";
import { Layout } from "antd";
import Sidebar from "../components/Sidebar"; // ใช้ Sidebar ที่นี่
import Image from "next/image";

const { Header, Content } = Layout;

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Sidebar collapsed={collapsed} onToggle={handleToggle} />{" "}
      <Layout>
        <Header
          style={{ padding: 0, background: "#ffffff" }}
          className="bg-white text-white py-2 px-4 flex items-center justify-between sm:justify-start sm:px-6 md:px-8 lg:px-10"
        >
          <Image
            alt="connext"
            src="/MyLifeConnext_1200x600px.png"
            width={71}
            height={35}
            className="cursor-pointer ml-6"
          />
          <div className="ml-auto">
            <Image
              alt="profile"
              src="/ic_default_profile.svg"
              width={26}
              height={26}
              className="cursor-pointer mr-6"
            />
          </div>
        </Header>
        <Content>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: "#ffffff",
              borderRadius: 8,
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default ClientLayout;
