import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import ContactPage from "./components/contact/ContactPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import GameBackground from "./components/background/GameBackground";
import { LanguageProvider } from "./i18n/LanguageContext";
import darkTheme from "./components/darkTheme";
import CvPage from "./components/cv/CvPage";


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
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
