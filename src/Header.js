import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/foodeez", label: "Foodeez" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const linkClass = ({ isActive }) =>
    `transition-colors duration-200 hover:text-slate-900 ${
      isActive
        ? "text-slate-900 font-semibold underline decoration-slate-400 underline-offset-8 decoration-2"
        : "text-slate-700"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `block py-2 transition-colors ${
      isActive ? "text-slate-900 font-semibold" : "text-slate-700 hover:text-slate-900"
    }`;

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 shrink-0" aria-label="Palate Networks home">
          <img
            src="/pnpn.png"
            alt=""
            className="h-9 w-9 rounded-full object-cover"
          />
          <span className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 whitespace-nowrap">
            Palate Networks
          </span>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-sm lg:text-base font-medium">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="md:hidden text-slate-700 p-2 -mr-2 focus:outline-none focus:ring-2 focus:ring-slate-300 rounded"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile nav */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out bg-white border-t border-slate-200 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-6 py-4 flex flex-col gap-1 text-base font-medium">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"} className={mobileLinkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
