import React, { useState, useEffect, useCallback } from 'react';

// Helper function to conditionally join class names
const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
};

const HeroSlider = () => {
    // Data for the slides
    const slides = [
        {
            title: "Welcome to The Harborview Hotel",
            subtitle: "Experience luxury and comfort with breathtaking ocean views",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        },
        {
            title: "Elegant Accommodations",
            subtitle: "Beautifully appointed rooms with modern amenities",
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
        },
        {
            title: "Exceptional Amenities",
            subtitle: "Pool, restaurant, and premium services for your comfort",
            background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
        }
    ];

    // State to track the current active slide index
    const [currentSlide, setCurrentSlide] = useState(0);

    // Function to advance to the next slide
    const nextSlide = useCallback(() => {
        setCurrentSlide(prev => (prev + 1) % slides.length);
    }, [slides.length]);

    // Function to go to the previous slide
    const prevSlide = () => {
        setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
    };

    // Effect to set up the automatic slideshow interval
    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 5000);
        // Cleanup the interval on component unmount
        return () => clearInterval(slideInterval);
    }, [nextSlide]);

    return (
        <section className="hero">
            <div className="hero-slider">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={classNames('slide', index === currentSlide && 'active')}
                        style={{ background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), ${slide.background}` }}
                    >
                        <div className="slide-content">
                            <h1>{slide.title}</h1>
                            <p>{slide.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="hero-nav">
                <button onClick={prevSlide} aria-label="Previous slide">←</button>
                <button onClick={nextSlide} aria-label="Next slide">→</button>
            </div>
        </section>
    );
};

export default HeroSlider;
