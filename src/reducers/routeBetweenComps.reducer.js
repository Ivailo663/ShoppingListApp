import routes from "../constants/routs";

const initialState = {
  component: "board",
};
const routeBetweenComps = (state = initialState, action) => {
  switch (action.type) {
    case routes.BOARD: {
      return {
        ...state,
        component: "board",
      };
    }
    case routes.CREATE_ITEM: {
      return {
        ...state,
        component: "create-item",
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default routeBetweenComps;
