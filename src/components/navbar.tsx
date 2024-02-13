import React, { useEffect } from "react";
import { useRouter } from 'next/router'; // Importa el hook useRouter
import Link from 'next/link';
import Image from 'next/image';


const Navbar: React.FC = () => {
  const router = useRouter(); // Inicializa el hook useRouter

  // Función para manejar la navegación a la página de servicios
  const navigateToServices = async () => {
    await router.push('/services/services'); // Redirecciona al usuario a la ruta /services
  };


  const navigateToCotizacion = async () => {
    await router.push('/cotizacion/cotizacion'); // Redirecciona al usuario a la ruta /services
  };

  const navigateToContact = async () => {
    await router.push('/contact/contact'); // Redirecciona al usuario a la ruta /services
  };

  
  



  return (
    <nav className="bg-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/home/home">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <Image
                src="https://flowbite.com/docs/images/logo.svg"
                alt="Flowbite Logo"
                width={30} // Especifica el ancho de la imagen
                height={100} // Especifica el alto de la imagen
              />
              <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </div>
          </Link>

          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:bg-white md:dark:bg-gray-900">
              <li>
                <Link href="/home/home" passHref>
                  <div className={`flex items-center space-x-3 rtl:space-x-reverse ${router.pathname === "/" ? "text-white bg-blue-700" : "text-gray-900"} rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500`} aria-current={router.pathname === "/" ? "page" : undefined}>
                    Inicio
                  </div>
                </Link>
              </li>

              <li>
                <button onClick={navigateToServices} className={`block py-2 px-3 ${router.pathname === "/services" ? "text-white bg-blue-700" : "text-gray-900"} rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500`} aria-current={router.pathname === "/services" ? "page" : undefined}>Servicios</button>
              </li>
              <li>
              <button onClick={navigateToCotizacion} className={`block py-2 px-3 ${router.pathname === "/services" ? "text-white bg-blue-700" : "text-gray-900"} rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500`} aria-current={router.pathname === "/services" ? "page" : undefined}>Cotización</button>
              </li>
              <li>
              <button onClick={navigateToContact} className={`block py-2 px-3 ${router.pathname === "/services" ? "text-white bg-blue-700" : "text-gray-900"} rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500`} aria-current={router.pathname === "/services" ? "page" : undefined}>Contacto</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
