import React from "react";
import "../stylesheets/TextInput.css";
import { Link } from "react-router-dom";

function TextInput(props) {
  const handleInputText = (ev) => {
    const inputValue = ev.currentTarget.value;
    props.handleInputText(inputValue);
  };

  return (
    <React.Fragment>
      <section className="text-form">
        <form action="POST" className="form">
          <textarea
            className="form-container"
            name="text"
            id="mimi"
            cols="30"
            rows="10"
            onChange={handleInputText}
            placeholder=" Opina:       "
          ></textarea>
        </form>
      </section>
      <Link to="/" className="link-home">
        👋🏼
      </Link>{" "}
    </React.Fragment>
  );
}

export default TextInput;
