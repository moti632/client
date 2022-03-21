import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardHead = ({ card }) => {
  const {
    _id,
    title,
    subTitle,
    image: { url, alt },
  } = card;

  return (
    <div className="card-head">
      <Link to={`/card-info/${_id}`}>
        <img className="img-fluid" src={url} alt={alt} />
      </Link>
      <div className="p-2">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{subTitle}</p>
        <hr className="m-0" />
      </div>
    </div>
  );
};

CardHead.propTypes = {
  card: PropTypes.object.isRequired,
};

export default CardHead;
