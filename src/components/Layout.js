import React from "react";
// import SearchLogo from "./../assets/logo/Vector.png";
import { useDispatch, useSelector } from "react-redux/es/exports";

import Logo from "./../assets/logo/mainlogo.png";
import Search from "./../assets/logo/search.svg";
import Arrow from "./../assets/logo/down.svg";
import Up4 from "./../assets/up4.svg";
export default function Layout() {
  const { groupStatus, user } = useSelector((state) => state.custom);
  return (
    <div>
      <nav className="navbar container-fluid">
        <div className="navbar_child"></div>
        <div className="search">
          <img className="search-logo" src={Search} />
          <input
            className="nav-input"
            placeholder="Search for you favorite groups in ATG"
          />
        </div>
        {groupStatus ? (
          <div className="login">
            <img src={Up4} />
            <p className="login-text">Siddharth Goyal</p>
            <img src={Arrow} />
          </div>
        ) : (
          <div className="login">
            Create account. <span className="login-span">It’s free!</span>{" "}
            <img src={Arrow} />
          </div>
        )}
      </nav>
    </div>
  );
}
