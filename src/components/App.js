import React, { Component } from "react";
import { connect } from "react-redux";
import Auth from "./views/Auth";
import salat from "../styles/gallery/products/salat.svg";
import cheese from "../styles/gallery/products/cheese.svg";
import bananas from "../styles/gallery/products/bananas.svg";
import tomato from "../styles/gallery/products/tomato.svg";
import Main from "./views/Main";
import BlurLayer from "./helperComponents/BlurLayer";
import CreateNoteModal from "./modals/CreateNoteModal";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createItemActions } from "../actions";

class App extends Component {
  render() {
    return (
      <>
        <BlurLayer>
          <div className="main-starting-point">
            <div className="main-inner">
              <Router>
                <Route exact path="/" component={Auth} />
                <Route path="/main" component={Main} />
              </Router>

              <img src={cheese} alt="cheese" className="cheese" />
              <img src={salat} alt="salat" className="salat" />
              <img src={tomato} alt="tomato" className="tomato" />
              <img src={bananas} alt="bananas" className="bananas" />
            </div>
          </div>
        </BlurLayer>
        {this.props.isCreateNoteModalOpen ? <CreateNoteModal /> : null}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isCreateNoteModalOpen: state.createItem.isCreateNoteModalOpen,
  };
};
const actionCreators = {
  openCreateNoteModal: createItemActions.openCreateNoteModal,
};
export default connect(mapStateToProps, actionCreators)(App);
