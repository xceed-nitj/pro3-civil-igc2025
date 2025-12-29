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
                {/* <li>Phone: +91 82659-99739</li> */}
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
              <a href="https://info.flagcounter.com/D5t2">
                <img
                  src="https://s05.flagcounter.com/count2/D5t2/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_10/viewers_0/labels_0/pageviews_0/flags_0/percent_0/"
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
