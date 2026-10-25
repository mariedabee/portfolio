import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import ContactPage from "./components/contact/ContactPage";
import { DataStructures } from "./components/dataStructures/DataStructures";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import GameBackground from "./components/background/GameBackground";
import { LanguageProvider } from "./i18n/LanguageContext";
import darkTheme from "./components/darkTheme";
import CvPage from "./components/cv/CvPage";
import Login from "./components/auth/Login"; 
import Signup from "./components/auth/Signup"; 


function App() {
  return (
    <LanguageProvider>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <GameBackground />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cv" element={<CvPage />} />
          <Route path="/dataStructures" element={<DataStructures />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
