import React from "react";
import "./style.css";

function Navbar(props) {
  return <nav class="navbar navbar-expand-lg navbar-light bg-light">{props.children}</nav>;
}

export default Navbar;
