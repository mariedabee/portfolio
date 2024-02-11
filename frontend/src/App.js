import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import ContactPage from "./components/contact/ContactPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import darkTheme from "./components/darkTheme";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
