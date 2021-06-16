export const setAuthToken = (token) => {
  localStorage.setItem("fsAuthToken", token);
};

export const getAuthToken = () => {
  return localStorage.getItem("fsAuthToken");
};

export const clearAuthToken = () => {
  localStorage.removeItem("fsAuthToken");
};
