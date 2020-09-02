import React from "react";
import { connect } from "react-redux";

const BlurLayer = (props) => {
  return (
    <div className={props.isCreateNoteModalOpen ? "layer" : null}>
      {props.children}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isCreateNoteModalOpen: state.createItem.isCreateNoteModalOpen,
  };
};

export default connect(mapStateToProps, null)(BlurLayer);
