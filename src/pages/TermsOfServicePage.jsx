import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfServicePage = () => {
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
                        <h1 className="text-6xl md:text-7xl font-bold mb-4 tracking-tight text-white font-sans">Terms of Service</h1>
                        <div className="text-white text-sm space-y-1 font-sans tracking-wide">
                            <p className="text-white">Effective Date: November 1, 2024</p>
                            <p className="text-white">Last Updated: January 30, 2026</p>
                        </div>
                    </header>

                    {/* Introduction */}
                    <div className="mb-16">
                        <p className="text-white text-lg leading-relaxed font-sans max-w-4xl">
                            Welcome to Code Your Idea. By using our services, you agree to these terms. Simple as that.
                        </p>
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-16">
                        {/* Section 1 */}
                        <section className="pb-12">
                            <h2 className="text-3xl font-bold text-white mb-6 font-sans tracking-tight">1. WHO WE ARE</h2>
                            <p className="text-white leading-relaxed font-sans">
                                Code Your Idea is a web and app development agency based in Balangir, India. We turn ideas into scalable digital products using React, Node.js, and modern mobile technologies.
                            </p>
                        </section>

                        {/* Section 2 */}
                        <section className="pb-12">
                            <h2 className="text-3xl font-bold text-white mb-6 font-sans tracking-tight">2. WHAT WE OFFER</h2>
                            <ul className="space-y-3 text-white leading-relaxed font-sans list-none pl-0 mb-6">
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-2">•</span>
                                    <span>Custom website development (responsive, SEO-optimized)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-2">•</span>
                                    <span>Mobile app development (iOS, Android, cross-platform)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-2">•</span>
                                    <span>Web applications and dashboards</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-2">•</span>
                                    <span>UI/UX design</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-2">•</span>
                                    <span>Consulting and strategy</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-2">•</span>
                                    <span>30-day complimentary bug support on all projects</span>
                                </li>
                            </ul>
                            <p className="text-white leading-relaxed font-sans">
                                Specific deliverables, timelines, and scope are outlined in individual project agreements.
                            </p>
                        </section>

                        {/* Section 3 */}
                        <section className="pb-12">
                            <h2 className="text-3xl font-bold text-white mb-6 font-sans tracking-tight">3. WHO CAN USE OUR SERVICES</h2>
                            <p className="text-white mb-4 leading-relaxed font-sans">You must be:</p>
                            <ul className="space-y-3 text-white leading-relaxed font-sans list-none pl-0">
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-2">•</span>
                                    <span>At least 18 years old</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-2">•</span>
                                    <span>Legally able to enter contracts</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-2">•</span>
                                    <span>Authorized to represent your organization (if applicable)</span>
                                </li>
                            </ul>
                        </section>

                        {/* Section 4 */}
                        <section className="pb-12">
                            <h2 className="text-3xl font-bold text-white mb-6 font-sans tracking-tight">4. HOW PROJECTS WORK</h2>
                            <p className="text-white mb-4 leading-relaxed font-sans">
                                Every project starts with a proposal covering:
                            </p>
                            <ul className="space-y-3 text-white leading-relaxed font-sans list-none pl-0 mb-6">
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-2">•</span>
                                    <span>Scope of work</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-2">•</span>
                                    <span>Timeline and milestones</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-2">•</span>
                                    <span>Pricing and payment terms</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-2">•</span>
                                    <span>Deliverables</span>
                                </li>
                            </ul>
                            <p className="text-white leading-relaxed font-sans">
                                Once agreed, we formalize it in writing. Any changes to scope require written approval and may affect cost and timeline.
                            </p>
                        </section>

                        {/* Section 5 */}
                        <section className="pb-12">
                            <h2 className="text-3xl font-bold text-white mb-6 font-sans tracking-tight">5. PRICING & PAYMENT</h2>
                            <div className="space-y-6 text-white leading-relaxed font-sans">
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-3 font-sans">Payment Structure:</h3>
                                    <ul className="space-y-2 list-none pl-0 ml-4">
                                        <li className="flex items-start">
                                            <span className="text-white mr-4 mt-2">•</span>
                                            <span>Starter & Pro Packages: One-time payment as listed</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-white mr-4 mt-2">•</span>
                                            <span>Enterprise Projects: Custom pricing based on your needs</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-3 font-sans">Payment Terms:</h3>
                                    <ul className="space-y-2 list-none pl-0 ml-4">
                                        <li className="flex items-start">
                                            <span className="text-white mr-4 mt-2">•</span>
                                            <span>50% upfront to start development</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-white mr-4 mt-2">•</span>
                                            <span>50% upon completion, before final delivery</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-white mr-4 mt-2">•</span>
                                            <span>Accepted via international wire transfer, PayPal, Stripe, Wise, or Razorpay. Payment methods may vary based on your location.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-3 font-sans">Currency:</h3>
                                    <p className="text-white leading-relaxed">Pricing in USD for international clients, INR for Indian clients. Exchange rates locked at proposal acceptance.</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-3 font-sans">Late Payments:</h3>
                                    <p className="text-white leading-relaxed">May result in project suspension, interest charges (1.5%/month), or withholding of deliverables.</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-3 font-sans">Refunds:</h3>
                                    <p className="text-white leading-relaxed">Initial deposits are non-refundable once work begins. Partial refunds may be considered based on completed work.</p>
                                </div>
                            </div>
                        </section>

                        {/* Section 6 */}
                        <section className="pb-12">
                            <h2 className="text-3xl font-bold text-white mb-6 font-sans tracking-tight">6. YOUR RESPONSIBILITIES</h2>
                            <ul className="space-y-3 text-white leading-relaxed font-sans list-none pl-0 mb-6">
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-2">•</span>
                                    <span>Provide accurate project information and requirements</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-2">•</span>
                                    <span>Deliver content, assets, and materials on time</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-2">•</span>
                                    <span>Respond to communications within 48-72 hours</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-2">•</span>
                                    <span>Review and approve deliverables promptly</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-2">•</span>
                                    <span>Ensure you own rights to all materials provided</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-2">•</span>
                                    <span>Make timely payments</span>
                                </li>
                            </ul>
                            <p className="text-white leading-relaxed font-sans">
                                Delays on your end may extend timelines and incur additional costs.
                            </p>
                        </section>

                        {/* Section 7 */}
                        <section className="pb-12">
                            <h2 className="text-3xl font-bold text-white mb-6 font-sans tracking-tight">7. OWNERSHIP & RIGHTS</h2>
                            <div className="space-y-6 text-white leading-relaxed font-sans">
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-3 font-sans">What You Own (After Full Payment):</h3>
                                    <ul className="space-y-2 list-none pl-0 ml-4">
                                        <li className="flex items-start">
                                            <span className="text-white mr-4 mt-2">•</span>
                                            <span>Final code and designs specific to your project</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-white mr-4 mt-2">•</span>
                                            <span>Custom graphics and content created for you</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-3 font-sans">What We Retain:</h3>
                                    <ul className="space-y-2 list-none pl-0 ml-4">
                                        <li className="flex items-start">
                                            <span className="text-white mr-4 mt-2">•</span>
                                            <span>Pre-existing frameworks, tools, and methodologies</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-white mr-4 mt-2">•</span>
                                            <span>Portfolio rights (with your permission)</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-white mr-4 mt-2">•</span>
                                            <span>Reusable code components</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-3 font-sans">Third-Party Resources:</h3>
                                    <p className="text-white leading-relaxed mb-4">Some projects use third-party resources (fonts, plugins, APIs, stock assets) with separate licenses. You're responsible for complying with those terms.</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-3 font-sans">Export Compliance:</h3>
                                    <p className="text-white leading-relaxed">You're responsible for compliance with export control laws in your jurisdiction when using deliverables internationally.</p>
                                </div>
                            </div>
                        </section>

                        {/* Section 8 */}
                        <section className="pb-12">
                            <h2 className="text-3xl font-bold text-white mb-6 font-sans tracking-tight">8. SUPPORT & MAINTENANCE</h2>
                            <div className="space-y-6 text-white leading-relaxed font-sans">
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-3 font-sans">30-Day Complimentary Bug Support:</h3>
                                    <p className="mb-4 text-white leading-relaxed">All packages include 30 days of free bug fixes and minor adjustments from project delivery date. This covers:</p>
                                    <ul className="space-y-2 list-none pl-0 ml-4 mb-6">
                                        <li className="flex items-start">
                                            <span className="text-white mr-4 mt-2">•</span>
                                            <span>Technical bugs and errors</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-white mr-4 mt-2">•</span>
                                            <span>Functional issues affecting performance</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-white mr-4 mt-2">•</span>
                                            <span>Minor fixes to ensure deliverables meet specifications</span>
                                        </li>
                                    </ul>
                                    <p className="mb-4 text-white leading-relaxed">Does NOT cover:</p>
                                    <ul className="space-y-2 list-none pl-0 ml-4">
                                        <li className="flex items-start">
                                            <span className="text-white mr-4 mt-2">•</span>
                                            <span>New features or functionality requests</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-white mr-4 mt-2">•</span>
                                            <span>Design changes or content updates</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-white mr-4 mt-2">•</span>
                                            <span>Issues caused by third-party services</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-white mr-4 mt-2">•</span>
                                            <span>Problems from unauthorized modifications</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-3 font-sans">Post-30-Day Maintenance:</h3>
                                    <p className="text-white leading-relaxed">After the complimentary period, ongoing maintenance and bug fixes are available as a separate paid service. We offer flexible maintenance packages tailored to your needs.</p>
                                </div>
                            </div>
                        </section>

                        {/* Section 9 */}
                        <section className="pb-12">
                            <h2 className="text-3xl font-bold text-white mb-6 font-sans tracking-tight">9. CONFIDENTIALITY</h2>
                            <p className="text-white leading-relaxed font-sans">
                                Both parties agree to keep business strategies, technical information, and project details confidential. We can sign an NDA upon request before project discussions.
                            </p>
                        </section>

                        {/* Section 10 */}
                        <section className="pb-12">
                            <h2 className="text-3xl font-bold text-white mb-6 font-sans tracking-tight">10. WARRANTIES</h2>
                            <div className="space-y-6 text-white leading-relaxed font-sans">
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-3 font-sans">Our Commitment:</h3>
                                    <p className="text-white leading-relaxed">Services are performed with professional skill and care. Deliverables will substantially match agreed specifications.</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-3 font-sans">30-Day Warranty:</h3>
                                    <p className="text-white leading-relaxed">We fix bugs and errors at no cost during the complimentary support period.</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-3 font-sans">Disclaimer:</h3>
                                    <p className="text-white leading-relaxed">Beyond express warranties, services are provided "AS IS" without guarantees of uninterrupted operation, specific results, traffic, or revenue.</p>
                                </div>
                            </div>
                        </section>

                        {/* Section 11 */}
                        <section className="pb-12">
                            <h2 className="text-3xl font-bold text-white mb-6 font-sans tracking-tight">11. LIABILITY LIMITS</h2>
                            <p className="text-white mb-4 leading-relaxed font-sans">To the maximum extent permitted by law:</p>
                            <ul className="space-y-3 text-white leading-relaxed font-sans list-none pl-0 mb-6">
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-2">•</span>
                                    <span>Our total liability won't exceed the amount you paid for the project</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-2">•</span>
                                    <span>We're not liable for indirect, incidental, or consequential damages</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-2">•</span>
                                    <span>We're not liable for loss of profits, data, or business opportunities</span>
                                </li>
                            </ul>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-3 font-sans">For International Clients:</h3>
                                <p className="text-white leading-relaxed">Liability limitations are subject to the maximum extent permitted under the laws of your jurisdiction. Some jurisdictions don't allow limitation of certain damages, so some limitations may not apply to you.</p>
                            </div>
                        </section>

                        {/* Section 12 */}
                        <section className="pb-12">
                            <h2 className="text-3xl font-bold text-white mb-6 font-sans tracking-tight">12. INDEMNIFICATION</h2>
                            <p className="text-white mb-4 leading-relaxed font-sans">You agree to indemnify Code Your Idea from claims arising from:</p>
                            <ul className="space-y-3 text-white leading-relaxed font-sans list-none pl-0">
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-2">•</span>
                                    <span>Your use of our services</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-2">•</span>
                                    <span>Violation of these terms</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-2">•</span>
                                    <span>Violation of third-party rights</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-2">•</span>
                                    <span>Content or materials you provide</span>
                                </li>
                            </ul>
                        </section>

                        {/* Section 13 */}
                        <section className="pb-12">
                            <h2 className="text-3xl font-bold text-white mb-6 font-sans tracking-tight">13. HOSTING</h2>
                            <p className="text-white leading-relaxed font-sans">
                                Hosting is separate from development unless explicitly included. You're responsible for obtaining hosting. We can recommend providers or offer it as an add-on.
                            </p>
                        </section>

                        {/* Section 14 */}
                        <section className="pb-12">
                            <h2 className="text-3xl font-bold text-white mb-6 font-sans tracking-tight">14. TIMELINES</h2>
                            <p className="text-white mb-4 leading-relaxed font-sans">Project timelines are estimates based on:</p>
                            <ul className="space-y-3 text-white leading-relaxed font-sans list-none pl-0 mb-6">
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-2">•</span>
                                    <span>Project complexity</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-2">•</span>
                                    <span>Timely client feedback</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-white mr-4 mt-2">•</span>
                                    <span>Material availability</span>
                                </li>
                            </ul>
                            <p className="text-white leading-relaxed font-sans">
                                We're not liable for delays caused by client-side issues, third-party problems, or force majeure events (natural disasters, pandemics, government actions).
                            </p>
                        </section>

                        {/* Section 15 */}
                        <section className="pb-12">
                            <h2 className="text-3xl font-bold text-white mb-6 font-sans tracking-tight">15. TERMINATION</h2>
                            <div className="space-y-6 text-white leading-relaxed font-sans">
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-3 font-sans">By You:</h3>
                                    <p className="text-white leading-relaxed">You may terminate with written notice. You're responsible for payment for completed work. Deposits are non-refundable.</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-3 font-sans">By Us:</h3>
                                    <p className="text-white leading-relaxed">We may terminate if you fail to pay, breach terms, or provide false information.</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-3 font-sans">Upon Termination:</h3>
                                    <p className="text-white leading-relaxed">All outstanding payments become due immediately. We retain deliverables until payment is complete.</p>
                                </div>
                            </div>
                        </section>

                        {/* Section 16 */}
                        <section className="pb-12">
                            <h2 className="text-3xl font-bold text-white mb-6 font-sans tracking-tight">16. DISPUTE RESOLUTION</h2>
                            <div className="space-y-6 text-white leading-relaxed font-sans">
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-3 font-sans">Governing Law:</h3>
                                    <ul className="space-y-2 list-none pl-0">
                                        <li className="flex items-start">
                                            <span className="text-white mr-4 mt-2">•</span>
                                            <span><strong>For Indian Clients:</strong> Governed by laws of India</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-white mr-4 mt-2">•</span>
                                            <span><strong>For International Clients:</strong> Governed by laws of India, with consideration for your local consumer protection laws where applicable</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-3 font-sans">Jurisdiction:</h3>
                                    <ul className="space-y-2 list-none pl-0">
                                        <li className="flex items-start">
                                            <span className="text-white mr-4 mt-2">•</span>
                                            <span><strong>Primary jurisdiction:</strong> Balangir, Odisha, India</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-white mr-4 mt-2">•</span>
                                            <span>International clients may pursue dispute resolution in their local jurisdiction for consumer protection matters</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-3 font-sans">International Arbitration:</h3>
                                    <p className="text-white leading-relaxed">For cross-border disputes, parties agree to international arbitration under ICC (International Chamber of Commerce) rules, with proceedings in English.</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-3 font-sans">Preferred Resolution:</h3>
                                    <p className="text-white leading-relaxed">We prefer good-faith negotiation, followed by mediation or arbitration before litigation.</p>
                                </div>
                            </div>
                        </section>

                        {/* Section 17 */}
                        <section className="pb-12">
                            <h2 className="text-3xl font-bold text-white mb-6 font-sans tracking-tight">17. GENERAL</h2>
                            <p className="text-white leading-relaxed font-sans mb-6">
                                These terms, along with project agreements, represent the complete understanding between parties. We may update terms at any time—changes are posted here. Continued use means acceptance.
                            </p>
                            <div className="space-y-6 text-white leading-relaxed font-sans">
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-3 font-sans">17.7 Language</h3>
                                    <p className="text-white leading-relaxed">These terms are provided in English. For non-English speaking clients, translations may be provided for convenience, but the English version prevails in case of conflicts.</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-3 font-sans">17.8 Tax Obligations</h3>
                                    <p className="text-white leading-relaxed">Prices exclude applicable taxes. International clients are responsible for any taxes, duties, or fees imposed by their local jurisdiction. We provide tax invoices as required.</p>
                                </div>
                            </div>
                        </section>

                        {/* Contact Section */}
                        <section className="pt-8">
                            <h2 className="text-3xl font-bold text-white mb-8 font-sans tracking-tight">CONTACT</h2>
                            <p className="text-white mb-6 leading-relaxed font-sans">Questions about these terms?</p>
                            <div className="space-y-2 text-white font-sans">
                                <p className="font-semibold text-white">Code Your Idea</p>
                                <p className="text-white">Balangir, Odisha, India</p>
                                <p className="text-white">
                                    Email: <a href="mailto:legal@codeyouridea.com" className="text-white underline hover:text-white transition-colors">legal@codeyouridea.com</a>
                                </p>
                                <p className="text-white">
                                    Website: <a href="https://codeyouridea.com" className="text-white underline hover:text-white transition-colors">codeyouridea.com</a>
                                </p>
                            </div>
                            <p className="text-white text-sm mt-6 font-sans">We respond within 48 hours.</p>
                        </section>

                        {/* Agreement Notice */}
                        <div className="pt-12 mt-12 text-left">
                            <p className="text-xl font-semibold text-white mb-2 font-sans">BY USING OUR SERVICES, YOU AGREE TO THESE TERMS.</p>
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

export default TermsOfServicePage;
