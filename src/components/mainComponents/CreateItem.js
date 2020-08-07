import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import eggs from "../../styles/gallery/products/eggs.png";
import "@fortawesome/free-solid-svg-icons";
import CreateNoteModal from "../modals/CreateNoteModal";
import { createItemActions } from "../../actions";

const CreateItem = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  useEffect(() => {
    console.log(props, "hey");
  });
  return (
    <>
      <div className="create-element">
        <div
          className="create-element-header"
          onClick={() => props.switch("board")}
        >
          <div className="back-btn">
            <span>
              <FontAwesomeIcon icon="chevron-left" className="back-arrow" />
            </span>{" "}
            back
          </div>
          <div className="btn-holder">
            <button>
              <span>
                <FontAwesomeIcon
                  icon={["fas", "heart"]}
                  className="heart-full"
                />
              </span>
              favorites
            </button>
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
            <div className="notes-holder">
              <span className="sticky-note-orange">
                <FontAwesomeIcon icon="sticky-note" className="sticky-note" />
              </span>
              <span className="sticky-note-blue">
                <FontAwesomeIcon icon="sticky-note" className="sticky-note" />
              </span>
              <span className="sticky-note-purple">
                <FontAwesomeIcon icon="sticky-note" className="sticky-note" />
              </span>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen ? <CreateNoteModal /> : null}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    isCreateNoteModalOpen: state.createItem.isCreateNoteModalOpen,
  };
};
const actionCreators = {
  openCreateNoteModal: createItemActions.openCreateNoteModal,
};
export default connect(mapStateToProps, actionCreators)(CreateItem);
