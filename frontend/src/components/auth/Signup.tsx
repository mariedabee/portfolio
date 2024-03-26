import React, { useState } from "react";
import { TextField, Button, Container, Box } from "@mui/material";
import { signup } from "./authApi";
import { useStyles } from "../styles";

const Signup: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false); // State to track signup success
  const classes = useStyles();

  const handleSignup = async () => {
    try {
      // Call the signup function 
      await signup({
        username,
        email,
        password,
      });
      // Update signup success state
      setSignupSuccess(true);
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  return (
    <Box className={classes.root}>
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
      {signupSuccess && <p>Sign up successful!</p>} 
    </Container>
    </Box>
  );
};

export default Signup;
