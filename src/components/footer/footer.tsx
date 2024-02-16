import React from 'react';
import ContactLinks from '../ContactLinks/ContactLinks';
const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Recursos</h3>
            <ul className="text-sm text-gray-600">
              <li><a href="http://smart-soft-eng.utm.mx:3000/" className="underline">Smart-Soft</a></li>
              <li><a href="https://resplendent-paletas-d1db8d.netlify.app/" className="underline">AnimalDetector</a></li>
              <li><a href="https://www.herramientasutm.com/" className="underline">Herramientas UTM</a></li>
              <li><a href="https://portafoliohazelalain.netlify.app/" className="underline">Portafolio Hazel</a></li>
              <li><a href="https://github.com/chapysgc2" className="underline">GitHub</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Información</h3>
            <ul className="text-sm text-gray-600">
              <li>Calle Sartre Fraccionamiento Villa Universidad</li>
              <li>69000, Huajuapan De León, Heroica Ciudad de Huajuapan de León</li>
              <li>Teléfono: 9541451671</li>
              <li>Correo electrónico: hazelo235@gmail.com</li>
              <li>Nacionalidad: Mexicana</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Servicios</h3>
            <ul className="text-sm text-gray-600">
              <li>Movil</li>
              <li>Andriod</li>
              <li>Ios</li>
              <li>Web</li>
              <li>Inteligencia Artificial+</li>
              <li>Google Cloud</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Para la empresa</h3>
            <ul className="text-sm text-gray-600">
              <li>Bite Soft y la empresa</li>
              <li>Comprar para tu empresa</li>
            </ul>
          </div>
        </div>
        <br />
        <br />
        <ContactLinks />

        <div className="border-t border-gray-200 my-8"></div>
        <p className="text-sm text-gray-600">Más formas: Busca un Bite Soft cerca de ti. O llama al 9541451671.</p>
        <p className="text-sm text-gray-600 mt-4">México</p>
        <p className="text-sm text-gray-600">Copyright © 2024 Bite Soft Inc. Todos los derechos reservados.</p>
        <div className="flex justify-center items-center mt-6">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-gray-600 hover:text-black">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-black">
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>

        </div>

      </div>
    </footer>

  );
};

export default Footer;
