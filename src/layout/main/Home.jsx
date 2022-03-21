import React from "react";
import PageHeader from "../common/pageHeader";
import { getCards } from "../../services/cardService";
import CardExtends from "../common/Cards/CardExtends";
import Cards from "../common/Cards/cards";
import SearchBar from "../common/SearchBar";
import CardsTable from "../common/Cards/CardsTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTableCellsLarge,
  faTableList,
} from "@fortawesome/free-solid-svg-icons";

class HomePage extends CardExtends {
  state = {
    data: [],
    cards: [],
    isMount: false,
    isDisplay: false,
  };

  async componentDidMount() {
    try {
      const { data } = await getCards();
      this.setState({ data, cards: data, isMount: true });
    } catch (error) {
      console.log(error.message);
    }
  }

  render() {
    const cards = [...this.state.cards];
    const { isMount, isDisplay } = this.state;
    if (!isMount) return null;

    return (
      <React.Fragment>
        <PageHeader
          title="Business Card App"
          subTitle="Here you will find business cards"
        />
        <div className="container">
          <SearchBar
            placeholder="Enter business name or number"
            handleChange={this.handleChange}
          />
          <button
            className="btn btn-light btn-outline-dark"
            onClick={this.toggleDisplay}
          >
            {isDisplay ? (
              <FontAwesomeIcon title="Display Table" icon={faTableCellsLarge} />
            ) : (
              <FontAwesomeIcon title="Display Grid" icon={faTableList} />
            )}
          </button>
          {!isDisplay ? (
            <Cards
              cards={cards}
              handleDelete={this.handleDelete}
              changeLikeStatus={this.changeLikeStatus}
            />
          ) : (
            <CardsTable
              cards={cards}
              handleDelete={this.handleDelete}
              changeLikeStatus={this.changeLikeStatus}
            />
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;
