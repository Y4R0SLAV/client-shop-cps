import { Flex, Layout as AntdLayout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import React from "react";
import { FooterContent } from "./footercontent/FooterContent";
import { HeaderContent } from "./headercontent/HeaderContent";

export const Layout: React.FC<{
  children: React.ReactNode | Array<React.ReactNode>;
}> = ({ children }) => {
  return (
    <AntdLayout>
      <Header
        style={{
          height: "90px",
          position: "sticky",
          top: 0,
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          color: "#020202",
          backgroundColor: "white",
        }}
      >
        <HeaderContent />
      </Header>

      <Content
        style={{
          margin: "0 16px",
          alignItems: "center",
          color: "#020202",
          backgroundColor: "white",
          padding: "0 48px",
        }}
      >
        <Flex justify="center">{children}</Flex>
      </Content>

      <Footer
        style={{
          textAlign: "center",
          color: "#e9fffa",
          backgroundColor: "#111",
        }}
      >
        <FooterContent />
      </Footer>
    </AntdLayout>
  );
};
