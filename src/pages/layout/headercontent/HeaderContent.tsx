import { Flex } from "antd";

export const HeaderContent = () => {
  return (
    <div style={{ width: "100%" }}>
      <Flex
        justify="center"
        align="center"
        style={{ fontSize: "24px", marginBottom: "-25px" }}
      >
        HEADER AFfsa
      </Flex>
      <Flex justify="center" gap="large" align="center">
        <div>Главная</div>
        <div>Коллекции</div>
        <div>Одежда</div>
        <div>Аксессуары</div>
        <div>Доставка и оплата</div>
        <div>Контакты</div>
      </Flex>
    </div>
  );
};
