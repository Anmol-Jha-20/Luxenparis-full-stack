import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
  FaClock,
  FaShoppingBag,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-xl p-6 sm:p-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-red-600 mb-4 flex items-center justify-center gap-2">
          <FaPhoneAlt className="text-sm" /> Contact Us
        </h1>
        <p className="text-center text-gray-600 text-sm sm:text-base mb-8">
          Have a question? Need help with your order? We’re here for you!
          <br />
          You can reach out to Team LuxenParis through any of the following
          ways:
        </p>

        {/* Section */}
        <div>
          {/* Email */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-1">
              <FaEnvelope className="text-blue-500 text-sm" /> Email Us
            </h2>
            <p className="text-sm text-gray-600">
              For general inquiries, order support, or feedback:
            </p>
            <a
              href="mailto:luxenparisindia@gmail.com"
              className="text-blue-600 underline text-sm"
            >
              luxenparisindia@gmail.com
            </a>
          </div>

          {/* Call/WhatsApp */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-1">
              <FaPhoneAlt className="text-green-500 text-sm" /> Call or WhatsApp
              Us
            </h2>
            <p className="text-sm text-gray-600">
              Need assistance? We’re just a message away:
            </p>
            <ul className="text-sm text-blue-600 space-y-1 mt-1">
              <li>
                <a href="tel:+918860531160" className="underline">
                  +91 88605 31160
                </a>
              </li>
              <li>
                <a href="tel:+918700878191" className="underline">
                  +91 87008 78191
                </a>
              </li>
            </ul>
            <p className="text-xs text-gray-500 mt-1">
              (Available: 10 AM – 7 PM, Monday to Saturday)
            </p>
          </div>

          {/* Head Office */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-1">
              <FaMapMarkerAlt className="text-red-500 text-sm" /> Head Office
            </h2>
            <p className="text-sm text-gray-600">
              LuxenParis
              <br />
              New Delhi, India
            </p>
            <p className="text-xs text-gray-500">
              (*Pickups and visits by prior appointment only*)
            </p>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-1">
              📬 Social Media
            </h2>
            <p className="text-sm text-gray-600">
              Stay connected for the latest launches, offers, and updates:
            </p>
            <ul className="mt-1 text-sm space-y-1">
              <li className="flex items-center gap-2">
                <FaInstagram className="text-pink-500 text-sm" />
                <a
                  href="https://www.instagram.com/luxenparis.official"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline"
                >
                  @luxenparis.official
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaFacebook className="text-blue-800 text-sm" />
                <a
                  href="https://www.facebook.com/luxenparis.official"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline"
                >
                  @luxenparis.official
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-1">
              <FaClock className="text-yellow-500 text-sm" /> Business Hours
            </h2>
            <p className="text-sm text-gray-600">
              Monday to Saturday: 10:00 AM – 7:00 PM
            </p>
            <p className="text-xs text-gray-500">
              Closed on Sundays & National Holidays
            </p>
          </div>

          {/* Shop 24/7 */}
          <div className="text-center mt-6">
            <h2 className="text-lg font-semibold text-green-600 flex items-center justify-center gap-2 mb-2">
              <FaShoppingBag className="text-sm" /> Shop 24/7
            </h2>
            <a
              href="https://www.luxenparis.com"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline text-sm"
            >
              Visit us anytime: www.luxenparis.com
            </a>
          </div>
        </div>

        {/* Footer */}
        <p className="text-xs text-gray-500 text-center mt-10">
          © LuxenParis. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
