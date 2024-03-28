// REACT
import React from "react";
// REACT-ICONS
import { FaFacebook, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bottom-0 left-0 w-full bg-black text-white py-6">
      <div className="flex justify-center mb-4">
        <a
          href="https://www.facebook.com/profile.php?id=100076853130871&mibextid=ZbWKwL"
          target="_blank"
          className="text-white hover:bg-azul-medianoche hover:text-white px-3 py-2 rounded-md text-xl font-medium"
        >
          <FaFacebook />
        </a>
        <a
          href="https://twitter.com/markuspaaaaa"
          target="_blank"
          className="text-white hover:bg-azul-medianoche hover:text-white px-3 py-2 rounded-md text-xl font-medium"
        >
          <FaTwitter />
        </a>
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
      <p className="text-center text-sm text-white/50">
        &copy; {new Date().getFullYear()} Marcos Alvarez - Todos los derechos
        reservados.
      </p>
    </footer>
  );
};

export default Footer;
