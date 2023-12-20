import { ProductType } from "../../../redux/reducers/products";
import { Flex, Image } from "antd";
import { Typography } from "antd";
import { getFormattedPrice } from "../../../utils/functions";

const { Paragraph } = Typography;

export const Product: React.FC<ProductType> = ({
  id,
  title,
  price,
  type,
  url,
}) => {
  return (
    <Flex vertical>
      <Image src={url} preview={false} width={365} />
      <Paragraph>
        {type} "{title}"
      </Paragraph>
      <Paragraph strong style={{ marginTop: "-15px" }}>
        {getFormattedPrice(price)}
      </Paragraph>
    </Flex>
  );
};
