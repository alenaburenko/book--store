import React from "react";
import { useSelector } from "react-redux";
import Card from "../../components/Card/Card";
const Home = () => {
  const goods = useSelector(({ goods }) => goods);
  
  return (
    <>
      <div className="wrapper">
        {goods.map((elem) => {
          return (
            <Card
              key={elem.id}
              elem={elem}
              id={elem.id}
              img={elem.imgSrc}
              title={elem.title}
              price={elem.price}
              color={elem.color}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
