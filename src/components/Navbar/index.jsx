import { NavLink, useLocation } from "@remix-run/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const activeClassName = "selected navlink";
const activeStyleCallback = ({ isActive }) =>
  isActive ? activeClassName : "navlink";

const NavLinks = ({ onClose }) => {
  return (
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10">
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-10">
        <NavLink to="/" className={activeStyleCallback} onClick={onClose}>
          HOME
        </NavLink>
        <NavLink to="/events" className={activeStyleCallback} onClick={onClose}>
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
      </div>
      <div className="mt-0 md:mt-0">
        <NavLink
          to="/registration"
          className={`${activeStyleCallback} text-white bg-pink-500 text-center p-5 rounded-md transition-transform transform hover:scale-110`}
          onClick={onClose}
        >
          REGISTER
        </NavLink>
      </div>
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
      <nav className="bg-transparent fixed w-full z-10"></nav>
      <div className="bg-transparent top-0 left-0 p-1 z-10 flex items-center w-full mb-4 md:mb-0">
        <div className="md:hidden flex items-center justify-start">
          <button onClick={toggleNavbar} className="p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div className="hidden md:flex items-center mx-0">
          <img
            src="logonav.png"
            alt="Logo"
            className="w-5 h-5 md:w-10 md:h-10 mr-4 bg-transparent mt-0 mb-1"
          />
        </div>
        <div className="flex flex-1 md:hidden justify-end">
          <div className="flex flex-col text-gray-700 space-y-1 text-right">
            <div className="flex items-center space-x-2 justify-end">
              <FontAwesomeIcon icon={faPhone} />
              <p>+9888895253</p>
            </div>
            <div className="flex items-center space-x-2 justify-end">
              <FontAwesomeIcon icon={faEnvelope} />
              <p>chemcon2024@gmail.com</p>
            </div>
          </div>
        </div>
        <nav className="hidden md:flex flex-1 items-center justify-between overflow-hidden">
          <div className="space-x-6 ml-16 px-10">
            <NavLinks />
          </div>
        </nav>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.5 }}
            className="fixed top-0 left-0 w-56 md:w-80 h-full bg-white shadow-lg z-20"
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
