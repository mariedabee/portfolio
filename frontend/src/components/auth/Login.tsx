import React, { useState } from "react";
import { TextField, Button, Container, Box } from "@mui/material";
import { login } from "./authApi";
import { useStyles } from "../styles";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const handleLogin = async () => {
    try {
      // Call the login function from authApi.js 
      await login({
        username,
        password,
      });
      // Update login status to true
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };

  const handleLogout = () => {
    // Implement logout functionality here
    setIsLoggedIn(false);
  };
  
  const classes = useStyles();

  return (
    <Box className={classes.root}>
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
      {isLoggedIn ? (
        <>
          <p>Welcome, {username}!</p>
          <Button variant="contained" onClick={handleLogout}>
            Log Out
          </Button>
        </>
      ) : (
        <Button variant="contained" onClick={handleLogin}>
          Login
        </Button>
      )}
    </Container>
    </Box>
  );
};

export default Login;
