import { useParams } from "react-router-dom";
import CardInfo from "./CardInfo";

const CardInfoConvertor = () => {
  const { id } = useParams();
  return <CardInfo id={id} />;
};

export default CardInfoConvertor;
