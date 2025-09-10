

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left - Brand */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-bold text-white">Job Portal</h2>
          <p className="text-sm">Find your dream job today</p>
        </div>

        {/* Center - Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="/" className="hover:text-white transition">
            Home
          </a>
          <a href="/jobs" className="hover:text-white transition">
            Jobs
          </a>
          <a href="/about" className="hover:text-white transition">
            About
          </a>
          <a href="/contact" className="hover:text-white transition">
            Contact
          </a>
        </div>

        {/* Right - Social Icons */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook text-xl hover:text-white"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter text-xl hover:text-white"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin text-xl hover:text-white"></i>
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Job Portal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
