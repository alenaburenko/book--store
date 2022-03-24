import "./App.Scss";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Favourite from "./pages/Favourite/Favourite";
import Basket from "./pages/Favourite/Basket/Basket";
import Header from "./components/Header/Header";
import getGoods from "./store/goods/actions";
import { useDispatch } from "react-redux";
import { ConformationModal } from "./components/ConformationModal/ConformationModal";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getGoods());
  });

  return (
    <>
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourite />}></Route>
          <Route path="/basket" element={<Basket />}></Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <ConformationModal/>
    </>
  );
}

export default App;
