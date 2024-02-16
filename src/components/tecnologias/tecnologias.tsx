/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import Image from "next/image";
import iOSDevelopment from "../../../public/images/swift-logo@logotyp.us.svg";
import AndroidDevelopment from "../../../public/images/android-logo@logotyp.us.svg";
import ReactDevelopment from "../../../public/images/react-logo@logotyp.us.svg";
import MicroservicesArchitecture from "../../../public/images/flutter-logo@logotyp.us.svg";
import WebDevelopment from "../../../public/images/safari-logo@logotyp.us.svg";
import JiraSoftware from "../../../public/images/jira-software-logo@logotyp.us.svg"
import PythonDesktopAI from "../../../public/images/python-logo@logotyp.us.svg"


import JavaDevelopment from "../../../public/images/icons8-logotipo-de-java-coffee-cup-300.svg"
const Tecnologias: React.FC = () => {
  return (
    <section className="container mx-auto py-8" style={{ marginTop: '60px' }}> {/* Agregar margen superior para dejar espacio para el navbar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Tarjeta Desarrollo Móvil - iOS */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
          <Image src={iOSDevelopment} alt="iOS Development" className="w-full h-40 object-cover rounded-t-lg" />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Desarrollo de Aplicaciones iOS</h3>
            <p className="text-gray-600">Construimos aplicaciones iOS atractivas y de alto rendimiento que ofrecen una experiencia de usuario excepcional. Desde aplicaciones móviles para consumidores hasta soluciones empresariales, nuestro equipo experto en desarrollo de iOS se encarga de cada detalle para garantizar el éxito de tu proyecto.</p>
          </div>
        </div>

        {/* Tarjeta Desarrollo Móvil - Android */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
          <Image src={AndroidDevelopment} alt="Android Development" className="w-full h-40 object-cover rounded-t-lg" />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Desarrollo de Aplicaciones Android</h3>
            <p className="text-gray-600">Nuestro equipo de desarrolladores de Android crea aplicaciones de alta calidad para dispositivos Android de todas las formas y tamaños. Desde aplicaciones nativas hasta aplicaciones multiplataforma, estamos preparados para convertir tus ideas en realidades móviles exitosas.</p>
          </div>
        </div>

        {/* Tarjeta Desarrollo Web - React.js */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
          <Image src={ReactDevelopment} alt="React.js Development" className="w-full h-40 object-cover rounded-t-lg" />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Desarrollo Web con React.js</h3>
            <p className="text-gray-600">Utilizamos React.js para construir interfaces de usuario dinámicas y rápidas que mejoran la interactividad y la usabilidad de tus aplicaciones web. Desde sitios web de una sola página hasta aplicaciones complejas de empresa, nuestra experiencia con React.js garantiza resultados excepcionales.</p>
          </div>
        </div>

        {/* Tarjeta Arquitectura - Microservicios */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
          <Image src={JiraSoftware} alt="Microservices Architecture" className="w-full h-40 object-cover rounded-t-lg" />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Arquitectura de Microservicios</h3>
            <p className="text-gray-600">Construimos sistemas escalables y flexibles utilizando la arquitectura de microservicios, permitiéndote agregar nuevas funcionalidades de manera eficiente y escalar vertical u horizontalmente según las demandas del negocio. Nuestra experiencia en microservicios garantiza una arquitectura robusta y adaptable.</p>
          </div>
        </div>

        {/* Tarjeta Metodología Ágil - Scrum */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
          <Image src={MicroservicesArchitecture} alt="Scrum" className="w-full h-40 object-cover rounded-t-lg" />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Metodología Ágil - Scrum</h3>
            <p className="text-gray-600">Implementamos la metodología ágil Scrum para gestionar proyectos de manera eficiente y adaptativa. Con ciclos de desarrollo cortos y entregas frecuentes, podemos responder rápidamente a los cambios y entregar productos de alta calidad en menos tiempo.</p>
          </div>
        </div>

        {/* Tarjeta Desarrollo de Páginas Web */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
          <Image src={WebDevelopment} alt="Web Development" className="w-full h-40 object-cover rounded-t-lg" />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Desarrollo de Páginas Web</h3>
            <p className="text-gray-600">Creamos sitios web impresionantes y funcionales utilizando las últimas tecnologías web y las mejores prácticas de desarrollo. Desde sitios estáticos hasta aplicaciones web dinámicas, nos aseguramos de que tu presencia en línea sea atractiva y efectiva.</p>
          </div>
        </div>

        {/* Tarjeta Desarrollo de aplicaciones de escritorio */}


        <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
          <Image src={PythonDesktopAI} alt="Python Desktop AI Development" className="w-full h-40 object-cover rounded-t-lg" />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Desarrollo de Aplicaciones de Escritorio con Inteligencia Artificial en Python</h3>
            <p className="text-gray-600">Creamos aplicaciones de escritorio innovadoras utilizando Python y técnicas de inteligencia artificial. Como aplicaciones de procesamiento de lenguaje natural, utilizando bibliotecas y frameworks líderes en la industria, hacemos que tu aplicación de escritorio sea inteligente y eficiente.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
          <Image src={JavaDevelopment} alt="Java Development" className="w-full h-40 object-cover rounded-t-lg" />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Desarrollo de Aplicaciones con Java</h3>
            <p className="text-gray-600">Creamos aplicaciones robustas y escalables utilizando Java, un lenguaje de programación ampliamente utilizado en el desarrollo de software empresarial. Desde aplicaciones de escritorio hasta aplicaciones web y móviles.</p>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Tecnologias;
