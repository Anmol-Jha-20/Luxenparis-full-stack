import React from "react";

const styles = {
  body: {
    fontFamily: "Arial, sans-serif",
    margin: "40px",
    backgroundColor: "#f9f9f9",
    color: "#333",
    lineHeight: 1.6,
  },
  container: {
    maxWidth: "900px",
    margin: "auto",
    backgroundColor: "#fff",
    padding: "30px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
  },
  heading: {
    color: "#222",
  },
  ul: {
    paddingLeft: "20px",
  },
  footer: {
    textAlign: "center",
    fontSize: "0.9em",
    color: "#888",
    marginTop: "40px",
  },
};

const ShippingDeliveryPolicy = () => {
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.heading}>
            LuxenParis - Shipping & Delivery Policy (India)
          </h1>
        </header>

        <h2 style={styles.heading}>Order Processing Time</h2>
        <p>
          We process all orders within 1–2 business days. Once shipped, delivery
          usually takes 3–7 business days, depending on your location and
          pincode.
        </p>

        <h2 style={styles.heading}>Shipping Charges</h2>
        <ul style={styles.ul}>
          <li>
            Orders ₹799 or above – <strong>Free Shipping</strong>
          </li>
          <li>
            Orders below ₹799 – <strong>Shipping charge of ₹61</strong>
          </li>
        </ul>

        <h2 style={styles.heading}>Estimated Delivery Time</h2>
        <ul style={styles.ul}>
          <li>Metro Cities: 3–5 business days</li>
          <li>Tier 2 & 3 Cities: 5–7 business days</li>
          <li>Remote & North-East Regions: 7–10 business days</li>
        </ul>

        <h2 style={styles.heading}>Order Tracking</h2>
        <p>
          Once your order is dispatched, you&apos;ll receive a tracking link via
          SMS or email, so you can track your package in real time.
        </p>

        <h2 style={styles.heading}>Failed Deliveries</h2>
        <p>
          If you&apos;re not available at the time of delivery, the courier
          partner will make 2 attempts. If the delivery fails both times, your
          order may be returned to us.
        </p>

        <h2 style={styles.heading}>Packaging</h2>
        <p>
          All products are packed in safe, secure, and discreet packaging to
          ensure they reach you in perfect condition.
        </p>

        <footer style={styles.footer}>
          <p>&copy; LuxenParis. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default ShippingDeliveryPolicy;
