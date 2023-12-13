// import React from "react";
import "./index.css"
import { useState } from 'react'
import Navbar from "./Components/Portfolio-layout/Navbar";
import Hero from "./Components/Portfolio-layout/Hero";
import About from './Components/Portfolio-layout/About';
import Batch from './Components/Portfolio-layout/Batch';
import Testimonial from "./Components/Portfolio-layout/testimonial";
import Contact from "./Components/Portfolio-layout/Contact";
import Projects from './Components/Portfolio-layout/Projects';
import Footer from "./Components/Portfolio-layout/Footer";

import { ThemeProvider } from "./Components/Portfolio-layout/ThemeContext"
// import MobileNavbar from "./Components/Portfolio-layout/MobileNavbar/MobileNavbar"



function App() {






  return (
    <>
      <ThemeProvider>
        <Navbar/>
        <Hero />
        <About />
        <Batch />
        <Projects />
        <Testimonial />
        <Contact />
        <Footer />
      </ThemeProvider>






    </>
  )
}

export default App;
