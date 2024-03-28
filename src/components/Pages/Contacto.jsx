// REACT
import React, { useState } from "react";
// REACT-TOASTIFY
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contacto = () => {
  const handleSubmit = () => {
    try {
      if (true) {
        toast.success("Su mensaje se envio correctamente!");
      }
    } catch (error) {
      toast.error("Hubo un error. Intentelo más tarde.");
    }
  };
  return (
    <>
      <h1 className="text-3xl text-center text-azul-medianoche font-semibold py-8 md:text-5xl">
        Contacto
      </h1>
      <div className="max-w-md mx-auto h-screen flex justify-center items-center">
        <form
          action="https://formsubmit.co/20398d6c370c1176d9cdf1986fb0e085"
          className="bg-gris-claro shadow-md rounded px-8 pt-6 pb-8 mb-4"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="mb-4 md:flex md:items-center">
            <div className="md:w-1/2 md:mr-2">
              <label
                className="block text-gris-oscuro text-sm font-bold mb-2"
                htmlFor="name"
              >
                Nombre
              </label>
              <input
                className="shadow appearance-none border rounded w-full placeholder:text-gris-plateado py-2 px-3 text-gris-oscuro leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="nombre"
                type="text"
                placeholder="Nombre"
                required
              />
            </div>
            <div className="md:w-1/2 md:ml-2">
              <label
                className="block text-gris-oscuro text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none placeholder:text-gris-plateado border rounded w-full py-2 px-3 text-gris-oscuro leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                required
                placeholder="Email"
                name="email"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gris-oscuro text-sm font-bold mb-2"
              htmlFor="message"
            >
              Mensaje
            </label>
            <textarea
              className="shadow appearance-none placeholder:text-gris-plateado border rounded w-full py-3 px-4 text-gris-oscuro leading-tight focus:outline-none focus:shadow-outline resize-none h-80"
              id="message"
              required
              type="text"
              placeholder="Escribe tu mensaje aquí"
              name="mensaje"
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-azul-claro text-white/85 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Enviar
            </button>
          </div>
          <input
            type="hidden"
            name="_next"
            value="http://localhost:5173/contacto"
          />
          <input type="hidden" name="_captcha" value="false" />
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default Contacto;
