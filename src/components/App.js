import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello from react</h1>
        <FontAwesomeIcon icon="home" className="HOUSE" />
        <FontAwesomeIcon icon="apple-alt" className="HOUSE" />
        <FontAwesomeIcon icon="arrow-left" className="HOUSE" />
        <FontAwesomeIcon icon="chevron-left" className="HOUSE" />
        <FontAwesomeIcon icon="chevron-circle-left" className="HOUSE" />
      </div>
    );
  }
}

export default App;
