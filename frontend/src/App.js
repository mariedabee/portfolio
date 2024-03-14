import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import ContactPage from "./components/contact/ContactPage";
import { DataStructures } from "./components/dataStructures/DataStructures";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import darkTheme from "./components/darkTheme";
import BlogPage from "./components/blog/BlogPage";
import NewPostPage from "./components/blog/NewPostPage";
import PortfolioPage from "./components/portfolio/PortfolioPage";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/dataStructures" element={<DataStructures />} />
          <Route path="/blogPage" element={<BlogPage />} />
          <Route path="/new-post" element={<NewPostPage />} />
          <Route path="/editPost/:postId" element={<NewPostPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
