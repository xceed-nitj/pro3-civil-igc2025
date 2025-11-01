import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Separator from "../components/common/Separator";
import { Plane } from "lucide-react"; // Optional icon for visual appeal

function Travel() {
  return (
    <>
      {/* Navbar */}
      <div className="top-0 w-screen z-40 text-white">
        <Navbar />
      </div>

      {/* Main Section */}
      <div className="bg-gradient-to-r from-[#12105F] to-purple-800 via-purple-800 py-12 lg:py-16 min-h-screen">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-white p-6 rounded-lg shadow-2xl mt-5">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Plane className="text-pink-600 w-6 h-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
                Travel Information
              </h2>
            </div>
            <Separator />

            {/* Travel Info Section */}
            <div className="mt-6 text-gray-800 leading-relaxed text-lg space-y-4">
              <p>
                Travelers from both within India and abroad can conveniently reach{" "}
                <span className="font-semibold text-violet-800">NIT Jalandhar</span> via{" "}
                <span className="font-semibold text-pink-600">Amritsar Airport (ATQ)</span>.
              </p>

              <div className="bg-gray-100 p-4 rounded-md shadow-inner space-y-3">
                <p>
                  ✈ <span className="font-semibold">Airport:</span> Sri Guru Ram Dass Jee
                  International Airport (ATQ), Amritsar
                </p>
                <p>
                  🌍 <span className="font-semibold">Connectivity:</span> The airport is well
                  connected with major Indian cities and abroad.
                </p>
                <p>
                  📍 <span className="font-semibold">Distance to NIT Jalandhar:</span> Approximately
                  80 km by road
                </p>
                <p>
                  🚗 <span className="font-semibold">Travel Time:</span> Around 1.5 hours, depending
                  on traffic and route (Amritsar–Jalandhar Road)
                </p>
              </div>

            
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Travel;
