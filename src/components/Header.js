import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assests/image.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full flex justify-center mt-6">
      <div className="flex items-center w-full max-w-6xl bg-white rounded-full px-6 py-3 shadow">

        {/* Logo  image is imported as logo so i have used logo*/}
        <img
          src={logo}
          alt="Logo"
          className="w-12 cursor-pointer"
          onClick={() => navigate("/")}
        />

        {/* Navigation */}
        <nav className="flex-1 flex justify-center gap-8 text-sm">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-purple-600 font-bold" : ""}>
            Home
          </NavLink>

          <NavLink to="/jobs" className={({ isActive }) => isActive ? "text-purple-600 font-bold" : ""}>
            Find Jobs
          </NavLink>

          <NavLink to="/talents" className={({ isActive }) => isActive ? "text-purple-600 font-bold" : ""}>
            Find Talents
          </NavLink>

          <NavLink to="/about" className={({ isActive }) => isActive ? "text-purple-600 font-bold" : ""}>
            About Us
          </NavLink>

          <NavLink to="/testimonials" className={({ isActive }) => isActive ? "text-purple-600 font-bold" : ""}>
            Testimonials
          </NavLink>
        </nav>

        {/* Button */}
        <button
          onClick={() => navigate("/jobs/create")}
          className="bg-purple-600 text-white px-5 py-2 rounded-full text-sm"
        >
          Create Jobs
        </button>

      </div>
    </header>
  );
};

export default Header;
