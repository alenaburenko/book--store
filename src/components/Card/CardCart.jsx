import "../Card/card.scss";
import { useDispatch } from "react-redux";
import { showModal } from "../../store/modal/action";
import { removeCart } from "../../store/cart/action";

function CardCart({ id, img, title, price, children }) {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(removeCart(id));
  };

  const handleRemoveFromCart = () => {
    const description = "Do you want to remove a book to Cart?";
    dispatch(showModal({ onSuccess: removeFromCart, description }));
  };

  return (
    <>
      <div>
        <div className="card">
          <div onClick={handleRemoveFromCart}>{children}</div>
          <div className="card__body">
            <img src={img} alt="img" className="card__image" />
            <h2 className="card__title">{title}</h2>
            <p className="card__description">{price}&nbsp;$</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardCart;
