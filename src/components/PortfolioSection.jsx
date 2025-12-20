import React from 'react';
import { ArrowRight, Wind, Zap, Thermometer, ChevronRight, Menu, Power } from 'lucide-react';

const PortfolioSection = () => {
    return (
        <section id="portfolio" className="min-h-screen bg-black text-white px-4 py-16 md:px-8 font-sans selection:bg-purple-500 selection:text-white">
            {/* Header Section */}
            <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                    Our Portfolio
                </h2>
                <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                    We design every solution with our clients' success at heart, blending expertise with genuine commitment.
                </p>
            </div>

            {/* The Bento Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 grid-rows-auto md:grid-rows-[350px_350px] gap-6">

                {/* 1. Top Left - Dark Cinematic Card */}
                <div className="md:col-span-4 relative group overflow-hidden rounded-[2rem] bg-neutral-900 border border-white/10 shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-neutral-800 z-0" />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center">
                        <h3 className="text-2xl font-medium text-gray-200 mb-2">
                            See your <span className="text-white font-bold border-b border-gray-600 pb-1">desired future</span> with our cinematic software
                        </h3>
                        <p className="text-xs text-gray-500 mt-4 mb-6">
                            New dawn for indie filmmakers. An AI-powered suite that boosts image quality.
                        </p>
                        <button className="bg-white text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors">
                            Start Free Trial Now
                        </button>

                        {/* Abstract visual at bottom of card */}
                        <div className="absolute bottom-0 w-full h-32 opacity-80">
                            <div className="w-full h-full bg-gradient-to-t from-purple-900/60 to-transparent blur-xl"></div>
                            {/* Simulated Wave */}
                            <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#a855f7" fillOpacity="0.3" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* 2. Top Middle - The "Background" Gradient Card */}
                <div className="md:col-span-5 relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200">
                    {/* Top Menu Dot */}
                    <div className="absolute top-6 right-6 w-10 h-10 bg-black rounded-full flex items-center justify-center z-20">
                        <Menu className="text-white w-4 h-4" />
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center">
                        {/* Large Cropped Text Effect */}
                        <h1 className="text-7xl md:text-8xl font-bold tracking-tighter text-black leading-[0.85] text-center mix-blend-overlay opacity-80 select-none">
                            <span className="block -ml-20">ng Digital</span>
                            <span className="block ml-10">Experiences</span>
                        </h1>
                    </div>

                    {/* Soft Blur Overlay */}
                    <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
                </div>

                {/* 3. Right Column - The Phone UI (Spans 2 Rows) */}
                <div className="md:col-span-3 md:row-span-2 h-full min-h-[500px] relative bg-[#0f0f11] rounded-[2.5rem] border-[8px] border-[#1a1a1a] shadow-2xl overflow-hidden flex flex-col">
                    {/* Phone Header */}
                    <div className="flex justify-between items-center p-6 pt-8">
                        <div>
                            <ChevronRight className="text-gray-400 w-5 h-5 rotate-180" />
                        </div>
                        <div className="w-10 h-1 bg-gray-800 rounded-full"></div>
                    </div>

                    {/* Phone Content */}
                    <div className="px-6 flex-1 flex flex-col">
                        <div className="mb-6">
                            <h4 className="text-white font-semibold text-lg">Turbo Ac</h4>
                            <p className="text-gray-500 text-sm">Bedroom</p>
                        </div>

                        {/* Grid Controls */}
                        <div className="grid grid-cols-4 gap-2 mb-8">
                            <ControlBtn icon={Wind} label="Cool" active />
                            <ControlBtn icon={Thermometer} label="Heat" />
                            <ControlBtn icon={Wind} label="Wind" />
                            <ControlBtn icon={Zap} label="Auto" />
                        </div>

                        {/* Thermometer Dial */}
                        <div className="flex-1 flex items-center justify-center mb-8">
                            <div className="relative w-48 h-48 rounded-full border-[1px] border-gray-800 flex items-center justify-center bg-gradient-to-b from-gray-900 to-black shadow-[0_0_50px_rgba(59,130,246,0.15)]">
                                {/* Dial Indicator */}
                                <div className="absolute inset-0 rounded-full border-t-4 border-l-4 border-blue-600 rotate-45 transform origin-center opacity-80"></div>
                                <div className="text-center z-10">
                                    <span className="block text-5xl font-light text-white">18<span className="text-lg align-top">°C</span></span>
                                    <div className="w-2 h-2 bg-green-500 rounded-full mx-auto mt-2 shadow-[0_0_10px_rgba(34,197,94,1)]"></div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Stats */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="bg-[#1c1c1e] rounded-xl p-4">
                                <span className="text-gray-500 text-xs block mb-1">Temp Out</span>
                                <span className="text-white font-medium">30°C</span>
                            </div>
                            <div className="bg-[#1c1c1e] rounded-xl p-4">
                                <span className="text-gray-500 text-xs block mb-1">Wind Speed</span>
                                <span className="text-white font-medium">2 Grade</span>
                            </div>
                        </div>

                        {/* Bottom Toggles */}
                        <div className="bg-[#1c1c1e] rounded-xl p-4 flex justify-between items-center mb-6">
                            <div className="flex items-center gap-3">
                                <div className="bg-blue-600/20 p-2 rounded-lg">
                                    <Power className="w-4 h-4 text-blue-500" />
                                </div>
                                <div>
                                    <span className="block text-white text-sm font-medium">Cooler</span>
                                    <span className="block text-gray-500 text-xs">Off</span>
                                </div>
                            </div>
                            <div className="w-10 h-6 bg-gray-700 rounded-full relative">
                                <div className="w-4 h-4 bg-white rounded-full absolute top-1 left-1"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4. Bottom Left - Blue Abstract Gradient */}
                <div className="md:col-span-5 relative overflow-hidden rounded-[2rem] bg-black">
                    <img
                        src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop"
                        alt="Abstract Fluid"
                        className="absolute inset-0 w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent"></div>

                    <div className="absolute bottom-8 left-0 right-0 px-8 flex justify-between items-end">
                        <h3 className="text-2xl font-bold text-white max-w-[200px] leading-tight">
                            Transform your brand
                        </h3>
                        <div className="flex gap-8 text-xs font-bold tracking-widest text-white/60">
                            <span>WEB</span>
                            <span>PRINT</span>
                        </div>
                    </div>
                </div>

                {/* 5. Bottom Center - Glow UI Card */}
                <div className="md:col-span-4 relative overflow-hidden rounded-[2rem] bg-white text-black p-2 flex flex-col items-center justify-center">
                    {/* Mini Browser Header */}
                    <div className="w-full flex justify-between px-4 py-2 absolute top-0 text-[10px] font-bold text-gray-400 uppercase tracking-wide">
                        <span>#kit</span>
                        <div className="flex gap-2">
                            <span>Home</span>
                            <span>About</span>
                            <span>Contact</span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="text-center mt-4">
                        <span className="text-blue-500 text-xs font-bold uppercase mb-2 block">Hero Section</span>
                        <h2 className="text-6xl font-bold tracking-tighter mb-4 text-black">Glow</h2>
                        <p className="text-xs text-gray-500 max-w-[200px] mx-auto mb-6">
                            Where magic meets logic, beautifully crafted design resources.
                        </p>
                        <button className="bg-[#5b50ff] text-white px-6 py-2 rounded-lg text-xs font-bold shadow-lg shadow-blue-500/30">
                            Sign Up Now
                        </button>
                    </div>

                    {/* Background Glow Effect */}
                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyan-300 rounded-full blur-[80px] opacity-50 pointer-events-none"></div>
                    <div className="absolute -top-20 -left-20 w-64 h-64 bg-orange-200 rounded-full blur-[80px] opacity-50 pointer-events-none"></div>
                </div>
            </div>

            {/* Footer CTA Button */}
            <div className="flex justify-center mt-16">
                <button className="group bg-white text-black pl-8 pr-2 py-2 rounded-full flex items-center gap-4 text-lg font-bold hover:bg-gray-200 transition-all hover:scale-105">
                    Get Started
                    <span className="bg-black text-white p-2 rounded-full group-hover:bg-neutral-800 transition-colors">
                        <ArrowRight className="w-5 h-5" />
                    </span>
                </button>
            </div>
        </section>
    );
};

// Helper Component for Phone UI Controls
const ControlBtn = ({ icon: Icon, label, active = false }) => (
    <div className={`flex flex-col items-center justify-center p-3 rounded-2xl cursor-pointer transition-all ${active ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' : 'bg-[#1c1c1e] text-gray-400 hover:bg-[#2c2c2e]'}`}>
        <Icon className="w-5 h-5 mb-2" />
        <span className="text-[10px] font-medium">{label}</span>
    </div>
);

export default PortfolioSection;