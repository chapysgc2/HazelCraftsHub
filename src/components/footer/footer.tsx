import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Apple Store Online</h3>
            <ul className="text-sm text-gray-600">
              <li>Descubrir y comprar</li>
              <li>Tienda</li>
              <li>Mac</li>
              <li>iPad</li>
              <li>iPhone</li>
              <li>Watch</li>
              <li>AirPods</li>
              <li>TV y Casa</li>
              <li>AirTag</li>
              <li>Accesorios</li>
              <li>Tarjetas de regalo</li>
              <li>Apple Wallet</li>
              <li>Wallet</li>
              <li>Apple Pay</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Cuenta</h3>
            <ul className="text-sm text-gray-600">
              <li>Administrar tu Apple ID</li>
              <li>Cuenta del Apple Store</li>
              <li>iCloud.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Entretenimiento</h3>
            <ul className="text-sm text-gray-600">
              <li>Apple One</li>
              <li>Apple TV+</li>
              <li>Apple Music</li>
              <li>Apple Arcade</li>
              <li>Apple Fitness+</li>
              <li>Apple Podcasts</li>
              <li>Apple Books</li>
              <li>App Store</li>
              <li>Apple Store</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Para la empresa</h3>
            <ul className="text-sm text-gray-600">
              <li>Apple y la empresa</li>
              <li>Comprar para tu empresa</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 my-8"></div>
        <p className="text-sm text-gray-600">Más formas de comprar: Busca un Apple Store o un distribuidor cerca de ti. O llama al 001‑800‑692‑7753.</p>
        <p className="text-sm text-gray-600 mt-4">México</p>
        <p className="text-sm text-gray-600">Copyright © 2024 Apple Inc. Todos los derechos reservados.</p>
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
