import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import PortfolioSection from '../components/PortfolioSection';
import PricingSection from '../components/Pricing';
import TestimonialSection from '../components/TestimonialSection';
import TopClientsSection from '../components/TopClientsSection';
import Footer from '../components/ContactFooterSection';
import ScrollToTop from '../components/ScrollToTop';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
    const location = useLocation();

    // Handle hash navigation when coming from other pages
    useEffect(() => {
        if (location.hash) {
            // Wait for page to render, then scroll to section
            const scrollToHash = (attempts = 0) => {
                const id = location.hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    // Add offset for fixed navbar
                    const yOffset = -80;
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                } else if (attempts < 10) {
                    // Retry if element not found yet
                    setTimeout(() => scrollToHash(attempts + 1), 100);
                }
            };
            const timer = setTimeout(() => scrollToHash(), 300);
            return () => clearTimeout(timer);
        }
    }, [location.hash]);

    useEffect(() => {
        // Initialize GSAP animations
        const initAnimations = () => {
            // Smooth reveal animations for sections
            gsap.utils.toArray('section, .section').forEach((section, index) => {
                gsap.fromTo(section,
                    {
                        opacity: 0,
                        y: 50,
                        scale: 0.95
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 80%",
                            end: "bottom 20%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });

            // Parallax effect for background elements (only if element exists)
            const parallaxElement = document.querySelector('.parallax-bg');
            if (parallaxElement) {
                gsap.to('.parallax-bg', {
                    yPercent: -50,
                    ease: "none",
                    scrollTrigger: {
                        trigger: "body",
                        start: "top top",
                        end: "bottom top",
                        scrub: true
                    }
                });
            }
        };

        // Wait for components to mount
        const timer = setTimeout(initAnimations, 100);

        return () => {
            clearTimeout(timer);
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Lightweight CSS Background */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-futuristic-cyan-500/10 via-transparent to-transparent"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10">
                <Navbar />
                <main className="relative">
                    <HeroSection />
                    <AboutSection id="about" />
                    <PortfolioSection id="portfolio" />
                    <PricingSection id="pricing" />
                    <TestimonialSection id="testimonials" />
                    <Footer id="contact" />
                </main>
                <ScrollToTop />
            </div>

            {/* Removed heavy floating particle overlay for performance */}
        </div>
    );
};

export default HomePage;
