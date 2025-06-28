import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <h4>Bestsellers</h4>
            <ul>
              <li>
                <a href="#">Ultimate Perfume Box</a>
              </li>
              <li>
                <a href="#">Perfume Gift Set For Men</a>
              </li>
              <li>
                <a href="#">Perfume Gift Set For Women</a>
              </li>
              <li>
                <a href="#">Under Eye Cream for Dark Circles</a>
              </li>
              <li>
                <a href="#">Perfume For Men</a>
              </li>
              <li>
                <a href="#">Perfume For Women</a>
              </li>
              <li>
                <a href="#">Unisex Perfume</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Information</h4>
            <ul>
              <li>
                <a href="#">Blogs</a>
              </li>
              <li>
                <a href="#">Newsroom</a>
              </li>
              <li>
                <Link to="/terms-and-conditions" target="_blank">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" target="_blank">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/refund-and-return" target="_blank">
                  Refund and Return
                </Link>
              </li>
              <li>
                <Link to="/shipping-and-delivery-policy" target="_blank">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <a href="#">Bulk Order - GST Invoice</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <Link to="/contact-us" target="_blank">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#">Order Tracking</a>
              </li>
              <li>
                <a href="#">All Products</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </div>

          <div className="footer-column contact-info">
            <h4>Contact Us</h4>
            <p>
              Office Location: 3739/18 Regar Pura Karol Bagh New Delhi-5 ,India
            </p>
            <p>
              <a href="#">Contact Us on WhatsApp</a>
            </p>
            <p>+91-8860531160</p>
            <p>Timing: 11:00 AM to 7:00 PM, Monday to Saturday</p>
          </div>

          <div className="footer-column exclusive">
            <h4>Exclusive</h4>
            <div>
              <form
                action="https://formsubmit.co/luxenparisindia@gmail.com"
                method="POST"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email here"
                  required
                />
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_next"
                  value="https://luxenparis.netlify.app/thank-you.html"
                />

                <button type="submit">&rarr;</button>
              </form>
            </div>
            <p>
              Sign up here to get the latest news, updates and special offers
              delivered to your inbox.
              <br />
              Plus, you'll be the first to know about our discounts!
            </p>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-pinterest-p"></i>
              </a>
              <a href="https://www.instagram.com/luxenparis.official?igsh=dGNlZWgwYzZkZG0=">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        <section className="keywords-section">
          <div>
            <h2 className="keywords-heading">Most Searched Keywords</h2>
            <div className="keywords-wrapper">
              <span>Perfume</span>
              <span>Best perfume for men</span>
              <span>attar</span>
              <span>attar perfume</span>
              <span>oud attar</span>
              <span>Perfume for women</span>
              <span>Vitamin C Face Wash</span>
              <span>Gift for Men</span>
              <span>Perfume set for women</span>
              <span>Face wash for oily skin</span>
              <span>Body scrub</span>
              <span>Dark circle</span>
              <span>Acne face wash</span>
              <span>Gift sets for women</span>
              <span>Body wash for women</span>
              <span>Pocket perfumes for men</span>
              <span>De tan face pack</span>
              <span>Pimple removal cream</span>
              <span>Lip scrub</span>
              <span>Tan removal face pack</span>
              <span>Gift set for men</span>
              <span>Perfumes for men under 500</span>
              <span>Perfumes for women under 500</span>
              <span>Perfume gift sets</span>
              <span>Oud perfumes</span>
              <span>Best long lasting perfume for men</span>
              <span>Long lasting perfume for woman</span>
              <span>Perfume gift pack for her</span>
              <span>Charcoal face wash</span>
              <span>Body wash for men</span>
              <span>Body Lotion for men</span>
              <span>Body Lotion for women</span>
              <span>Shower Gel and Perfume Combo</span>
              <span>Birthday Gift for Women/Girls</span>
              <span>Gifts for Women Under 500</span>
              <span>Gifts for Men Under 500</span>
              <span>Corporate Gifts</span>
            </div>
          </div>
        </section>
      </footer>
      <div className="section bg-dark-black">
        <div>
          <p className="footer-txt">
            Copyright &copy;2025 Roi Luxe International All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
