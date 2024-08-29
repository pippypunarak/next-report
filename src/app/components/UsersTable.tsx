"use client";
import React from "react";
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { useRouter } from "next/navigation";
import "../styles/tableStyle.css";

interface DataType {
  key: React.Key;
  number: string;
  userID: string;
  userName: string;
  displayName: string;
  phone: string;
  connection: string;
  lastSynced: string;
  recentAct: string;
}

const UsersTable = () => {
  const router = useRouter();

  const handleCellClick = (userID: string) => {
    router.push(`/users/${userID}`);
  };

  const columns: TableColumnsType<DataType> = [
    {
      title: "No.",
      dataIndex: "number",
      key: "number",
      align: "center",
      sorter: {
        compare: (a, b) => a.number.localeCompare(b.number),
        multiple: 2,
      },
    },
    {
      title: "User ID",
      dataIndex: "userID",
      key: "userID",
      align: "center",
      sorter: {
        compare: (a, b) => a.userID.localeCompare(b.userID),
        multiple: 2,
      },
    },
    {
      title: "User Name",
      dataIndex: "userName",
      key: "userName",
      align: "center",
      sorter: {
        compare: (a, b) => a.userName.localeCompare(b.userName),
        multiple: 2,
      },
    },
    {
      title: "Display Name",
      dataIndex: "displayName",
      key: "displayName",
      align: "center",
      sorter: {
        compare: (a, b) => a.displayName.localeCompare(b.displayName),
        multiple: 2,
      },
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      align: "center",
      sorter: {
        compare: (a, b) => a.phone.localeCompare(b.phone),
        multiple: 3,
      },
    },
    {
      title: "Connection Status",
      dataIndex: "connection",
      key: "connection",
      align: "center",
      sorter: {
        compare: (a, b) => a.connection.localeCompare(b.connection),
        multiple: 2,
      },
    },
    {
      title: "Last Synced",
      dataIndex: "lastSynced",
      key: "lastSynced",
      align: "center",
      sorter: {
        compare: (a, b) => a.lastSynced.localeCompare(b.lastSynced),
        multiple: 1,
      },
    },
    {
      title: "Recent Activity",
      dataIndex: "recentAct",
      key: "recentAct",
      align: "center",
      sorter: {
        compare: (a, b) => a.recentAct.localeCompare(b.recentAct),
        multiple: 1,
      },
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      number: "1",
      userID: "005144",
      userName: "Name Surname",
      displayName: "Display Name",
      phone: "080 - 0000000",
      connection: "Disconnected",
      lastSynced: "27/04/2022 14:37:39",
      recentAct: "27/04/2022 14:37:39",
    },
    {
      key: "2",
      number: "2",
      userID: "005132",
      userName: "Name Surname",
      displayName: "Display Name",
      phone: "080 - 0000000",
      connection: "Connected",
      lastSynced: "27/04/2022 14:37:39",
      recentAct: "27/04/2022 14:37:39",
    },
    {
      key: "3",
      number: "3",
      userID: "001653",
      userName: "Name Surname",
      displayName: "Display Name",
      phone: "080 - 0000000",
      connection: "Connected",
      lastSynced: "27/04/2022 14:37:39",
      recentAct: "27/04/2022 14:37:39",
    },
    {
      key: "4",
      number: "4",
      userID: "001132",
      userName: "Name Surname",
      displayName: "Display Name",
      phone: "080 - 0000000",
      connection: "Connected",
      lastSynced: "27/04/2022 14:37:39",
      recentAct: "27/04/2022 14:37:39",
    },
  ];

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        className="custom-table"
        onRow={(record) => ({
          onClick: () => handleCellClick(record.userID),
          className: "cursor-pointer",
        })}
      />
    </div>
  );
};

export default UsersTable;
