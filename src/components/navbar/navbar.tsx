import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const router = useRouter();
  const [isVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  // Función para cerrar el menú deslizable


  const navigateToHome = async () => {
    await router.push('/home/home');
  };

  // Función para manejar la navegación a la página de servicios
  const navigateToServices = async () => {
    await router.push('/services/services');
  };

  const navigateToCotizacion = async () => {
    await router.push('/cotizacion/cotizacion');
  };

  const navigateToContact = async () => {
    await router.push('/contact/contact');
  };

  return (
    <nav className={`bg-white fixed top-0 w-full transition-all duration-300 ${isVisible ? "py-4" : "py-0"} z-50`}>
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}

          <Link href="/home/home"> {/* Utiliza el componente Link */}
            <a className="flex items-center space-x-3 rtl:space-x-reverse"> {/* Ahora es seguro utilizar <a> dentro de <Link> */}
              <span className={`text-2xl font-semibold whitespace-nowrap ${router.pathname === "/home/home" ? "text-blue-700" : "text-black"}`}>Bite Soft</span>
            </a>
          </Link>

          {/* Botón para dispositivos móviles */}
          <button onClick={toggleMobileMenu} className="md:hidden p-2 w-10 h-10 justify-center text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
            <span className="sr-only">Abrir menú</span>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>


          {/* Menú para dispositivos móviles */}
          <div className={`md:hidden absolute top-full right-0 w-1/2 bg-white border-t border-gray-200 border rounded-b-lg ${isMobileMenuOpen ? '' : 'hidden'} transform md:transform-none transition-transform duration-300 ease-in-out`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4">
              <li>
                <button onClick={navigateToHome} className={`block py-2 px-3 ${router.pathname.startsWith("/home") ? "text-blue-700" : "text-black"} rounded`} aria-current={router.pathname.startsWith("/home") ? "page" : undefined}>Inicio</button>
              </li>
              <li>
                <button onClick={navigateToServices} className={`block py-2 px-3 ${router.pathname.startsWith("/services") ? "text-blue-700" : "text-black"} rounded`} aria-current={router.pathname.startsWith("/services") ? "page" : undefined}>Servicios</button>
              </li>
              <li>
                <button onClick={navigateToCotizacion} className={`block py-2 px-3 ${router.pathname.startsWith("/cotizacion") ? "text-blue-700" : "text-black"} rounded`} aria-current={router.pathname.startsWith("/cotizacion") ? "page" : undefined}>Cotización</button>
              </li>
              <li>
                <button onClick={navigateToContact} className={`block py-2 px-3 ${router.pathname.startsWith("/contact") ? "text-blue-700" : "text-black"} rounded`} aria-current={router.pathname.startsWith("/contact") ? "page" : undefined}>Contacto</button>
              </li>
            </ul>
          </div>


          {/* Menú para pantallas grandes */}
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
              <li>
                <button onClick={navigateToHome} className={`block py-2 px-3 ${router.pathname.startsWith("/home") ? "text-blue-700" : "text-black"} rounded md:bg-transparent md:p-0 transition-transform transform hover:-translate-y-1`} aria-current={router.pathname.startsWith("/home") ? "page" : undefined}>Inicio</button>


              </li>

              <li>
                <button onClick={navigateToServices} className={`block py-2 px-3 ${router.pathname.startsWith("/services") ? "text-blue-700" : "text-black"} rounded md:bg-transparent md:p-0 transition-transform transform hover:-translate-y-1`} aria-current={router.pathname.startsWith("/services") ? "page" : undefined}>Servicios</button>
              </li>
              <li>
                <button onClick={navigateToCotizacion} className={`block py-2 px-3 ${router.pathname.startsWith("/cotizacion") ? "text-blue-700" : "text-black"} rounded md:bg-transparent md:p-0 transition-transform transform hover:-translate-y-1`} aria-current={router.pathname.startsWith("/cotizacion") ? "page" : undefined}>Cotización</button>
              </li>
              <li>
                <button onClick={navigateToContact} className={`block py-2 px-3 ${router.pathname.startsWith("/contact") ? "text-blue-700" : "text-black"} rounded md:bg-transparent md:p-0 transition-transform transform hover:-translate-y-1`} aria-current={router.pathname.startsWith("/contact") ? "page" : undefined}>Contacto</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

