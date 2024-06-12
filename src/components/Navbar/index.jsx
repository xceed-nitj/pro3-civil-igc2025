import { NavLink, useLocation } from "@remix-run/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const activeClassName = "selected navlink";
const activeStyleCallback = ({ isActive }) =>
  isActive ? activeClassName : "navlink";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/" className={`${activeStyleCallback} mx-6 text-gray-700 hover:text-black pt-3 transition-transform transform hover:scale-110`} style={{marginRight: '3rem'}}>
        HOME
      </NavLink>
      <NavLink to="/events" className={`${activeStyleCallback} mx-6 text-gray-700 hover:text-black pt-3 transition-transform transform hover:scale-110`} style={{marginRight: '3rem'}}>
        EVENTS
      </NavLink>
      <NavLink to="/sponsorship" className={`${activeStyleCallback} mx-6 text-gray-700 hover:text-black pt-3 transition-transform transform hover:scale-110`} style={{marginRight: '3rem'}}>
        SPONSORS
      </NavLink>
      <NavLink to="/committee" className={`${activeStyleCallback} mx-6 text-gray-700 hover:text-black pt-3 transition-transform transform hover:scale-110`} style={{marginRight: '3rem'}}>
        COMMITTEES
      </NavLink>
      <NavLink to="/location" className={`${activeStyleCallback} mx-6 text-gray-700 hover:text-black pt-3 transition-transform transform hover:scale-110`} style={{marginRight: '3rem'}}>
        LOCATION
      </NavLink>
      <NavLink to="/accommodation" className={`${activeStyleCallback} mx-6 text-gray-700 hover:text-black pt-3 transition-transform transform hover:scale-110`} style={{marginRight: '3rem'}}>
        ACCOMMODATION
      </NavLink>
      <NavLink to="/souvenir" className={`${activeStyleCallback} mx-6 text-gray-700 hover:text-black pt-3 transition-transform transform hover:scale-110`} style={{marginRight: '3rem'}}>
        SOUVENIR
      </NavLink>
      <NavLink to="/registration" className={`${activeStyleCallback} text-white bg-pink-500 text-center p-3 rounded transition-transform transform hover:scale-110`}>
        REGISTER
      </NavLink>
    </>
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
      <div className="absolute top-0 left-0 p-4 z-10 mr-11">
        <img src="https://cdn.iconscout.com/icon/free/png-256/free-civil-engineer-helmet-setting-safety-protection-6-27721.png" alt="Logo" className="w-12 h-12 md:w-16 md:h-16" /> {/* Adjust the path and size of your logo */}
      </div>
      <nav className="flex flex-[1] items-center justify-between overflow-hidden border-b-2 border-black p-4">
        <div className="flex w-[75px] justify-start md:hidden">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
        <div className="hidden justify-end md:flex space-x-6 ml-16">
          <NavLinks />
        </div>
      </nav>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            layout="position"
            key="nav-links"
            className="mt-4 basis-full md:hidden"
          >
            {/* Mobile navigation links */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
