import React, { Component } from "react";
import Auth from "./authComponents/Auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";

class App extends Component {
  render() {
    return (
      <div className="main">
        <div className="main-inner">
        <Auth/>
        </div>
      </div>
    );
  }
}

export default App;
