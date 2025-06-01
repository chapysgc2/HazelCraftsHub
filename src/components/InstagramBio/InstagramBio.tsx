import React from 'react';
import Image from 'next/image';
import profileImage from '../../../public/images/profile.jpg.jpg'; // Asegúrate que existe la imagen
import { FaPhoneAlt, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';

const ProfessionalBio: React.FC = () => {
    return (
      <div className="mx-auto max-w-xl overflow-hidden rounded-xl bg-white p-6 shadow-lg">
        {/* Imagen de perfil */}
        <div className="mb-6 flex items-center justify-center">
          <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-blue-500">
            <Image
              src={profileImage}
              alt="Hazel Alain García López"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        {/* Datos personales */}
        <div className="mb-6 text-center">
          <h2 className="mb-1 text-2xl font-bold">Hazel Alain García López</h2>
          <p className="text-gray-600">iOS Software Engineer @ Grupo Salinas</p>
          <div className="mt-2 flex items-center justify-center gap-2 text-gray-500">
            <FaMapMarkerAlt size={14} />
            <span>CDMX, México</span>
          </div>
          <div className="mt-2 flex items-center justify-center gap-2 text-blue-500">
            <FaPhoneAlt size={14} />
            <a href="tel:+9541451671" className="hover:underline">
              +52 954 145 1671
            </a>
          </div>
          <div className="mt-2 flex items-center justify-center gap-2 text-blue-500">
            <FaPhoneAlt size={14} />
            <a href="tel:+525615291623" className="hover:underline">
              +52 5615 291 623
            </a>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="mb-6 flex justify-around text-center">
          <div>
            <p className="text-lg font-semibold">8</p>
            <p className="text-xs text-gray-500">Años de experiencia</p>
          </div>
          <div>
            <p className="text-lg font-semibold">+50</p>
            <p className="text-xs text-gray-500">Proyectos</p>
          </div>
          <div>
            <p className="text-lg font-semibold">7</p>
            <p className="text-xs text-gray-500">Empresas</p>
          </div>
        </div>

        {/* Experiencia laboral actualizada */}
        <div className="mb-6">
          <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-blue-700">
            <FaBriefcase /> Experiencia Laboral
          </h3>
          <div className="space-y-4">

            <div>
              <h4 className="font-semibold">CEO</h4>
              <p className="italic text-gray-500">Startup 2020</p>
              <p>Bite Soft, CDMX </p>
              <p className="mt-1 text-sm text-gray-500">
                CEO FULL
              </p>
            </div>
            <div>
              <h4 className="font-semibold">iOS Software Engineer</h4>
              <p className="italic text-gray-500">Sept. 2024 – Actualidad</p>
              <p>Grupo Salinas, CDMX (Presencial)</p>
              <p className="mt-1 text-sm text-gray-500">
                iOS Developer, Swift, Arquitectura VIPER
              </p>
            </div>
            <div>
              <h4 className="font-semibold">iOS Software Engineer</h4>
              <p className="italic text-gray-500">Sept. 2024 – Actualidad</p>
              <p>baz súperapp, CDMX (Presencial)</p>
              <p className="mt-1 text-sm text-gray-500">
                Desarrollo de iOS, Architecture VIPER
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Software Developer</h4>
              <p className="italic text-gray-500">Jul. 2023 – Oct. 2023 </p>
              <p>Prograpp, Chihuahua (Remoto)</p>
              <p className="mt-1 text-sm text-gray-500">
                T3 Stack: Node.js, Tailwind CSS
              </p>
            </div>
            <div>
              <h4 className="font-semibold">iOS Software Engineer</h4>
              <p className="italic text-gray-500">Ago. 2022 – Jul. 2023</p>
              <p>Banregio, Monterrey (Remoto)</p>
            </div>
            <div>
              <h4 className="font-semibold">Software Programmer</h4>
              <p className="italic text-gray-500">Jul. 2022 – Sept. 2022 </p>
              <p>Consultoría en Servicios Informáticos GSI S.C., CDMX</p>
            </div>
            <div>
              <h4 className="font-semibold">Desarrollador web</h4>
              <p className="italic text-gray-500">Jul. 2020 – Oct. 2020</p>
              <p>Colectividad Oaxaqueña, Oaxaca</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProfessionalBio;
