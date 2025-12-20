import React from 'react';
import Spline from '@splinetool/react-spline';

const AboutSection = () => {
    return (
        <section className="relative w-full min-h-screen bg-black text-white overflow-hidden flex flex-col items-center justify-center py-20">

            {/* 1. Background "Ghost" Text 
          Placed absolutely to sit behind the 3D element but in front of the background.
      */}
            <div className="absolute top-4 md:top-4 inset-x-0 z-0 flex flex-col items-center justify-center select-none pointer-events-none">
                <h2 className="text-xl md:text-3xl lg:text-5xl font-bold text-[#1a1a1a] text-center tracking-tighter leading-none">
                    WE HELP
                    <br />
                    BUSINESSES SUCCEED.
                </h2>
            </div>

            {/* 2. Main Grid Layout */}
            <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center mt-10 md:mt-0">

                {/* Left Column Stats */}
                <div className="flex flex-col gap-20 md:gap-40 items-center md:items-end text-center md:text-right px-6 order-2 md:order-1">
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
                    <div className="absolute inset-0 scale-[1.05] origin-center w-[120%] left-1/2 -translate-x-1/2">
                        <Spline
                            className="w-full h-full bg-transparent"
                            scene="https://prod.spline.design/HQTbnMbGpevLOP8d/scene.splinecode"
                        />
                    </div>
                    {/* Overlay to hide any remaining watermark in bottom-right corner */}
                    <div className="absolute bottom-0 -right-8 w-48 h-12 bg-black z-20 pointer-events-none" />
                </div>

                {/* Right Column Stats */}
                <div className="flex flex-col gap-20 md:gap-40 items-center md:items-start text-center md:text-left px-6 order-3 md:order-3">
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