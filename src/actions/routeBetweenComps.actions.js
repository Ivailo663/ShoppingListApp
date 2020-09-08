import routes from "../constants/routs";

const toCreateItem = () => {
  return {
    type: routes.CREATE_ITEM,
  };
};
const toBoard = () => {
  return {
    type: routes.BOARD,
  };
};

export const routeBetweenComps = { toCreateItem, toBoard };
