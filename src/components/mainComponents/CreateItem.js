import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import eggs from "../../styles/gallery/products/eggs.png";
import "@fortawesome/free-solid-svg-icons";

import { createItemActions } from "../../actions";

const CreateItem = (props) => {
  useEffect(() => {
    console.log(props, "hey");
  });
  return (
    <>
      <div className="create-element">
        <div className="create-element-header">
          <div className="back-btn btn" onClick={() => props.switch("board")}>
            <span>
              <FontAwesomeIcon icon="chevron-left" className="back-arrow" />
            </span>{" "}
            back
          </div>
          <div className="btn-holder">
            <button>favorites</button>
          </div>
        </div>

        <form>
          <label htmlFor="search-item">
            <FontAwesomeIcon icon="search" className="search-item-icon" />
          </label>
          <input
            type="text"
            className="search-item"
            id="search-item"
            placeholder="Type the product here"
          />
        </form>
        <div className="item-creator">
          <div className="left-part">
            <img src={eggs} />
          </div>
          <div className="right-part">
            <div className="item-caption-holder">
              <input type="text" defaultValue="Eggs" />
              <span className="icon-holder">
                <FontAwesomeIcon icon="pen" className="edit" />
              </span>
            </div>
            <div className="quantity-wrapper">
              <label>Quantity</label>
              <div className="quantity-holder">
                <button className="item-controller">
                  {" "}
                  <FontAwesomeIcon icon="minus" />
                </button>
                <input className="funky-font" type="number " defaultValue="0" />
                <button className="item-controller">
                  {" "}
                  <FontAwesomeIcon icon="plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="add-notes" onClick={props.openCreateNoteModal}>
          <div className="add-notes-btn">
            Add notes
            <ul className="notes-holder">
              <li>
                <span className="sticky-note-orange">
                  <FontAwesomeIcon icon="sticky-note" className="sticky-note" />
                </span>
              </li>
              <li>
                <span className="sticky-note-blue">
                  <FontAwesomeIcon icon="sticky-note" className="sticky-note" />
                </span>
              </li>
              <li>
                <span className="sticky-note-purple">
                  <FontAwesomeIcon icon="sticky-note" className="sticky-note" />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {};
};
const actionCreators = {
  openCreateNoteModal: createItemActions.openCreateNoteModal,
};
export default connect(mapStateToProps, actionCreators)(CreateItem);
