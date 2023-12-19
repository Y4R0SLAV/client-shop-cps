import React from "react";

import { Header as AntdHeader } from "antd/es/layout/layout";
export const Header = () => {
  return (
    <AntdHeader
      style={{
        display: "flex",
        alignItems: "center",
        color: "#020202",
        backgroundColor: "white",
      }}
    >
      Header
    </AntdHeader>
  );
};
