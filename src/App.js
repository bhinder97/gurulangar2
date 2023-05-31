import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./ui/Navbar.js";
import Home from "./pages/Home.js";
import Products from "./pages/Products.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Footer from "./ui/Footer.js";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./ui/theme.js";

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;

{
  /* 
Reviews
Products + Services

*/
}
