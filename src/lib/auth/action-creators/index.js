import axios from "axios";
import AuthConstants from "../constants";
import { setAuthToken, getAuthToken } from "../../token";

export const signIn = async ({ email, password }) => {
  const response = await axios.post(
    "http://localhost:5000/api/users/login",
    { email, password },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  // Set the auth token
  setAuthToken(response.data.token);

  // Create an action
  return {
    type: AuthConstants.SIGN_IN,
    payload: { user: response.data },
  };
};

export const getUser = async () => {
  const response = await axios.get("http://localhost:5000/api/users", {
    headers: {
      Authorization: `Bearer ${getAuthToken()}`,
    },
  });

  // Create an action
  return {
    type: AuthConstants.GET_USER,
    payload: { user: response.data },
  };
};
