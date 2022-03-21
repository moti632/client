import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getCurrentUser } from "./../../../services/userService";
import CardControllers from "./CardControllers";

const Cards = ({ cards, handleDelete, changeLikeStatus }) => {
  if (!cards.length) return <div>No Cards In The State Object...</div>;

  const user = getCurrentUser();

  return (
    <table className="table btn-info">
      <thead>
        <tr>
          <th scope="col">Card Number:</th>
          <th scope="col">Title:</th>
          <th scope="col">SubTitle:</th>
          <th scope="col">Address:</th>
          <th scope="col">Phone:</th>
          <th scope="col">Options:</th>
        </tr>
      </thead>

      <tbody>
        {cards.map((card) => {
          return (
            <tr key={card._id}>
              <th scope="row">{card.bizNumber}</th>
              <td>
                <Link to={`card-info/${card._id}`}>{card.title}</Link>
              </td>
              <td>{card.subTitle}</td>
              <td>{card.address}</td>
              <td>{card.phone}</td>
              <td>
                <CardControllers
                  card={card}
                  changeLikeStatus={changeLikeStatus}
                  user={user}
                  handleDelete={handleDelete}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

Cards.propTypes = {
  cards: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  changeLikeStatus: PropTypes.func.isRequired,
};

export default Cards;
