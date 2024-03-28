// REACT
import React from "react";
// REACT-ICONS
import { FaGithub, FaInfoCircle } from "react-icons/fa";
// REACT-TOUTER-DOM
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="w-full md:max-w-sm rounded overflow-hidden shadow-lg relative">
      <div className="relative">
        <img className="w-full" src={props.img} alt="Imagen de ejemplo" />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.titulo}</div>
        <p className="text-black text-base">{props.descripcion}</p>
        <div className="text-4xl flex items-center justify-center gap-4 my-8 mb-16 overflow-x-auto">
          {props.tecnologias}
        </div>
        <div className="absolute bottom-0 right-0 text-black text-4xl hover:transform hover:scale-150 duration-300">
          {" "}
          <a
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex"
          >
            <FaGithub className="p-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
