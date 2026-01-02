import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';
import SplineErrorBoundary from './SplineErrorBoundary';

// Loading fallback component
const SplineLoadingFallback = () => (
    <div className="w-full h-full flex items-center justify-center">
        <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
            </div>
            <p className="text-white/60 text-sm">Loading 3D Model...</p>
        </div>
    </div>
);

// Error fallback component (matches the ErrorBoundary fallback)
const SplineErrorFallback = () => (
    <div className="w-full h-full flex items-center justify-center">
        <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <svg
                    className="w-16 h-16 text-white/40"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                </svg>
            </div>
            <p className="text-white/60 text-sm">3D Scene Unavailable</p>
            <p className="text-white/40 text-xs mt-2">Please check your connection</p>
        </div>
    </div>
);

const AboutSection = ({ id = "about" }) => {
    return (
        <section id={id} className="relative w-full min-h-screen bg-black text-white overflow-hidden flex flex-col items-center justify-center py-20">

            {/* 1. Background "Ghost" Text 
          Placed absolutely to sit behind the 3D element but in front of the background.
      */}
            <div className="absolute top-4 md:top-4 inset-x-0 z-0 flex flex-col items-center justify-center select-none group cursor-default">
                <h2 className="text-xl md:text-3xl lg:text-5xl font-bold text-[#1a1a1a] text-center tracking-tighter leading-none transition-colors duration-500 group-hover:text-white group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] group-hover:drop-shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                    WE HELP
                    <br />
                    BUSINESSES SUCCEED.
                </h2>
            </div>

            {/* 2. Main Grid Layout */}
            <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center mt-10 md:mt-0 stats-container">

                {/* Left Column Stats */}
                <div className="flex flex-col gap-20 md:gap-40 items-center md:items-end text-center md:text-right px-6 order-2 md:order-1 stat-container">
                    <StatBlock
                        number="25+"
                        label="INDUSTRY TECH STACK"
                    />
                    <StatBlock
                        number="10+"
                        label="HAPPY CUSTOMERS"
                    />
                </div>

                {/* Center Column: The Spline Robot 
            This takes up the middle space. The 'scene' prop handles the interaction.
        */}
                <div className="h-[400px] md:h-[600px] w-full flex items-center justify-center order-1 md:order-2 relative overflow-visible">
                    <SplineErrorBoundary fallback={<SplineErrorFallback />}>
                        <Suspense fallback={<SplineLoadingFallback />}>
                            <div className="absolute inset-0 scale-[0.95] origin-center w-[120%] left-1/2 -translate-x-1/2">
                                <Spline
                                    className="w-full h-full bg-transparent"
                                    scene="https://prod.spline.design/HQTbnMbGpevLOP8d/scene.splinecode"
                                />
                            </div>
                        </Suspense>
                    </SplineErrorBoundary>
                    {/* Overlay to hide any remaining watermark in bottom-right corner */}
                    <div className="absolute bottom-8 -right-8 w-48 h-12 bg-black z-20 pointer-events-none" />
                </div>

                {/* Right Column Stats */}
                <div className="flex flex-col gap-20 md:gap-40 items-center md:items-start text-center md:text-left px-6 order-3 md:order-3 stat-container">
                    <StatBlock
                        number="2024"
                        label="THIS COMPANY IS FOUNDED"
                        subLabel="ESTABLISHED"
                    />
                    <StatBlock
                        number="100%"
                        label="CUSTOMER SATISFACTION"
                    />
                </div>
            </div>

            {/* 3. Bottom Description Text */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 mt-16 text-center">
                <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
                    Founded in 2024 in Balangir, Odisha, India. CodeYourIdea was born from a simple vision, help businesses shine online. We bridge the digital gap by delivering sleek websites and apps with speed, precision, and top-tier quality. — we make it happen.
                </p>
            </div>

        </section>
    );
};

// Helper Component for the Stat Blocks to ensure consistent typography
const StatBlock = ({ number, label }) => (
    <div className="group cursor-default">
        <h3 className="text-5xl md:text-7xl font-bold text-[#1a1a1a] group-hover:text-white transition-colors duration-500 mb-2">
            {number}
        </h3>
        <p className="text-[#333] group-hover:text-gray-400 font-bold tracking-widest text-sm md:text-lg uppercase transition-colors duration-500">
            {label}
        </p>
    </div>
);

export default AboutSection;