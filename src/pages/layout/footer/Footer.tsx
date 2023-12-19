import { Footer as AntdFooter } from "antd/es/layout/layout";
import { getCurrentYear } from "../../../utils/functions";

export const Footer = () => {
  return (
    <AntdFooter
      style={{
        textAlign: "center",
        color: "#e9fffa",
        backgroundColor: "#111",
      }}
    >
      © {getCurrentYear()} All Rights Reserved
    </AntdFooter>
  );
};
