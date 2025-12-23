import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import analytics from "../utils/analytics";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isMouseActive, setIsMouseActive] = useState(true);
    let mouseTimeout;

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > window.innerHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        const handleMouseMove = () => {
            setIsMouseActive(true);
            clearTimeout(mouseTimeout);
            mouseTimeout = setTimeout(() => {
                setIsMouseActive(false);
            }, 2000);
        };

        window.addEventListener('scroll', toggleVisibility);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
            window.removeEventListener('mousemove', handleMouseMove);
            clearTimeout(mouseTimeout);
        };
    }, []);

    const scrollToTop = () => {
        analytics.trackButtonClick('scroll_to_top', 'global');
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <AnimatePresence>
            {isVisible && isMouseActive && (
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 p-3 rounded-full shadow-futuristic z-50 transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: "#ffffff" }}
                    aria-label="Scroll to top"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#000000"
                        className="h-6 w-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                    </svg>
                </motion.button>

            )}
        </AnimatePresence>
    );
};

export default ScrollToTop; 