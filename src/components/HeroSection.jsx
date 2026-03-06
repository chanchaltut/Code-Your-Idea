import React, { useRef, useEffect, useState } from "react";
import analytics from "../utils/analytics";
import { showQuoteModal } from "../utils/modalUtils";

const HeroSection = () => {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const ctaRef = useRef(null);
    const hasAnimatedRef = useRef(false);

    useEffect(() => {
        if (!heroRef.current || hasAnimatedRef.current) return;
        hasAnimatedRef.current = true; // Claim immediately so React Strict Mode double-mount doesn't run animation twice

        // Lazy load GSAP to avoid blocking initial render - delay to prioritize content
        const initAnimation = async () => {
            // Small delay to ensure content renders first
            await new Promise(resolve => setTimeout(resolve, 100));

            const { gsap } = await import('gsap');

            // Hero entrance animation (runs once even in React Strict Mode)
            const tl = gsap.timeline();

            tl.fromTo(heroRef.current,
                { opacity: 0, scale: 0.95 },
                { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
            )
                .fromTo(titleRef.current,
                    { opacity: 0, y: 50 },
                    { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
                    "-=0.5"
                )
                .fromTo(subtitleRef.current,
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
                    "-=0.6"
                )
                .fromTo(ctaRef.current,
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
                    "-=0.4"
                );
        };

        initAnimation();

        return () => { };
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20"
        >
            {/* Lightweight vertical gradient bars background */}
            <div className="absolute inset-0 -z-10">
                {/* Color wash (matches purple/blue/cyan palette) */}
                <div
                    className="absolute inset-0 opacity-90"
                    style={{
                        backgroundImage:
                            "linear-gradient(90deg, rgba(22,22,73,1) 0%, rgba(58,12,163,0.9) 15%, rgba(37,99,235,0.9) 45%, rgba(2,132,199,0.9) 70%, rgba(168,85,247,0.9) 90%)"
                    }}
                />
                {/* Vertical stripes mask using repeating overlay - cylindrical divider effect */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "linear-gradient(90deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.15) 76.5%, rgba(255,255,255,0.16) 77%, rgba(219,234,254,0.18) 77.5%, rgba(191,219,254,0.2) 78%, rgba(147,197,253,0.24) 78.5%, rgba(96,165,250,0.28) 79%, rgba(59,130,246,0.32) 79.5%, rgba(37,99,235,0.36) 80%, rgba(37,99,235,0.4) 80.5%, rgba(59,130,246,0.42) 81%, rgba(59,130,246,0.44) 81.5%, rgba(96,165,250,0.45) 82%, rgba(96,165,250,0.46) 82.5%, rgba(147,197,253,0.46) 83%, rgba(147,197,253,0.45) 83.5%, rgba(191,219,254,0.43) 84%, rgba(191,219,254,0.4) 84.5%, rgba(219,234,254,0.36) 85%, rgba(219,234,254,0.32) 85.5%, rgba(255,255,255,0.28) 86%, rgba(255,255,255,0.32) 86.5%, rgba(255,255,255,0.38) 87%, rgba(255,255,255,0.44) 87.5%, rgba(255,255,255,0.5) 88%, rgba(255,255,255,0.56) 88.5%, rgba(255,255,255,0.62) 89%, rgba(255,255,255,0.66) 89.5%, rgba(255,255,255,0.7) 90%, rgba(255,255,255,0.72) 90.5%, rgba(255,255,255,0.74) 91%, rgba(255,255,255,0.74) 91.5%, rgba(255,255,255,0.73) 92%, rgba(255,255,255,0.71) 92.5%, rgba(255,255,255,0.68) 93%, rgba(255,255,255,0.64) 93.5%, rgba(255,255,255,0.58) 94%, rgba(255,255,255,0.5) 94.5%, rgba(255,255,255,0.42) 95%, rgba(255,255,255,0.34) 95.5%, rgba(255,255,255,0.26) 96%, rgba(255,255,255,0.2) 96.5%, rgba(255,255,255,0.16) 97%, rgba(255,255,255,0.15) 97.5%, rgba(255,255,255,0.15) 99%, rgba(255,255,255,0.15) 100%)",
                        backgroundSize: "108px 100%",
                        mixBlendMode: "overlay",
                        opacity: 1
                    }}
                />
                {/* Top fade to black and overall vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.0),rgba(0,0,0,0.6))]" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 w-full">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <div ref={titleRef} className="mb-6">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-white text-left">
                                Where Ideas
                                <br />
                                Become Icons
                            </h1>
                        </div>
                        <div ref={subtitleRef} className="mb-10 max-w-2xl">
                            <p className="text-base sm:text-lg text-white/80 leading-relaxed text-left">
                                Every detail matters. That's why global thinkers and visionaries trust us to transform bold ideas into digital masterpieces.
                            </p>
                        </div>
                        <div ref={ctaRef} className="flex gap-4 items-center">
                            <button
                                onClick={() => {
                                    analytics.trackButtonClick('get_started', 'hero');
                                    showQuoteModal();
                                }}
                                className="px-6 sm:px-7 py-3 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-colors"
                            >
                                Get Started
                            </button>
                            <a
                                href="/#pricing"
                                className="px-6 sm:px-7 py-3 rounded-full border border-white text-white font-semibold transition-all duration-200 ease-in-out hover:bg-white/10 hover:backdrop-blur-sm hover:text-white focus:text-white active:text-white"
                            >
                                Our Pricing
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection; 