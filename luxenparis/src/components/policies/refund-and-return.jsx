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

const CancellationRefundPolicy = () => {
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.heading}>
            LuxenParis - Cancellation & Refund Policy
          </h1>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://www.luxenparis.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.luxenparis.com
            </a>
          </p>
          <p>
            <strong>Contact:</strong>{" "}
            <a href="mailto:luxenparisindia@gmail.com">
              luxenparisindia@gmail.com
            </a>
          </p>
        </header>

        <h2 style={styles.heading}>1. Order Cancellation</h2>
        <ul style={styles.ul}>
          <li>
            Orders can only be cancelled within 2 hours of placing the order or
            before the order is dispatched, whichever comes first.
          </li>
          <li>
            Once an order is processed or shipped, it cannot be cancelled.
          </li>
          <li>
            To cancel an order within the allowed window, please email us at{" "}
            <a href="mailto:luxenparisindia@gmail.com">
              luxenparisindia@gmail.com
            </a>{" "}
            with your order details.
          </li>
        </ul>

        <h2 style={styles.heading}>
          2. Non-Cancellable & Non-Refundable Products
        </h2>
        <p>
          Due to hygiene and safety reasons, all perfume products sold on
          LuxenParis are non-cancellable, non-returnable, and non-refundable
          once shipped.
        </p>

        <h2 style={styles.heading}>3. Refund Eligibility</h2>
        <p>Refunds are only applicable in the following rare cases:</p>
        <ul style={styles.ul}>
          <li>
            Damaged product received (must be reported within 24 hours of
            delivery with proof).
          </li>
          <li>
            Incorrect item delivered (must be reported within 24 hours of
            delivery).
          </li>
        </ul>
        <p>To claim a refund, the customer must provide:</p>
        <ul style={styles.ul}>
          <li>Clear unboxing video from start to finish.</li>
          <li>Photographs showing the issue.</li>
        </ul>
        <p>Refund requests without sufficient proof will not be accepted.</p>

        <h2 style={styles.heading}>4. Refund Process</h2>
        <ul style={styles.ul}>
          <li>
            Once approved, refunds (if applicable) will be processed to the
            original payment method within 7–10 business days.
          </li>
          <li>
            You will receive an email notification once your refund is
            processed.
          </li>
        </ul>

        <h2 style={styles.heading}>5. Contact</h2>
        <p>
          For cancellation or refund-related inquiries, reach out to us at:{" "}
          <a href="mailto:luxenparisindia@gmail.com">
            luxenparisindia@gmail.com
          </a>
        </p>

        <footer style={styles.footer}>
          <p>&copy; LuxenParis. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default CancellationRefundPolicy;
