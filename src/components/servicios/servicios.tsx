import React from "react";
import Image from "next/image";
import GoogleGemini from "../../../public/images/gemini.png";
import APIsIA from "../../../public/images/openia.jpg";
import PotenciarNegocioIA from "../../../public/images/google-logo@logotyp.us.svg";
import CreacionSitiosWeb from "../../../public/images/react-logo@logotyp.us.svg";
import CreacionAplicacionesMoviles from "../../../public/images/movil.jpg";
import CreacionPortafoliosDigitales from "../../../public/images/portafolio.jpg";
import DesarrolloMenusDigitalesRestaurantes from "../../../public/images/movildigital.jpg";
import DesarrolloTiendasEnLinea from "../../../public/images/paginaweb.jpg";
import DisenoDesarrolloBlogs from "../../../public/images/blog.jpg";
import DisenoDesarrolloSistemasCRM from "../../../public/images/gemini.png";
import ConsultoriaAsesoramientoTecnologico from "../../../public/images/crm.jpg";

const Servicios: React.FC = () => {
    return (
        <section className="container mx-auto py-8">
            <h2 className="text-4xl font-semibold mb-4">Nuestros servicios te ofrecen una aplicación impulsada por inteligencia artificial que te ayudará a mejorar tu vida diaria mediante un análisis detallado de tus rutinas.</h2>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {/* Google Gemini: El futuro de la IA conversacional */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 animate__animated animate__fadeInUp">
                    <Image src={GoogleGemini} alt="Google Gemini: El futuro de la IA conversacional" className="w-full h-40 object-cover rounded-t-lg" />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">Google Gemini</h3>
                        <p className="text-gray-600">Experimenta una nueva era de interacción con Google Gemini, un modelo de lenguaje avanzado que ofrece una experiencia conversacional natural y fluida. Descubre cómo puede transformar tu negocio.</p>
                        <a href="https://cloud.google.com/natural-language/gemini" className="text-blue-500 underline mt-2">Más información</a>
                    </div>
                </div>

                {/* APIs de IA: Abre un mundo de posibilidades */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 animate__animated animate__fadeInUp">
                    <Image src={APIsIA} alt="APIs de IA: Abre un mundo de posibilidades" className="w-full h-40 object-cover rounded-t-lg" />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">APIs de IA</h3>
                        <p className="text-gray-600">Integra las capacidades de inteligencia artificial en tus aplicaciones y sistemas con las APIs de IA de Google y Chat GPT4. Añade funcionalidades inteligentes, automatiza tareas y obtén información valiosa de tus datos.</p>
                        <a href="https://cloud.google.com/apis/library/ai" className="text-blue-500 underline mt-2">Más información</a>
                    </div>
                </div>
                {/* Potenciar tu negocio con IA */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
                    <Image src={PotenciarNegocioIA} alt="Potenciar tu negocio con IA" className="w-full h-40 object-cover rounded-t-lg" />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">Potenciar tu negocio con IA</h3>
                        <p className="text-gray-600">Descubre cómo la inteligencia artificial puede mejorar la eficiencia y la productividad de tu negocio, optimizando procesos y tomando decisiones basadas en datos.</p>
                    </div>
                </div>

                {/* Creación de Sitios Web para Negocios */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
                    <Image src={CreacionSitiosWeb} alt="Creación de Sitios Web para Negocios" className="w-full h-40 object-cover rounded-t-lg" />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">Creación de Sitios Web para Negocios</h3>
                        <p className="text-gray-600">Desarrollamos sitios web a medida para negocios de todos los tamaños y sectores, optimizados para una experiencia de usuario excelente y un alto rendimiento en buscadores.</p>
                    </div>
                </div>

                {/* Creación de Aplicaciones Móviles */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
                    <Image src={CreacionAplicacionesMoviles} alt="Creación de Aplicaciones Móviles" className="w-full h-40 object-cover rounded-t-lg" />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">Creación de Aplicaciones Móviles</h3>
                        <p className="text-gray-600">Diseñamos y desarrollamos aplicaciones móviles personalizadas para iOS y Android que satisfacen las necesidades específicas de tu empresa y proporcionan una experiencia de usuario excepcional.</p>
                    </div>
                </div>

                {/* Creación de Portafolios Digitales */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
                    <Image src={CreacionPortafoliosDigitales} alt="Creación de Portafolios Digitales" className="w-full h-40 object-cover rounded-t-lg" />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">Creación de Portafolios Digitales</h3>
                        <p className="text-gray-600">Diseñamos y desarrollamos portafolios digitales personalizados para creativos, artistas y profesionales independientes que desean mostrar su trabajo de manera impactante y profesional en línea.</p>
                    </div>
                </div>

                {/* Desarrollo de Menús Digitales para Restaurantes */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
                    <Image src={DesarrolloMenusDigitalesRestaurantes} alt="Desarrollo de Menús Digitales para Restaurantes" className="w-full h-40 object-cover rounded-t-lg" />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">Desarrollo de Menús Digitales para Restaurantes</h3>
                        <p className="text-gray-600">Creamos menús digitales interactivos y personalizados para restaurantes y establecimientos de hostelería, permitiendo a los clientes explorar el menú y realizar pedidos de manera conveniente desde sus dispositivos móviles.</p>
                    </div>
                </div>

                {/* Desarrollo de Tiendas en Línea */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
                    <Image src={DesarrolloTiendasEnLinea} alt="Desarrollo de Tiendas en Línea" className="w-full h-40 object-cover rounded-t-lg" />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">Desarrollo de Tiendas en Línea</h3>
                        <p className="text-gray-600">Creamos tiendas en línea personalizadas y fáciles de usar que te ayudan a vender tus productos y servicios en Internet. Desde pequeñas boutiques hasta grandes comercios electrónicos, tenemos la solución perfecta para tu negocio.</p>
                    </div>
                </div>

                {/* Diseño y Desarrollo de Blogs */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
                    <Image src={DisenoDesarrolloBlogs} alt="Diseño y Desarrollo de Blogs" className="w-full h-40 object-cover rounded-t-lg" />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">Diseño y Desarrollo de Blogs</h3>
                        <p className="text-gray-600">Creamos blogs atractivos y funcionales que te ayudan a compartir contenido relevante con tu audiencia y establecer tu presencia en línea como un experto en tu campo.</p>
                    </div>
                </div>

                {/* Diseño y Desarrollo de Sistemas CRM */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
                    <Image src={DisenoDesarrolloSistemasCRM} alt="Diseño y Desarrollo de Sistemas CRM" className="w-full h-40 object-cover rounded-t-lg" />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">Diseño y Desarrollo de Sistemas CRM</h3>
                        <p className="text-gray-600">Creamos sistemas CRM personalizados que te ayudan a gestionar las relaciones con tus clientes, automatizar tareas y mejorar la eficiencia de tu negocio.</p>
                    </div>
                </div>

                {/* Consultoría y Asesoramiento Tecnológico */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
                    <Image src={ConsultoriaAsesoramientoTecnologico} alt="Consultoría y Asesoramiento Tecnológico" className="w-full h-40 object-cover rounded-t-lg" />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">Consultoría y Asesoramiento Tecnológico</h3>
                        <p className="text-gray-600">Ofrecemos servicios de consultoría y asesoramiento tecnológico para ayudarte a identificar las soluciones adecuadas para tus necesidades comerciales y maximizar el retorno de tu inversión en tecnología.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Servicios;
