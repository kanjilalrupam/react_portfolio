import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Masterhead from "./components/Masterhead";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
import Modal from "./components/Modal";
const App = () => (
  <div>
    <Navbar />
    <Masterhead />
    <Portfolio />
    <About />
    <Contact />
    <Footer />
    <Copyright />
    <Modal
      title="Log Cabin"
      modalId="portfolioModal1"
      imgSrc=" assets/img/portfolio/cabin.png"
    />
    <Modal
      title="Tasty Cake"
      modalId="portfolioModal2"
      imgSrc=" assets/img/portfolio/cake.png"
    />
    <Modal
      title=" Circus Tent"
      modalId="portfolioModal3"
      imgSrc=" assets/img/portfolio/circus.png"
    />
    <Modal
      title="Controller"
      modalId="portfolioModal4"
      imgSrc=" assets/img/portfolio/game.png"
    />
    <Modal
      title="Locked Safe"
      modalId="portfolioModal5"
      imgSrc=" assets/img/portfolio/safe.png"
    />
    <Modal
      title="Submarine"
      modalId="portfolioModal6"
      imgSrc=" assets/img/portfolio/submarine.png"
    />
  </div>
);

export default App;
