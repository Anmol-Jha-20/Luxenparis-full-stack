import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toggleMenu } from "../../redux/menuSlice.jsx";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.menu.isMenuOpen);
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" className="rounded" />
          </Link>
        </div>
        <ul
          className={`navlist ${isMenuOpen ? "navlist-active" : ""}`}
          id="navlist"
        >
          <li>
            <Link to="/" className="navlinks active">
              Home
            </Link>
          </li>
          <li>
            <a href="#" className="navlinks">
              Perfume
            </a>
          </li>
          <li>
            <a href="#" className="navlinks">
              Deodorant
            </a>
          </li>
          <li>
            <a href="#" className="navlinks">
              Elixir
            </a>
          </li>
          <li>
            <Link
              to={"/login"}
              className="navlinks bg-[#1E90FF] text-white font-semibold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out"
            >
              Login
            </Link>
          </li>
        </ul>
        <div
          className="hamburger"
          id="hamburger"
          onClick={() => dispatch(toggleMenu())}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
