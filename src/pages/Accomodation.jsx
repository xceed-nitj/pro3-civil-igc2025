import { useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Separator from "../components/common/Separator"; // Add Separator for consistency if needed

function Accommodation() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="top-0 w-screen z-40 text-white">
                <Navbar />
            </div>
            <div className="bg-gradient-to-r from-[#12105F] to-purple-800 via-purple-800 py-12 lg:py-16 ">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="bg-white p-6 rounded-lg shadow-2xl mt-5">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Accommodation</h2>
                        <Separator /> {/* Optional: Add Separator if it aligns with your theme */}
                        <div className="text-base text-justify font-sans font-base text-gray-800">
                            <p>
                                The accommodation for the delegates can be arranged in hotels
                                (List will be available on the website), guest houses, and institute
                                hostels subject to the availability of the same on request and on
                                payment basis. The requirement for the preferred accommodation
                                along with the tariff range and single/double occupancy should be
                                sent to the Organizing Secretary well in advance.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Accommodation;
