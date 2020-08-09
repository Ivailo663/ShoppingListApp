import { createItemConstants } from "../constants";

const openCreateNoteModal = () => {
  return {
    type: createItemConstants.OPEN_CREATE_NOTE_MODAL,
  };
};

export const createItemActions = {
  openCreateNoteModal,
};
