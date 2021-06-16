import React, { useReducer } from "react";
import storeReducer, { defaultStoreState } from "../../lib/store/reducer";
import {
  signIn as signInCreator,
  getUser as getUserCreator,
  addIngredient as addIngredientCreator,
  removeIngredient as removeIngredientCreator,
  clearIngredients as clearIngredientsCreator,
  clearErrors as clearErrorsCreator,
} from "../../lib/store/action-creators";

export const StoreContext = React.createContext(null);

// IF YOU PLAN ON HAVING LOADING STATES, YOU WILL INTERFACE WITH A HOOK AND A PROVIDER
// IF YOU DONT, YOU WILL INTERFACE WITH A PROVIDER

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, defaultStoreState);

  const signIn = async ({ email, password }) => {
    const signInAction = await signInCreator({ email, password });
    console.log('inprovider', signInAction)
    dispatch(signInAction)
  };

  const getUser = async () => {
    const getUserAction = await getUserCreator();

    dispatch(getUserAction);
  };

  const addIngredient = (ingredient) => {
    const addIngredientAction = addIngredientCreator(ingredient);

    dispatch(addIngredientAction);
  };
  const removeIngredient = (ingredient) => {
    const removeIngredientAction = removeIngredientCreator(ingredient);
    dispatch(removeIngredientAction);
  };
  const clearIngredients = () => {
    const clearIngredientAction = clearIngredientsCreator();
    dispatch(clearIngredientAction);
  };
  const clearErrors = () => {
    const clearErrorAction = clearErrorsCreator()
    dispatch(clearErrorAction)
  }

  return (
    <StoreContext.Provider
      value={[
        state,
        { signIn, getUser, addIngredient, removeIngredient, clearIngredients, clearErrors },
      ]}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
