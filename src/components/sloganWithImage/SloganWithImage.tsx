import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import background from '../../../public/images/background.png';

const SloganWithImage = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      const carouselSection = document.getElementById('gallery');
      if (!carouselSection) return;

      const sectionTop = carouselSection.offsetTop;
      const sectionHeight = carouselSection.offsetHeight;
      const sectionBottom = sectionTop + sectionHeight;

      // Calcula el punto en el que el carousel debe comenzar a desaparecer
      // Puedes ajustar este valor según tus preferencias
      const bottomThreshold = window.innerHeight / 1.2; // Por ejemplo, desaparece cuando el 33.33% de la ventana haya pasado

      const isPassedCarousel = currentScrollY + bottomThreshold > sectionBottom;
      setIsVisible(!isPassedCarousel);

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
      <motion.div
        className="max-w-md flex-shrink-0 mb-6 md:mb-0"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: isVisible ? 0 : 100, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-semibold mb-4">Potenciando tu negocio con herramientas digitales</h1>
        <p className="text-gray-600 mb-4">
          Somos una empresa dedicada a proporcionar soluciones digitales innovadoras para potenciar tu negocio.
          Utilizamos las últimas tecnologías y herramientas para ofrecerte resultados excepcionales.

        </p>
        <p className="text-gray-600">

          ¡Permítenos ayudarte a destacar en el mundo digital y alcanzar el éxito!
        </p>
      </motion.div>

      <motion.div
        className="w-full md:w-96 rounded-lg overflow-hidden"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={background}
          alt="Imagen relacionada con el negocio"
          width={800}
          height={300}
          objectFit="cover"
        />
      </motion.div>
    </div>
  );
};

export default SloganWithImage;
