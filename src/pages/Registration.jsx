import { useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Separator from '../components/common/Separator';

function RegistrationFee() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const feeData = [
        {
            category: 'IGS Member',
            uptoOct: 7000,
            afterOct: 8000,
            afterDec: 9000,
            foreign: 450
        },
        {
            category: 'Non-IGS Member',
            uptoOct: 7500,
            afterOct: 8500,
            afterDec: 10000,
            foreign: 500
        },
        {
            category: 'Student',
            uptoOct: 3500,
            afterOct: 4000,
            afterDec: 5000,
            foreign: 250
        },
        {
            category: 'Senior Citizen (Retired)',
            uptoOct: 2500,
            afterOct: 3000,
            afterDec: 4000,
            foreign: 250
        },
        {
            category: 'Spouse',
            uptoOct: 2500,
            afterOct: 3000,
            afterDec: 3000,
            foreign: 250
        },
    ];

    return (
        <>
            {/* Navbar */}
            <div className="top-0 w-screen z-40 text-white">
                <Navbar />
            </div>

            {/* Section with Background Gradient */}
            <div className="bg-gradient-to-r from-[#12105F] to-purple-800 via-purple-800 py-12 mt-4 md:mt-8 lg:py-16">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="bg-white p-6 rounded-lg shadow-2xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                            Registration Fee
                        </h2>
                        <Separator />
                        <p className="text-base text-justify font-sans text-gray-800 mb-4">
                            Below is the updated registration fee structure:
                        </p>

                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white rounded-lg shadow-md">
                                <thead className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
                                    <tr>
                                        <th className="p-3 text-left text-xs md:text-sm font-semibold">Delegate Category</th>
                                        <th className="p-3 text-left text-xs md:text-sm font-semibold">Upto 15.11.2025</th>
                                        <th className="p-3 text-left text-xs md:text-sm font-semibold">After 15.11.2025 Upto 15.12.2025</th>
                                        <th className="p-3 text-left text-xs md:text-sm font-semibold">After 15.12.2025</th>
                                        <th className="p-3 text-left text-xs md:text-sm font-semibold">Foreign Delegates (USD)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {feeData.length > 0 ? feeData.map((item, index) => (
                                        <tr key={index} className="hover:bg-purple-50 transition-colors duration-300">
                                            <td className="p-3 text-xs md:text-sm text-gray-800">{item.category}</td>
                                            <td className="p-3 text-xs md:text-sm text-gray-800">{item.uptoOct}</td>
                                            <td className="p-3 text-xs md:text-sm text-gray-800">{item.afterOct}</td>
                                            <td className="p-3 text-xs md:text-sm text-gray-800">{item.afterDec}</td>
                                            <td className="p-3 text-xs md:text-sm text-gray-800">{item.foreign}</td>
                                        </tr>
                                    )) : (
                                        <tr>
                                            <td colSpan="5" className="p-3 text-center text-gray-600">No data available</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        <p className="mt-4 text-base text-justify font-sans text-gray-800">
                            Note: The registration fee structure is valid for the mentioned timeframes. Ensure to register early for the best rates.
                        </p>

                        {/* 🔽 Account Details Section */}
                        <div className="mt-6 bg-white rounded-lg shadow-lg p-4 border border-gray-200">
                            <h3 className="text-xl font-semibold text-pink-600 underline mb-2">Account Details</h3>
                            <ul className="text-gray-800 text-base space-y-1 list-disc list-inside">
                                <li><strong>Account No:</strong> 110256883181</li>
                                <li><strong>Account Name:</strong> Indian Geotechnical Society Jalandhar Chapter</li>
                                <li><strong>IFSC Code:</strong> CNRB0002945</li>
                                <li><strong>MICR Code:</strong> 144015011</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Paper Submission Button */}
                <div className="flex flex-col items-center space-y-4 mt-6">
                    <a
                        href="https://meteor.springer.com/IGC2025"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-6 py-3 text-center text-white bg-pink-600 hover:bg-blue-700 rounded-lg shadow-md transition duration-300"
                    >
                        Paper Submission Link
                    </a>
                </div>
                <div className="flex flex-col items-center space-y-4 mt-6">
                    <a
                        href="https://forms.gle/NiGco9XJetHEWdHN9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-6 py-3 text-center text-white bg-pink-600 hover:bg-blue-700 rounded-lg shadow-md transition duration-300"
                    >
                        Registration link
                    </a>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </>
    );
}

export default RegistrationFee;
