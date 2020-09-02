import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";

export const EditItem = (props) => {
  return (
    <>
      <div className="modal-container">
        <span className="close-holder" onClick={props.close}>
          <FontAwesomeIcon icon="times" className="close" />
        </span>
        <div className="controllers-wrapper">
          <div className="edit-item-holder controller">
            <span>
              <FontAwesomeIcon icon="edit" />
            </span>
          </div>
          <div className="fark-as-favorite-holder controller">
            <span>
              <FontAwesomeIcon icon={["far", "heart"]} />
            </span>
          </div>
          <div className="delete-list-item-holder controller">
            <span>
              <FontAwesomeIcon icon="trash" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(EditItem);
