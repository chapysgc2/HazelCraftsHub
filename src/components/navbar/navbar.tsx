import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FiHome, FiSettings, FiDollarSign, FiMail } from 'react-icons/fi';

const Navbar: React.FC = () => {
  const router = useRouter();

  const navigateToHome = () => router.push('/home/home');
  const navigateToServices = () => router.push('/services/services');
  const navigateToCotizacion = () => router.push('/cotizacion/cotizacion');
  const navigateToContact = () => router.push('/contact/contact');

  return (
      <>
        {/* Navbar superior SIEMPRE VISIBLE con logo a la izquierda */}
        <nav className="bg-white fixed top-0 w-full z-50 shadow-md">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="flex items-center justify-between py-4">
              {/* Logo */}
              <Link href="/home/home" className="flex items-center space-x-3 rtl:space-x-reverse">
              <span className={`text-2xl font-semibold whitespace-nowrap ${router.pathname === "/home/home" ? "text-blue-700" : "text-black"}`}>
                Bite Soft
              </span>
              </Link>

              {/* Menú para pantallas grandes */}
              <div className="hidden md:flex md:items-center md:space-x-8">
                <button onClick={navigateToHome} className={`py-2 px-3 ${router.pathname.startsWith("/home") ? "text-blue-700" : "text-black"} hover:underline`}>
                  Inicio
                </button>
                <button onClick={navigateToServices} className={`py-2 px-3 ${router.pathname.startsWith("/services") ? "text-blue-700" : "text-black"} hover:underline`}>
                  Servicios
                </button>
                <button onClick={navigateToCotizacion} className={`py-2 px-3 ${router.pathname.startsWith("/cotizacion") ? "text-blue-700" : "text-black"} hover:underline`}>
                  Cotización
                </button>
                <button onClick={navigateToContact} className={`py-2 px-3 ${router.pathname.startsWith("/contact") ? "text-blue-700" : "text-black"} hover:underline`}>
                  Contacto
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Bottom navbar solo para pantallas pequeñas */}
        <nav className="md:hidden fixed bottom-0 w-full bg-white border-t border-gray-200 z-40">
          <div className="flex justify-around items-center py-2">
            <button onClick={navigateToHome} className={`flex flex-col items-center ${router.pathname.startsWith("/home") ? "text-blue-700" : "text-black"}`}>
              <FiHome className="w-6 h-6 mb-1" />
              <span className="text-xs">Inicio</span>
            </button>
            <button onClick={navigateToServices} className={`flex flex-col items-center ${router.pathname.startsWith("/services") ? "text-blue-700" : "text-black"}`}>
              <FiSettings className="w-6 h-6 mb-1" />
              <span className="text-xs">Servicios</span>
            </button>
            <button onClick={navigateToCotizacion} className={`flex flex-col items-center ${router.pathname.startsWith("/cotizacion") ? "text-blue-700" : "text-black"}`}>
              <FiDollarSign className="w-6 h-6 mb-1" />
              <span className="text-xs">Cotización</span>
            </button>
            <button onClick={navigateToContact} className={`flex flex-col items-center ${router.pathname.startsWith("/contact") ? "text-blue-700" : "text-black"}`}>
              <FiMail className="w-6 h-6 mb-1" />
              <span className="text-xs">Contacto</span>
            </button>
          </div>
        </nav>
      </>
  );
};

export default Navbar;
