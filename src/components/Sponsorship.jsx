// // import Separator from "./common/Separator";

// // function SponsorShip() {
// //     const data1 = [
// //         { category: 'Platinum Sponsorship', price: 3000000 },
// //         { category: 'Gold Sponsorship', price: 2000000 },
// //         { category: 'Silver Sponsorship', price: 1500000 },
// //         { category: 'Delegate Kit', price: 1000000 },
// //         { category: 'Lunch (each day)', price: 500000 },
// //         { category: 'Dinner (each day)', price: 500000 },
// //         { category: 'High Tea (First day or last day)', price: 200000 },
// //         { category: 'Breakfast (each day)', price: 200000 },
// //         { category: 'Tea during break', price: 50000 },
// //         { category: 'Plenary Lectures (each)', price: 100000 },
// //         { category: 'Parallel Sessions (each)', price: 100000 },
// //         { category: 'Poster Sessions (each)', price: 150000 },
// //         { category: 'Cultural Programs (each)', price: 200000 },
// //         { category: 'Conference Proceeding', price: 200000 },
// //         { category: 'Delegate Kit CD/Pen Drive', price: 100000 },
// //         { category: 'Banner of each event', price: 25000 },
// //     ];

// //     const halfLength = Math.ceil(data1.length / 2);
// //     const firstHalf = data1.slice(0, halfLength);
// //     const secondHalf = data1.slice(halfLength);
// //     const array = firstHalf.map((value1, index) => ({
// //         value1,
// //         value2: secondHalf[index]
// //     }));

// //     const data2 = [
// //         { location: 'Multicolor Back page', price: 150000 },
// //         { location: 'Multicolor Back inside gatefold', price: 100000 },
// //         { location: 'Multicolor Front inside gatefold', price: 60000 },
// //         { location: 'Multicolor Full page', price: 25000 },
// //         { location: 'Multicolor Half page', price: 15000 },
// //         { location: 'Black & White Full Page', price: 15000 },
// //         { location: 'Black & White half Page', price: 7500 },
// //     ];

// //     return (
// //         <div className="bg-gradient-to-r from-[#12105F] to-purple-800 via-purple-800 py-12 lg:py-16">
// //             <div className="container mx-auto px-4 lg:px-8">
// //                 <div className="grid gap-10 lg:grid-cols-2">
// //                     {/* Sponsorship Rates Section */}
// //                     <div className="bg-white p-6 rounded-lg shadow-2xl">
// //                         <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Sponsorship Rates</h2>
// //                         <Separator />
// //                         <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
// //                             Sponsors receive two complimentary delegate passes and enjoy local hospitality during the congress. Additionally, hoardings and banners can be displayed at locations designated by the organizers.
// //                         </p>
// //                         <div className="overflow-x-auto bg-white p-4 rounded-lg shadow-md">
// //                             <table className="min-w-full bg-white rounded-lg hidden md:table">
// //                                 <thead className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
// //                                     <tr>
// //                                         <th className="p-2 text-xs sm:text-sm md:text-base font-semibold">Category</th>
// //                                         <th className="p-2 text-xs sm:text-sm md:text-base font-semibold">Price in INR</th>
// //                                         <th className="p-2 text-xs sm:text-sm md:text-base font-semibold">Category</th>
// //                                         <th className="p-2 text-xs sm:text-sm md:text-base font-semibold">Price in INR</th>
// //                                     </tr>
// //                                 </thead>
// //                                 <tbody>
// //                                     {array.length > 0 ? array.map((item, index) => (
// //                                         <tr key={index} className="hover:bg-purple-50 transition-colors duration-300">
// //                                             <td className="p-2 text-xs sm:text-sm md:text-base text-gray-800">{item.value1.category}</td>
// //                                             <td className="p-2 text-xs sm:text-sm md:text-base text-gray-800">{item.value1.price.toLocaleString()}</td>
// //                                             <td className="p-2 text-xs sm:text-sm md:text-base text-gray-800">{item.value2?.category || ''}</td>
// //                                             <td className="p-2 text-xs sm:text-sm md:text-base text-gray-800">{item.value2?.price.toLocaleString() || ''}</td>
// //                                         </tr>
// //                                     )) : (
// //                                         <tr>
// //                                             <td colSpan="4" className="p-2 text-center text-gray-600">No data available</td>
// //                                         </tr>
// //                                     )}
// //                                 </tbody>
// //                             </table>
// //                             {/* Responsive Card Layout for small screens */}
// //                             <div className="block md:hidden">
// //                                 {array.length > 0 ? array.map((item, index) => (
// //                                     <div key={index} className="bg-white p-4 mb-4 rounded-lg shadow-md">
// //                                         <div className="mb-2">
// //                                             <h3 className="text-lg font-semibold text-gray-900">{item.value1.category}</h3>
// //                                             <p className="text-gray-700">Price: {item.value1.price.toLocaleString()}</p>
// //                                         </div>
// //                                         {item.value2 && (
// //                                             <div>
// //                                                 <h3 className="text-lg font-semibold text-gray-900">{item.value2.category}</h3>
// //                                                 <p className="text-gray-700">Price: {item.value2.price.toLocaleString()}</p>
// //                                             </div>
// //                                         )}
// //                                     </div>
// //                                 )) : (
// //                                     <p className="text-center text-gray-600">No data available</p>
// //                                 )}
// //                             </div>
// //                         </div>
// //                     </div>

// //                     {/* Souvenir Section */}
// //                     <div className="bg-white p-6 rounded-lg shadow-2xl">
// //                         <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Souvenir</h2>
// //                         <Separator />
// //                         <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
// //                             An informative souvenir will be provided to all delegates. Contributions are sought for advertisements to support CHEMCON-2024. The rates are listed below:
// //                         </p>
// //                         <div className="overflow-x-auto bg-white p-4 rounded-lg shadow-md">
// //                             <table className="min-w-full bg-white rounded-lg hidden md:table">
// //                                 <thead className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
// //                                     <tr>
// //                                         <th className="p-2 text-xs sm:text-sm md:text-base font-semibold">Location</th>
// //                                         <th className="p-2 text-xs sm:text-sm md:text-base font-semibold">Price in INR</th>
// //                                     </tr>
// //                                 </thead>
// //                                 <tbody>
// //                                     {data2.length > 0 ? data2.map((item, index) => (
// //                                         <tr key={index} className="hover:bg-purple-50 transition-colors duration-300">
// //                                             <td className="p-2 text-xs sm:text-sm md:text-base text-gray-800">{item.location}</td>
// //                                             <td className="p-2 text-xs sm:text-sm md:text-base text-gray-800">{item.price.toLocaleString()}</td>
// //                                         </tr>
// //                                     )) : (
// //                                         <tr>
// //                                             <td colSpan="2" className="p-2 text-center text-gray-600">No data available</td>
// //                                         </tr>
// //                                     )}
// //                                 </tbody>
// //                             </table>
// //                             {/* Responsive Card Layout for small screens */}
// //                             <div className="block md:hidden">
// //                                 {data2.length > 0 ? data2.map((item, index) => (
// //                                     <div key={index} className="bg-white p-4 mb-4 rounded-lg shadow-md">
// //                                         <div>
// //                                             <h3 className="text-lg font-semibold text-gray-900">{item.location}</h3>
// //                                             <p className="text-gray-700">Price: {item.price.toLocaleString()}</p>
// //                                         </div>
// //                                     </div>
// //                                 )) : (
// //                                     <p className="text-center text-gray-600">No data available</p>
// //                                 )}
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }

// // export default SponsorShip;
// import Separator from "./common/Separator";

// function SponsorShip() {
//     const sponsorshipData = [
//         { 
//             category: "Platinum", 
//             fee: "10.00", 
//             delegates: "6", 
//             freeAd: "Full page: Color", 
//             corporatePresentation: "Yes", 
//             exhibitionSpace: "18'x9'" 
//         },
//         { 
//             category: "Diamond", 
//             fee: "5.00", 
//             delegates: "4", 
//             freeAd: "Full page: Color", 
//             corporatePresentation: "Yes", 
//             exhibitionSpace: "9'x9'" 
//         },
//         { 
//             category: "Gold", 
//             fee: "2.5", 
//             delegates: "3", 
//             freeAd: "Full page: Color", 
//             corporatePresentation: "NA", 
//             exhibitionSpace: "NA" 
//         },
//         { 
//             category: "Silver", 
//             fee: "1.00", 
//             delegates: "2", 
//             freeAd: "Full page: B&W", 
//             corporatePresentation: "NA", 
//             exhibitionSpace: "NA" 
//         },
//         { 
//             category: "Bronze", 
//             fee: "0.50", 
//             delegates: "1", 
//             freeAd: "Half page: B&W", 
//             corporatePresentation: "NA", 
//             exhibitionSpace: "NA" 
//         },
//         { 
//             category: "Well Wisher", 
//             fee: "0.25", 
//             delegates: "1", 
//             freeAd: "Qr page: B&W", 
//             corporatePresentation: "NA", 
//             exhibitionSpace: "NA" 
//         },
//     ];

//     const halfLength = Math.ceil(sponsorshipData.length / 2);
//     const firstHalf = sponsorshipData.slice(0, halfLength);
//     const secondHalf = sponsorshipData.slice(halfLength);
//     const array = firstHalf.map((value1, index) => ({
//         value1,
//         value2: secondHalf[index]
//     }));

//     return (
//         <div className="bg-gradient-to-r from-[#12105F] to-purple-800 via-purple-800 py-12 lg:py-16">
//             <div className="container mx-auto px-4 lg:px-8">
//                 <div className="grid gap-10 lg:grid-cols-2">
//                     {/* Sponsorship Rates Section */}
//                     <div className="bg-white p-6 rounded-lg shadow-2xl">
//                         <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Sponsorship Rates</h2>
//                         <Separator />
//                         <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
//                             Sponsors receive two complimentary delegate passes and enjoy local hospitality during the congress. Additionally, hoardings and banners can be displayed at locations designated by the organizers.
//                         </p>
//                         <div className="overflow-x-auto bg-white p-4 rounded-lg shadow-md">
//                             <table className="min-w-full bg-white rounded-lg hidden md:table">
//                                 <thead className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
//                                     <tr>
//                                         <th className="p-2 text-xs sm:text-sm md:text-base font-semibold">Category</th>
//                                         <th className="p-2 text-xs sm:text-sm md:text-base font-semibold">Fee (in lakhs)</th>
//                                         <th className="p-2 text-xs sm:text-sm md:text-base font-semibold">Delegates</th>
//                                         <th className="p-2 text-xs sm:text-sm md:text-base font-semibold">Free Ad</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {array.length > 0 ? array.map((item, index) => (
//                                         <tr key={index} className="hover:bg-purple-50 transition-colors duration-300">
//                                             <td className="p-2 text-xs sm:text-sm md:text-base text-gray-800">{item.value1.category}</td>
//                                             <td className="p-2 text-xs sm:text-sm md:text-base text-gray-800">{item.value1.fee}</td>
//                                             <td className="p-2 text-xs sm:text-sm md:text-base text-gray-800">{item.value1.delegates}</td>
//                                             <td className="p-2 text-xs sm:text-sm md:text-base text-gray-800">{item.value1.freeAd}</td>
//                                         </tr>
//                                     )) : (
//                                         <tr>
//                                             <td colSpan="4" className="p-2 text-center text-gray-600">No data available</td>
//                                         </tr>
//                                     )}
//                                 </tbody>
//                             </table>
//                             {/* Responsive Card Layout for small screens */}
//                             <div className="block md:hidden">
//                                 {array.length > 0 ? array.map((item, index) => (
//                                     <div key={index} className="bg-white p-4 mb-4 rounded-lg shadow-md">
//                                         <div className="mb-2">
//                                             <h3 className="text-lg font-semibold text-gray-900">{item.value1.category}</h3>
//                                             <p className="text-gray-700">Fee: {item.value1.fee} Lakhs</p>
//                                             <p className="text-gray-700">Delegates: {item.value1.delegates}</p>
//                                             <p className="text-gray-700">Free Ad: {item.value1.freeAd}</p>
//                                         </div>
//                                         {item.value2 && (
//                                             <div>
//                                                 <h3 className="text-lg font-semibold text-gray-900">{item.value2.category}</h3>
//                                                 <p className="text-gray-700">Fee: {item.value2.fee} Lakhs</p>
//                                                 <p className="text-gray-700">Delegates: {item.value2.delegates}</p>
//                                                 <p className="text-gray-700">Free Ad: {item.value2.freeAd}</p>
//                                             </div>
//                                         )}
//                                     </div>
//                                 )) : (
//                                     <p className="text-center text-gray-600">No data available</p>
//                                 )}
//                             </div>
//                         </div>
//                     </div>

//                     {/* Souvenir Section */}
//                     <div className="bg-white p-6 rounded-lg shadow-2xl">
//                         <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Souvenir</h2>
//                         <Separator />
//                         <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
//                             An informative souvenir will be provided to all delegates. Contributions are sought for advertisements to support CHEMCON-2024. The rates are listed below:
//                         </p>
//                         <div className="overflow-x-auto bg-white p-4 rounded-lg shadow-md">
//                             <table className="min-w-full bg-white rounded-lg hidden md:table">
//                                 <thead className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
//                                     <tr>
//                                         <th className="p-2 text-xs sm:text-sm md:text-base font-semibold">Location</th>
//                                         <th className="p-2 text-xs sm:text-sm md:text-base font-semibold">Price in INR</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {data2.length > 0 ? data2.map((item, index) => (
//                                         <tr key={index} className="hover:bg-purple-50 transition-colors duration-300">
//                                             <td className="p-2 text-xs sm:text-sm md:text-base text-gray-800">{item.location}</td>
//                                             <td className="p-2 text-xs sm:text-sm md:text-base text-gray-800">{item.price.toLocaleString()}</td>
//                                         </tr>
//                                     )) : (
//                                         <tr>
//                                             <td colSpan="2" className="p-2 text-center text-gray-600">No data available</td>
//                                         </tr>
//                                     )}
//                                 </tbody>
//                             </table>
//                             {/* Responsive Card Layout for small screens */}
//                             <div className="block md:hidden">
//                                 {data2.length > 0 ? data2.map((item, index) => (
//                                     <div key={index} className="bg-white p-4 mb-4 rounded-lg shadow-md">
//                                         <div>
//                                             <h3 className="text-lg font-semibold text-gray-900">{item.location}</h3>
//                                             <p className="text-gray-700">Price: {item.price.toLocaleString()}</p>
//                                         </div>
//                                     </div>
//                                 )) : (
//                                     <p className="text-center text-gray-600">No data available</p>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default SponsorShip;


import Separator from "./common/Separator";

function SponsorShip() {
    const data1 = [
        { category: "Platinum", fee: "10.00", delegates: "6", freeAd: "Full page: Color", corporatePresentation: "Yes", exhibitionSpace: "18'x9'" },
        { category: "Diamond", fee: "5.00", delegates: "4", freeAd: "Full page: Color", corporatePresentation: "Yes", exhibitionSpace: "9'x9'" },
        { category: "Gold", fee: "2.5", delegates: "3", freeAd: "Full page: Color", corporatePresentation: "NA", exhibitionSpace: "NA" },
        { category: "Silver", fee: "1.00", delegates: "2", freeAd: "Full page: B&W", corporatePresentation: "NA", exhibitionSpace: "NA" },
        { category: "Bronze", fee: "0.50", delegates: "1", freeAd: "Half page: B&W", corporatePresentation: "NA", exhibitionSpace: "NA" },
        { category: "Well Wisher", fee: "0.25", delegates: "1", freeAd: "Qr page: B&W", corporatePresentation: "NA", exhibitionSpace: "NA" },
    ];

    const souvenirData = [
        { item: "Event T-Shirt", description: "Custom-made, event branding", price: "INR 500" },
        { item: "Event Bag", description: "Branded with event logo", price: "INR 300" },
        { item: "Mug", description: "Ceramic mug with event logo", price: "INR 150" },
        { item: "Pen", description: "Branded pen with event details", price: "INR 50" },
        { item: "Notebook", description: "Branded notebook for delegates", price: "INR 100" },
    ];

    return (
        <div className="bg-gradient-to-r from-[#12105F] to-purple-800 via-purple-800 py-12 lg:py-16">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid gap-10 lg:grid-cols-2">
                    {/* Sponsorship Rates Section */}
                    <div className="bg-white p-6 rounded-lg shadow-2xl">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Sponsorship Rates</h2>
                        <Separator />
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                            Sponsors receive two complimentary delegate passes and enjoy local hospitality during the congress. Additionally, hoardings and banners can be displayed at locations designated by the organizers.
                        </p>
                        <div className="overflow-x-auto bg-white p-4 rounded-lg shadow-md">
                            <table className="min-w-full bg-white rounded-lg hidden md:table">
                                <thead className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
                                    <tr>
                                        <th className="p-2 text-xs sm:text-sm md:text-base font-semibold">Category</th>
                                        <th className="p-2 text-xs sm:text-sm md:text-base font-semibold">Fee (in INR)</th>
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
                                            <p className="text-gray-700">Fee: {item.fee}Lakhs INR</p>
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
                        </div>
                    </div>

                    {/* Souvenir Section */}
                    <div className="bg-white p-6 rounded-lg shadow-2xl">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Souvenir Section</h2>
                        <Separator />
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                            We offer a variety of souvenirs to our sponsors and delegates, including custom-made items that will carry the Event&apos;s branding. These include event t-shirts, bags, and other promotional items.
                        </p>
                        <div className="overflow-x-auto bg-white p-4 rounded-lg shadow-md">
                            <table className="min-w-full bg-white rounded-lg hidden md:table">
                                <thead className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
                                    <tr>
                                        <th className="p-2 text-xs sm:text-sm md:text-base font-semibold">Item</th>
                                        <th className="p-2 text-xs sm:text-sm md:text-base font-semibold">Description</th>
                                        <th className="p-2 text-xs sm:text-sm md:text-base font-semibold">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {souvenirData.map((item, index) => (
                                        <tr key={index}>
                                            <td className="p-2 text-xs sm:text-sm md:text-base text-gray-800">{item.item}</td>
                                            <td className="p-2 text-xs sm:text-sm md:text-base text-gray-800">{item.description}</td>
                                            <td className="p-2 text-xs sm:text-sm md:text-base text-gray-800">{item.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {/* Responsive Card Layout for small screens */}
                            <div className="block md:hidden">
                                {souvenirData.map((item, index) => (
                                    <div key={index} className="bg-white p-4 mb-4 rounded-lg shadow-md">
                                        <div className="mb-2">
                                            <h3 className="text-lg font-semibold text-gray-900">{item.item.replace("Event's", "Event&apos;s")}</h3>
                                            <p className="text-gray-700">{item.description}</p>
                                            <p className="text-gray-700">Price: {item.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SponsorShip;
