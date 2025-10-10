import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import LetsBuildSuccessSection from '../components/LetsBuildSuccessSection';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import StatsSection from '../components/StatsSection';
import ServicesSection from '../components/ServicesSection';
import PortfolioGallerySection from '../components/PortfolioGallerySection';
import ProcessSection from '../components/ProcessSection';
import TestimonialSection from '../components/TestimonialSection';
import TopClientsSection from '../components/TopClientsSection';
import ContactFooterSection from '../components/ContactFooterSection';
import ScrollToTop from '../components/ScrollToTop';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
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

            // Parallax effect for background elements
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
                    <StatsSection id="stats" />
                    <ServicesSection id="services" />
                    <PortfolioGallerySection id="portfolio" />
                    <ProcessSection id="process" />
                    <LetsBuildSuccessSection />
                    <TestimonialSection id="testimonials" />
                    <ContactFooterSection id="contact" />
                </main>
                <ScrollToTop />
            </div>

            {/* Removed heavy floating particle overlay for performance */}
        </div>
    );
};

export default HomePage;
