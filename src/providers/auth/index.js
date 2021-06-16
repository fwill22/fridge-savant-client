import React, { useReducer } from "react";
import authReducer, { defaultAuthState } from "../../lib/auth/reducer";
import {
  signIn as signInCreator,
  getUser as getUserCreator,
} from "../../lib/auth/action-creators";

export const AuthContext = React.createContext(null);

// IF YOU PLAN ON HAVING LOADING STATES, YOU WILL INTERFACE WITH A HOOK AND A PROVIDER
// IF YOU DONT, YOU WILL INTERFACE WITH A PROVIDER

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, defaultAuthState);

  const signIn = async ({ email, password }) => {
    const signInAction = await signInCreator({ email, password });

    dispatch(signInAction);
  };

  const getUser = async () => {
    const getUserAction = await getUserCreator();

    dispatch(getUserAction);
  };

  return (
    <AuthContext.Provider value={[state, { signIn, getUser }]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
