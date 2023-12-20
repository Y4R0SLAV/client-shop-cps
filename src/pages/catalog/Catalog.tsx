import { useSelector } from "react-redux";
import { selectProductsType } from "../../redux/reducers/products";
import { Typography } from "antd";
import { ProductsList } from "./productslist/ProductsList";
const { Title } = Typography;

export const Catalog = () => {
  const productsType = useSelector(selectProductsType);

  return (
    <div>
      <Title level={3} style={{ textAlign: "center" }}>
        {" "}
        {productsType}{" "}
      </Title>
      <ProductsList />
    </div>
  );
};
