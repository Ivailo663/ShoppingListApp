import React from "react";
import eggs from "../../styles/gallery/products/eggs.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";

function ListItem(props) {
  return (
    <>
      <div className="list-item-container">
        <div className="delete-list-item-holder">
          <FontAwesomeIcon icon="times" className="delete-list-item" />
        </div>

        <span className="delete-item"></span>
        <div className="item-header">
          <img src={eggs} alt="" />
          <div className="item-description-holder">
            <h2>Eggs</h2>
            <div className="edit-element-holder">
              <FontAwesomeIcon icon="pencil-alt" className="edit-element" />
            </div>
            <p className="element-timestamp">2 mins ago</p>
            <p className="element-counter">3 items</p>
          </div>
          <div className="notes-wrapper">
            <p className="notes">notes</p>
            <div className="notes-holder">
              <span>
                <FontAwesomeIcon icon="sticky-note" className="sticky-note" />
              </span>
              <span>
                <FontAwesomeIcon icon="sticky-note" className="sticky-note" />
              </span>
              <span>
                <FontAwesomeIcon icon="sticky-note" className="sticky-note" />
              </span>
            </div>
          </div>
          <FontAwesomeIcon
            icon={["far", "check-circle"]}
            className="check-circle"
          />
        </div>
      </div>
    </>
  );
}

export default ListItem;
