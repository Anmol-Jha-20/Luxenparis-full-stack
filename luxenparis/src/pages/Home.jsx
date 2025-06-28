import React from "react";
import Header from "../components/header/Header.jsx";
import Hero from "../components/hero/Hero.jsx";
import Slider from "../components/hero/Slider.jsx";
import OurStory from "../components/homeProducts/OurStory.jsx";
import HomeProduct from "../components/homeProducts/HomeProduct.jsx";
import Celebrate from "../components/homeProducts/Celebrate.jsx";
import FAQS from "../components/faq/FAQS.jsx";
import Footer from "../components/footer/Footer.jsx";
import WhyLuxenparis from "../components/Features/WhyLuxenparis.jsx";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="main-container bg-dark-black">
        <div className="circle"></div>
        <div className="container">
          <Header />
          <Hero />
        </div>
      </div>
      <Slider />
      <main>
        <OurStory />
        <HomeProduct />
        <Celebrate />
        <WhyLuxenparis />
        <FAQS />
        <Footer />
      </main>
    </>
  );
}

export default Home;
