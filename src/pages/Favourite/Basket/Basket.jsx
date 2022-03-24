import React from "react";
import { useSelector } from "react-redux";
import Button from "../../../components/Button/Button";
import CardCart from "../../../components/Card/CardCart";
import { SignupForm } from "../../../components/Form/form";


const Basket = () => {
  const cart = useSelector(({ cart }) => cart);
  return (
    <>
      <div className="wrapper">
        {cart.map((elem) => {
          return (
            <CardCart
              key={elem.id}
              elem={elem}
              id={elem.id}
              img={elem.imgSrc}
              title={elem.title}
              price={elem.price}
              color={elem.color}
            >
              <Button className="card__btn--close" text="X" />
            </CardCart>
          );
        })}
       {cart.length === 0? null : <SignupForm/>}  
      </div>
    </>
  );
};

export default Basket;
