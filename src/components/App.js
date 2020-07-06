import React, { Component } from "react";
import Auth from "./authComponents/Auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import salat from "../styles/gallery/products/salat.svg";
import cheese from "../styles/gallery/products/cheese.svg";
import bananas from "../styles/gallery/products/bananas.svg";
import tomato from "../styles/gallery/products/tomato.svg";
import List from '../components/listComponents/List'
// import eggs from '../styles/gallery/products/eggs.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="main">
        <div className="main-inner">
        
          <Router>
            <Route exact path="/" component={Auth}/>
            <Route path="/list" component={List}/>
          </Router>
          
          <img src={cheese} alt="cheese" className="cheese" />
          <img src={salat} alt="salat" className="salat" />
          <img src={tomato} alt="tomato" className="tomato" />
          <img src={bananas} alt="bananas" className="bananas" />
          {/* <img src={eggs} /> */}
        </div>
      </div>
    );
  }
}

export default App;
