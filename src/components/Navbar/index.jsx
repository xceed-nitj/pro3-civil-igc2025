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
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 -mt-2">
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-10">
        <NavLink to="/" className={activeStyleCallback} onClick={onClose} style={{ color: 'black' }}>
          HOME
        </NavLink>
        <NavLink to="/events" className={activeStyleCallback} onClick={onClose} style={{ color: 'black' }}>
          EVENTS
        </NavLink>
        <NavLink
          to="/sponsorship"
          className={activeStyleCallback}
          onClick={onClose}
          style={{ color: 'black' }}
        >
          SPONSORS
        </NavLink>
        <NavLink
          to="/committee"
          className={activeStyleCallback}
          onClick={onClose}
          style={{ color: 'black' }}
        >
          COMMITTEES
        </NavLink>
        <NavLink
          to="/location"
          className={activeStyleCallback}
          onClick={onClose}
          style={{ color: 'black' }}
        >
          LOCATION
        </NavLink>
        <NavLink
          to="/accommodation"
          className={activeStyleCallback}
          onClick={onClose}
          style={{ color: 'black' }}
        >
          ACCOMMODATION
        </NavLink>
        <NavLink
          to="/souvenir"
          className={activeStyleCallback}
          onClick={onClose}
          style={{ color: 'black' }}
        >
          SOUVENIR
        </NavLink>
      </div>
      <div className="mt-0 md:mt-0">
        <NavLink
          to="/registration"
          className={`text-black bg-pink-500 text-center p-2 rounded-full transition-transform transform hover:scale-110 ${activeStyleCallback}`}
          onClick={onClose}
          style={{ color: 'black' }}
        >
          REGISTER
        </NavLink>
      </div>
      <div className="flex flex-row">
  {/* Phone Number - hidden on laptop (md) and larger */}
  <div className="contact1 flex items-center text-black absolute right-4 top-5 block md:hidden">
    <FontAwesomeIcon icon={faPhone} />
    <p className="ml-2">+91 9888895253</p>
  </div>

  {/* Email - hidden on laptop (md) and larger */}
  <div className="contact2 flex items-center text-black absolute right-4 top-10 block md:hidden">
    <FontAwesomeIcon icon={faEnvelope} />
    <p className="ml-2">chemcon2024@gmail.com</p>
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

  // Update the navbar title based on the current route
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
    setIsOpen(false); // Close the sidebar when the route changes
  }, [location.pathname]);

  return (
    <>
      <nav
        className="bg-transparent fixed w-full z-10 shadow-lg"
        style={{ margin: 0, padding: 0, top: 0, left: 0 }}
      >
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          <div className="flex items-center">
            <img
              src="logonav.png"
              alt="Logo"
              className="w-5 h-5 md:w-10 md:h-10 mr-4"
            />
            <div className="hidden md:flex space-x-6">
              <NavLinks />
            </div>
          </div>

          {/* Center Title for Mobile */}
          <div className="block md:hidden text-black font-bold text-lg">
            {navTitle}
          </div>

          <div className="md:hidden">
            <button onClick={toggleNavbar} className="p-2">
              {isOpen ? <X size={24} className="text-black" /> : <Menu size={24} className="text-black" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Sidebar */}
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
      </nav>
    </>
  );
};

export default Nav;
