const AuthReducer = (state, action) => {
  if (action.type === "AUTH_TOKEN") {
    return { ...state, token: action.payload };
  }

  if (action.type === "UPDATE_LOGIN") {
    const { name, value } = action.payload;
    return { ...state, userInfo: { ...state.userInfo, [name]: value } };
  }

  throw new Error(`${action.type}`);
};
export default AuthReducer;
