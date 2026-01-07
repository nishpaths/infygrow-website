import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const hoverTimeoutRef = useRef(null);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleDocClick(e){
      // close when clicking outside the dropdown
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
      // close mobile menu when clicking outside
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target) && mobileMenuOpen) {
        const hamburgerButton = document.querySelector('[data-collapse-toggle="navbar-dropdown"]');
        if (hamburgerButton && !hamburgerButton.contains(e.target)) {
          setMobileMenuOpen(false);
        }
      }
    }
    document.addEventListener("mousedown", handleDocClick);
    return () => document.removeEventListener('mousedown', handleDocClick)
  }, [mobileMenuOpen]);

  // Close mobile menu handler
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  };

  // Handle Services dropdown - click on mobile, hover on desktop
  const handleServicesClick = () => {
    // On mobile, toggle on click
    if (window.innerWidth < 768) {
      setServicesOpen(v => !v);
    }
  };

  const handleServicesMouseEnter = () => {
    // Only use hover on desktop
    if (window.innerWidth >= 768) {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
        hoverTimeoutRef.current = null;
      }
      setServicesOpen(true);
    }
  };

  const handleServicesMouseLeave = () => {
    // Only use hover on desktop
    if (window.innerWidth >= 768) {
      hoverTimeoutRef.current = setTimeout(() => {
        setServicesOpen(false);
        hoverTimeoutRef.current = null;
      }, 150);
    }
  };
  return (
    <>
      <nav className="w-full sticky top-0 z-50 bg-black shadow-lg">
        <div className="flex flex-wrap items-center justify-between px-6 py-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
            onClick={closeMobileMenu}
          >
            <span className="self-center text-2xl text-heading font-montserrat font-bold whitespace-nowrap text-[#bab675]">
              I  N  F  Y  G  R  O  W
            </span>
          </Link>

          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-white md:hidden focus:outline-none focus:ring-2 focus:ring-[#bab675] transition-transform duration-300 active:scale-95"
            aria-controls="navbar-dropdown"
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <div className="relative w-6 h-6">
              <span
                className={`absolute top-0 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${
                  mobileMenuOpen ? 'rotate-45 top-2.5' : ''
                }`}
              />
              <span
                className={`absolute top-2.5 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute top-5 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${
                  mobileMenuOpen ? '-rotate-45 top-2.5' : ''
                }`}
              />
            </div>
          </button>

          {/* Backdrop overlay for mobile */}
          <div
            className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${
              mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={closeMobileMenu}
          />

          {/* Mobile menu */}
          <div
            ref={mobileMenuRef}
            className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-black z-50 md:relative md:z-auto md:h-auto md:w-auto md:flex md:items-center md:space-x-6 transform transition-transform duration-300 ease-in-out md:transform-none ${
              mobileMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'
            } ${mobileMenuOpen ? 'block' : 'hidden md:flex'}`}
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium p-6 md:p-0 mt-16 md:mt-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:border-0 md:bg-transparent">
              
              {/* HOME */}
              <li className="mb-4 md:mb-0">
                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className="block py-3 px-3 text-white hover:text-gray-500 active:text-gray-400 transition-colors font-lato font-bold min-h-[44px] flex items-center"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>

              {/* SERVICES DROPDOWN */}
              <li
                ref={dropdownRef}
                className="relative z-50 mb-4 md:mb-0"
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <button
                  id="dropdownNvbarButton"
                  type="button"
                  onClick={handleServicesClick}
                  aria-expanded={servicesOpen}
                  aria-controls="dropdownNavbar"
                  className="flex items-center justify-between w-full py-3 px-3 rounded font-medium text-heading text-white font-lato hover:text-gray-500 active:text-gray-400 transition-colors min-h-[44px]"
                >
                  Services
                  <svg
                    className={`w-4 h-4 ms-1.5 transition-transform duration-200 ${
                      servicesOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 9-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  id="dropdownNavbar"
                  className={`${
                    servicesOpen ? "block" : "hidden"
                  } md:absolute md:left-0 md:mt-2 bg-black border border-gray-700 rounded-lg shadow-lg w-full md:w-auto md:min-w-[400px] z-[60] transition-all duration-200`}
                >
                  <ul className="p-3 md:p-4 text-sm text-white font-medium md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-1" aria-labelledby="dropdownNvbarButton">
                      <li className="hover:bg-neutral-800 active:bg-neutral-700 transition-colors rounded">
                        <Link 
                          to="/services/life-insurance-section" 
                          onClick={closeMobileMenu}
                          className="inline-flex font-lato items-center w-full p-3 min-h-[44px] rounded"
                        >
                          Life Insurance
                        </Link>
                      </li>
                      <li className="hover:bg-neutral-800 active:bg-neutral-700 transition-colors rounded">
                        <Link 
                          to="/services/health-insurance-section" 
                          onClick={closeMobileMenu}
                          className="inline-flex font-lato items-center w-full p-3 min-h-[44px] rounded"
                        >
                          Health Insurance
                        </Link>
                      </li>
                      <li className="hover:bg-neutral-800 active:bg-neutral-700 transition-colors rounded">
                        <Link 
                          to="/services/retirement-planning-section" 
                          onClick={closeMobileMenu}
                          className="inline-flex font-lato items-center w-full p-3 min-h-[44px] rounded"
                        >
                          Retirement Planning
                        </Link>
                      </li>
                      <li className="hover:bg-neutral-800 active:bg-neutral-700 transition-colors rounded">
                        <Link 
                          to="/services/legacy-planning-section" 
                          onClick={closeMobileMenu}
                          className="inline-flex font-lato items-center w-full p-3 min-h-[44px] rounded"
                        >
                          Legacy Planning
                        </Link>
                      </li>
                      <li className="hover:bg-neutral-800 active:bg-neutral-700 transition-colors rounded md:col-span-2">
                        <Link 
                          to="/services/business-opportunity-section" 
                          onClick={closeMobileMenu}
                          className="inline-flex font-lato items-center w-full p-3 min-h-[44px] rounded"
                        >
                          Business Opportunity
                        </Link>
                      </li>                                     
                  </ul>
                </div>
              </li>

              {/* REST OF THE LINKS */}
              <li className="mb-4 md:mb-0">
                <Link
                  to="/why-us"
                  onClick={closeMobileMenu}
                  className="block py-3 px-3 text-white hover:text-gray-500 active:text-gray-400 transition-colors rounded font-lato font-bold min-h-[44px] flex items-center"
                >
                  Why US
                </Link>
              </li>

              <li className="mb-4 md:mb-0">
                <Link 
                  to="/contact" 
                  onClick={closeMobileMenu}
                  className="block py-3 px-3 text-white hover:text-gray-500 active:text-gray-400 transition-colors rounded font-lato font-bold min-h-[44px] flex items-center"
                >
                  Contact US
                </Link>
              </li>

              <li className="mb-4 md:mb-0">
                <Link 
                  to="/team" 
                  onClick={closeMobileMenu}
                  className="block py-3 px-3 text-white hover:text-gray-500 active:text-gray-400 transition-colors rounded font-lato font-bold min-h-[44px] flex items-center"
                >
                  Our Team
                </Link>
              </li>
              {/* TOOLS 
              <li>
                <Link to="/tools" className="block py-2 px-1 text-white hover:text-gray-500 transition-colors rounded font-lato font-semibold">
                  Tools
                </Link>
              </li>
              */}
            </ul>
            
            {/* Primary CTA Button */}
            <Link 
              to="/contact" 
              onClick={closeMobileMenu}
              className="mt-4 md:mt-0 block md:inline-block"
            >
              <button className="bg-[#bab675] text-black font-bold py-3 px-6 rounded hover:bg-[#a8a664] active:bg-[#969553] transition-colors text-sm md:text-base font-cabin whitespace-nowrap w-full md:w-auto min-h-[44px]">
                Free Review
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;