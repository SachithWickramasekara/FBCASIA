import React, { useState } from "react";
import { Link} from "react-router-dom";
import { routePaths } from "../routes/routes";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-[#0C2E4E] w-full text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to={routePaths.home} className="text-xl font-bold">
              <img src="assets/LogoMain.png" alt="FBC Logo" />
            </Link>
          </div>
          <div className="flex items-center">
            <div className="flex md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />{" "}
                  </svg>
                )}
              </button>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-6">
              <Link
                to={routePaths.about}
                className="text-sm font-medium active:text-orange-500"
              >
                About
              </Link>
              <Link to={routePaths.services} className="text-sm font-medium">
                Services
              </Link>
              <Link
                to={routePaths.FBC_Difference}
                className="text-sm font-medium"
              >
                FBC Difference
              </Link>
              <Link to={routePaths.blog} className="text-sm font-medium">
                Blog
              </Link>
              <Link to={routePaths.Careers} className="text-sm font-medium">
                Careers
              </Link>
              <Link to={routePaths.contact} className="text-sm font-medium">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden bg-[#0C2E4E] absolute w-full  ${
          isOpen ? "block" : "hidden"
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to={routePaths.about}
            className="text-sm font-medium block py-2 px-3 rounded-md text-white "
          >
            About
          </Link>
          <Link
            to={routePaths.services}
            className="text-sm font-medium block py-2 px-3 rounded-md text-white "
          >
            Services
          </Link>
          <Link
            to={routePaths.FBC_Difference}
            className="text-sm font-medium block py-2 px-3 rounded-md text-white "
          >
            FBC Difference
          </Link>
          <Link
            to={routePaths.blog}
            className="text-sm font-medium block py-2 px-3 rounded-md text-white "
          >
            Blog
          </Link>
          <Link
            to={routePaths.Careers}
            className="text-sm font-medium block py-2 px-3 rounded-md text-white "
          >
            Careers
          </Link>
          <Link
            to={routePaths.contact}
            className="text-sm font-medium block py-2 px-3 rounded-md text-white "
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
