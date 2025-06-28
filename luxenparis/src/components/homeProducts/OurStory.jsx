import React from "react";
import Story from "../../assets/Story.jpg";

function OurStory() {
  return (
    <section className="section bg-light-black">
      <div className="container row">
        <div className="product-container">
          <img src={Story} alt="perfume image" />
        </div>
        <div className="content">
          <h2>Our Story</h2>
          <p className="para">
            LuxenParis — "Where Fragrance Meets Soul". Born from the soul of
            India, touched by the charm of Paris — LuxenParis isn't just a
            fragrance brand, it's a personal ritual. We don't create perfumes.
            We bottle memories, emotions, and the aura you carry when words fall
            short. From the spicy warmth of Indian nights to the romantic breeze
            of Parisian mornings — every note is a journey, and every bottle is
            your companion. For the ones who don't follow trends — they create
            presence. For the ones who walk in silence — but leave a trail of
            elegance behind. LuxenParis — Be Remembered Always!
          </p>
          <a href="#" className="primary-btn">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
