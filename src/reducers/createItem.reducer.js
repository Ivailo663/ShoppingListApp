import { createItemConstants } from "../constants";
const intialState = {
  isCreateNoteModalOpen: false,
};

const createItem = (state = intialState, action) => {
  switch (action.type) {
    case createItemConstants.OPEN_CREATE_NOTE_MODAL:
      return {
        ...state,
        isCreateNoteModalOpen: !state.isCreateNoteModalOpen,
      };
    default: {
      return state;
    }
  }
};

export default createItem;
