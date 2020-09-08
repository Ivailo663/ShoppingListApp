import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { routeBetweenComps } from "../../actions";
import Board from "../Board";
import CreateItem from "../CreateItem";
import Navbar from "../layoutComponents/Navbar";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      component: "board",
      header: "My List",
    };
  }
  switchComponent = (switchTo) => {
    this.setState({ component: switchTo });
  };
  componentDidMount = () => {
    console.log(this.props);
  };
  displayComponents = () => {
    const { component } = this.props;
    switch (component) {
      case "board":
        return <Board />;
      case "create-item":
        return <CreateItem switch={this.props.toBoard} />;
    }
  };
  render() {
    const { header } = this.state;
    return (
      <div>
        <div className="head"></div>

        <div className="white-board">
          <h1 className="component-header funky-font">{header}</h1>
          {this.displayComponents()}

          <Navbar switch={this.props.toCreateItem} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    component: state.routeBetweenComps.component,
  };
};
const actionCreator = {
  toCreateItem: routeBetweenComps.toCreateItem,
  toBoard: routeBetweenComps.toBoard,
};
export default connect(mapStateToProps, actionCreator)(Main);
