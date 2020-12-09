import "../stylesheets/App.css";
import React, { useState } from "react";
import Landing from "./Landing";
import Header from "./Header";
import TextInput from "./TextInput";
import MIMITranslator from "./MIMITranslator";
import Footer from "./Footer";
import { Route, Switch } from "react-router-dom";

function App() {
  // state
  const [textArea, setTextArea] = useState("");

  // event
  const handleInputText = (text) => {
    const translate = text.toLowerCase().replace(/[aáeéiíoóuú]/gi, "i");
    setTextArea(translate);
  };

  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/child/:id" render={TextInput} />
        <main className="container landing">
          <canvas className="canvas" width="330" height="50"></canvas>
          <TextInput handleInputText={handleInputText} />
          <MIMITranslator textArea={textArea} />
        </main>
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
