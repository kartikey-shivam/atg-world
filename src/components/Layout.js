import React from "react";
// import SearchLogo from "./../assets/logo/Vector.png";
import Logo from "./../assets/logo/mainlogo.png";
import Search from "./../assets/logo/search.svg";
import Arrow from "./../assets/logo/down.svg";

export default function layout() {
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
        <div className="login">
          Create account. <span className="login-span">It’s free!</span>{" "}
          <img src={Arrow} />
        </div>
      </nav>
    </div>
  );
}
