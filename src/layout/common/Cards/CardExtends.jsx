import { Component } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import {
  deleteCard,
  changeLikeStatus,
  getFavoriteCards,
} from "../../../services/cardService";

class CardExtends extends Component {
  handleDelete = (cardID) => {
    Swal.fire({
      title: "Are you sure you wont to delete this card?",
      showCancelButton: true,
      confirmButtonText: "Delete Card",
      confirmButtonColor: "#dc3545",
    }).then(async (result) => {
      if (result.isConfirmed) {
        let cards = [...this.state.cards];
        cards = cards.filter((card) => card._id !== cardID);
        this.setState({ cards });
        await deleteCard(cardID);
        toast.success("You have successfully deleted the card!");
      }
    });
  };

  handleChange = (e) => {
    const data = [...this.state.data];
    let cards = data;
    const searchTerm = e.target.value;
    const cardsFiltered = cards.filter((card) => {
      return (
        card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.bizNumber.includes(searchTerm.toLowerCase())
      );
    });
    this.setState({ cards: cardsFiltered });
  };

  changeLikeStatus = async (cardId, user) => {
    try {
      let cards = [...this.state.data];
      let card = cards.find((card) => card._id === cardId);
      if (!card) return;
      let cardLikes = card.likes;
      if (!cardLikes.length) {
        card.likes.push(user._id);
        this.setState({ cards });
        await changeLikeStatus(card._id);
        return;
      }

      let isUserLikedCard = cardLikes.find((id) => id === user._id);

      if (!isUserLikedCard) {
        card.likes.push(user._id);
        this.setState({ cards });
        await changeLikeStatus(card._id);
        return;
      }

      card.likes = card.likes.filter((id) => id !== user._id);

      await changeLikeStatus(card._id);
      const { data: likedCards } = await getFavoriteCards();
      this.setState({ cards, likedCards });
      return;
    } catch (error) {
      console.log(error.message);
    }
  };

  toggleDisplay = () => {
    let displayMode = !this.state.isDisplay;
    this.setState({ isDisplay: displayMode });
  };
}

export default CardExtends;
