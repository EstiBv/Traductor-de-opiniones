import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Landing.css";

class Landing extends React.Component {
  render() {
    return (
      <section className="landing">
        {" "}
        <Link to="/home" className="landing-linkHome">
          Pincha aqui y comparte tu opinión
        </Link>{" "}
      </section>
    );
  }
}

export default Landing;
