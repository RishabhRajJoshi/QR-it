import React from "react";
import logo from "./image/logo.png";

function Header() {
  return (
    <div className="h-24 bg-gradient-to-b from-slate-200">
      <div className="flex justify-center">
        <img className=" m-5 h-16" src={logo} alt="logo" />
      </div>
    </div>
  );
}

export default Header;
