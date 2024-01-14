import { Link } from "react-router-dom";
import "./index.css";
const CardList = (props) => {
  const { keyid, img, namaImg, link } = props;

  return (
    <li className="listCard" key={keyid}>
      <Link to={`/transaction/${link}`} className="link">
        <img className="carImg" src={img} alt="car.image" />
        <h3>{namaImg}</h3>
      </Link>
    </li>
  );
};
export default CardList;
