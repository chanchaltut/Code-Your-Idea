import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { seoBlogArticles } from '../data/seoBlogArticles';

const PlainBlogPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    
    // Get unique categories
    const categories = ['All', ...new Set(seoBlogArticles.map(article => article.category))];
    
    // Filter articles by category
    const filteredArticles = selectedCategory === 'All' 
        ? seoBlogArticles 
        : seoBlogArticles.filter(article => article.category === selectedCategory);

    // Update page title for SEO
    useEffect(() => {
        document.title = 'Blog — Web & App Development Insights | Code Your Idea';
    }, []);

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Background matching HomePage */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-futuristic-cyan-500/10 via-transparent to-transparent"></div>
            </div>

            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <div className="relative z-10 pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 mb-6">
                            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-purple-400"></div>
                            <span className="text-purple-400 text-sm font-semibold uppercase tracking-wider">
                                Knowledge Hub
                            </span>
                            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent via-purple-400 to-purple-400"></div>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
                            Web & App<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-purple-400">
                                Answers
                            </span>
                            <br />
                            Worth Reading
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                            Every article answers a real question — not a made-up one. Expert insights on website and app development for businesses.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
                            <span className="flex items-center gap-2">
                                <span className="text-white font-semibold">{seoBlogArticles.length}</span> Articles
                            </span>
                            <span className="text-gray-600">•</span>
                            <span className="flex items-center gap-2">
                                <span className="text-white font-semibold">SEO + AEO</span> Optimised
                            </span>
                            <span className="text-gray-600">•</span>
                            <span className="flex items-center gap-2">
                                <span className="text-white font-semibold">2025</span> Edition
                            </span>
                        </div>
                    </div>

                    {/* Filter Bar */}
                    <div className="flex flex-wrap gap-3 justify-center mb-16">
                        {categories.map((category) => {
                            const isActive = selectedCategory === category;
                            const isAccent = category === 'Cost & Pricing';
                            return (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                                        isActive
                                            ? isAccent
                                                ? 'bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg shadow-purple-500/30'
                                                : 'bg-white text-black shadow-lg'
                                            : isAccent
                                                ? 'border-2 border-purple-500/50 text-purple-400 hover:border-purple-400 hover:text-purple-300'
                                                : 'border border-white/20 text-gray-400 hover:border-white/40 hover:text-white'
                                    }`}
                                >
                                    {category}
                                </button>
                            );
                        })}
                    </div>

                    {/* Blog Grid - 2 rows x 3 columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {filteredArticles.map((article, index) => {
                            const isFeatured = article.featured;
                            return (
                                <Link
                                    key={article.id}
                                    to={`/blog/${article.slug}`}
                                    className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10 ${
                                        isFeatured ? 'md:col-span-2 lg:col-span-2' : ''
                                    }`}
                                >
                                    {/* Featured Badge */}
                                    {isFeatured && (
                                        <div className="absolute top-4 right-4">
                                            <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-purple-500 text-white text-xs font-bold rounded-full shadow-lg">
                                                ★ Featured
                                            </span>
                                        </div>
                                    )}

                                    {/* Card Number */}
                                    <div className="mb-4">
                                        <span className="text-6xl lg:text-7xl font-black text-white/5 group-hover:text-purple-500/10 transition-colors duration-300 leading-none">
                                            {article.cardNum}
                                        </span>
                                    </div>

                                    {/* Category Tag */}
                                    <div className="mb-4">
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                                            isFeatured
                                                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                                                : 'bg-white/10 text-gray-400 border border-white/20'
                                        }`}>
                                            {article.category}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h2 className="text-xl lg:text-2xl font-bold text-white mb-4 leading-tight group-hover:text-purple-300 transition-colors duration-300">
                                        {article.title}
                                    </h2>

                                    {/* Divider */}
                                    <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4 group-hover:via-purple-500/30 transition-all duration-300"></div>

                                    {/* Excerpt */}
                                    <p className="text-gray-400 text-sm lg:text-base leading-relaxed mb-6 line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
                                        {article.excerpt}
                                    </p>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                                        <span className="text-xs text-gray-500 uppercase tracking-wider">
                                            {article.readTime}
                                        </span>
                                        <span className="text-purple-400 text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                                            Read Article
                                            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                                        </span>
                                    </div>

                                    {/* Hover Glow Effect */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:to-transparent transition-all duration-300 pointer-events-none"></div>
                                </Link>
                            );
                        })}
                    </div>

                    {/* CTA Section */}
                    <div className="text-center bg-gradient-to-r from-purple-500/10 via-purple-400/10 to-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 lg:p-12">
                        <p className="text-2xl lg:text-3xl font-bold text-white mb-4 italic">
                            "Every article answers a real question — not a made-up one."
                        </p>
                        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                            Get the same expertise and strategies we write about applied to your website. Let's build something amazing together.
                        </p>
                        <Link
                            to="/#contact"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40"
                        >
                            Talk to Our Team
                            <span className="text-xl">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlainBlogPage;
