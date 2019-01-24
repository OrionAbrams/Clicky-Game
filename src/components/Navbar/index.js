import React from "react";
// import "./style.css";

function Navbar(props) {
  return (
    <nav className="navbar navbar-fixed-top navbar-dark bg-dark">
    <a className="navbar-brand" href="#">
    Clicky Game! <br></br>
      {props.children}
    </a>
  </nav>
);
}



export default Navbar;
