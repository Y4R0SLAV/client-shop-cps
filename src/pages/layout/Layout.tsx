import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import { Layout as AntdLayout } from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";

export const Layout: React.FC<{
  children: React.ReactNode | Array<React.ReactNode>;
}> = ({ children }) => {
  return (
    <AntdLayout>
      <Header />
      <Content
        style={{
          margin: "0 16px",
          alignItems: "center",
          color: "#020202",
          backgroundColor: "white",
        }}
      >
        {children}
      </Content>
      <Footer />
    </AntdLayout>
  );
};
