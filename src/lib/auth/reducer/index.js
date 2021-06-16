import AuthConstants from "../constants";

export const defaultAuthState = {
  user: null,
  loading: false,
  error: null,
};

const authReducer = (previousState, action) => {
  switch (action.type) {
    case AuthConstants.SIGN_IN:
      return {
        ...previousState,
        loading: false,
        error: null,
        user: action.payload.user,
      };
    case AuthConstants.GET_USER:
      return {
        ...previousState,
        loading: false,
        error: null,
        user: action.payload.user,
      };
    default:
      return previousState;
  }
};

export default authReducer;
