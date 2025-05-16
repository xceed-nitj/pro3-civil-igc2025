// const Footer = () => {
//   return (
//     <footer
//       className="relative bg-cover bg-center"
//       style={{
//         backgroundImage:
//           "linear-gradient(rgba(128, 0, 128, 0.6), rgba(128, 0, 128, 0.6)), url('https://th.bing.com/th/id/OIP.YV5ojdJ3lW_iYoywoL0raAHaDP?rs=1&pid=ImgDetMain')",
//       }}
//     >
//       <div className="px-4 py-8 sm:px-6 lg:px-20 lg:py-16 grid grid-cols-1 lg:grid-cols-5 gap-8">
//         {/* Contact Information Section */}
//         <div className="lg:col-span-2">
//           <p className="text-2xl font-medium text-white hover:opacity-75 sm:text-3xl">
//             Contact Us
//           </p>
//           <ul className="mt-4 space-y-1 text-sm text-white">
//             <li>Prof. S Rupali </li>
//             <li>Prof. Kanish Kapoor</li>
//             <li>Prof. K Senthil</li>
//             <li>Organizing Secretary, igc2025</li>
//             <li>NIT Jalandhar</li>
//             <li>Phone: +91 82659-99739</li>
//             <li>Email: igsjalandharchapter@nitj.ac.in</li>
//             <li>
//               <a href="/" className="text-white transition hover:opacity-75">
//                 Website: https://igc2025nitj.com/
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Empty spacer to push flag counter to the right */}
//         <div className="hidden lg:block lg:col-span-2"></div>

//         {/* Flag Counter Section */}
//         <div className="lg:col-span-1 flex justify-center items-center">
//           <a href="https://info.flagcounter.com/1WSw">
//             <img
//               src="https://s01.flagcounter.com/count2/SENi/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_10/viewers_VISITORS/labels_1/pageviews_1/flags_0/percent_0/"
//               alt="Flag Counter"
//               className="w-[100px] lg:w-[350px] border-2 border-dashed border-accent-500"
//             />
//           </a>
//         </div>
//       </div>

//       {/* Footer Bottom Section */}
//       <div className="border-t border-stone-200 pt-4">
//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 lg:px-20">
//           <ul className="-mt-4 flex flex-wrap gap-4 text-xs text-white">
//             <li>
//               <a href="#" className="mt-4 transition hover:opacity-75">
//                 Terms & Conditions
//               </a>
//             </li>
//             <li>
//               <a href="#" className="mt-4 transition hover:opacity-75">
//                 Privacy Policy
//               </a>
//             </li>
//             <li>
//               <a href="#" className="mt-4 transition hover:opacity-75">
//                 Cookies
//               </a>
//             </li>
//           </ul>
//           <p className="mt-4 mb-4 sm:mt-0 text-xs text-white text-center">
//             &copy; 2023 XCEED-NITJ All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
const Footer = () => {
  return (
    <>
      <footer className="bg-stone-100 lg:grid lg:grid-cols-5">
        {/* Left Image Section */}
        <div className="relative block h-32 lg:col-span-2 lg:h-full">
          <img
            src="/civildept.jpg"
            alt="NIT Jalandhar"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute w-full h-full bg-pink-200 z-10 mix-blend-multiply opacity-80" />
        </div>

        {/* Right Content Section */}
        <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:mx-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {/* Contact Info */}
            <div>
              <p className="block text-2xl font-medium text-stone-900 hover:opacity-75 sm:text-3xl">
                Contact Us
              </p>

              <ul className="mt-4 space-y-1 text-sm text-stone-700">
                <li>Prof. S Rupali</li>
                <li>Prof. Kanish Kapoor</li>
                <li>Prof. K Senthil</li>
                <li>Organizing Secretary, IGC 2025</li>
                <li>NIT Jalandhar</li>
                <li>Phone: +91 82659-99739</li>
                <li>Email: igsjalandharchapter@nitj.ac.in</li>
                <li>
                  <a
                    href="https://igc2025nitj.com/"
                    className="text-stone-700 underline hover:opacity-75"
                  >
                    Website: https://igc2025nitj.com/
                  </a>
                </li>
              </ul>
            </div>

            {/* Flag Counter */}
            <div className="flex justify-center items-center md:pt-14 md:pl-7">
              <a href="https://info.flagcounter.com/1WSw">
                <img
                  src="https://s01.flagcounter.com/count2/SENi/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_10/viewers_VISITORS/labels_1/pageviews_1/flags_0/percent_0/"
                  alt="Flag Counter"
                  className="w-[250px] lg:w-[450px] border-2"
                />
              </a>
            </div>
          </div>

          {/* Bottom Footer Section */}
          <div className="mt-12 border-t border-stone-200 pt-12">
            <div className="sm:flex sm:items-center sm:justify-between">
              <ul className="flex flex-wrap gap-4 text-xs">
                <li>
                  <a
                    href="#"
                    className="text-stone-500 transition hover:opacity-75"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-stone-500 transition hover:opacity-75"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-stone-500 transition hover:opacity-75"
                  >
                    Cookies
                  </a>
                </li>
              </ul>

              <p className="mt-8 text-xs text-stone-500 sm:mt-0">
                &copy; 2023 XCEED-NITJ All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
