/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useCallback } from 'react';

interface CarouselProps {
    images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Función para avanzar al siguiente slide
    const goToNextSlide = useCallback(() => {
        const newIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(newIndex);
    }, [currentIndex, images.length]);

    // Función para retroceder al slide anterior
    const goToPrevSlide = () => {
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(newIndex);
    };

    // Efecto para cambiar automáticamente de slide cada 5 segundos
    useEffect(() => {
        const intervalId = setInterval(goToNextSlide, 3000);
        return () => clearInterval(intervalId);
    }, [currentIndex, images.length, goToNextSlide]); // Se ejecuta cuando currentIndex, images.length o goToNextSlide cambian

    return (
        <div id="gallery" className="relative w-full max-w-screen-lg mx-auto" data-carousel="slide">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
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
            </div>
            <button
                type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none text-black"
                data-carousel-prev
                onClick={goToPrevSlide}
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
            </button>
            <button
                type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none text-black"
                data-carousel-next
                onClick={goToNextSlide}
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
            </button>
        </div>
    );
};

export default Carousel;
