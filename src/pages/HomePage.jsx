import { useEffect, lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ScrollToTop from '../components/ScrollToTop';

// Lazy load heavy components
const AboutSection = lazy(() => import('../components/AboutSection'));
const PortfolioSection = lazy(() => import('../components/PortfolioSection'));
const PricingSection = lazy(() => import('../components/Pricing'));
const TestimonialSection = lazy(() => import('../components/TestimonialSection'));
const TopClientsSection = lazy(() => import('../components/TopClientsSection'));
const Footer = lazy(() => import('../components/ContactFooterSection'));

// Lazy load GSAP to reduce initial bundle size
let gsap, ScrollTrigger;
const loadGSAP = async () => {
  const gsapModule = await import('gsap');
  const scrollTriggerModule = await import('gsap/ScrollTrigger');
  gsap = gsapModule.gsap;
  ScrollTrigger = scrollTriggerModule.ScrollTrigger;
  gsap.registerPlugin(ScrollTrigger);
  return { gsap, ScrollTrigger };
};

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
        // Defer GSAP animations using Intersection Observer - only load when sections are visible
        const sectionRefs = document.querySelectorAll('section, .section');
        
        if (sectionRefs.length === 0) return;

        const initAnimations = async () => {
            // Load GSAP only when needed (lazy load)
            const { gsap: gsapLib, ScrollTrigger: ST } = await loadGSAP();
            
            // Use Intersection Observer to animate sections only when they're about to enter viewport
            sectionRefs.forEach((section) => {
                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                // Use transform and opacity only (GPU composited) to avoid forced reflow
                                gsapLib.fromTo(entry.target,
                                    {
                                        opacity: 0,
                                        y: 30
                                    },
                                    {
                                        opacity: 1,
                                        y: 0,
                                        duration: 0.8,
                                        ease: "power2.out"
                                    }
                                );
                                observer.unobserve(entry.target);
                            }
                        });
                    },
                    { rootMargin: '100px', threshold: 0.1 }
                );
                observer.observe(section);
            });

            // Parallax effect for background elements (only if element exists)
            const parallaxElement = document.querySelector('.parallax-bg');
            if (parallaxElement) {
                gsapLib.to('.parallax-bg', {
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

        // Initialize animations after page is interactive (not blocking main thread)
        const timer = setTimeout(initAnimations, 2000);

        return () => {
            clearTimeout(timer);
            // Cleanup ScrollTrigger if it was loaded
            if (typeof ScrollTrigger !== 'undefined' && ScrollTrigger && ScrollTrigger.getAll) {
                try {
                    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
                } catch (e) {
                    // Silently fail if ScrollTrigger is not fully initialized
                }
            }
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
                    <Suspense fallback={<div className="min-h-screen bg-black" />}>
                        <AboutSection id="about" />
                        <PortfolioSection id="portfolio" />
                        <PricingSection id="pricing" />
                        <TestimonialSection id="testimonials" />
                        <Footer id="contact" />
                    </Suspense>
                </main>
                <ScrollToTop />
            </div>

            {/* Removed heavy floating particle overlay for performance */}
        </div>
    );
};

export default HomePage;
