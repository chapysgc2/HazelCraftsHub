import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import imagen1 from "../../../public/images/gemini.png";
import imagen2 from "../../../public/images/openia.jpg";
import imagen3 from "../../../public/images/setup.jpg";
import imagen4 from "../../../public/images/background.png";

const images = [
    { src: imagen1, description: 'Potenciado por Gemini' },
    { src: imagen2, description: 'APIs de OpenIA de primera clase' },
    { src: imagen3, description: 'Instalaciones de calidad superior' },
    { src: imagen4, description: 'Equipo altamente confiable' },
];


const Carousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    const goToNextSlide = useCallback(() => {
        const newIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(newIndex);
    }, [currentIndex]);


    const goToPrevSlide = () => {
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        const handleScroll = () => {
            const carouselSection = document.getElementById('gallery');
            if (!carouselSection) return;

            const sectionTop = carouselSection.offsetTop;
            const sectionHeight = carouselSection.offsetHeight;
            const sectionBottom = sectionTop + sectionHeight;

            const bottomThreshold = window.innerHeight / 3;

            const isPassedCarousel = window.pageYOffset + bottomThreshold > sectionBottom;
            setIsVisible(!isPassedCarousel);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const intervalId = setInterval(goToNextSlide, 3000);
        return () => clearInterval(intervalId);
    }, [currentIndex, goToNextSlide]);

    return (
        <div id="gallery" className="relative w-full max-w-screen-lg mx-auto" data-carousel="slide">

            <h1 className="text-4xl font-italic mb-4" style={{ wordWrap: "break-word" }}>
                Descubre nuestras tecnologias
            </h1>

            {/* Agregar el className isVisible para controlar la visibilidad */}
            <motion.div
                className={`relative h-56 overflow-hidden rounded-lg md:h-96 ${isVisible ? "isVisible" : ""}`}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.5 }}
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute w-full h-full top-0 left-0 transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <Image
                            src={image.src}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full rounded-lg object-cover"
                        />

                        {/* Mostrar la descripción correspondiente a cada imagen */}
                        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2">{image.description}</div>
                    </div>
                ))}
            </motion.div>
            <motion.button
                type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none text-black"
                data-carousel-prev
                onClick={goToPrevSlide}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.5 }}
            >
                <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </motion.button>
            <motion.button
                type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none text-black"
                data-carousel-next
                onClick={goToNextSlide}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.5 }}
            >
                <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </motion.button>
        </div>
    );
};

export default Carousel;
