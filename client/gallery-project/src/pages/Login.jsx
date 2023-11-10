import React, { useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import "./Login.css";
import cookie from "js-cookie";
import validationPage from "../components/cookie-user.js";

function Login() {
  const user = validationPage();
      if (user) {
        return window.location.href = "/admin";
      }
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    try {
      const response = await axios.post("https://web-class-fullstack.vercel.app/login", {
        username,
        password,
      });
      const token = response.data.data.token;
      cookie.set("token", token, { expires: 1, sameSite: "None", secure: true });
      if (token) return window.location.href = "/admin"
    } catch (error) {
      console.error("Login gagal:", error);
    }
  }
  return (
    <div className="text-center mt-5 main-form">
        <Helmet>
            <title>Admin</title>
        </Helmet>
        <h1 className="m-2">Login Page Admin</h1>
      <input
      className="form-control"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
      className="form-control"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} className="btn btn-primary">Login</button>
    </div>
  );
}

export default Login;
