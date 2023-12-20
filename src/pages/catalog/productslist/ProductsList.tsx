import { useSelector } from "react-redux";
import { selectProducts } from "../../../redux/reducers/products";
import { Product } from "../product/Product";
import { Flex } from "antd";

export const ProductsList = () => {
  const products = useSelector(selectProducts);

  return (
    <Flex wrap="wrap" justify="space-between" style={{ maxWidth: "1140px" }}>
      {products.map((item) => {
        return (
          <Product
            id={item.id}
            title={item.title}
            collection={item.collection}
            url={item.url}
            price={item.price}
            type={item.type}
            key={item.id}
          />
        );
      })}
    </Flex>
  );
};
