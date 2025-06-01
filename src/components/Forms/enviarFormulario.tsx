import React, { useState } from 'react';
import ContactLinks from '../ContactLinks/ContactLinks';

const EnviarFormulario: React.FC = () => {
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [proyecto, setProyecto] = useState('');
    const [cotizacionEnviada, setCotizacionEnviada] = useState(false);

    const handleSubmit = async () => {
        try {
            // Simular el envío del formulario (aquí deberías enviarlo al servidor)
            // Puedes habilitar el código real para enviar el correo si estás en el servidor
            // Si estás en el cliente, muestra un mensaje de éxito simulado
            // const enviarCorreoCotizacion = require('../../api/enviarCorreoCotizacion').default;
            // await enviarCorreoCotizacion({ nombre, apellidos, email, telefono, proyecto });
            setCotizacionEnviada(true); // Actualizar el estado para mostrar el mensaje de éxito
        } catch (error) {
            console.error('Error al enviar la cotización:', error);
        }
    };

    return (
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="mb-8 w-96 rounded-lg bg-white p-8 shadow-lg">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <h2 className="mb-2 text-xl font-semibold">
              ¿Listo para dar vida a tu visión?
            </h2>
            <p className="mb-4 text-sm text-gray-800">
              Nuestro equipo de innovadores tecnológicos está aquí para
              convertir tus ideas en una realidad tangible. Te ofrecemos la
              experiencia y la pasión necesarias para hacer despegar tu
              proyecto, además de ayudarte a explorar nuevas perspectivas que
              podrían transformar por completo tu enfoque. ¡Déjanos ser tu
              aliado en esta emocionante aventura digital!
            </p>
            <h2 className="mb-2 text-xl font-semibold">Contactanos</h2>

            <ContactLinks />
            <br />
          </div>

          <h2 className="mb-2 text-xl font-semibold">O bien</h2>

          <div className="w-96 rounded-lg bg-white p-8 shadow-lg">
            {!cotizacionEnviada ? (
              <>
                <h3 className="mb-4 text-lg font-bold">Solicitar Cotización</h3>
                <div className="mb-4">
                  <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Nombre"
                    className="w-full rounded-md border bg-gray-100 px-4 py-2 text-black focus:outline-none"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    value={apellidos}
                    onChange={(e) => setApellidos(e.target.value)}
                    placeholder="Apellidos"
                    className="w-full rounded-md border bg-gray-100 px-4 py-2 text-black focus:outline-none"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Correo electrónico"
                    className="w-full rounded-md border bg-gray-100 px-4 py-2 text-black focus:outline-none"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="tel"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    placeholder="Número de celular"
                    className="w-full rounded-md border bg-gray-100 px-4 py-2 text-black focus:outline-none"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    value={proyecto}
                    onChange={(e) => setProyecto(e.target.value)}
                    placeholder="Cuéntanos sobre tu proyecto"
                    rows={6}
                    className="w-full rounded-md border bg-gray-100 px-4 py-2 text-black focus:outline-none"
                  />
                </div>
                <button
                  onClick={() => {
                    handleSubmit().catch((error) => {
                      console.error("Error al enviar la cotización:", error);
                    });
                  }}
                  className="mt-4 w-full rounded-md bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600 focus:outline-none"
                >
                  Enviar
                </button>
              </>
            ) : (
              <div className="text-center">
                <p className="font-bold text-green-500">
                  ¡Cotización enviada con éxito!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
};

export default EnviarFormulario;
