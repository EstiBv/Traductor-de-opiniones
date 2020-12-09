import React from "react";
import "../stylesheets/MIMITranslator.css";
import PropTypes from "prop-types";

function MIMITranslator(props) {
  return (
    <section className="container-paragraph">
      <h4 className="paragraph">{props.textArea}</h4>{" "}
    </section>
  );
}

MIMITranslator.propTypes = {
  textArea: PropTypes.string,
};

export default MIMITranslator;
