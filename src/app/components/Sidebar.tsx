"use client";
import React from "react";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";

const { Sider } = Layout;
interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void; // ฟังก์ชันสำหรับ toggle
}

type MenuItem = Required<MenuProps>["items"][number];

const getMenuItems = (selectedKeys: string[]): MenuItem[] => [
  {
    key: "sub1",
    icon: (
      <Image
        alt="report"
        src={
          selectedKeys.includes("sub1")
            ? "/ic_menu_reportF.svg"
            : "/ic_menu_report.svg"
        }
        width={17}
        height={17}
      />
    ),
    label: (
      <span
        className={`menu-item-label ${
          selectedKeys.includes("sub1") ? "selected" : ""
        }`}
      >
        Report
      </span>
    ),
    children: [
      {
        key: "1-1",
        label: <span className="menu-item-label">Total Activities</span>,
      },
      {
        key: "1-2",
        label: <span className="menu-item-label">Activities Portion</span>,
      },
      {
        key: "1-3",
        label: <span className="menu-item-label">Overall challenge</span>,
      },
    ],
    className: "mt-52",
  },
  {
    key: "sub2",
    icon: (
      <Image
        alt="userInfor"
        src={
          selectedKeys.includes("sub2")
            ? "/ic_menu_userF.svg"
            : "/ic_menu_user.svg"
        }
        width={17}
        height={17}
      />
    ),
    label: (
      <span
        className={`menu-item-label ${
          selectedKeys.includes("sub2") ? "selected" : ""
        }`}
      >
        User Information
      </span>
    ),
  },
  {
    key: "sub3",
    label: (
      <span
        className={`menu-item-label ${
          selectedKeys.includes("sub3") ? "selected" : ""
        }`}
      >
        Challenge Management
      </span>
    ),
    icon: (
      <Image
        alt="challenge"
        src={
          selectedKeys.includes("sub3")
            ? "/ic_menu_challengeF.svg"
            : "/ic_menu_challenge.svg"
        }
        width={17}
        height={17}
      />
    ),
    children: [
      {
        key: "3-1",
        label: <div className="menu-item-label">Navigation One</div>,
      },
    ],
  },
  {
    key: "sub4",
    label: (
      <span
        className={`menu-item-label ${
          selectedKeys.includes("sub4") ? "selected" : ""
        }`}
      >
        System Management
      </span>
    ),
    icon: (
      <Image
        alt="setting"
        src={
          selectedKeys.includes("sub4")
            ? "/ic_menu_settingF.svg"
            : "/ic_menu_setting.svg"
        }
        width={17}
        height={17}
      />
    ),
    children: [
      {
        key: "4-1",
        label: <span className="menu-item-label">Navigation One</span>,
      },
    ],
  },
];

const Sidebar: React.FC<SidebarProps> = ({ collapsed, onToggle }) => {
  const [selectedKeys, setSelectedKeys] = React.useState<string[]>([]);
  const router = useRouter();

  const onSelect = (info: { key: string }) => {
    console.log("Selected", info);
    setSelectedKeys([info.key]);
    if (info.key === "sub2") {
      router.push("/users");
    }
  };

  return (
    <Sider
      breakpoint="lg"
      collapsed={collapsed}
      collapsedWidth="80"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      style={{
        position: "relative",
      }}
      width={240}
    >
      <div
        className="absolute top-[16px] right-[16px] cursor-pointer"
        onClick={onToggle} // เรียกฟังก์ชัน toggle เมื่อคลิก
      >
        <Image
          alt="toggle-btn"
          src="/btn_hidesidebar.svg"
          width={24}
          height={24}
          style={{
            transform: `rotate(${collapsed ? "180deg" : "0deg"})`,
          }}
        />
      </div>
      <div className="absolute top-[64px] left-[50%] transform -translate-x-1/2">
        <Image alt="aisLogo" src="/default_bu.png" width={60} height={60} />
      </div>
      <div className="absolute mt-2 text-white text-sm top-[141px] left-[50%] transform -translate-x-1/2">
        AIS
      </div>
      <Menu
        onSelect={onSelect}
        selectedKeys={selectedKeys}
        style={{ backgroundColor: "#0E1839" }}
        mode="inline"
        theme="dark"
        items={getMenuItems(selectedKeys)}
        className="min-h-screen flex flex-col space-y-10 h-full"
      />
      <style jsx global>{`
        .ant-menu-item-selected {
          background-color: transparent !important;
        }
        .ant-menu-item:hover {
          background-color: none !important;
        }
        .ant-menu-item-selected .menu-item-label {
          color: #c3eb29 !important;
        }
        .menu-item-label {
          color: #b3b3b3;
        }
        .menu-item-label:hover {
          color: #ffffff;
        }
        .menu-item-label.selected {
          color: #c3eb29 !important;
        }
      `}</style>
    </Sider>
  );
};

export default Sidebar;
