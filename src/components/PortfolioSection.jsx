import React from 'react';
import { motion } from "framer-motion";
import { ArrowRight, Wind, Zap, BookOpen, ChevronRight, GraduationCap, Home, Trees, Layout, Sparkles } from 'lucide-react';
import SplineErrorBoundary from './SplineErrorBoundary';
import analytics from "../utils/analytics";
import jeoBanner from "../assets/images/portfolio/Jeo-bg.avif";

const PortfolioSection = () => {

    const handleProjectClick = (title, url) => {
        if (analytics && analytics.trackPortfolioClick) {
            analytics.trackPortfolioClick(title);
        }
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <section id="portfolio" className="min-h-screen bg-black text-white px-4 py-16 md:px-8 font-sans selection:bg-purple-500 selection:text-white">
            {/* Header Section */}
            <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                    Our Portfolio
                </h2>
                <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                    Four major projects that demonstrate our ability to deliver results-driven solutions, blending expertise with genuine commitment.
                </p>
            </div>

            {/* The Bento Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 grid-rows-auto md:grid-rows-[350px_350px] gap-6">

                {/* 1. Top Left - Trails of Teak (The Cinematic Resort Experience) */}
                <motion.div
                    whileHover={{ y: -5 }}
                    onClick={() => handleProjectClick("Trails of Teak", "https://trails-of-teak.netlify.app/")}
                    className="md:col-span-4 relative group overflow-hidden rounded-[2rem] bg-neutral-900 border border-white/10 shadow-2xl cursor-pointer"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-green-900/20 z-0" />
                    <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center">
                        <Trees className="text-green-400 mb-4 opacity-50" size={40} />
                        <h3 className="text-2xl font-medium text-gray-200 mb-2">
                            The <span className="text-white font-bold border-b border-gray-600 pb-1">desired escape</span> with Trails of Teak
                        </h3>
                        <p className="text-xs text-gray-500 mt-4 mb-6 uppercase tracking-widest">
                            Luxury Hospitality • Booking Platform
                        </p>
                        <button className="bg-white text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors">
                            Explore Resort
                        </button>

                        <div className="absolute bottom-0 w-full h-32 opacity-40">
                            <div className="w-full h-full bg-gradient-to-t from-green-500/40 to-transparent blur-xl"></div>
                        </div>
                    </div>
                </motion.div>

                {/* 2. Top Middle - Rent Yaard (The Large Marketplace) */}
                <motion.div
                    whileHover={{ y: -5 }}
                    onClick={() => handleProjectClick("Rent Yaard", "https://www.rentyaard.com/")}
                    className="md:col-span-5 relative group overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 cursor-pointer"
                >
                    <div className="absolute top-6 right-6 w-10 h-10 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center z-20">
                        <Home className="text-white w-4 h-4" />
                    </div>

                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-white leading-[0.85] text-center mix-blend-overlay opacity-90 select-none mb-4 uppercase">
                            <span className="block -ml-10">RENTING</span>
                            <span className="block ml-10">SIMPLIFIED</span>
                        </h1>
                        <p className="text-white font-medium text-lg drop-shadow-md">Rent Yaard Marketplace</p>
                    </div>

                </motion.div>

                {/* 3. Right Column - Galaxy Tutorials (The Mobile Learning App UI) */}
                <div className="md:col-span-3 md:row-span-2 h-full min-h-[500px] relative bg-[#0f0f11] rounded-[2.5rem] border-[8px] border-[#1a1a1a] shadow-2xl overflow-hidden flex flex-col">
                    <div className="flex justify-between items-center p-6 pt-8">
                        <ChevronRight className="text-gray-400 w-5 h-5 rotate-180" />
                        <div className="w-10 h-1 bg-gray-800 rounded-full"></div>
                    </div>

                    <div className="px-6 flex-1 flex flex-col">
                        <div className="mb-6">
                            <h4 className="text-white font-semibold text-lg">Galaxy Tutorials</h4>
                            <p className="text-gray-500 text-sm">Video Lecture Series</p>
                        </div>

                        <div className="grid grid-cols-4 gap-2 mb-8">
                            <ControlBtn icon={BookOpen} label="Study" active />
                            <ControlBtn icon={Zap} label="Fast" />
                            <ControlBtn icon={GraduationCap} label="Exam" />
                            <ControlBtn icon={Wind} label="Flow" />
                        </div>

                        <div className="flex-1 flex items-center justify-center mb-8">
                            <div className="relative w-44 h-44 rounded-full border-[1px] border-gray-800 flex items-center justify-center bg-gradient-to-b from-purple-900/20 to-black shadow-[0_0_50px_rgba(168,85,247,0.15)]">
                                <div className="text-center z-10">
                                    <span className="block text-4xl font-bold text-white tracking-tighter">GALAXY</span>
                                    <span className="text-[10px] text-purple-400 font-bold tracking-widest uppercase">Tutorials</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-8 text-center">
                            <div className="bg-[#1c1c1e] rounded-xl p-3 border border-white/5">
                                <span className="text-gray-500 text-[10px] block mb-1">Lectures</span>
                                <span className="text-white font-medium text-sm">500+</span>
                            </div>
                            <div className="bg-[#1c1c1e] rounded-xl p-3 border border-white/5">
                                <span className="text-gray-500 text-[10px] block mb-1">Students</span>
                                <span className="text-white font-medium text-sm">12K+</span>
                            </div>
                        </div>

                        <div
                            onClick={() => handleProjectClick("Galaxy Tutorials", "#")}
                            className="bg-indigo-600 rounded-xl p-4 flex justify-center items-center mb-6 cursor-pointer hover:bg-indigo-500 transition-colors"
                        >
                            <span className="text-white text-sm font-bold uppercase tracking-widest">Open App</span>
                        </div>
                    </div>
                </div>

                {/* 4. Bottom Left - Jeo Group (The High-Performance Teaser) */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    onClick={() => handleProjectClick("Jeo Group", "https://jeo-official-project.netlify.app/")}
                    className="md:col-span-5 relative overflow-hidden rounded-[2rem] bg-black cursor-pointer group"
                >
                    <img
                        src={jeoBanner}
                        alt="Abstract Fluid"
                        className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent"></div>

                    <div className="absolute bottom-8 left-0 right-0 px-8 flex justify-between items-end">
                        <div className="flex flex-col">
                            <h3 className="text-2xl font-bold text-white max-w-[200px] leading-tight mb-2">
                                Crafting High Performance
                            </h3>
                            <span className="ml-4 text-purple-300 text-sm font-bold tracking-wider uppercase">Jeo Group Platform</span>
                        </div>
                        <div className="flex gap-8 text-xs font-bold tracking-widest text-white/60">
                            <span>REACT</span>
                            <span>NODE.JS</span>
                        </div>
                    </div>
                </motion.div>

                {/* 5. Bottom Center - Prompty (AI Prompt Generator App) */}
                <motion.div 
                    whileHover={{ scale: 1.02 }}
                    onClick={() => handleProjectClick("Prompty", "https://play.google.com/store/apps/details?id=com.prompty.app")}
                    className="md:col-span-4 relative overflow-hidden rounded-[2rem] bg-white text-black p-2 flex flex-col items-center justify-center cursor-pointer"
                >
                    {/* Header */}
                    <div className="w-full flex justify-between px-4 py-2 absolute top-0 text-[10px] font-bold text-gray-400 uppercase tracking-wide">
                        <span>AI TOOL</span>
                        <div className="flex gap-2 text-purple-600">
                            <Sparkles size={12} />
                            <span>Mobile App</span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="text-center mt-4">
                        <span className="text-purple-600 text-[10px] font-black uppercase mb-2 block tracking-tighter">
                            Trendy Image Prompts
                        </span>
                        <h2 className="text-4xl font-bold tracking-tighter mb-4 text-black">Prompty</h2>
                        <p className="text-[10px] text-gray-500 max-w-[200px] mx-auto mb-6 leading-tight">
                            Unlock your creativity with ready-to-use, trending prompts for any AI image generator.
                        </p>
                        <button className="bg-black text-white px-6 py-2 rounded-lg text-xs font-bold shadow-lg flex items-center gap-2 mx-auto hover:bg-neutral-800 transition-colors">
                            Get on Play Store
                        </button>
                    </div>

                    {/* Background Glow - Adjusted to Purple/Pink for "Creative AI" vibe */}
                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-200 rounded-full blur-[80px] opacity-50 pointer-events-none"></div>
                    <div className="absolute -top-20 -left-20 w-64 h-64 bg-pink-200 rounded-full blur-[80px] opacity-40 pointer-events-none"></div>
                </motion.div>
            </div>

            {/* Footer CTA Button */}
            <div className="flex justify-center mt-16">
                <button className="group bg-white text-black pl-8 pr-2 py-2 rounded-full flex items-center gap-4 text-lg font-bold transition-all transform duration-700 hover:translate-x-4">
                    <a
                        href="https://wa.me/916370510539"
                        target="_blank"
                        rel="noreferrer"
                        className="text-black bold hover:text-black focus:text-black active:text-black"
                    >
                        Start Your Project
                    </a>
                    <span className="bg-black text-white p-2 rounded-full ">
                        <ArrowRight className="w-5 h-5" />
                    </span>
                </button>
            </div>
        </section>
    );
};

const ControlBtn = ({ icon: Icon, label, active = false }) => (
    <div className={`flex flex-col items-center justify-center p-3 rounded-2xl cursor-pointer transition-all ${active ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/50' : 'bg-[#1c1c1e] text-gray-400 hover:bg-[#2c2c2e]'}`}>
        <Icon className="w-4 h-4 mb-2" />
        <span className="text-[10px] font-medium">{label}</span>
    </div>
);

export default PortfolioSection;