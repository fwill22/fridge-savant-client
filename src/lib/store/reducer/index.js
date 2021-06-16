import StoreConstants from "../constants";

export const defaultStoreState = {
  user: null,
  loading: false,
  error: null,
  basket: [],
};

const storeReducer = (previousState, action) => {
  switch (action.type) {
    case StoreConstants.SIGN_IN:
      return {
        ...previousState,
        loading: false,
        error: null,
        user: action.payload.user,
      };
    case StoreConstants.GET_USER:
      return {
        ...previousState,
        loading: false,
        error: null,
        user: action.payload.user,
      };
    case StoreConstants.STORE_ERROR:
      return {
        ...previousState,
        loading: false,
        error: true,
      };
    case StoreConstants.ADD_TO_BASKET:
      return {
        ...previousState,
        basket: [...previousState.basket, action.payload.ingredient],
      };
    case StoreConstants.REMOVE_FROM_BASKET:
      return {
        ...previousState,
        basket: previousState.basket.filter(
          (i) => i.name !== action.payload.ingredient.name
        ),
      };
    case StoreConstants.CLEAR_BASKET:
      return {
        ...previousState,
        basket: [],
      };
    default:
      return previousState;
  }
};

export default storeReducer;
