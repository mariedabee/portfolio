import React, { useState } from "react";
import { TextField, Button, Container } from "@mui/material";
import { signup } from "./authApi";

const Signup: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      // Call the signup function 
      const response = await signup({
        username,
        email,
        password,
      });
      console.log(response); // Handle successful signup
      // Redirect user or perform any other actions upon successful signup
    } catch (error) {
      console.error("Error signing up:", error.message);
      // Handle signup error
    }
  };

  return (
    <Container maxWidth="sm">
      <h2>Sign Up</h2>
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
      <Button variant="contained" onClick={handleSignup}>
        Sign Up
      </Button>
    </Container>
  );
};

export default Signup;
