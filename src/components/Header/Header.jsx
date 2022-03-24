import React, { memo } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./header.scss";

function Header() {
  const favorites = useSelector(({favorites}) => favorites)
  const cart = useSelector(({cart}) => cart)
  return (
    <header className="header">
      <div>
        <img
          className="header__logo"
          alt=""
          src="https://i.pinimg.com/originals/4f/8e/5b/4f8e5b9b3861d8565ef362edceb00b13.jpg"
        />
      </div>
      <div className="header__links">
        <NavLink
          className="header__links_link"
          style={({ isActive }) =>
            isActive ? { fontWeight: "bold" } : undefined
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="header__links_link"
          style={({ isActive }) =>
            isActive ? { fontWeight: "bold" } : undefined
          }
          to="/favourites"
        >
          Favourite({favorites.length})
        </NavLink>
        <NavLink
          className="header__links_link"
          style={({ isActive }) =>
            isActive ? { fontWeight: "bold" } : undefined
          }
          to="/basket"
        >
          Basket({cart.length})
        </NavLink>
      </div>
    </header>
  );
}

export default memo(Header);
