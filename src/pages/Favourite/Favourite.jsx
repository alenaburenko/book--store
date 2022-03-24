import React from "react";
import { useSelector } from "react-redux";
import Card from "../../components/Card/Card";


const Favourite = () => {

  const favorites = useSelector(({favorites}) => favorites)
  return (
    <>
      <div className="wrapper">
        {favorites.map((elem) => {
          return (
            <Card
              key={elem.id}
              id={elem.id}
              elem={elem}
              img={elem.imgSrc}
              title={elem.title}
              price={elem.price}
              color={elem.color}
            ></Card>
          );
        })}
      </div>
    </>
  );
};

export default Favourite;
