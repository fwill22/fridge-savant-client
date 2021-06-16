export const setAuthToken = (token) => {
  localStorage.setItem("fsStoreToken", token);
};

export const getAuthToken = () => {
  return localStorage.getItem("fsStoreToken");
};

export const clearStoreToken = () => {
  localStorage.removeItem("fsStoreToken");
};
