import constants from "../constants/constants";
const intialState = {
  isCreateNoteModalOpen: false,
};

const createItem = (state = intialState, action) => {
  switch (action.type) {
    case constants.OPEN_CREATE_NOTE_MODAL:
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
