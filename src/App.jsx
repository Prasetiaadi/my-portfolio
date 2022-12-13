import React from 'react';
import Header from './components/header/Header';
import Portfolio from './components/portfolio/Portfolio';
// import Testimonials from './components/testimonials/Testimonials';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Nav from './components/nav/Nav';
// import Services from './components/services/Services';
import Experience from './components/experience/Experience';

const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
