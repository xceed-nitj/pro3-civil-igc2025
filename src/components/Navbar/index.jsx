import { NavLink, useLocation } from "@remix-run/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {
  mobileNavContainerVariant,
  mobileNavListVariant,
  mobileNavExitProps,
} from "../../data/animationConfig"; // Correct import path

const activeClassName = "selected navlink";
const activeStyleCallback = ({ isActive }) =>
  isActive ? activeClassName : "navlink";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/" className={`${activeStyleCallback} mx-6 text-gray-700 hover:text-black pt-3 transition-transform transform hover:scale-110`}>
        HOME
      </NavLink>
      <NavLink to="/events" className={`${activeStyleCallback} mx-6 text-gray-700 hover:text-black pt-3 transition-transform transform hover:scale-110`}>
        EVENTS
      </NavLink>
      <NavLink to="/sponsorship" className={`${activeStyleCallback} mx-6 text-gray-700 hover:text-black pt-3 transition-transform transform hover:scale-110`}>
        SPONSORS
      </NavLink>
      <NavLink to="/committee" className={`${activeStyleCallback} mx-6 text-gray-700 hover:text-black pt-3 transition-transform transform hover:scale-110`}>
        COMMITTEES
      </NavLink>
      <NavLink to="/location" className={`${activeStyleCallback} mx-6 text-gray-700 hover:text-black pt-3 transition-transform transform hover:scale-110`}>
        LOCATION
      </NavLink>
      <NavLink to="/accommodation" className={`${activeStyleCallback} mx-6 text-gray-700 hover:text-black pt-3 transition-transform transform hover:scale-110`}>
        ACCOMMODATION
      </NavLink>
      <NavLink to="/souvenir" className={`${activeStyleCallback} mx-6 text-gray-700 hover:text-black pt-3 transition-transform transform hover:scale-110`}>
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
      <nav className="flex flex-[1] items-center justify-between overflow-hidden border-b-2 border-black p-4"> {/* Added Tailwind CSS classes */}
        <div className="hidden justify-end md:flex space-x-6">
          <NavLinks />
        </div>
        <div className="flex w-[75px] justify-start md:hidden">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            layout="position"
            key="nav-links"
            variants={mobileNavContainerVariant}
            initial="hidden"
            animate="show"
            className="mt-4 basis-full md:hidden"
          >
            <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
              <NavLink to="/" className={`${activeStyleCallback} mx-6 text-gray-700 hover:text-black pt-3 transition-transform transform hover:scale-110`}>
                HOME
              </NavLink>
            </motion.div>
            <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
              <NavLink to="/events" className={`${activeStyleCallback} mx-6 text-gray-700 hover:text-black pt-3 transition-transform transform hover:scale-110`}>
                EVENTS
              </NavLink>
            </motion.div>
            <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
              <NavLink to="/sponsorship" className={`${activeStyleCallback} mx-6 text-gray-700 hover:text-black pt-3 transition-transform transform hover:scale-110`}>
                SPONSORS
              </NavLink>
            </motion.div>
            <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
              <NavLink to="/committee" className={`${activeStyleCallback} mx-6 text-gray-700 hover:text-black pt-3 transition-transform transform hover:scale-110`}>
                COMMITTEES
              </NavLink>
            </motion.div>
            <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
              <NavLink to="/location" className={`${activeStyleCallback} mx-6 text-gray-700 hover:text-black pt-3 transition-transform transform hover:scale-110`}>
                LOCATION
              </NavLink>
            </motion.div>
            <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
              <NavLink to="/accommodation" className={`${activeStyleCallback} mx-6 text-gray-700 hover:text-black pt-3 transition-transform transform hover:scale-110`}>
                ACCOMMODATION
              </NavLink>
            </motion.div>
            <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
              <NavLink to="/souvenir" className={`${activeStyleCallback} mx-6 text-gray-700 hover:text-black pt-3 transition-transform transform hover:scale-110`}>
                SOUVENIR
              </NavLink>
            </motion.div>
            <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
              <NavLink to="/registration" className={`${activeStyleCallback} mx-6 text-gray-700 hover:text-black pt-3 transition-transform transform hover:scale-110`}>
               REGISTER        
              </NavLink>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
