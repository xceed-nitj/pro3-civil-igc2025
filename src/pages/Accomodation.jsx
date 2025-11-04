 import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Separator from "../components/common/Separator";

function Accommodation() {
  const [selectedHotel, setSelectedHotel] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Hotel Data (rates)
  const hotelData = {
    "WJ Grand Hotel": [
      {
        type: "Deluxe Room",
        publishedSingle: "₹3500",
        publishedDouble: "₹4500",
        cpaiSingle: "₹2500",
        cpaiDouble: "₹3000",
        mapSingle: "₹3200",
        mapDouble: "₹4000",
      },
      {
        type: "Executive Room",
        publishedSingle: "₹4500",
        publishedDouble: "₹5500",
        cpaiSingle: "₹3100",
        cpaiDouble: "₹3800",
        mapSingle: "₹3800",
        mapDouble: "₹5000",
      },
      {
        type: "Executive Suite",
        publishedSingle: "₹6000",
        publishedDouble: "₹7000",
        cpaiSingle: "₹4500",
        cpaiDouble: "₹5000",
        mapSingle: "₹5500",
        mapDouble: "₹6200",
      },
    ],

    "Radisson Jalandhar": [
      {
        type: "Executive Room",
        publishedSingle: "INR 9000 + taxes",
        publishedDouble: "INR 10000 + taxes",
        specialSingle: "INR 7000 + taxes",
        specialDouble: "INR 8000 + taxes",
      },
      {
        type: "Business Class",
        publishedSingle: "INR 12000 + taxes",
        publishedDouble: "INR 12000 + taxes",
        specialSingle: "INR 9500 + taxes",
        specialDouble: "INR 9500 + taxes",
      },
      {
        type: "Deluxe Suite",
        publishedSingle: "INR 17000 + taxes",
        publishedDouble: "INR 17000 + taxes",
        specialSingle: "INR 15000 + taxes",
        specialDouble: "INR 15000 + taxes",
      },
    ],
  };

  // ✅ Updated Hotel Links
  const hotelLinks = {
    "WJ Grand Hotel": "https://www.wjgrandhotel.com/",
    "Radisson Jalandhar": "https://www.radissonhotels.com/en-us/hotels/radisson-jalandhar",
    "Golden Tulip Jalandhar": "https://jalandhar.goldentulip.com/en-us/",
    "Best Western Plus Jalandhar": "https://www.bestwestern.com/en_US/book/hotels-in-jalandhar/best-western-plus-jalandhar/",
    "The Maya Hotel": "https://mayahotelsindia.com/",
    "Sarovar Portico, Jalandhar": "https://www.sarovarhotels.com/sarovar-portico-jalandhar/",
    "Ramada Encore (Wyndham)": "https://www.wyndhamhotels.com/ramada/jalandhar-india",
    "Comfort Inn (Choice Hotels page)": "https://www.choicehotels.com/india/hotels/comfort-inn-jalandhar",
    "Hotel Majestic Grand": "http://www.majesticgrandhotel.com/",
    "Hotel Shangri-La (Jalandhar)": "https://www.makemytrip.com/hotels/jalandhar_shangrila_hotel-details-jalandhar.html",
    "Hotel Sekhon Grand": "https://sekhongrand.in/",
    "Hotel City Hub": "https://www.tripadvisor.in/Hotel_Review-g488276-d12860792-Reviews-The_Inn_by_Vivo_Hotels-Jalandhar_Jalandhar_District_Punjab.html",
    "Hotel Residency": "https://www.hotelresidency.co.in/",
    "Ambassador Hotel": "http://www.ambassadorhoteljalandhar.com/",
    "Hotel Dolphin": "http://www.hoteldolphin.com/",
    "Leo Fort": "http://www.leoforthotel.com/",
    "Aveda Kamal Palace": "http://hotelkamalpalace.com/",
    "Citadines (chain)": "https://www.citadines.com/",
    "Country Inn & Suites (chain / Radisson brand)": "https://www.radissonhotels.com/",
    "Sky Lark / Skylark": "https://www.tripadvisor.in/Hotel_Review-g488276-d1179667-Reviews-Skylark_Hotel-Jalandhar_Jalandhar_District_Punjab.html",
    "Down Town": "",
    "Mariton Hotel": "",
    "Days Hotel (Jalandhar)": "https://www.wyndhamhotels.com/days-inn/jalandhar-india/days-hotel-jalandhar-jyoti-chowk/overview",
    "Hotel Skylark": "https://www.tripadvisor.in/Hotel_Review-g488276-d1179667-Reviews-Skylark_Hotel-Jalandhar_Jalandhar_District_Punjab.html",
    "The Inn": "https://www.tripadvisor.in/Hotel_Review-g488276-d12860792-Reviews-The_Inn_by_Vivo_Hotels-Jalandhar_Jalandhar_District_Punjab.html",
    "Classic": "",
    "Ramada Wyndham (duplicate chain link)": "https://www.wyndhamhotels.com/",
    "Best Western (other local listing / Summerlea)": "https://www.bestwestern.com/en_US/book/hotels-in-jalandhar/",
    "Golden Tulip (alternate listing / Sarovar page)": "https://www.sarovarhotels.com/golden-tulip-jalandhar/",
    "Hotel Majestic / other local hotels": "http://www.majesticgrandhotel.com/",
  };

  const hotelList = Object.keys(hotelLinks);

  return (
    <>
      <div className="top-0 w-screen z-40 text-white">
        <Navbar />
      </div>

      <div className="bg-gradient-to-r from-[#12105F] to-purple-800 via-purple-800 py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-white p-6 rounded-lg shadow-2xl mt-5">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Accommodation
            </h2>

            <Separator />

            <div className="text-base text-justify font-sans text-gray-800 mb-6">
              <p className="mb-4">
                Please note that accommodation is not included in the conference fee, and delegates are responsible for their own accommodation.
                A list of nearby hotels and paid homestays will be available on the conference website.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">
                Hotels in and around Jalandhar (10–15 km from NIT Jalandhar)
              </h3>

              {/* Hotel Table */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full table-auto border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200 text-gray-700">
                      <th className="border border-gray-300 px-4 py-2 text-left">#</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Hotel Name</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Website</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-800">
                    {hotelList.map((name, index) => (
                      <tr key={index}>
                        <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                        <td className="border border-gray-300 px-4 py-2 font-medium">{name}</td>
                        <td className="border border-gray-300 px-4 py-2">
                          {hotelLinks[name] ? (
                            <a
                              href={hotelLinks[name]}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 underline"
                            >
                              Visit Website
                            </a>
                          ) : (
                            <span className="text-gray-500">Not Available</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Dropdown */}
              <div className="mb-6">
                <label htmlFor="hotelSelect" className="block text-lg font-semibold text-gray-900 mb-2">
                  View Special Tariff Details
                </label>

                <select
                  id="hotelSelect"
                  className="border border-gray-400 rounded-lg p-2 w-full md:w-1/2 focus:ring-2 focus:ring-purple-600"
                  value={selectedHotel}
                  onChange={(e) => setSelectedHotel(e.target.value)}
                >
                  <option value="">-- Select a Hotel --</option>
                  {hotelList.map((h) => (
                    <option key={h} value={h}>
                      {h}
                    </option>
                  ))}
                </select>
              </div>

              {/* Rates Table */}
              {selectedHotel && (
                <div className="overflow-x-auto mb-8 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {selectedHotel} — Tariff Details
                  </h3>

                  {selectedHotel === "WJ Grand Hotel" ? (
                    <table className="w-full table-auto border-collapse border border-gray-300 text-gray-800">
                      <thead>
                        <tr className="bg-cyan-100 text-gray-900 font-semibold">
                          <th className="border border-gray-300 px-4 py-2">Room Type</th>
                          <th className="border border-gray-300 px-4 py-2">Published Rate (Single)</th>
                          <th className="border border-gray-300 px-4 py-2">Published Rate (Double)</th>
                          <th className="border border-gray-300 px-4 py-2">CPAI (Single)</th>
                          <th className="border border-gray-300 px-4 py-2">CPAI (Double)</th>
                          <th className="border border-gray-300 px-4 py-2">MAP (Single)</th>
                          <th className="border border-gray-300 px-4 py-2">MAP (Double)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {hotelData["WJ Grand Hotel"].map((r) => (
                          <tr key={r.type}>
                            <td className="border px-4 py-2">{r.type}</td>
                            <td className="border px-4 py-2">{r.publishedSingle}</td>
                            <td className="border px-4 py-2">{r.publishedDouble}</td>
                            <td className="border px-4 py-2">{r.cpaiSingle}</td>
                            <td className="border px-4 py-2">{r.cpaiDouble}</td>
                            <td className="border px-4 py-2">{r.mapSingle}</td>
                            <td className="border px-4 py-2">{r.mapDouble}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : selectedHotel === "Radisson Jalandhar" ? (
                    <table className="w-full table-auto border-collapse border border-gray-300 text-gray-800">
                      <thead>
                        <tr className="bg-pink-100 text-gray-900 font-semibold">
                          <th className="border px-4 py-2">Room Type</th>
                          <th className="border px-4 py-2">Published Tariff (Single)</th>
                          <th className="border px-4 py-2">Published Tariff (Double)</th>
                          <th className="border px-4 py-2">Special Tariff (Single)</th>
                          <th className="border px-4 py-2">Special Tariff (Double)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {hotelData["Radisson Jalandhar"].map((r) => (
                          <tr key={r.type}>
                            <td className="border px-4 py-2">{r.type}</td>
                            <td className="border px-4 py-2">{r.publishedSingle}</td>
                            <td className="border px-4 py-2">{r.publishedDouble}</td>
                            <td className="border px-4 py-2">{r.specialSingle}</td>
                            <td className="border px-4 py-2">{r.specialDouble}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <p className="text-gray-700">No tariff data available for this hotel.</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Accommodation;
