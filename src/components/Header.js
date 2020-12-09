import React from "react";
import "../stylesheets/Header.css";

class Header extends React.Component {
  render() {
    return (
      <header className="container-title">
        {" "}
        <h1 className="title">Tu opinión es importante</h1>
      </header>
    );
  }
}

export default Header;
