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

const TermsConditions = () => {
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.heading}>LuxenParis - Terms & Conditions</h1>
        </header>

        <h2 style={styles.heading}>1. Acceptance of Terms</h2>
        <p>
          By accessing or using the website{" "}
          <a
            href="https://www.luxenparis.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.luxenparis.com
          </a>{" "}
          ('Website'), you agree to be bound by these Terms and Conditions. If
          you do not agree, please do not use this Website.
        </p>

        <h2 style={styles.heading}>2. Eligibility</h2>
        <p>
          To use this Website, you must be at least 18 years old or have
          permission from a parent or legal guardian. By using this Website, you
          represent and warrant that you meet these eligibility requirements.
        </p>

        <h2 style={styles.heading}>3. Products & Orders</h2>
        <ul style={styles.ul}>
          <li>
            All products listed on the Website are subject to availability.
          </li>
          <li>
            We reserve the right to refuse or cancel any order at our sole
            discretion.
          </li>
          <li>
            Product images are for illustration purposes and may differ slightly
            from the actual product.
          </li>
        </ul>

        <h2 style={styles.heading}>4. Pricing & Payment</h2>
        <ul style={styles.ul}>
          <li>
            All prices are listed in INR (Indian Rupees) and are inclusive of
            applicable taxes unless stated otherwise.
          </li>
          <li>We reserve the right to change pricing without prior notice.</li>
          <li>
            Payments are processed through secure third-party payment gateways.
            LuxenParis is not responsible for any errors or breaches caused by
            these platforms.
          </li>
        </ul>

        <h2 style={styles.heading}>5. Shipping & Delivery</h2>
        <ul style={styles.ul}>
          <li>Delivery timelines are estimates and not guaranteed.</li>
          <li>
            We are not responsible for delays caused by courier partners or
            unforeseen circumstances.
          </li>
          <li>Title and risk of loss pass to you upon delivery.</li>
        </ul>

        <h2 style={styles.heading}>6. Returns, Exchanges & Refunds</h2>
        <p>
          All perfume products sold by LuxenParis are non-returnable,
          non-exchangeable, and non-refundable due to hygiene and safety
          concerns. Please ensure that you review your order carefully before
          making a purchase.
        </p>
        <p>We only accept returns or offer replacements in the rare case of:</p>
        <ul style={styles.ul}>
          <li>
            Products damaged during delivery (must be reported within 24 hours
            of receipt with proof).
          </li>
          <li>
            Incorrect product received (must be reported within 24 hours of
            delivery).
          </li>
        </ul>
        <p>
          All such claims must be supported with unboxing videos and clear
          photographs. LuxenParis reserves the right to approve or deny such
          claims at its sole discretion.
        </p>

        <h2 style={styles.heading}>7. User Conduct</h2>
        <p>You agree not to:</p>
        <ul style={styles.ul}>
          <li>Use the site for any unlawful purpose.</li>
          <li>
            Attempt to gain unauthorized access to the Website or its servers.
          </li>
          <li>
            Upload or distribute any harmful, disruptive, or offensive content.
          </li>
        </ul>

        <h2 style={styles.heading}>8. Intellectual Property</h2>
        <p>
          All content on the Website including logos, text, images, and designs
          is the intellectual property of LuxenParis and may not be used without
          permission.
        </p>

        <h2 style={styles.heading}>9. Limitation of Liability</h2>
        <p>
          LuxenParis shall not be liable for any indirect, incidental, or
          consequential damages arising from the use of the Website or its
          products.
        </p>

        <h2 style={styles.heading}>10. Third-Party Links</h2>
        <p>
          The Website may contain links to external sites. LuxenParis is not
          responsible for the content or policies of these third-party sites.
        </p>

        <h2 style={styles.heading}>11. Governing Law</h2>
        <p>
          These Terms are governed by and construed in accordance with the laws
          of India. All disputes shall be subject to the exclusive jurisdiction
          of the courts of [Your City, India].
        </p>

        <h2 style={styles.heading}>12. Changes to Terms</h2>
        <p>
          We reserve the right to update or modify these Terms at any time.
          Continued use of the Website after changes implies acceptance of the
          revised Terms.
        </p>

        <h2 style={styles.heading}>13. Contact Us</h2>
        <p>
          For any questions about these Terms, please contact us at:{" "}
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

export default TermsConditions;
