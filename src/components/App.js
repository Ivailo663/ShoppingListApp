import React, { Component } from "react";
import Auth from "./authComponents/Auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import salat from "../styles/gallery/products/salat.svg";
import cheese from "../styles/gallery/products/cheese.svg";
import bread from "../styles/gallery/products/bread.svg";
import bananas from "../styles/gallery/products/bananas.svg";
import tomato from "../styles/gallery/products/tomato.svg";

class App extends Component {
  render() {
    return (
      <div className="main">
        <div className="main-inner">
          <Auth />
          <img src={cheese} alt="cheese" className="cheese" />
          <img src={salat} alt="salat" className="salat" />
          {/* <img src={bread} alt="bread" className="bread" /> */}
          <img src={tomato} alt="tomato" className="tomato" />
          <img src={bananas} alt="bananas" className="bananas" />
        </div>
      </div>
    );
  }
}

export default App;
