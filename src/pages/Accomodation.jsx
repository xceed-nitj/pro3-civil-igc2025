import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Separator from "../components/common/Separator";

function Accommodation() {
  const [selectedHotel, setSelectedHotel] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

    "Golden Tulip": [],
    "Best Western Plus Jalandhar": [],
    "The Maya": [],
    "The Inn": [],
    "Classic": [],
    "Sarovar Portico": [],
    "President": [],
    "Residency": [],
    "Ambassador Hotel": [],
    "Dolphin": [],
    "Ramada Encore": [],
    "Ramada Wyndham": [],
    "Leo Fort": [],
    "Aveda Kamal Palace": [],
    "Comfort Inn": [],
    "Citadines": [],
    "Country Inn and Suites": [],
    "Sky Lark": [],
    "Down Town": [],
    "Mariton Hotel": [],
    "Days Hotel": [],
    "Hotel Skylark": [],
    "The Maya Hotel": [],
    "Hotel Dolphin": [],
    "Hotel Majestic": [],
    "Hotel Shangri-La": [],
    "Hotel Sekhon Grand": [],
    "Hotel City Hub": [],
    "Hotel Residency": [],
    "Hotel Ramada City Centre": [],
  };

  const hotelList = Object.keys(hotelData);

  return (
    <>
      {/* Navbar */}
      <div className="top-0 w-screen z-40 text-white">
        <Navbar />
      </div>

      {/* Main */}
      <div className="bg-gradient-to-r from-[#12105F] to-purple-800 via-purple-800 py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-white p-6 rounded-lg shadow-2xl mt-5">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Accommodation
            </h2>

            <Separator />

            <div className="text-base text-justify font-sans text-gray-800 mb-6">
              <p className="mb-4">
                Please note that accommodation is not included in the conference
                fee, and delegates are responsible for their own accommodation.
                A list of nearby hotels and paid homestays will be available on
                the conference website.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">
                Hotels in and around Jalandhar (10–15 km from NIT Jalandhar)
              </h3>

              {/* Hotel names table (compact) */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full table-auto border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200 text-gray-700">
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        Hotel Name
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        Hotel Name
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-800">
                    {/* split list into two columns for display */}
                    {Array.from({ length: Math.ceil(hotelList.length / 2) }).map(
                      (_, rowIndex) => {
                        const left = hotelList[rowIndex];
                        const right = hotelList[rowIndex + Math.ceil(hotelList.length / 2)];
                        return (
                          <tr key={rowIndex}>
                            <td className="border border-gray-300 px-4 py-2">
                              {left}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              {right ?? ""}
                            </td>
                          </tr>
                        );
                      }
                    )}
                  </tbody>
                </table>
              </div>

              {/* Dropdown */}
              <div className="mb-6">
                <label
                  htmlFor="hotelSelect"
                  className="block text-lg font-semibold text-gray-900 mb-2"
                >
                  View Special Tariff Details
                </label>

                <select
                  id="hotelSelect"
                  className="border border-gray-400 rounded-lg p-2 w-full md:w-1/2 focus:ring-2 focus:ring-purple-600"
                  value={selectedHotel}
                  onChange={(e) => setSelectedHotel(e.target.value)}
                  aria-label="Select hotel to view rates"
                >
                  <option value="">-- Select a Hotel --</option>
                  {hotelList.map((h) => (
                    <option key={h} value={h}>
                      {h}
                    </option>
                  ))}
                </select>
              </div>

              {/* Rates area */}
              {selectedHotel ? (
                <div
                  className="overflow-x-auto mb-8 transition-all duration-300"
                  aria-live="polite"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {selectedHotel} — Tariff Details
                  </h3>

                  {/* choose table format depending on hotel data structure */}
                  {selectedHotel === "WJ Grand Hotel" ? (
                    <table className="w-full table-auto border-collapse border border-gray-300 text-gray-800">
                      <thead>
                        <tr className="bg-cyan-100 text-gray-900 font-semibold">
                          <th className="border border-gray-300 px-4 py-2">
                            Room Type
                          </th>
                          <th className="border border-gray-300 px-4 py-2">
                            Published Rate (Single)
                          </th>
                          <th className="border border-gray-300 px-4 py-2">
                            Published Rate (Double)
                          </th>
                          <th className="border border-gray-300 px-4 py-2">
                            NIT Corporate Rate CPAI (Single)
                          </th>
                          <th className="border border-gray-300 px-4 py-2">
                            NIT Corporate Rate CPAI (Double)
                          </th>
                          <th className="border border-gray-300 px-4 py-2">
                            NIT Corporate Rate MAP (Single)
                          </th>
                          <th className="border border-gray-300 px-4 py-2">
                            NIT Corporate Rate MAP (Double)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {hotelData["WJ Grand Hotel"].map((row) => (
                          <tr key={row.type}>
                            <td className="border border-gray-300 px-4 py-2">
                              {row.type}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              {row.publishedSingle}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              {row.publishedDouble}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              {row.cpaiSingle}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              {row.cpaiDouble}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              {row.mapSingle}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              {row.mapDouble}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : selectedHotel === "Radisson Jalandhar" ? (
                    <table className="w-full table-auto border-collapse border border-gray-300 text-gray-800">
                      <thead>
                        <tr className="bg-pink-100 text-gray-900 font-semibold">
                          <th className="border border-gray-300 px-4 py-2">
                            Room Type
                          </th>
                          <th className="border border-gray-300 px-4 py-2">
                            Published Tariff (Single)
                          </th>
                          <th className="border border-gray-300 px-4 py-2">
                            Published Tariff (Double)
                          </th>
                          <th className="border border-gray-300 px-4 py-2">
                            Special Tariff (Single)
                          </th>
                          <th className="border border-gray-300 px-4 py-2">
                            Special Tariff (Double)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {hotelData["Radisson Jalandhar"].map((row) => (
                          <tr key={row.type}>
                            <td className="border border-gray-300 px-4 py-2">
                              {row.type}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              {row.publishedSingle}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              {row.publishedDouble}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              {row.specialSingle}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              {row.specialDouble}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    // Generic table for hotels with simple single/double rates or empty
                    <table className="w-full table-auto border-collapse border border-gray-300 text-gray-800">
                      <thead>
                        <tr className="bg-gray-100 text-gray-900 font-semibold">
                          <th className="border border-gray-300 px-4 py-2">
                            Room Type
                          </th>
                          <th className="border border-gray-300 px-4 py-2">
                            Single Occupancy
                          </th>
                          <th className="border border-gray-300 px-4 py-2">
                            Double Occupancy
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {(hotelData[selectedHotel] || []).length > 0 ? (
                          hotelData[selectedHotel].map((row) => (
                            <tr key={row.type}>
                              <td className="border border-gray-300 px-4 py-2">
                                {row.type}
                              </td>
                              <td className="border border-gray-300 px-4 py-2">
                                {row.single || row.publishedSingle || "-"}
                              </td>
                              <td className="border border-gray-300 px-4 py-2">
                                {row.double || row.publishedDouble || "-"}
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td
                              className="border border-gray-300 px-4 py-2"
                              colSpan={3}
                            >
                              No tariff data available for this hotel.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  )}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Accommodation;
