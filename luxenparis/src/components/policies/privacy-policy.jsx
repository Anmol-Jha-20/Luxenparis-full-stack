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
    color: "#222",
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

const PrivacyPolicy = () => {
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <header style={styles.header}>
          <h1>LuxenParis - Privacy Policy</h1>
        </header>

        <h2 style={styles.heading}>Introduction</h2>
        <p>
          Welcome to LuxenParis (&apos;we,&apos; &apos;our,&apos;
          &apos;us&apos;). Your privacy is important to us. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your information
          when you visit our website{" "}
          <a
            href="https://www.luxenparis.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.luxenparis.com
          </a>{" "}
          and interact with our services.
        </p>

        <h2 style={styles.heading}>1. Information We Collect</h2>
        <p>
          We may collect the following personal data when you visit or make a
          purchase on our website:
        </p>
        <ul style={styles.ul}>
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Shipping and billing address</li>
          <li>
            Payment details (handled securely via third-party payment
            processors)
          </li>
          <li>
            Browsing and device information (via cookies and analytics tools)
          </li>
        </ul>

        <h2 style={styles.heading}>2. How We Use Your Information</h2>
        <p>We use the information we collect for the following purposes:</p>
        <ul style={styles.ul}>
          <li>To process and fulfill orders</li>
          <li>To communicate with you</li>
          <li>To send promotional emails or newsletters</li>
          <li>To improve our website</li>
          <li>To detect and prevent fraud or misuse</li>
        </ul>

        <h2 style={styles.heading}>3. Sharing Your Information</h2>
        <p>
          We do not sell your personal information. However, we may share your
          data with:
        </p>
        <ul style={styles.ul}>
          <li>Payment gateways (e.g., Razorpay, PayPal)</li>
          <li>Shipping and logistics providers</li>
          <li>Email marketing services (e.g., Mailchimp)</li>
          <li>Analytics tools (e.g., Google Analytics)</li>
        </ul>
        <p>
          These third parties are required to handle your data securely and
          lawfully.
        </p>

        <h2 style={styles.heading}>4. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to
          protect your personal data. However, no method of transmission over
          the internet or electronic storage is 100% secure.
        </p>

        <h2 style={styles.heading}>5. Your Rights</h2>
        <p>As a user in India, you have rights to:</p>
        <ul style={styles.ul}>
          <li>Access the personal data we hold about you</li>
          <li>Request corrections or deletions of your data</li>
          <li>Withdraw consent for marketing communications at any time</li>
        </ul>
        <p>
          To exercise your rights, contact us at{" "}
          <a href="mailto:luxenparisindia@gmail.com">
            luxenparisindia@gmail.com
          </a>
          .
        </p>

        <h2 style={styles.heading}>6. Cookies</h2>
        <p>
          We use cookies to personalize your experience and analyze site
          traffic. You can manage cookie preferences through your browser
          settings.
        </p>

        <h2 style={styles.heading}>7. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party sites. We are not
          responsible for their privacy practices. Please review their policies
          independently.
        </p>

        <h2 style={styles.heading}>8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page with an updated effective date.
        </p>

        <h2 style={styles.heading}>9. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at:{" "}
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

export default PrivacyPolicy;
