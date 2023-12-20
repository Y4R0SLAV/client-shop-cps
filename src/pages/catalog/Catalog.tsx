import { useSelector } from "react-redux";
import { selectProducts } from "../../redux/reducers/products";

export const Catalog = () => {
  const products = useSelector(selectProducts);

  return <div>Catalog</div>;
};
