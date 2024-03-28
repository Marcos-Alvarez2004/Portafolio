// REACT
import React, { useEffect, useRef } from "react";
// IMG
import img from "/Assets/Sobre-mi - Experiencia/me.svg";
// TYPED
import Typed from "typed.js";
// IMG EXPERIENCIE
import Html from "/Assets/Sobre-mi - Experiencia/html.svg";
import Css from "/Assets/Sobre-mi - Experiencia/css.svg";
import Js from "/Assets/Sobre-mi - Experiencia/js.svg";
import ReactJs from "/Assets/Sobre-mi - Experiencia/reactJs.svg";
import Vite from "/Assets/Sobre-mi - Experiencia/vite.svg";
import MySql from "/Assets/Sobre-mi - Experiencia/MySQL.svg";
import NodeJs from "/Assets/Sobre-mi - Experiencia/nodeJs.svg";
import ExpressJs from "/Assets/Sobre-mi - Experiencia/expressJs.svg";
import MongoDB from "/Assets/Sobre-mi - Experiencia/mongoDB.svg";
import TailwindCss from "/Assets/Sobre-mi - Experiencia/tailwindCSS.svg";
// PDF
import pdf from "/Assets/Sobre-mi - Experiencia/pdf.webp";

const SobreMi = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Desarrollador Web", "Programador Web", "Full Stack"],
      startDelay: 100,
      typeSpeed: 100,
      showCursor: false,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl text-center text-azul-medianoche font-semibold py-8 md:text-5xl">
          Proyectos - Experiencias
        </h1>
        <section className="flex flex-col lg:flex-row justify-center items-center gap-8">
          <div className="lg:w-1/3">
            <img src={img} alt="Marcos Alvarez" className="h-full w-full" />
          </div>
          <div>
            <p className="text-xl lg:text-4xl font-semibold md:text-3xl">
              Me llamo Marcos Alvarez Medero.
              <br />
              <br />
              Soy{" "}
              <span
                className="text-azul-claro text-3xl lg:text-5xl font-bold"
                ref={el}
              ></span>
              <br />
              <br />
              <span className="text-2xl lg:text-3xl">
                Mi{" "}
                <a
                  className="text-azul-claro hover:underline"
                  href="/CV MARCOS ALVAREZ.pdf"
                  download
                >
                  CV
                </a>
              </span>
            </p>
            <br />
          </div>
        </section>
      </div>

      <section className="bg-gris-plateado h-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-5xl text-center text-azul-medianoche font-semibold py-8">
            Experiencia
          </h1>
          <div className="w-full text-left text-lg lg:text-2xl text-black">
            Hace 2 años que estoy estudiando programación y desarrollo web.
            Principalmente soy desarrollador full stack con más conocimientos
            sobre frontend, todavía no he ejercido un trabajo sobre esto, pero
            estoy dispuesto a aprender y trabajar.
          </div>
        </div>
      </section>

      <section className="bg-white h-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-5xl text-center text-azul-medianoche font-semibold py-8">
            Tecnologías
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <img src={Html} alt="HTML" className="h-24 w-24 mx-auto" />
            <img src={Css} alt="CSS" className="h-24 w-24 mx-auto" />
            <img src={Js} alt="JAVASCRIPT" className="h-24 w-24 mx-auto" />
            <img src={ReactJs} alt="REACT.JS" className="h-24 w-24 mx-auto" />
            <img src={Vite} alt="VITE" className="h-24 w-24 mx-auto" />
            <img src={MySql} alt="MYSQL" className="h-24 w-24 mx-auto" />
            <img src={NodeJs} alt="NODE.JS" className="h-24 w-24 mx-auto" />
            <img
              src={ExpressJs}
              alt="EXPRESS.JS"
              className="h-24 w-24 mx-auto"
            />
            <img src={MongoDB} alt="MONGODB" className="h-24 w-24 mx-auto" />
            <img
              src={TailwindCss}
              alt="TAILWINDCSS"
              className="h-24 w-24 mx-auto"
            />
          </div>
        </div>
      </section>

      <section className="bg-gris-plateado h-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-5xl text-center text-azul-medianoche font-semibold py-8">
            Estudios
          </h1>
          <div className="text-left text-lg lg:text-2xl text-black mb-4">
            Principalmente estudié en la facultad de la UTN y por internet. En
            cursos de la UTN tengo la diplomatura. Y lo demás he aprendido por
            redes sociales, YouTube o en GitHub. He visto distintos creadores
            y/o programadores. Mis dos certificados:
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center justify-center">
              <div className="w-24">
                <img
                  src={pdf}
                  alt="Programador Web Inicial.pdf"
                  className="h-24 w-24"
                />
              </div>
              <a
                className="py-4 underline"
                href="/Assets/Certificados/Programador Web Inicial - Marcos Alvarez Medero.pdf"
                download
              >
                Programador Web Inicial.pdf
              </a>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="w-24">
                <img
                  src={pdf}
                  alt="Diplomatura en programación web full stack con React JS.pdf"
                  className="h-24 w-24"
                />
              </div>
              <a
                className="py-4 underline"
                download
                href="/Assets/Certificados/Diplomatura en programación web full stack con React JS - Marcos Alvarez Medero.pdf"
              >
                Diplomatura en programación web full stack con React JS.pdf
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SobreMi;
