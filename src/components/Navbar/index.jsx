import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="border-b-2 border-black p-4">
      <ul className="flex list-none">
        <li className="mx-6 text-gray-700 hover:text-black pt-3 transition-transform transform hover:scale-110">
          <Link to="/">HOME</Link>
        </li>
        <li className="mx-6 text-gray-700 hover:text-black pt-3 transition-transform transform hover:scale-110">
          <Link to="/events">EVENTS</Link>
        </li>
        <li className="mx-6 text-gray-700 hover:text-black pt-3 transition-transform transform hover:scale-110">
          <Link to="/sponsorship">SPONSORS</Link>
        </li>
        <li className="mx-6 text-gray-700 hover:text-black pt-3 transition-transform transform hover:scale-110">
          <Link to="/committee">COMMITTEES</Link>
        </li>
        <li className="mx-6 text-gray-700 hover:text-black pt-3 transition-transform transform hover:scale-110">
          <Link to="/location">LOCATION</Link>
        </li>
        <li className="mx-6 text-gray-700 hover:text-black pt-3 transition-transform transform hover:scale-110">
          <Link to="/accommodation">ACCOMMODATION</Link>
        </li>
        <li className="mx-6 text-gray-700 hover:text-black pt-3 transition-transform transform hover:scale-110">
          <Link to="/souvenir">SOUVENIR</Link>
        </li>
        <li className="mx-6 text-white bg-pink-500 text-center p-3 rounded transition-transform transform hover:scale-110">
          <Link to="/registration">REGISTER</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;