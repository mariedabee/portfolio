import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import darkTheme from "./components/darkTheme";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        {/* Render the Navbar component */}
        <Navbar />
        {/* Define your routes */}
        <Routes>
          {/* Route for the home page */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
