import React, { useEffect } from 'react';
import { useLocation } from '../utils/useLocation';

const PricingCard = ({ title, subtitle, price, description, isCustom, currency = '$' }) => (
    <div className="group bg-[#0d0d2b]/60 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 flex flex-col h-full hover:border-white/30 transition-all duration-500">
        {/* Card Header */}
        <div className="mb-6">
            <h3 className="text-white text-3xl font-semibold mb-1 tracking-tight">{title}</h3>
            <p className="text-gray-400 text-sm font-light tracking-wide">{subtitle}</p>
        </div>

        {/* Divider Line */}
        <div className="h-[1px] w-full bg-white/10 mb-8"></div>

        {/* Pricing */}
        <div className="mb-8 flex items-baseline">
            {isCustom ? (
                <>
                    <span className="text-[2.5rem] font-bold tracking-tight">Custom</span>
                    <span className="text-gray-400 text-sm ml-1.5 font-light">Pricing</span>
                </>
            ) : (
                <>
                    <span className="text-[2.5rem] font-bold tracking-tight">{currency}{price}</span>
                    <span className="text-gray-400 text-sm ml-1.5 font-light">/One time</span>
                </>
            )}
        </div>

        {/* Features/Description */}
        <div className="flex-grow mb-10">
            <p className="text-gray-300 text-[0.95rem] leading-relaxed font-light opacity-80">
                {description}
            </p>
        </div>

        {/* Button */}
        <a
            href="https://wa.me/919938965598"
            target="_blank"
            rel="noreferrer"
            className="w-full bg-white text-black font-bold py-4 rounded-full hover:bg-opacity-90 transition-all duration-300 transform active:scale-95 text-center block"
        >
            Let's Discuss
        </a>
    </div>
);

const PricingSection = () => {
    const { isIndia, isLoading } = useLocation();

    // Manual override for testing (add ?forceIndia=true or ?forceUSD=true to URL)
    const urlParams = new URLSearchParams(window.location.search);
    const forceIndia = urlParams.get('forceIndia') === 'true';
    const forceUSD = urlParams.get('forceUSD') === 'true';
    
    // Use manual override if provided, otherwise use detected location
    const finalIsIndia = forceIndia ? true : forceUSD ? false : isIndia;

    // Debug logging
    useEffect(() => {
        if (!isLoading) {
            console.log('💰 Pricing Configuration:', {
                detectedLocation: isIndia ? 'India' : 'International',
                manualOverride: forceIndia ? 'India (forced)' : forceUSD ? 'USD (forced)' : 'None',
                finalPricing: finalIsIndia ? 'INR (₹)' : 'USD ($)',
                websiteStarter: finalIsIndia ? '₹9,999' : '$499',
                websitePro: finalIsIndia ? '₹24,999' : '$999',
                appStarter: finalIsIndia ? '₹24,999' : '$1,499',
                appPro: finalIsIndia ? '₹49,999' : '$2,499'
            });
        }
    }, [isIndia, isLoading, finalIsIndia, forceIndia, forceUSD]);

    // Pricing configuration based on location
    const getPricing = () => {
        if (finalIsIndia) {
            return {
                currency: '₹',
                website: {
                    starter: '9,999',
                    pro: '24,999',
                },
                app: {
                    starter: '24,999',
                    pro: '49,999',
                },
            };
        } else {
            return {
                currency: '$',
                website: {
                    starter: '499',
                    pro: '999',
                },
                app: {
                    starter: '1499',
                    pro: '2499',
                },
            };
        }
    };

    const pricing = getPricing();

    const websitePlans = [
        {
            title: "Starter",
            subtitle: "Your MVP, Simplified.",
            price: pricing.website.starter,
            description: "Professional design. SEO-ready. Contact forms. Mobile-responsive. Analytics integration. Everything you need to launch. 30-day support included.",
            isCustom: false,
        },
        {
            title: "Pro",
            subtitle: "Built to Impress.",
            price: pricing.website.pro,
            description: "Advanced SEO. Smooth animations and parallax effects. Optional payment gateways, live chat, and admin dashboards. Fully responsive with analytics. 30-day support included.",
            isCustom: false,
        },
        {
            title: "Enterprise",
            subtitle: "Fully Customized.",
            price: null,
            description: "Unlimited features and pages. Tailored to your exact business needs. Perfect for complex integrations and scaling operations. 30-day support included.",
            isCustom: true,
        },
    ];

    const appPlans = [
        {
            title: "Starter",
            subtitle: "Launch Fast.",
            price: pricing.app.starter,
            description: "Clean 3-5 screen app. Standard UI with analytics. Optional login and push notifications. Everything you need to validate your idea. 30-day support included.",
            isCustom: false,
        },
        {
            title: "Pro",
            subtitle: "Ready for Growth.",
            price: pricing.app.pro,
            description: "6-10 screen app with secure authentication. Real-time analytics. Optional payment processing and admin panels. Push notifications standard. 30-day support included.",
            isCustom: false,
        },
        {
            title: "Enterprise",
            subtitle: "Built to Scale.",
            price: null,
            description: "Unlimited screens, features, and integrations. Custom-engineered for your business model with enterprise-grade infrastructure. 30-day support included.",
            isCustom: true,
        },
    ];

    return (
        <div id="pricing" className="min-h-screen bg-[#020216] text-white py-24 px-6 font-sans selection:bg-white selection:text-black">
            {/* Background Glows (Optional for that 100% visual depth) */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/30 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-900/40 blur-[120px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Main Header */}
                <header className="text-center mb-20">
                    <h1 className="text-5xl text-white md:text-6xl font-bold mb-6 tracking-tight">Pricing</h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
                        Whether you're launching your first app or scaling your business, we have a plan that fits your vision and budget.
                    </p>
                </header>

                {/* Website Category */}
                <section className="mb-24">
                    <h2 className="text-4xl text-white font-bold mb-10 pl-2">Website</h2>
                    {isLoading ? (
                        <div className="text-center text-gray-400 py-12">
                            Loading pricing...
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {websitePlans.map((plan, i) => (
                                <PricingCard key={i} {...plan} isCustom={plan.isCustom} currency={pricing.currency} />
                            ))}
                        </div>
                    )}
                </section>

                {/* App Category */}
                <section className="mb-20">
                    <h2 className="text-4xl text-white font-bold mb-10 pl-2">App</h2>
                    {isLoading ? (
                        <div className="text-center text-gray-400 py-12">
                            Loading pricing...
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {appPlans.map((plan, i) => (
                                <PricingCard key={i} {...plan} isCustom={plan.isCustom} currency={pricing.currency} />
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
};

export default PricingSection;
