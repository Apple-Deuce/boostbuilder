import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-primary-2 text-white font-tiltwarp">
      <div className="container mx-auto py-4 px-4 md:flex md:items-center md:justify-between bg-gray-200">
        <div className="flex items-center justify-between">
          <a href="/" className="text-xl"><span className='font-bold text-primary'>BOOST</span><span className='font-medium font-secondary-1'>builder
          </span></a>
          <button
            className="md:hidden text-gray-500 hover:text-white focus:outline-none focus:text-white"
            onClick={handleMenuClick}
          >
            <svg viewBox="0 0 20 20" className="w-6 h-6 fill-current">
              <path
                fillRule="evenodd"
                d="M2.5 4.75A.75.75 0 0 1 3.25 4h13.5a.75.75 0 0 1 0 1.5H3.25a.75.75 0 0 1-.75-.75zm0 5A.75.75 0 0 1 3.25 9h13.5a.75.75 0 0 1 0 1.5H3.25a.75.75 0 0 1-.75-.75zm0 5A.75.75 0 0 1 3.25 14h13.5a.75.75 0 0 1 0 1.5H3.25a.75.75 0 0 1-.75-.75z"
              ></path>
            </svg>
          </button>
        </div>

        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:items-center w-full md:w-auto`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
              <a href="/" className="text-lg hover:text-gray-300 py-2 md:py-0">
                Home
              </a>
              <a href="/products?type=suspension" className="text-lg hover:text-gray-300 py-2 md:py-0">
                Suspension
              </a>
              <a href="/products?type=exhaust" className="text-lg hover:text-gray-300 py-2 md:py-0">
                Exhaust
              </a>
              <a href="/products?type=intake" className="text-lg hover:text-gray-300 py-2 md:py-0">
                Intake
              </a>
              <a href="/cart" className="text-lg hover:text-gray-300 py-2 md:py-0">
                Cart
              </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
