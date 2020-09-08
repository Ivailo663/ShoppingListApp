import constants from "../constants/constants";

const openCreateNoteModal = () => {
  return {
    type: constants.OPEN_CREATE_NOTE_MODAL,
  };
};

export const createItemActions = {
  openCreateNoteModal,
};
