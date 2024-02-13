import React from "react";

const Menu: React.FC = () => {
  return (
    <section className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Tarjeta 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
          <img src="https://via.placeholder.com/300" alt="Placeholder" className="w-full h-40 object-cover rounded-t-lg" />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Tarjeta 1</h3>
            <p className="text-gray-600">Descripción de la tarjeta 1.</p>
          </div>
        </div>
        
        {/* Tarjeta 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
          <img src="https://via.placeholder.com/300" alt="Placeholder" className="w-full h-40 object-cover rounded-t-lg" />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Tarjeta 2</h3>
            <p className="text-gray-600">Descripción de la tarjeta 2.</p>
          </div>
        </div>

        {/* Tarjeta 3 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
          <img src="https://via.placeholder.com/300" alt="Placeholder" className="w-full h-40 object-cover rounded-t-lg" />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Tarjeta 3</h3>
            <p className="text-gray-600">Descripción de la tarjeta 3.</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
          <img src="https://via.placeholder.com/300" alt="Placeholder" className="w-full h-40 object-cover rounded-t-lg" />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Tarjeta 3</h3>
            <p className="text-gray-600">Descripción de la tarjeta 3.</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
          <img src="https://via.placeholder.com/300" alt="Placeholder" className="w-full h-40 object-cover rounded-t-lg" />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Tarjeta 3</h3>
            <p className="text-gray-600">Descripción de la tarjeta 3.</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
          <img src="https://via.placeholder.com/300" alt="Placeholder" className="w-full h-40 object-cover rounded-t-lg" />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Tarjeta 3</h3>
            <p className="text-gray-600">Descripción de la tarjeta 3.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
