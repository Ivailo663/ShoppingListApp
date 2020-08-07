import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Board from "../mainComponents/Board";
import CreateItem from "../mainComponents/CreateItem";
import "@fortawesome/free-solid-svg-icons";
import Navbar from "../layoutComponents/Navbar";
import Layer from "../helperComponents/BlurLayer";
import BlurLayer from "../helperComponents/BlurLayer";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      component: "create-item",
      header: "My List",
    };
  }
  switchComponent = (switchTo) => {
    this.setState({ component: switchTo });
    console.log(this.state.component, "component");
  };
  displayComponents = () => {
    const { component } = this.state;

    switch (component) {
      case "board":
        return <Board switch={(switchTo) => this.switchComponent(switchTo)} />;
      case "create-item":
        return (
          <CreateItem switch={(switchTo) => this.switchComponent(switchTo)} />
        );
    }
  };
  render() {
    const { header } = this.state;
    return (
      <div className="list-top-container">
        <div className="head"></div>

        <div className="white-board">
          <h1 className="component-header funky-font">{header}</h1>
          {this.displayComponents()}

          <Navbar switch={(switchTo) => this.switchComponent(switchTo)} />
        </div>
      </div>
    );
  }
}

export default Main;
