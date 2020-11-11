import constants from "../constants/constants";
import { registration } from "../services/services";

const loginUser = () => {
  const loginSuccess = () => {
    return {};
  };
  return (dispatch) => {};
};

const registerUser = (user) => {
  const registerRequest = () => {
    return {
      type: constants.REGISTER_USER_REQUEST,
    };
  };
  const registerSuccess = () => {
    return {
      type: constants.REGISTER_USER_SUCCESS,
    };
  };
  return async (dispatch) => {
    // console.log(user, "USER??");
    dispatch(registerRequest());
    try {
      await registration(user);
    } catch (err) {
      console.log(err);
    } finally {
      console.log("all good");
      dispatch(registerSuccess());
    }
  };
};

export const userAuthActions = {
  loginUser,
  registerUser,
};
