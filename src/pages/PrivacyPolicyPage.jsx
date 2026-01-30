import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicyPage = () => {
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
                        <h1 className="text-6xl md:text-7xl font-bold mb-4 tracking-tight text-white font-sans">Privacy Policy</h1>
                        <div className="text-white text-sm space-y-1 font-sans tracking-wide">
                            <p className="text-white">Effective Date: November 1, 2024</p>
                            <p className="text-white">Last Updated: January 30, 2026</p>
                        </div>
                    </header>

                    {/* Introduction */}
                    <div className="mb-16">
                        <p className="text-white text-lg leading-relaxed font-sans max-w-4xl">
                            At Code Your Idea, we build trust through transparency. This policy explains how we handle your information when you use our services.
                        </p>
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-16">
                        {/* Section 1 */}
                        <section className="pb-12">
                            <h2 className="text-3xl font-bold text-white mb-6 font-sans tracking-tight">1. WHAT WE COLLECT</h2>
                            <div className="space-y-6 text-white leading-relaxed font-sans">
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-3 font-sans">When You Reach Out:</h3>
                                    <p className="text-white leading-relaxed">Your name, email, phone number, company details, and project requirements when you contact us or request quotes.</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-3 font-sans">Automatically:</h3>
                                    <p className="text-white leading-relaxed">IP address, browser type, device info, pages visited, and location data via Google Analytics to improve our services.</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-3 font-sans">Cookies:</h3>
                                    <p className="text-white leading-relaxed">We use cookies to remember preferences and enhance your experience. You can disable them in your browser settings, though some features may be affected.</p>
                                </div>
                            </div>
                        </section>

                        {/* Section 2 */}
                        <section className="pb-12">
                            <h2 className="text-3xl font-bold text-white mb-6 font-sans tracking-tight">2. HOW WE USE IT</h2>
                            <ul className="space-y-3 text-white leading-relaxed font-sans list-none pl-0">
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-2">•</span>
                                    <span>Deliver our web and app development services</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-2">•</span>
                                    <span>Respond to inquiries and provide support</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-2">•</span>
                                    <span>Process payments securely via Stripe, PayPal, or Razorpay</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-2">•</span>
                                    <span>Send project updates and service communications</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-2">•</span>
                                    <span>Improve our platform and user experience</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-2">•</span>
                                    <span>Analyze traffic and performance</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-2">•</span>
                                    <span>Send marketing updates (only with your permission)</span>
                                </li>
                            </ul>
                        </section>

                        {/* Section 3 */}
                        <section className="pb-12">
                            <h2 className="text-3xl font-bold text-white mb-6 font-sans tracking-tight">3. WHO WE SHARE WITH</h2>
                            <p className="text-white mb-6 leading-relaxed font-sans">We never sell your data. We only share with:</p>
                            <div className="space-y-6 text-white leading-relaxed font-sans">
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-3 font-sans">Service Partners:</h3>
                                    <p className="text-white leading-relaxed">Payment processors, email services, analytics tools, and hosting providers that help us deliver our services.</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-3 font-sans">Legal Requirements:</h3>
                                    <p className="text-white leading-relaxed">When required by law, court order, or to protect our rights and prevent fraud.</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-3 font-sans">Business Transfers:</h3>
                                    <p className="text-white leading-relaxed">In case of merger, acquisition, or asset sale, your information may transfer to the new entity.</p>
                                </div>
                            </div>
                        </section>

                        {/* Section 4 */}
                        <section className="pb-12">
                            <h2 className="text-3xl font-bold text-white mb-6 font-sans tracking-tight">4. YOUR SECURITY MATTERS</h2>
                            <p className="text-white leading-relaxed font-sans">
                                We use SSL encryption, secure servers, access controls, and regular security audits. While we implement industry-standard protections, no internet transmission is 100% secure. We comply with international security standards and regulations applicable to our global client base.
                            </p>
                        </section>

                        {/* Section 5 */}
                        <section className="pb-12">
                            <h2 className="text-3xl font-bold text-white mb-6 font-sans tracking-tight">5. YOUR RIGHTS</h2>
                            <p className="text-white mb-4 leading-relaxed font-sans">You can:</p>
                            <ul className="space-y-3 text-white leading-relaxed font-sans list-none pl-0 mb-6">
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-2">•</span>
                                    <span>Access your personal data</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-2">•</span>
                                    <span>Request corrections or deletion</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-2">•</span>
                                    <span>Opt out of marketing communications</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-2">•</span>
                                    <span>Withdraw consent</span>
                                </li>
                            </ul>
                            <p className="text-white leading-relaxed font-sans mb-6">
                                Email us at <a href="mailto:privacy@codeyouridea.com" className="text-white underline hover:text-white transition-colors">privacy@codeyouridea.com</a> to exercise these rights. We respond within 30 days.
                            </p>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-3 font-sans">For International Clients:</h3>
                                <ul className="space-y-2 text-white leading-relaxed font-sans list-none pl-0">
                                    <li className="flex items-start">
                                        <span className="text-white mr-4 mt-2">•</span>
                                        <span><strong>EU/EEA Clients:</strong> You have rights under GDPR including data portability and the right to lodge complaints with supervisory authorities.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-white mr-4 mt-2">•</span>
                                        <span><strong>California Clients:</strong> You have rights under CCPA to know what personal information is collected and request deletion.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-white mr-4 mt-2">•</span>
                                        <span><strong>Other Jurisdictions:</strong> We comply with applicable local data protection laws where you're located.</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Section 6 */}
                        <section className="pb-12">
                            <h2 className="text-3xl font-bold text-white mb-6 font-sans tracking-tight">6. DATA RETENTION</h2>
                            <p className="text-white leading-relaxed font-sans">
                                We keep your information only as long as needed to provide services, comply with legal obligations, or resolve disputes. After that, we securely delete or anonymize it.
                            </p>
                        </section>

                        {/* Section 7 */}
                        <section className="pb-12">
                            <h2 className="text-3xl font-bold text-white mb-6 font-sans tracking-tight">7. THIRD-PARTY LINKS</h2>
                            <p className="text-white leading-relaxed font-sans">
                                Our website may link to external sites. We're not responsible for their privacy practices—please review their policies before sharing information.
                            </p>
                        </section>

                        {/* Section 8 */}
                        <section className="pb-12">
                            <h2 className="text-3xl font-bold text-white mb-6 font-sans tracking-tight">8. CHILDREN'S PRIVACY</h2>
                            <p className="text-white leading-relaxed font-sans">
                                Our services aren't intended for anyone under 18. If we discover we've collected such data, we delete it immediately.
                            </p>
                        </section>

                        {/* Section 9 */}
                        <section className="pb-12">
                            <h2 className="text-3xl font-bold text-white mb-6 font-sans tracking-tight">9. INTERNATIONAL TRANSFERS</h2>
                            <p className="text-white leading-relaxed font-sans">
                                Code Your Idea operates globally from our base in India. We serve clients worldwide and ensure compliance with international data protection standards including GDPR (EU) and CCPA (California). Your data may be transferred to and processed in India with appropriate security safeguards in place.
                            </p>
                        </section>

                        {/* Section 10 */}
                        <section className="pb-12">
                            <h2 className="text-3xl font-bold text-white mb-6 font-sans tracking-tight">10. POLICY UPDATES</h2>
                            <p className="text-white leading-relaxed font-sans">
                                We may update this policy occasionally. Changes appear here with a new "Last Updated" date. Continued use means acceptance of updates.
                            </p>
                        </section>

                        {/* Contact Section */}
                        <section className="pt-8">
                            <h2 className="text-3xl font-bold text-white mb-8 font-sans tracking-tight">CONTACT US</h2>
                            <p className="text-white mb-6 leading-relaxed font-sans">Questions about your privacy?</p>
                            <div className="space-y-2 text-white font-sans">
                                <p className="font-semibold text-white">Code Your Idea</p>
                                <p className="text-white">Balangir, Odisha, India</p>
                                <p className="text-white">
                                    Email: <a href="mailto:privacy@codeyouridea.com" className="text-white underline hover:text-white transition-colors">privacy@codeyouridea.com</a>
                                </p>
                                <p className="text-white">
                                    Website: <a href="https://codeyouridea.com" className="text-white underline hover:text-white transition-colors">codeyouridea.com</a>
                                </p>
                            </div>
                            <p className="text-white text-sm mt-6 font-sans">We respond within 48 hours.</p>
                        </section>

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

export default PrivacyPolicyPage;
