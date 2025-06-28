import React from "react";
import LPposter from "../../assets/products/LPposterD1.jpg";

function Celebrate() {
  return (
    <section className="section bg-dark-black celebrate">
      <div className="glow1"></div>
      <div className="glow2"></div>
      <div className="container row">
        <div className="sale-product">
          <img src={LPposter} alt="sale image" />
        </div>
        <div className="sale-content">
          <p className="sale-heading">Celebrate Day Sale!</p>
          <h3 className="sale-txt">
            Save 30% Off On All <br />
            Items Collection
          </h3>
          <a href="#" className="primary-btn">
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default Celebrate;
