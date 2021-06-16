import axios from "axios";
import StoreConstants from "../constants";
import { setAuthToken, getAuthToken } from "../../token";

export const signIn = async ({ email, password }) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/users/login",
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log('in actyion cferator', response)
    // Set the store token
    setAuthToken(response.data.token);

    // Create an action
    return {
      type: StoreConstants.SIGN_IN,
      payload: { user: response.data },
      status: response.status
    }
  } catch (error) {
    console.log('in catch', error)
    return {
      type: StoreConstants.STORE_ERROR,
      payload: {message: error.message}
    }
  }
};

export const getUser = async () => {
  const response = await axios.get("http://localhost:5000/api/users", {
    headers: {
      Storeorization: `Bearer ${getAuthToken()}`,
    },
  });

  // Create an action
  return {
    type: StoreConstants.GET_USER,
    payload: { user: response.data },
  };
};

export const addIngredient = (ingredient) => {
  return {
    type: StoreConstants.ADD_TO_BASKET,
    payload: { ingredient },
  };
};

export const removeIngredient = (ingredient) => {
  return {
    type: StoreConstants.REMOVE_FROM_BASKET,
    payload: { ingredient },
  };
};

export const clearIngredients = (ingredient) => {
  return {
    type: StoreConstants.CLEAR_BASKET,
  };
};
