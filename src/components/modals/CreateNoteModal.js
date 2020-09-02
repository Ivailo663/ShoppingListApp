import React from "react";
import { connect } from "react-redux";
import { createItemAtions } from "../../actions";
import "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createItemActions } from "../../actions";

const CreateNoteModal = (props) => {
  return (
    <div className="modal">
      <div className="modal-container create-node-modal ">
        <ul className="notes-holder">
          <li>
            <label htmlFor="note-txt-area">
              <span className="sticky-note-orange">
                <FontAwesomeIcon icon="sticky-note" className="sticky-note" />
              </span>
            </label>
          </li>
          <li>
            <label htmlFor="note-txt-area">
              <span className="sticky-note-blue">
                <FontAwesomeIcon icon="sticky-note" className="sticky-note" />
              </span>
            </label>
          </li>
          <li>
            <label htmlFor="note-txt-area">
              <span className="sticky-note-purple">
                <FontAwesomeIcon icon="sticky-note" className="sticky-note" />
              </span>
            </label>
          </li>
        </ul>
        <div className="note-txt-area-wrapper">
          <span className="close-holder" onClick={props.openCreateNoteModal}>
            <FontAwesomeIcon icon="times" className="close" />
          </span>
          <form>
            <textarea
              id="note-txt-area"
              name="note"
              rows="4"
              cols="50"
              defaultValue="JHADJSAJHDSAKJDKJASDKJHASKDKJHSADDSA"
            />
          </form>
          <button>
            <span className="btn-txt">create</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};
const actionCreators = {
  openCreateNoteModal: createItemActions.openCreateNoteModal,
};

export default connect(mapStateToProps, actionCreators)(CreateNoteModal);
