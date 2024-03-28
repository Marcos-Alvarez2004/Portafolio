// REACT
import React from "react";
// CARD
import Card from "../Content/Card";
// REACT-ICONS
import { FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa";
import {
  SiVite,
  SiExpress,
  SiTailwindcss,
  SiHandlebarsdotjs,
  SiSocketdotio,
} from "react-icons/si";
import { DiMongodb, DiMysql } from "react-icons/di";

export const proyectos = [
  {
    id: 1,
    titulo: "APP RESTAURANTE",
    descripcion:
      "Se trata de una aplicación web dedicada a la reserva de servicios para un restaurante. Su función principal es permitir que los usuarios reserven una fecha y hora para comer. Si un usuario se desvía del camino correcto, se lo redirige a una página de regreso a la página principal. Los usuarios tienen la opción de editar la fecha y hora de su reserva, y toda la información se guarda en una base de datos de MongoDB.",
    tecnologias: (
      <>
        <SiVite style={{ color: "#AC3DF7" }} />{" "}
        <FaReact style={{ color: "#66DBFB" }} />{" "}
        <DiMongodb style={{ color: "#17AD55" }} />{" "}
        <FaCss3Alt style={{ color: "#3D9DD7" }} />{" "}
        <FaNodeJs style={{ color: "#58A149" }} />{" "}
        <SiExpress style={{ color: "#000000" }} />{" "}
      </>
    ),
    img: "/Assets/App_restaurant.png",
    url: "https://github.com/Marcos-Alvarez2004/web_comida.git",
  },
  {
    id: 2,
    titulo: "APP TASK",
    descripcion:
      "Se trata de una aplicación web con funcionalidad CRUD, diseñada para la creación, edición y eliminación de notas. Los usuarios también tienen la opción de agregar fechas a sus notas. La aplicación cuenta con un sistema de registro e inicio de sesión de usuarios, así como una función de cierre de sesión. Todos los datos se almacenan en una base de datos de MongoDB.",
    tecnologias: (
      <>
        <SiVite style={{ color: "#AC3DF7" }} />{" "}
        <FaReact style={{ color: "#66DBFB" }} />{" "}
        <DiMongodb style={{ color: "#17AD55" }} />{" "}
        <FaNodeJs style={{ color: "#58A149" }} />{" "}
        <SiExpress style={{ color: "#000000" }} />{" "}
        <SiTailwindcss style={{ color: "#3EBFF8" }} />
      </>
    ),
    img: "/Assets/App_task.png",
    url: "https://github.com/Marcos-Alvarez2004/web_task-mern.git",
  },
  {
    id: 3,
    titulo: "APP DE TRABAJO DE LA UTN",
    descripcion:
      "Se trata de una aplicación web con un sistema de usuarios que permite el registro e inicio de sesión. Los usuarios pueden registrarse utilizando su nombre y contraseña, y la contraseña se almacena de forma encriptada para mayor seguridad. La información del usuario se guarda en una base de datos MySQL. La página se centra en un sistema CRUD para productos, lo que permite agregar, leer, actualizar y borrar productos de manera fácil y eficiente. Además, la aplicación cuenta con una función de cierre de sesión para los usuarios.",
    tecnologias: (
      <>
        <FaReact style={{ color: "#66DBFB" }} />{" "}
        <FaCss3Alt style={{ color: "#3D9DD7" }} />{" "}
        <FaNodeJs style={{ color: "#58A149" }} />{" "}
        <SiExpress style={{ color: "#000000" }} />{" "}
        <DiMysql style={{ color: "#09799C" }} />{" "}
        <SiHandlebarsdotjs style={{ color: "#483A2D" }} />
      </>
    ),
    img: "/Assets/App_web.png",
    url: "https://github.com/Marcos-Alvarez2004/UTN-Trabajo-Final.git",
  },
  {
    id: 4,
    titulo: "CLONE WHATSAPP",
    descripcion:
      "Se trata de un clon de Whatsapp Web que utiliza el sistema de inicio de sesión de cuentas de Google. Utiliza sockets para permitir chats en línea, lo que significa que los mensajes llegan en tiempo real. Además, los usuarios pueden ver su información personal y cerrar sesión cuando lo deseen.",
    tecnologias: (
      <>
        <FaReact style={{ color: "#66DBFB" }} />{" "}
        <DiMongodb style={{ color: "#17AD55" }} />{" "}
        <FaNodeJs style={{ color: "#58A149" }} />{" "}
        <SiExpress style={{ color: "#000000" }} />{" "}
        <SiSocketdotio style={{ color: "#080808" }} />{" "}
        <SiTailwindcss style={{ color: "#3EBFF8" }} />{" "}
      </>
    ),
    img: "/Assets/Clone_wsp.png",
    url: "https://github.com/Marcos-Alvarez2004/Clone_Whatsapp.git",
  },
  {
    id: 5,
    titulo: "CLONE SPOTIFY",
    descripcion:
      "Se trata de un clon de Spotify que permite a los usuarios registrarse e ingresar. Sus principales funciones incluyen la reproducción de música. Sin embargo, el sistema de avance y retroceso entre canciones no funciona de manera óptima. No obstante, los usuarios pueden pausar, reproducir, ajustar el volumen y disfrutar de la canción seleccionada.",
    tecnologias: (
      <>
        <SiVite style={{ color: "#AC3DF7" }} />{" "}
        <FaReact style={{ color: "#66DBFB" }} />{" "}
        <FaCss3Alt style={{ color: "#3D9DD7" }} />{" "}
        <DiMongodb style={{ color: "#17AD55" }} />{" "}
        <FaNodeJs style={{ color: "#58A149" }} />{" "}
        <SiExpress style={{ color: "#000000" }} />{" "}
        <SiTailwindcss style={{ color: "#3EBFF8" }} />
      </>
    ),
    img: "/Assets/Clone_spotify.png",
    url: "https://github.com/Marcos-Alvarez2004/Clone-Spotify",
  },
  {
    id: 6,
    titulo: "Web Eccomerce",
    descripcion:
      "Una web de ecommerce con un sistema CRUD, es decir, se pueden agregar, ver, actualizar y borrar los productos. Tiene una base de datos de MongoDB donde se guardan los usuarios registrados, los productos, las reseñas de los productos, las categorías y las órdenes de compra. Se pueden buscar productos por categorías y agregarlos a favoritos. Cuenta con un sistema de pago a través de PayPal. Los usuarios pueden ser promovidos a administradores para tener control desde la página y estar autorizados a realizar cambios, creaciones o eliminaciones de lo mencionado anteriormente.",
    tecnologias: (
      <>
        <SiVite style={{ color: "#AC3DF7" }} />{" "}
        <FaReact style={{ color: "#66DBFB" }} />{" "}
        <DiMongodb style={{ color: "#17AD55" }} />{" "}
        <FaNodeJs style={{ color: "#58A149" }} />{" "}
        <SiExpress style={{ color: "#000000" }} />{" "}
        <SiTailwindcss style={{ color: "#3EBFF8" }} />
      </>
    ),
    img: "/Assets/Eccomerce.png",
    url: "https://github.com/Marcos-Alvarez2004/Eccomerce.git",
  },
];

const Proyectos = () => {
  return (
    <>
      <h1 className="text-3xl md:text-5xl text-center text-azul-medianoche font-semibold py-8">
        Proyectos
      </h1>
      <section className="flex flex-wrap gap-8 justify-center my-8 md:mx-4">
        {proyectos.map((proyecto) => (
          <Card
            key={proyecto.id}
            titulo={proyecto.titulo}
            descripcion={proyecto.descripcion}
            tecnologias={proyecto.tecnologias}
            img={proyecto.img}
            url={proyecto.url}
          />
        ))}
      </section>
    </>
  );
};

export default Proyectos;
