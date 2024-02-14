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
        if (typeof window === 'undefined') {
            // Si se está ejecutando en el servidor
            try {
                const enviarCorreoCotizacion = require('../../api/enviarCorreoCotizacion').default;
                await enviarCorreoCotizacion({ nombre, apellidos, email, telefono, proyecto });
                setCotizacionEnviada(true);
            } catch (error) {
                console.error('Error al enviar la cotización:', error);
            }
        } else {
            // Si se está ejecutando en el cliente
            console.warn('El envío de correo solo está disponible en el lado del servidor.');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col items-center">
                <div className="p-8 rounded-lg shadow-lg bg-white w-96 mb-8">
                    <h2 className="text-xl font-semibold mb-2">¿Listo para dar vida a tu visión?</h2>
                    <p className="text-gray-800 text-sm mb-4">Nuestro equipo de innovadores tecnológicos está aquí para convertir tus ideas en una realidad tangible. Te ofrecemos la experiencia y la pasión necesarias para hacer despegar tu proyecto, además de ayudarte a explorar nuevas perspectivas que podrían transformar por completo tu enfoque. ¡Déjanos ser tu aliado en esta emocionante aventura digital!</p>
                    <h2 className="text-xl font-semibold mb-2">Contactanos</h2>

                    <ContactLinks/>
                    <br />

                </div>

                <h2 className="text-xl font-semibold mb-2">O bien</h2>



                <div className="p-8 rounded-lg shadow-lg bg-white w-96">
                    {!cotizacionEnviada ? (
                        <>
                            <h3 className="text-lg font-bold mb-4">Solicitar Cotización</h3>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                    placeholder="Nombre"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none bg-gray-100 text-black"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    value={apellidos}
                                    onChange={(e) => setApellidos(e.target.value)}
                                    placeholder="Apellidos"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none bg-gray-100 text-black"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Correo electrónico"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none bg-gray-100 text-black"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="tel"
                                    value={telefono}
                                    onChange={(e) => setTelefono(e.target.value)}
                                    placeholder="Número de celular"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none bg-gray-100 text-black"
                                />
                            </div>
                            <div className="mb-4">
                                <textarea
                                    value={proyecto}
                                    onChange={(e) => setProyecto(e.target.value)}
                                    placeholder="Cuéntanos sobre tu proyecto"
                                    rows={6}
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none bg-gray-100 text-black"
                                />
                            </div>
                            <button
                                onClick={() => {
                                    handleSubmit().catch(error => {
                                        console.error('Error al enviar la cotización:', error);
                                    });
                                }}
                                className="mt-4 w-full bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none"
                            >
                                Enviar
                            </button>
                        </>
                    ) : (
                        <div className="text-center">
                            <p className="text-green-500 font-bold">¡Cotización enviada con éxito!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EnviarFormulario;
