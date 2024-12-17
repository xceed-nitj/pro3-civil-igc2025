const Footer = () => {
  return (
    <footer className="relative bg-cover bg-center" style={{ 
      backgroundImage: "linear-gradient(rgba(128, 0, 128, 0.6), rgba(128, 0, 128, 0.6)), url('https://th.bing.com/th/id/OIP.YV5ojdJ3lW_iYoywoL0raAHaDP?rs=1&pid=ImgDetMain')"
    }}>
      <div className="px-4 py-8 sm:px-6 lg:px-20 lg:py-16 lg:grid lg:grid-cols-5">
        
        {/* Contact Information Section */}
        <div className="lg:col-span-2 lg:mb-0 mb-8">
          <p className="text-2xl font-medium text-white hover:opacity-75 sm:text-3xl">
            Contact Us
          </p>
          <ul className="mt-4 space-y-1 text-sm text-white">
            <li>Prof. S Rupali </li>
            <li>Prof. Kanish Kapoor</li>
            <li>Prof. K Senthil</li>
            <li>Organizing Secretary, igc2025</li>
            <li>NIT Jalandhar</li>
            <li>Phone: +91 82659-99739</li>
            <li>Email: igsjalandharchapter@nitj.ac.in</li>
            <li>
              <a href="/" className="text-white transition hover:opacity-75">
                Website: https://igc2025nitj.com/
              </a>
            </li>
          </ul>
        </div>

        {/* Footer Links (Commented Out Section) */}
        {/* 
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-3">
          {footerLinks.map((footerLink) => (
            <div key={footerLink.id}>
              <p className="font-medium text-white">
                {footerLink.title}
              </p>
              <ul className="mt-6 space-y-4 text-sm">
                {footerLink.links.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.url}
                      className="text-white transition hover:opacity-75"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        */}
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-stone-200 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 lg:px-20">
          <ul className="-mt-4 flex flex-wrap gap-4 text-xs text-white">
            <li>
              <a href="#" className="mt-4 transition hover:opacity-75">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="mt-4 transition hover:opacity-75">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mt-4 transition hover:opacity-75">
                Cookies
              </a>
            </li>
          </ul>
          <p className="mt-4 mb-4 sm:mt-0 text-xs text-white text-center">
            &copy; 2023 XCEED-NITJ All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
