import constants from "../constants/constants";
const initialState = {
  data: undefined,
};

const getFoodData = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_FOOD_DATA_REQUEST:
      return {
        ...state,
        hey: "hey",
      };
    case constants.GET_FOOD_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case constants.GET_FOOD_DATA_FAILURE:
      return {
        ...state,
        err: action.err,
      };
    default: {
      return state;
    }
  }
};

export default getFoodData;
