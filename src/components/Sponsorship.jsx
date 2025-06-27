import Separator from "./common/Separator";

function SponsorShip() {
    const data1 = [
         { category: "Title Sponsor", fee: "15.00", delegates: "7", freeAd: "Full page: Color", corporatePresentation: "Yes", exhibitionSpace: "18'x9'" },
        { category: "Platinum", fee: "10.00", delegates: "6", freeAd: "Full page: Color", corporatePresentation: "Yes", exhibitionSpace: "18'x9'" },
        { category: "Diamond", fee: "5.00", delegates: "4", freeAd: "Full page: Color", corporatePresentation: "Yes", exhibitionSpace: "9'x9'" },
        { category: "Gold", fee: "2.5", delegates: "3", freeAd: "Full page: Color", corporatePresentation: "NA", exhibitionSpace: "NA" },
        { category: "Silver", fee: "1.00", delegates: "2", freeAd: "Full page: B&W", corporatePresentation: "NA", exhibitionSpace: "NA" },
        { category: "Bronze", fee: "0.50", delegates: "1", freeAd: "Half page: B&W", corporatePresentation: "NA", exhibitionSpace: "NA" },
        { category: "Well Wisher", fee: "0.25", delegates: "1", freeAd: "Qr page: B&W", corporatePresentation: "NA", exhibitionSpace: "NA" },
    ];

    return (
        <div className="bg-gradient-to-r from-[#12105F] to-purple-800 via-purple-800 py-12 lg:py-16">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="bg-white p-6 rounded-lg shadow-2xl">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Sponsorship Rates</h2>
                    <Separator />
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                        Sponsors receive two complimentary delegate passes and enjoy local hospitality during the congress. Additionally, hoardings and banners can be displayed at locations designated by the organizers.
                    </p>
                    {/* <div className="overflow-x-auto bg-white p-4 rounded-lg shadow-md"> */}
                        <table className="min-w-full bg-white rounded-lg hidden md:table">
                            <thead className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
                                <tr>
                                    <th className="p-2 text-xs sm:text-sm md:text-base font-semibold">Category</th>
                                    <th className="p-2 text-xs sm:text-sm md:text-base font-semibold">Fee<hr></hr>Lakhs (in INR)</th>
                                    <th className="p-2 text-xs sm:text-sm md:text-base font-semibold">Delegates</th>
                                    <th className="p-2 text-xs sm:text-sm md:text-base font-semibold">Free Ad</th>
                                    <th className="p-2 text-xs sm:text-sm md:text-base font-semibold">Corporate Presentation</th>
                                    <th className="p-2 text-xs sm:text-sm md:text-base font-semibold">Exhibition Space</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data1.length > 0 ? data1.map((item, index) => (
                                    <tr key={index} className="hover:bg-purple-50 transition-colors duration-300">
                                        <td className="p-2 text-xs sm:text-sm md:text-base text-gray-800">{item.category}</td>
                                        <td className="p-2 text-xs sm:text-sm md:text-base text-gray-800">{item.fee}</td>
                                        <td className="p-2 text-xs sm:text-sm md:text-base text-gray-800">{item.delegates}</td>
                                        <td className="p-2 text-xs sm:text-sm md:text-base text-gray-800">{item.freeAd}</td>
                                        <td className="p-2 text-xs sm:text-sm md:text-base text-gray-800">{item.corporatePresentation}</td>
                                        <td className="p-2 text-xs sm:text-sm md:text-base text-gray-800">{item.exhibitionSpace}</td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan="6" className="p-2 text-center text-gray-600">No data available</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>

                        {/* Responsive Card Layout for small screens */}
                        <div className="block md:hidden">
                            {data1.length > 0 ? data1.map((item, index) => (
                                <div key={index} className="bg-white p-4 mb-4 rounded-lg shadow-md">
                                    <div className="mb-2">
                                        <h3 className="text-lg font-semibold text-gray-900">{item.category}</h3>
                                        <p className="text-gray-700">Fee: {item.fee} Lakhs INR</p>
                                        <p className="text-gray-700">Delegates: {item.delegates}</p>
                                        <p className="text-gray-700">Free Ad: {item.freeAd}</p>
                                        <p className="text-gray-700">Corporate Presentation: {item.corporatePresentation}</p>
                                        <p className="text-gray-700">Exhibition Space: {item.exhibitionSpace}</p>
                                    </div>
                                </div>
                            )) : (
                                <p className="text-center text-gray-600">No data available</p>
                            )}
                        </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
}

export default SponsorShip;
