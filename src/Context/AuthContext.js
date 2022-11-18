import React, { useReducer, useContext } from "react";
import reducer from "../Reducer/AuthReducer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const authToken = localStorage.getItem("token");

const intialstate = {
  userInfo: {
    firstName: "",
    LastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
  token: authToken,
};

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  //   const navigator = useNavigate();
  const [state, dispatch] = useReducer(reducer, intialstate);

  const loginHandler = async (e, emailId, passwordId) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/api/auth/login`, {
        email: emailId,
        password: passwordId,
      });

      localStorage.setItem("token", response.data.encodedToken);
      dispatch({ type: "AUTH_TOKEN", payload: response.data.encodedToken });
      //   navigator("/");
      console.log("loged in successful");
    } catch (error) {
      console.log("Failed to Login");
    }
  };

  const signUpHandler = async (
    e,
    firstName,
    lastName,
    email,
    password,
    confirmPassword
  ) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      });
      localStorage.setItem("token", response.data.encodedToken);
      dispatch({
        type: "AUTH_TOKEN",
        payload: response.data.encodedToken,
      });
      //   navigator("/logIn");
      console.log("sign up successful");
    } catch (error) {
      console.log("Failed to signup");
    }
  };

  const updateLogin = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    dispatch({ type: "UPDATE_LOGIN", payload: { name, value } });
  };

  return (
    <AuthContext.Provider
      value={{ ...state, loginHandler, updateLogin, signUpHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
