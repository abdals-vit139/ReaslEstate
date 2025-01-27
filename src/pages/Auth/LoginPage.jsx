import React, { useState } from "react";
import "../../assets/css/login.css";
import { useNavigate } from "react-router-dom";
import { verheffenLogo } from "../../assets/images/index";
import AuthService from "../../services/Auth/Auth.service";
import { Alert, AlertTitle } from "@mui/material";
import Loader from "../../common/Loader/Loader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await AuthService.login(email, password);
      console.log(response);
      setIsLoading(false);

      if (response.data.message === "Login successful") {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userID", response.data.user.id);
        localStorage.setItem("username", response.data.user.username);

        if (response.data.user.role === "admin") {
          navigate("/");
        } else {
          navigate("/usr/dashboard");
        }
      } else {
        setErrorMessage("Invalid email or password.");
      }
    } catch (error) {
      setIsLoading(false);
      setErrorMessage("An error occurred during login. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <div className="split left">
        <img
          src={verheffenLogo}
          width="200px"
          height="200px"
          className="login-img"
          alt="Logo"
        />
      </div>
      <div className="split right">
        <form className="Login" onSubmit={handleSubmit}>
          <p className="title_label">Verheffen System</p>
          {errorMessage && (
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              {errorMessage}
            </Alert>
          )}
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            disabled={isLoading}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            disabled={isLoading}
          />
          <input
            type="submit"
            value="Login"
            className="login-input"
            disabled={isLoading}
          />
          {isLoading && <Loader />}{" "}
        </form>
      </div>
    </div>
  );
};

export default Login;
