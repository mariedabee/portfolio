import React, { useState } from "react";
import { TextField, Button, Container } from "@mui/material";
import axios from "axios";
import { login } from "./authApi";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      // Call the login function from authApi.js instead of axios
      const response = await login({
        username,
        password,
      });
      console.log(response); // Handle successful login
      // Redirect user or perform any other actions upon successful login
    } catch (error) {
      console.error("Error logging in:", error.message);
      // Handle login error
    }
  };

  return (
    <Container maxWidth="sm">
      <h2>Login</h2>
      <TextField
        label="Username or Email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
    </Container>
  );
};

export default Login;
