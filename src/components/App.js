import React, { Component } from "react";
import Auth from "./authComponents/Auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <input type="text" class="input-res" />
      </div>
    );
  }
}

export default App;
