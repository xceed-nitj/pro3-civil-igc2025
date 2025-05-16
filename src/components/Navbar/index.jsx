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
    <div className="bg-violet-900 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 -mt-2">
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-10">
        <NavLink to="/" className={activeStyleCallback} onClick={onClose} style={{ color: 'white' }}>
          HOME
        </NavLink>
        <NavLink to="/events" className={activeStyleCallback} onClick={onClose} style={{ color: 'white' }}>
          EVENTS
        </NavLink>
        <NavLink
          to="/sponsorship"
          className={activeStyleCallback}
          onClick={onClose}
          style={{ color: 'white' }}
        >
          SPONSORS
        </NavLink>
        <NavLink
          to="/committee"
          className={activeStyleCallback}
          onClick={onClose}
          style={{ color: 'white' }}
        >
          COMMITTEES
        </NavLink>
        <NavLink
          to="/location"
          className={activeStyleCallback}
          onClick={onClose}
          style={{ color: 'white' }}
        >
          LOCATION
        </NavLink>
        <NavLink
          to="/accommodation"
          className={activeStyleCallback}
          onClick={onClose}
          style={{ color: 'white' }}
        >
          ACCOMMODATION
        </NavLink>
      </div>
      <div className="mt-0 md:mt-0">
      <NavLink
          to="/registration"
          className={`text-white bg-pink-500 text-center p-2 rounded-md transition-transform transform hover:scale-110 ${activeStyleCallback}`}
          onClick={onClose}
        >
          REGISTRATION
        </NavLink>
      </div>
      <div className="flex flex-row">
        <div className="contact1 flex bg-violet-900 items-center text-white absolute right-4 top-5 block md:hidden">
          <FontAwesomeIcon icon={faPhone} />
          <p className="ml-2">+91 82659-99739</p>
        </div>
        <div className="contact2 bg-violet-900 flex items-center text-white absolute right-4 top-10 block md:hidden">
          <FontAwesomeIcon icon={faEnvelope} />
          <p className="ml-2 whitespace-nowrap">igsjalandharchapter@nitj.ac.in</p>
        </div>
      </div>
    </div>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [navTitle, setNavTitle] = useState("HOME");

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    switch (location.pathname) {
      case "/events":
        setNavTitle("EVENTS");
        break;
      case "/sponsorship":
        setNavTitle("SPONSORS");
        break;
      case "/committee":
        setNavTitle("COMMITTEES");
        break;
      case "/location":
        setNavTitle("LOCATION");
        break;
      case "/accommodation":
        setNavTitle("ACCOMMODATION");
        break;
      case "/souvenir":
        setNavTitle("SOUVENIR");
        break;
      case "/registration":
        setNavTitle("REGISTER");
        break;
      default:
        setNavTitle("HOME");
    }
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className="bg-violet-900 fixed w-full z-10 shadow-lg" style={{ margin: 0, padding: 0, top: 0, left: 0 }}>
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          <div className="flex items-center">
            <img src="logonav.png" alt="Logo" className="w-5 h-5 md:w-10 md:h-10 mr-2" />
            <span className="text-white font-bold text-lg">IGC-2025</span>
            <div className="hidden md:flex md:text-[14px] space-x-1 ml-40 mt-2">
              <NavLinks />
            </div>
          </div>
          <div className="block md:hidden text-white font-bold text-lg">
            {navTitle}
          </div>
          <div className="md:hidden">
            <button onClick={toggleNavbar} className="p-2">
              {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }} transition={{ type: "tween", duration: 0.5 }} className="fixed top-0 left-0 w-80 h-full bg-violet-900 shadow-lg z-20">
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
      </nav>
    </>
  );
};

export default Nav;
