import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Cursor from "./components/Cursor";
// import Section from "./components/Section";
import Services from "./components/Services";
import Footer from "./components/Footer"; 
import Slider from "./components/Slider";
import Contact from "./components/Contact"


const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Cursor />
      <Navbar />
      
      <Hero />
      <About />
      <Services />
      <Slider />
      < Contact />
     
      {/* <Section
        title="Section One - Awesome Cursor"
        linkText="Hover over me"
        className="section-one"
      />
      <Section
        title="Section Two - Check This Out"
        linkText="Hover over me"
        className="section-two"
      /> */}
      <Footer /> 

    </main>
    
  );
};

export default App;
