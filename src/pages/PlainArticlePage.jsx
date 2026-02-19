import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { getSEOArticleBySlug, seoBlogArticles } from '../data/seoBlogArticles';

const PlainArticlePage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const article = getSEOArticleBySlug(slug);

    useEffect(() => {
        // Scroll to top when article loads
        window.scrollTo({ top: 0, behavior: 'smooth' });

        if (article) {
            // Update page title for SEO
            document.title = `${article.title} - Code Your Idea Blog`;
            
            // Update meta description
            let metaDescription = document.querySelector('meta[name="description"]');
            if (!metaDescription) {
                metaDescription = document.createElement('meta');
                metaDescription.setAttribute('name', 'description');
                document.head.appendChild(metaDescription);
            }
            metaDescription.setAttribute('content', article.metaDescription);

            // Add structured data for SEO (FAQ Schema)
            const structuredData = {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": {
                    "@type": "Question",
                    "name": article.content?.question || article.title,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": article.content?.answer || article.excerpt
                    }
                }
            };

            // Remove existing structured data if any
            const existingScript = document.querySelector('script[type="application/ld+json"][data-article]');
            if (existingScript) {
                existingScript.remove();
            }

            // Add new structured data
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.setAttribute('data-article', 'true');
            script.textContent = JSON.stringify(structuredData);
            document.head.appendChild(script);

            return () => {
                // Cleanup on unmount
                const scriptToRemove = document.querySelector('script[type="application/ld+json"][data-article]');
                if (scriptToRemove) {
                    scriptToRemove.remove();
                }
            };
        } else {
            // Article not found, redirect to blog
            navigate('/blog');
        }
    }, [article, slug, navigate]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    if (!article) {
        return (
            <div className="relative min-h-screen overflow-hidden">
                <div className="fixed inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
                </div>
                <div className="relative z-10 min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <div className="text-6xl mb-4">⏳</div>
                        <p className="text-white">Loading article...</p>
                    </div>
                </div>
            </div>
        );
    }

    // Get related articles (same category, excluding current)
    const relatedArticles = seoBlogArticles
        .filter(a => a.category === article.category && a.slug !== article.slug)
        .slice(0, 3);

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Background matching Blog Page */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-futuristic-cyan-500/10 via-transparent to-transparent"></div>
            </div>

            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <div className="relative z-10 pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back Button */}
                    <Link
                        to="/blog"
                        className="inline-flex items-center text-gray-400 hover:text-purple-400 mb-8 transition-colors duration-300 group"
                    >
                        <span className="mr-2 group-hover:-translate-x-1 transition-transform duration-300">←</span>
                        Back to Blog
                    </Link>

                    {/* Article Header */}
                    <header className="mb-12">
                        {/* Category and Meta */}
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <span className="px-4 py-2 bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-full text-sm font-semibold uppercase tracking-wider">
                                {article.category}
                            </span>
                            <span className="text-gray-400 text-sm">{article.readTime}</span>
                            <span className="text-gray-600">•</span>
                            <span className="text-gray-400 text-sm">{formatDate(article.publishDate)}</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                            {article.title}
                        </h1>

                        {/* Excerpt */}
                        <p className="text-xl text-gray-400 leading-relaxed">
                            {article.excerpt}
                        </p>
                    </header>

                    {/* Article Content */}
                    {article.content && (
                        <article className="prose prose-invert max-w-none">
                            {/* Question Section */}
                            <div className="bg-white/5 backdrop-blur-sm border-l-4 border-purple-500 p-6 lg:p-8 mb-12 rounded-r-lg hover:bg-white/10 transition-all duration-300">
                                <p className="text-sm font-semibold text-purple-400 mb-3 uppercase tracking-wider">
                                    Question
                                </p>
                                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                                    {article.content.question}
                                </h2>
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    {article.content.answer}
                                </p>
                            </div>

                            {/* Content Sections */}
                            {article.content.sections && article.content.sections.map((section, index) => (
                                <div key={index} className="mb-12">
                                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                                        {section.heading}
                                    </h2>
                                    <ul className="space-y-5">
                                        {section.points.map((point, pointIndex) => (
                                            <li key={pointIndex} className="flex items-start text-gray-300 text-lg leading-relaxed group">
                                                <span className="text-purple-400 mr-4 mt-2 font-bold text-xl group-hover:text-purple-300 transition-colors duration-300">•</span>
                                                <span className="group-hover:text-white transition-colors duration-300">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                            {/* Key Takeaways */}
                            <div className="bg-gradient-to-r from-purple-500/10 via-purple-400/10 to-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 lg:p-10 mt-16">
                                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                                    Key Takeaways
                                </h3>
                                <ul className="space-y-4">
                                    {article.content.sections && article.content.sections[0] && article.content.sections[0].points.slice(0, 3).map((point, idx) => (
                                        <li key={idx} className="flex items-start text-gray-300 group">
                                            <span className="text-purple-400 mr-4 mt-1 text-xl group-hover:text-purple-300 transition-colors duration-300">✓</span>
                                            <span className="group-hover:text-white transition-colors duration-300">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    )}

                    {/* Related Articles */}
                    {relatedArticles.length > 0 && (
                        <section className="mt-20 pt-12 border-t border-white/10">
                            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-10">
                                Related Articles
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {relatedArticles.map((relatedArticle) => (
                                    <Link
                                        key={relatedArticle.id}
                                        to={`/blog/${relatedArticle.slug}`}
                                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                        className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1"
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-full text-xs font-semibold uppercase tracking-wider">
                                                {relatedArticle.category}
                                            </span>
                                            <span className="text-gray-500 text-xs">{relatedArticle.readTime}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                                            {relatedArticle.title}
                                        </h3>
                                        <p className="text-gray-400 line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
                                            {relatedArticle.excerpt}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* CTA Section */}
                    <div className="mt-20 text-center bg-gradient-to-r from-purple-500/10 via-purple-400/10 to-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 lg:p-12">
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                            Ready to Build Your Website?
                        </h3>
                        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                            Get the same expertise and strategies we write about applied to your website. 
                            Let's build something amazing together.
                        </p>
                        <Link
                            to="/#contact"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40"
                        >
                            Start Your Project
                            <span className="text-xl">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlainArticlePage;
