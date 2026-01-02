import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';
import SplineErrorBoundary from './SplineErrorBoundary';

// Loading fallback component
const SplineLoadingFallback = () => (
    <div className="w-full h-full flex items-center justify-center">
        <div className="text-center">
            <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-2 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <div className="w-8 h-8 sm:w-12 sm:h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
            </div>
        </div>
    </div>
);

// Error fallback component
const SplineErrorFallback = () => (
    <div className="w-full h-full flex items-center justify-center">
        <div className="text-center">
            <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-2 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <svg className="w-8 h-8 sm:w-12 sm:h-12 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
            </div>
        </div>
    </div>
);

const AboutSection = ({ id = "about" }) => {
    return (
        <section id={id} className="relative w-full min-h-[50vh] md:min-h-screen bg-black text-white overflow-hidden flex flex-col items-center justify-center py-12 md:py-20">

            {/* 1. Main Headline - "The Eye Contact Text" 
                - Moved out of background z-0. 
                - Now z-10 and fully interactive.
                - Scales with Viewport Width (vw) to match the layout perfectly on all screens.
            */}
            <div className="relative z-10 w-full text-center px-4 mb-2 md:mb-8 group cursor-default">
                <h2 className="text-xl md:text-3xl lg:text-5xl font-black text-[#1a1a1a] text-center tracking-tighter leading-[0.85] transition-colors duration-700 group-hover:text-white">
                    WE HELP
                    <br />
                    BUSINESSES SUCCEED.
                </h2>
            </div>

            {/* 2. Main Grid Layout - Forced 3 columns everywhere */}
            <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-3 items-center px-2 md:px-0">

                {/* Left Column Stats */}
                <div className="flex flex-col gap-8 md:gap-40 items-end text-right px-20">
                    <StatBlock
                        number="25+"
                        label="INDUSTRY TECH STACKS USED"
                    />
                    <StatBlock
                        number="10+"
                        label="HAPPY CUSTOMERS ARE THERE"
                    />
                </div>

                {/* Center Column: The Spline Robot */}
                <div className="h-[180px] sm:h-[300px] md:h-[600px] w-full flex items-center justify-center relative overflow-visible">
                    <SplineErrorBoundary fallback={<SplineErrorFallback />}>
                        <Suspense fallback={<SplineLoadingFallback />}>
                            {/* Scaled container logic:
                                - scale-[0.6] on mobile to fit the tight column
                                - scale-110 on desktop for impact
                            */}
                            <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                                <div className="w-[100%] h-[100%] md:w-full md:h-full transform scale-[0.5] sm:scale-65 md:scale-95 origin-center">
                                    <Spline
                                        className="w-full h-full bg-transparent"
                                        scene="https://prod.spline.design/HQTbnMbGpevLOP8d/scene.splinecode"
                                    />
                                </div>
                            </div>
                        </Suspense>
                    </SplineErrorBoundary>

                    {/* Watermark Cover */}
                    <div className="absolute bottom-2 right-2 md:bottom-8 md:-right-8 w-20 h-6 md:w-48 md:h-12 bg-black z-20 pointer-events-none" />
                </div>

                {/* Right Column Stats */}
                <div className="flex flex-col gap-8 md:gap-40 items-start text-left px-20">
                    <StatBlock
                        number="2024"
                        label="THIS COMPANY IS FOUNDED"
                    />
                    <StatBlock
                        number="100%"
                        label="CUSTOMER SATISFACTION"
                    />
                </div>
            </div>

            {/* 3. Bottom Description Text */}
            <div className="relative z-10 max-w-[90%] md:max-w-4xl mx-auto px-2 md:px-6 mt-8 md:mt-16 text-center">
                <p className="text-gray-400 text-[10px] sm:text-xs md:text-base leading-relaxed font-light">
                    Founded in 2024 in Balangir, Odisha, India. CodeYourIdea was born from a simple vision, help businesses shine online. We bridge the digital gap by delivering sleek websites and apps with speed, precision, and top-tier quality. — we make it happen.
                </p>
            </div>

        </section>
    );
};

// Helper Component for the Stat Blocks with Fluid Typography
const StatBlock = ({ number, label, subLabel }) => (
    <div className="group cursor-default flex flex-col justify-center">
        {/* Responsive text sizes: small on mobile, large on desktop */}
        <h3 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-7xl font-bold text-[#1a1a1a] group-hover:text-white transition-colors duration-500 mb-0 md:mb-2 leading-none">
            {number}
        </h3>
        <p className="text-[#333] group-hover:text-gray-400 font-bold tracking-widest text-[0.5rem] sm:text-[0.6rem] md:text-sm lg:text-lg uppercase transition-colors duration-500 leading-tight">
            {label}
        </p>
        {subLabel && (
            <p className="text-[#333] group-hover:text-gray-500 text-[0.4rem] sm:text-[0.5rem] md:text-xs tracking-wider uppercase mt-1 transition-colors duration-500">
                {subLabel}
            </p>
        )}
    </div>
);

export default AboutSection;