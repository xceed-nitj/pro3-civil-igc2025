import Home from "./pages/Home";
import Events from "./pages/Events";
import Accommodation from "./pages/Accomodation";
import Location from "./pages/Location";
import Registration from "./pages/Registration";
import Souvenir from "./pages/Souvenir";
import Sponsors from "./pages/Sponsors";
import { Route, Routes } from "react-router-dom";
import Committee from "./pages/Committee";
import CommonNews from "./pages/CommonNews";
import Conference from "./pages/Conference";
import './App.css'
import About from "./components/About";
import Speakers from "./pages/speakers";
function App() {
   const confid="66d7e4929bc0213cd4884ec4";
  return (
    <>
    

<div id="content ">
      < Routes >
        <Route path="/" element={<Home confId={confid} />} />
        <Route path="/" element={<About confId={confid} />} />
        <Route path="sponsorship" element={<Sponsors />} />
        <Route path="Speakers" element={<Speakers />} />
        <Route path="Conference" element={<Conference />} />
        <Route path="events" element={<Events />} />
        <Route path="location" element={<Location confid={confid}  />} />
        <Route path="accommodation" element={<Accommodation />} />
        <Route path="souvenir" element={<Souvenir />} />
        <Route path="registration" element={<Registration />} />
        <Route path="committee" element={<Committee confid={confid} />} />
        <Route path="news/:newsid" element={<CommonNews /> } />



      </Routes >
      </div>
    </>
  );
}

export default App;


