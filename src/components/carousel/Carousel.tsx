import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface CarouselProps {
    images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    const goToNextSlide = useCallback(() => {
        const newIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(newIndex);
    }, [currentIndex, images.length]);

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

            // Calcula el punto en el que el carousel debe comenzar a desaparecer
            // Puedes ajustar este valor según tus preferencias
            const bottomThreshold = window.innerHeight / 3; // Por ejemplo, desaparece cuando el 50% de la ventana haya pasado

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
    }, [currentIndex, images.length, goToNextSlide]);

    return (
        <div id="gallery" className="relative w-full max-w-screen-lg mx-auto" data-carousel="slide">
            <motion.div
                className="relative h-56 overflow-hidden rounded-lg md:h-96"
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
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full rounded-lg object-cover"
                        />


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
