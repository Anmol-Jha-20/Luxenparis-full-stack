import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./helper/ScrollToTop.jsx";
import ContactUs from "./components/policies/Contact-us.jsx";
import PrivacyPolicy from "./components/policies/privacy-policy.jsx";
import CancellationRefundPolicy from "./components/policies/refund-and-return.jsx";
import ShippingDeliveryPolicy from "./components/policies/shipping-and-delivery-policy.jsx";
import TermsConditions from "./components/policies/terms-and-conditions.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route
          path="/refund-and-return"
          element={<CancellationRefundPolicy />}
        />
        <Route
          path="/shipping-and-delivery-policy"
          element={<ShippingDeliveryPolicy />}
        />
      </Routes>
    </Router>
  );
}

export default App;
