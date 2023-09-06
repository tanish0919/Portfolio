import React from 'react';
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";




const App = () => {
  return (
  <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    
  </>
  )
}

export default App;