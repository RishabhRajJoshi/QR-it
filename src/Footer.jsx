import React from "react";

var currentyear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="flex justify-center ">
      <p className=" text-slate-200 opacity-70">Copyright © {currentyear}</p>
    </footer>
  );
}

export default Footer;
