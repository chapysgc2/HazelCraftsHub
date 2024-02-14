import React from 'react';
import Image from 'next/image'; // Importa Image de Next.js
import profileImage from '../../../public/images/profile.jpg'; // Importa la imagen local
import ContactLinks from 'hazel/components/ContactLinks/ContactLinks';
import { FaPhoneAlt } from 'react-icons/fa';

const InstagramBio: React.FC = () => {
    return (
        <div className="max-w-xl mx-auto rounded-xl overflow-hidden bg-white shadow-lg p-6">
            {/* Imagen de perfil */}
            <div className="flex items-center justify-center mb-6">
                <div className="relative w-40 h-40 rounded-full overflow-hidden">
                    <Image src={profileImage} alt="Imagen de perfil" layout="fill" objectFit="cover" />
                </div>
            </div>

            {/* Datos personales */}
            <div className="mb-6">
                <h2 className="font-semibold text-xl mb-2">Hazel Alain García López</h2>
                <p>Ingeniería en Computación.</p>
                <div className="flex items-center mt-4">
                    <div className="mr-20">
                        <p className="font-semibold">Años de estudio</p>
                        <p>4</p>
                    </div>
                    <div className="mr-20">
                        <p className="font-semibold">Proyectos terminados</p>
                        <p>+10</p>
                    </div>
                    <div>
                        <a href="tel:+9541451671" className="mr-4">
                            <FaPhoneAlt size={20} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Experiencia laboral */}
            {/* Experiencia laboral */}
            <div className="mb-6">
                <h3 className="font-semibold text-lg mb-2">Experiencia laboral</h3>
                <div className="mb-4">
                    <h4 className="font-semibold">Desarrollador de aplicaciones móviles</h4>
                    <p className="italic">Agosto 2023 – Actualmente</p>
                    <p>Grupo Salina -  Ciudad de México</p>
                </div>
                <div className="mb-4">
                    <h4 className="font-semibold">Desarrollador Web</h4>
                    <p className="italic">Julio 2023 – Septiembre 2023</p>
                    <p>Prograpp - Chihuahua</p>
                </div>
                <div className="mb-4">
                    <h4 className="font-semibold">Desarrollador de aplicaciones móviles</h4>
                    <p className="italic">Agosto 2022 - Julio 2023</p>
                    <p>Banregio - Monterrey</p>
                </div>
                <div className="mb-4">
                    <h4 className="font-semibold">Desarrollador de software</h4>
                    <p className="italic">Julio 2022 - Septiembre 2022</p>
                    <p>Consultoría en Servicios Informáticos GSI S.C. - Ciudad de México</p>
                </div>
                <div className="mb-4">
                    <h4 className="font-semibold">Desarrollador web</h4>
                    <p className="italic">Julio 2020 - Octubre 2020</p>

                    <p>Colectividad Oaxaqueña - Oaxaca</p>

                </div>
            </div>
            <ContactLinks />
        </div>

    );
};

export default InstagramBio;
