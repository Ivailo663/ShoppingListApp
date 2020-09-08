import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

const managePlusBtn = (component, data, props) => {
  if (component == "board") {
    return (
      <div className="create-list-item-holder btn" onClick={props.switch}>
        <FontAwesomeIcon icon="plus" className="create-list-item" />
      </div>
    );
  } else if (component == "create-item") {
    if (!data) {
      return (
        <div
          className="create-list-item-holder-disabled btn"
          onClick={props.switch}
        >
          <FontAwesomeIcon icon="plus" className="create-list-item-disabled" />
        </div>
      );
    } else {
      return (
        <div className="create-list-item-holder btn" onClick={props.switch}>
          <FontAwesomeIcon icon="plus" className="create-list-item" />
        </div>
      );
    }
  }
};
function Navbar(props) {
  const { component, data } = props;

  return (
    <div className="navbar">
      <span>
        <FontAwesomeIcon icon="angle-left" className="nav-item" />
      </span>
      <ul>
        <li>
          <FontAwesomeIcon icon={["far", "clipboard"]} className="nav-item" />
        </li>
        <li>{managePlusBtn(component, data, props)}</li>
        <li>
          <FontAwesomeIcon icon={["far", "user"]} className="nav-item" />
        </li>
      </ul>
      <div>
        <FontAwesomeIcon icon="bars" className="nav-item" />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    component: state.routeBetweenComps.component,
    data: state.getFoodData.data,
  };
};

export default connect(mapStateToProps, null)(Navbar);
