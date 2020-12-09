import React from "react";
import { Link } from "react-router-dom";

class Landing extends React.Component {
  render() {
    return (
      <section>
        {" "}
        <Link to="/home" className="link-home">
          Keep calm. Comparte tu opinión
        </Link>{" "}
      </section>
    );
  }
}

export default Landing;
