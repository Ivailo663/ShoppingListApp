import constants from "../constants/constants";
import { getData } from "../services/services";
import { text } from "@fortawesome/fontawesome-svg-core";

const getFoodData = (query) => {
  const getDataRequest = () => {
    return {
      type: constants.GET_FOOD_DATA_REQUEST,
    };
  };
  const getDataSuccess = (data) => {
    let obj = {
      food: query,
      img: data.parsed[0].food.image,
    };
    // console.log(obj, "obj");
    return {
      type: constants.GET_FOOD_DATA_SUCCESS,
      payload: obj,
    };
  };
  const getDataFailuer = (err) => {
    return {
      type: constants.GET_FOOD_DATA_FAILURE,
      err,
    };
  };
  return async (dispatch) => {
    dispatch(getDataRequest());
    try {
      let data = await getData(query);
      dispatch(getDataSuccess(data.data));
    } catch (err) {
      dispatch(getDataFailuer(err));
      console.log(err, "ERROR");
    }
  };
};

export default getFoodData;
