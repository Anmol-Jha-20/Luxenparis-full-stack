import React from "react";
import HomeCard from "./HomeCard.jsx";
import Bubblegum from "../../assets/products/IMG_9039.JPG";
import Maniac from "../../assets/products/Maniac1.png";
import Oceara from "../../assets/products/Oceara2.jpg";
import Satisfya from "../../assets/products/Satisfya2.jpg";

function HomeProduct() {
  return (
    <section className="section bg-dark-black">
      <div className="container column">
        <h2>BESTSELLERS</h2>
        <div className="grid-card-container">
          <HomeCard img={Bubblegum} title={"Bubblegum (Her) - 100ml"} />
          <HomeCard img={Maniac} title={"Maniac (Him) - 100ml"} />
          <HomeCard img={Oceara} title={"Oceara (Him) - 100ml"} />
          <HomeCard img={Satisfya} title={"Satisfya (UNISEX) - 100ml"} />
        </div>
      </div>
    </section>
  );
}

export default HomeProduct;
