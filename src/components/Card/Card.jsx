import "../Card/card.scss";
import Button from "../Button/Button";
import { FaStar } from "react-icons/fa";
import { addFavorite, removeFavorite } from "../../store/favorite/actions";
import { useDispatch, useSelector } from "react-redux";
import {
  showModal,
} from "../../store/modal/action";
import { addCart, removeCart } from "../../store/cart/action";

function Card({ id, img, title, price, children, elem }) {
  const dispatch = useDispatch();
  const favorites = useSelector(({ favorites }) => favorites);
  const isFavorite = favorites.some((item) => id === item.id);
  
  

  const handleClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(elem));

    }
  };

  const addToCart = () => {
    dispatch(addCart(elem));
  };
  const removeFromCart = () => {
    dispatch(removeCart(id));
  };

  const handleRemoveFromCart = () => {
    const description = "Do you want to remove a book from Cart?";
    dispatch(showModal({ onSuccess: removeFromCart, description, bg: "red"}));
  }

  const handleAddToCart = () => {
    const description = "Do you want to add a book to Cart?";
    dispatch(showModal({ onSuccess: addToCart, description, bg: "green"}));
  };

  return (
    <>
      <div className="card-wrapper">
        <div className="card">
          <div onClick={handleRemoveFromCart}>{children}</div>
          <div className="card__body">
            <img src={img} alt="img" className="card__image" />
            <h2 className="card__title">{title}</h2>
            <span
              style={isFavorite ? { color: "red" } : { color: "" }}
              onClick={handleClick}
              className="card__star"
            >
              <FaStar />
            </span>
            <p className="card__description">{price}&nbsp;$</p>
          </div>
          <Button
            text="Add to cart"
            onClick={handleAddToCart}
            className="card__btn"
          />
        </div>
      </div>
    </>
  );
}

export default Card;
