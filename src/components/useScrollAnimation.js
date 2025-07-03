import { useEffect, useRef } from 'react';

/**
 * Custom hook to apply a fade-in animation to elements as they scroll into view.
 * Uses the IntersectionObserver API for performance.
 * @returns {function} A ref callback function to be attached to the target element.
 */
const useScrollAnimation = () => {
    // Ref to store a list of all elements that will be animated
    const animatedElements = useRef([]);

    useEffect(() => {
        // Create an observer to watch for elements entering the viewport
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // If the element is intersecting (visible)
                    if (entry.isIntersecting) {
                        // Add the 'visible' class to trigger the animation
                        entry.target.classList.add('visible');
                        // Stop observing the element once it's visible
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1, // Trigger when 10% of the element is visible
                rootMargin: '0px 0px -50px 0px' // Start checking 50px before it enters the viewport
            }
        );

        // Observe each element that has been registered with the hook
        animatedElements.current.forEach((el) => {
            if (el) {
                // Initially add the 'fade-in' class to set the starting state (hidden)
                el.classList.add('fade-in');
                observer.observe(el);
            }
        });

        // Cleanup function to disconnect the observer when the component unmounts
        return () => observer.disconnect();
    }, []); // Empty dependency array ensures this effect runs only once

    // Return a callback ref function. This function will be called with the DOM element
    // when it's mounted, allowing us to add it to our list of animated elements.
    return (el) => {
        if (el && !animatedElements.current.includes(el)) {
            animatedElements.current.push(el);
        }
    };
};

export default useScrollAnimation;