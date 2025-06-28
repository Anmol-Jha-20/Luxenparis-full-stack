import React, { useState } from "react";
import { assets } from "../assets/assets.js";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Login() {
  const [state, setState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen px-6 sm:px-0 bg-gradient-to-br from-blue-200 to-purple-400">
      <div className="bg-slate-900 p-10 rounded-lg shadow-lg w-full sm:w-96 text-indigo-300 text-sm">
        <h2 className="text-3xl font-semibold text-white text-center mb-3">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </h2>
        <p className="text-center text-sm mb-6">
          {state === "Sign Up"
            ? "Create your account"
            : "Login to your account!"}
        </p>

        <form>
          {state === "Sign Up" && (
            <div className="mb-4 flex items-center w-full px-3 sm:px-5 py-2.5 rounded-full bg-[#333A5C] border border-transparent focus-within:border-indigo-500 transition-colors duration-200">
              <img
                src={assets.person_icon}
                alt="person icon"
                className="w-4 h-4 flex-shrink-0 mr-2 sm:mr-3"
              />
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="bg-transparent outline-none flex-1 text-white placeholder-gray-400 min-w-0"
                type="text"
                placeholder="Full Name"
                required
              />
            </div>
          )}

          <div className="mb-4 flex items-center w-full px-3 sm:px-5 py-2.5 rounded-full bg-[#333A5C] border border-transparent focus-within:border-indigo-500 transition-colors duration-200">
            <img
              src={assets.mail_icon}
              alt="Mail icon"
              className="w-4 h-4 flex-shrink-0 mr-2 sm:mr-3"
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="bg-transparent outline-none flex-1 text-white placeholder-gray-400 min-w-0"
              type="email"
              placeholder="Email id"
              required
            />
          </div>

          <div className="mb-4 flex items-center w-full px-3 sm:px-5 py-2.5 rounded-full bg-[#333A5C] border border-transparent focus-within:border-indigo-500 transition-colors duration-200">
            <img
              src={assets.lock_icon}
              alt="password icon"
              className="w-4 h-4 flex-shrink-0 mr-2 sm:mr-3"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="bg-transparent outline-none flex-1 text-white placeholder-gray-400 min-w-0"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
            />
            <button
              type="button"
              className="flex-shrink-0 cursor-pointer text-gray-400 hover:text-indigo-300 transition-colors duration-200 p-1 ml-1 sm:ml-2 rounded-full hover:bg-slate-700 touch-manipulation"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <FaEyeSlash className="w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <FaEye className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </button>
          </div>

          <p
            onClick={() => navigate("/reset-password")}
            className="mb-4 text-indigo-400 cursor-pointer hover:text-indigo-300 transition-colors duration-200"
          >
            Forget Password?
          </p>

          <button
            type="submit"
            className="w-full py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-900 text-white font-medium cursor-pointer hover:from-indigo-600 hover:to-indigo-800 transition-all duration-200 transform hover:scale-[1.02]"
          >
            {state}
          </button>
        </form>

        {state === "Sign Up" ? (
          <p className="text-gray-400 text-center text-xs mt-4">
            Already have an account? &nbsp;
            <span
              onClick={() => setState("Login")}
              className="text-blue-400 cursor-pointer underline hover:text-blue-300 transition-colors duration-200"
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="text-gray-400 text-center text-xs mt-4">
            Don't have an account? &nbsp;
            <span
              onClick={() => setState("Sign Up")}
              className="text-blue-400 cursor-pointer underline hover:text-blue-300 transition-colors duration-200"
            >
              Sign Up
            </span>
          </p>
        )}
      </div>
    </div>
  );
}

export default Login;
