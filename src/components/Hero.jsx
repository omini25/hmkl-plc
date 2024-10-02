import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import hero1 from '../assets/images/hero/hero1.jpeg';
import hero2 from '../assets/images/hero/hero2.jpeg';

export const Hero = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        hero1,
        hero2,
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className="relative pt-5">
            <div className="max-w-screen-xl mx-auto rounded-lg overflow-hidden border-4 border-fuchsia-600 relative">
                {/* Previous Image (Left) */}
                {currentImage > 0 && (
                    <img
                        src={images[currentImage - 1]}
                        alt="Previous Slide"
                        className="w-full h-96 object-cover absolute top-0 left-0 transform -translate-x-full transition-transform duration-500 ease-in-out z-10"
                        style={{transition: 'transform 0.5s ease-in-out'}}
                    />
                )}

                {/* Current Image (Center) */}
                <img
                    src={images[currentImage]}
                    alt="Hero Banner"
                    className="w-full h-96 object-cover transform transition-transform duration-500 ease-in-out"
                    style={{transition: 'transform 0.5s ease-in-out'}}
                />

                {/* Next Image (Right) */}
                {currentImage < images.length - 1 && (
                    <img
                        src={images[(currentImage + 1) % images.length]}
                        alt="Next Slide"
                        className="w-full h-96 object-cover absolute top-0 left-0 transform translate-x-full transition-transform duration-500 ease-in-out z-10"
                        style={{transition: 'transform 0.5s ease-in-out'}}
                    />
                )}

                <div className="absolute bottom-8 left-8 bg-white p-4 rounded-lg max-w-md">
                    <h2 className="text-2xl font-bold mb-2 text-black">Haldane McCall Plc</h2>
                    <p className="mb-4">
                        A leading real estate and hospitality group operating in emerging markets across Africa, and owner of the popular Suru Express hotel brand.
                    </p>
                    <button className="bg-red-600 text-white px-4 py-2 rounded flex items-center">
                        Find out more <ArrowRight className="ml-2"/>
                    </button>
                </div>
            </div>
        </section>
    );
};