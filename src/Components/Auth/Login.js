import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./assets/login.css";
export const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState([""]);

  const loginHandler = (event) => {
    event.preventDefault();
    const email = document.getElementById("login").value;
    const password = document.getElementById("password").value;

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
    };
    fetch("http://127.0.0.1:8000/api/login", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.status === true) {
          console.log(data);
          console.log("iiii");
          localStorage.setItem("token", data.token);
          navigate("/dashboard");
          //   <Navigate to="/dashboard" />
        }
      });
  };

  return (
    <div>
      <div className="wrapper fadeInDown mt-4">
        <div id="formContent">
          <div className="fadeIn first mt-4">
            <h3>LOGIN</h3>
          </div>
          <form onSubmit={loginHandler}>
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="login"
              placeholder="login"
            />
            <input
              type="text"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="password"
            />
            <input type="submit" className="fadeIn fourth" value="Log In" />
          </form>
          <div id="formFooter">
            <a className="underlineHover" href="#">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
