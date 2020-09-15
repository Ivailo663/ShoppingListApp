import constants from "../constants";

const loginUser = () => {
  const loginSuccess = () => {
    return {};
  };
  return (dispatch) => {};
};

const registerUser = () => {
  const registerAttempt = () => {
    return {};
  };
  const registerSuccess = () => {
    return {};
  };
  return (dispatch) => {
    dispatch(registerAttempt());
  };
};

export const userAuthActions = {
  loginUser,
  registerUser,
};
