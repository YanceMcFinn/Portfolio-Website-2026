import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-lime-400 font-medium" : "vf transition-all hover:text-lime-400 inline-block";

  return (
    <nav className="w-full bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 h-16 md:h-24 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/">
          <img
          src="/images/assets/SCDesign_Logo_2026_White.svg"
          alt="Sean Cole Design"
          className="w-50 md:w-80"
        />
        </NavLink>

        {/* Desktop */}
        <div className="hidden md:flex gap-6">
          <NavLink to="/" className={linkClass}>
            HOME
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            ABOUT
          </NavLink>
          <NavLink to="/gallery" className={linkClass}>
            GALLERY
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            CONTACT
          </NavLink>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black">
          <div className="flex flex-col px-4 py-3 gap-3">
            <NavLink
              to="/"
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              HOME
            </NavLink>

            <NavLink
              to="/about"
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              ABOUT
            </NavLink>

            <NavLink
              to="/gallery"
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              GALLERY
            </NavLink>

            <NavLink
              to="/contact"
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              CONTACT
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
