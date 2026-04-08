import React from 'react';
import { Link } from 'react-router-dom';

const SitemapPage = () => {
    return (
        <div className="relative min-h-screen bg-black text-white text-left">
            {/* Main Content */}
            <div className="relative z-10 min-h-screen py-20 px-6 md:px-12 lg:px-24">
                <div className="w-full">
                    {/* Back to Home Link */}
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-white hover:text-white transition-colors mb-12 group font-sans text-sm tracking-wide"
                    >
                        <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
                        Back to Home
                    </Link>

                    {/* Header */}
                    <header className="mb-16 pb-8">
                        <h1 className="text-6xl md:text-7xl font-bold mb-4 tracking-tight text-white font-sans">Sitemap</h1>
                        <p className="text-white text-sm font-sans tracking-wide">Last Updated: January 30, 2026</p>
                    </header>

                    {/* Sitemap Content */}
                    <div className="space-y-16">
                        {/* HOME Section */}
                        <section className="pb-12">
                            <h2 className="text-3xl font-bold text-white mb-8 font-sans tracking-tight">HOME</h2>
                            <ul className="space-y-3 text-white font-sans">
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-1">•</span>
                                    <Link to="/" className="hover:text-white transition-colors underline">Home</Link>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-1">•</span>
                                    <a href="/#about" className="hover:text-white transition-colors underline">About</a>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-1">•</span>
                                    <a href="/#services" className="hover:text-white transition-colors underline">Services</a>
                                    <ul className="ml-8 mt-2 space-y-2">
                                        <li className="flex items-start">
                                            <span className="text-white mr-4 mt-1">•</span>
                                            <span className="text-white">Website Development</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-white mr-4 mt-1">•</span>
                                            <span className="text-white">App Development</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-white mr-4 mt-1">•</span>
                                            <span className="text-white">Custom Solutions</span>
                                        </li>
                                    </ul>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-1">•</span>
                                    <a href="/#portfolio" className="hover:text-white transition-colors underline">Portfolio</a>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-1">•</span>
                                    <a href="/#pricing" className="hover:text-white transition-colors underline">Pricing</a>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-1">•</span>
                                    <a href="/#contact" className="hover:text-white transition-colors underline">Contact</a>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-1">•</span>
                                    <Link to="/blog" className="hover:text-white transition-colors underline">Blog</Link>
                                </li>
                            </ul>
                        </section>

                        {/* LEGAL Section */}
                        <section className="pb-12">
                            <h2 className="text-3xl font-bold text-white mb-8 font-sans tracking-tight">LEGAL</h2>
                            <ul className="space-y-3 text-white font-sans">
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-1">•</span>
                                    <Link to="/privacy-policy" className="hover:text-white transition-colors underline">Privacy Policy</Link>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-1">•</span>
                                    <Link to="/terms-of-service" className="hover:text-white transition-colors underline">Terms of Service</Link>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-1">•</span>
                                    <Link to="/sitemap" className="hover:text-white transition-colors underline">Sitemap</Link>
                                </li>
                            </ul>
                        </section>

                        {/* CONNECT Section */}
                        <section className="pb-12">
                            <h2 className="text-3xl font-bold text-white mb-8 font-sans tracking-tight">CONNECT</h2>
                            <ul className="space-y-3 text-white font-sans">
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-1">•</span>
                                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors underline">LinkedIn</a>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-1">•</span>
                                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors underline">Instagram</a>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-1">•</span>
                                    <a href="mailto:contact@codeyouridea.com" className="hover:text-white transition-colors underline">Email: contact@codeyouridea.com</a>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-1">•</span>
                                    <span>International: +91-993-896-5598 (WhatsApp available)</span>
                                </li>
                            </ul>
                        </section>

                        {/* Footer Info */}
                        <div className="pt-12 mt-12">
                            <h3 className="text-2xl font-bold text-white mb-4 font-sans">Code Your Idea</h3>
                            <p className="text-white mb-2 font-sans">Balangir, Odisha, India</p>
                            <p className="text-white text-sm font-sans">Serving Clients Globally | Transforming Ideas into Digital Reality Since 2024</p>
                        </div>

                        {/* Footer */}
                        <div className="text-left text-white text-sm pt-16 mt-16 font-sans">
                            <p className="text-white">© 2026 Code Your Idea. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SitemapPage;
