import { NavLink, useLocation } from "@remix-run/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const activeClassName = "selected navlink";
const activeStyleCallback = ({ isActive }) =>
  isActive ? activeClassName : "navlink";

const NavLinks = ({ onClose }) => {
  return (
    <div className="flex flex-col space-y-4">
      <NavLink
        to="/"
        className={activeStyleCallback}
        onClick={onClose}
      >
        HOME
      </NavLink>
      <NavLink
        to="/events"
        className={activeStyleCallback}
        onClick={onClose}
      >
        EVENTS
      </NavLink>
      <NavLink
        to="/sponsorship"
        className={activeStyleCallback}
        onClick={onClose}
      >
        SPONSORS
      </NavLink>
      <NavLink
        to="/committee"
        className={activeStyleCallback}
        onClick={onClose}
      >
        COMMITTEES
      </NavLink>
      <NavLink
        to="/location"
        className={activeStyleCallback}
        onClick={onClose}
      >
        LOCATION
      </NavLink>
      <NavLink
        to="/accommodation"
        className={activeStyleCallback}
        onClick={onClose}
      >
        ACCOMMODATION
      </NavLink>
      <NavLink
        to="/souvenir"
        className={activeStyleCallback}
        onClick={onClose}
      >
        SOUVENIR
      </NavLink>
      <NavLink
        to="/registration"
        className={`${activeStyleCallback} text-white bg-pink-500 text-center p-3 rounded transition-transform transform hover:scale-110`}
        onClick={onClose}
      >
        REGISTER
      </NavLink>
    </div>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <div className="absolute top-0 left-0 p-4 z-10 flex items-center">
        <img
          src="logonav.png"
          alt="Logo"
          className="w-12 h-12 md:w-16 md:h-16 mr-6 bg-transparent"
        />
        <nav className="flex flex-[1] items-center overflow-hidden">
          <div className="hidden md:flex space-x-6 ml-16">
            <NavLinks />
          </div>
        </nav>
        <div className="md:hidden flex flex-[1] justify-end pr-4">
          <button onClick={toggleNavbar} className="p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }} // Change initial position to -100%
            animate={{ x: 0 }}
            exit={{ x: "-100%" }} // Change exit position to -100%
            transition={{ type: "tween", duration: 0.5 }}
            className="fixed top-0 left-0 w-72 md:w-80 h-full bg-white shadow-lg"
          >
            <div className="p-4">
              <div className="flex justify-end mb-4">
                <button onClick={toggleNavbar} className="p-2">
                  <X size={24} />
                </button>
              </div>
              <NavLinks onClose={toggleNavbar} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
