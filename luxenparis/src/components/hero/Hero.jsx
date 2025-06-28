import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import TopNeon from "../../assets/topNeon.png";
import HeroBubblegum from "../../assets/products/aaaB.png";
import HeroOceara from "../../assets/products/oceara.png";
import HeroSatisfya from "../../assets/products/satisasasfya.png";

function Hero() {
  const images = [TopNeon, HeroBubblegum, HeroOceara, HeroSatisfya];

  const isMenuOpen = useSelector((state) => state.menu.isMenuOpen);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImageRef = useRef(null);
  const intervalRef = useRef(null);

  const startImageAnimation = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
  };

  useEffect(() => {
    if (!isMenuOpen) {
      startImageAnimation();
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isMenuOpen]);

  useEffect(() => {
    const heroImage = heroImageRef.current;
    if (!heroImage) return;

    heroImage.classList.add("fade-out");

    const timeout1 = setTimeout(() => {
      heroImage.src = images[currentImageIndex];
      heroImage.classList.remove("fade-out");
      heroImage.classList.add("fade-in");
    }, 400);

    const timeout2 = setTimeout(() => {
      heroImage.classList.remove("fade-in");
    }, 800);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [currentImageIndex]);

  useEffect(() => {
    const heroImage = heroImageRef.current;
    if (heroImage) {
      heroImage.style.display = isMenuOpen ? "none" : "inline-block";
    }
  }, [isMenuOpen]);

  return (
    <div className="hero-section">
      <div className="left-container">
        <h1>THE FRAGRANCE OF LIFE</h1>
      </div>
      <div className="middle-container product-image-section">
        {!isMenuOpen && (
          <img
            id="hero-image"
            ref={heroImageRef}
            src={images[0]}
            alt="hero image"
            className="max-h-full max-w-full object-contain"
          />
        )}
      </div>
      <div className="right-container">
        <p className="para" data-type="border-para">
          A scent that lingers, a memory that lasts. Discover your signature
          fragrance today.
        </p>
      </div>
    </div>
  );
}

export default Hero;
