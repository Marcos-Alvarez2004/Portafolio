// REACT
import React, { useState } from "react";
// REACT-ICONS
import { IoMdMenu } from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5";
import { FaLinkedinIn, FaGithub, FaRegUser } from "react-icons/fa";
// REACT-ROUTER-DOM
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-white font-bold text-4xl flex items-center">
                <FaRegUser />{" "}
                <span className="ml-2 text-lg">Marcos Alvarez</span>
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <div className="pr-10">
                  <Link
                    to="/"
                    className="text-white/80 hover:bg-azul-medianoche hover:text-white px-3 py-2 rounded-md text-md font-medium"
                  >
                    Proyectos
                  </Link>
                  <Link
                    to="/sobre-mi"
                    className="text-white/80 hover:bg-azul-medianoche hover:text-white px-3 py-2 rounded-md text-md font-medium"
                  >
                    Sobre Mi
                  </Link>
                  <Link
                    to="/contacto"
                    className="text-white/80 hover:bg-azul-medianoche hover:text-white px-3 py-2 rounded-md text-md font-medium"
                  >
                    Contacto
                  </Link>
                </div>
                <a
                  href="https://www.linkedin.com/in/marcos-alvarez-b4903326a/"
                  target="_blank"
                  className="text-white hover:bg-azul-medianoche hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://github.com/Marcos-Alvarez2004"
                  target="_blank"
                  className="text-white hover:bg-azul-medianoche hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="bg-gray-700 inline-flex items-center justify-center p-2 rounded-md text-white/80 hover:text-white hover:bg-azul-claro focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Abrir menú principal</span>
                {isOpen ? (
                  <IoCloseCircle className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <IoMdMenu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden border-t-2 border-white/80">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="text-white/80 hover:bg-azul-medianoche hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Proyectos
              </Link>
              <Link
                to="/sobre-mi"
                className="text-white/80 hover:bg-azul-medianoche hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Sobre Mi
              </Link>
              <Link
                to="/contacto"
                className="text-white/80 hover:bg-azul-medianoche hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Contacto
              </Link>
              <div className="flex justify-center items-center space-x-4 px-2 py-4">
                <a href="#" className="text-white/80 hover:text-white">
                  <FaLinkedinIn className="text-xl" />
                </a>
                <a href="#" className="text-white/80 hover:text-white">
                  <FaGithub className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
