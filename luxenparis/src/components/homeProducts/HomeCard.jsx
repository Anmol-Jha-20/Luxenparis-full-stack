import React from "react";

function HomeCard({ img, title }) {
  return (
    <div className="card">
      <div className="card-product">
        <img src={img} alt="product image 1" />
      </div>
      <div className="card-info">
        <h4>{title}</h4>
        {/* <p className="price">$20.00</p> */}
        <a href="#" className="primary-btn">
          Buy Now
        </a>
      </div>
    </div>
  );
}

export default HomeCard;
