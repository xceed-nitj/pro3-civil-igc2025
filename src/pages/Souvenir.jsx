import { useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Separator from "../components/common/Separator"; // Optional: Add Separator for consistency if needed

function Souvenir() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const data = [
        { location: 'Multicolor Back page', price: 150000 },
        { location: 'Multicolor Back inside gatefold', price: 100000 },
        { location: 'Multicolor Front inside gatefold', price: 60000 },
        { location: 'Multicolor Full page', price: 25000 },
        { location: 'Multicolor Half page', price: 15000 },
        { location: 'Black & White Full Page', price: 15000 },
        { location: 'Black & White half Page', price: 7500 },
    ];

    return (
        <>
            <div className="top-0 w-screen z-40 text-white">
                <Navbar />
            </div>

            <div className="bg-gradient-to-r from-[#12105F] to-purple-800 via-purple-800 py-12 lg:py-16">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="bg-white p-6 rounded-lg shadow-2xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Souvenir</h2>
                        <Separator /> {/* Optional: Add Separator if it aligns with your theme */}
                        <p className="text-base text-justify font-sans font-base text-gray-800 mb-4">
                            An informative souvenir will be made available to all the delegates.
                            Contributions are solicited to support this mega event,
                            CHEMCON-2024, through advertisements. The rates are as follows:
                        </p>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white rounded-lg shadow-md">
                                <thead className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
                                    <tr>
                                        <th className="p-3 text-left text-xs md:text-sm font-semibold">Location</th>
                                        <th className="p-3 text-left text-xs md:text-sm font-semibold">Price in INR</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.length > 0 ? data.map((item, index) => (
                                        <tr key={index} className="hover:bg-purple-50 transition-colors duration-300">
                                            <td className="p-3 text-xs md:text-sm text-gray-800">{item.location}</td>
                                            <td className="p-3 text-xs md:text-sm text-gray-800">{item.price.toLocaleString()}</td>
                                        </tr>
                                    )) : (
                                        <tr>
                                            <td colSpan="2" className="p-3 text-center text-gray-600">No data available</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Souvenir;
