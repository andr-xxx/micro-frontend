export const login = (token) => {
  localStorage.setItem("apiToken", token);
};

export const logout = () => {
  window.localStorage.removeItem("apiToken");
};

export const getToken = () => {
  return window.localStorage.getItem("apiToken");
};
