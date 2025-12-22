import React from 'react';

const PricingCard = ({ title, subtitle, price, description }) => (
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
            <span className="text-[2.5rem] font-bold tracking-tight">${price}</span>
            <span className="text-gray-400 text-sm ml-1.5 font-light">/One time</span>
        </div>

        {/* Features/Description */}
        <div className="flex-grow mb-10">
            <p className="text-gray-300 text-[0.95rem] leading-relaxed font-light opacity-80">
                {description}
            </p>
        </div>

        {/* Button */}
        <button className="w-full bg-white text-black font-bold py-4 rounded-full hover:bg-opacity-90 transition-all duration-300 transform active:scale-95">
            Let's Discuss
        </button>
    </div>
);

const PricingSection = () => {
    const websitePlans = [
        {
            title: "Basic",
            subtitle: "Great for MVPs launches.",
            price: "499",
            description: "Clean, responsive 1-3 page site with SEO setup and contact form. Includes Google Analytics for tracking and 30-day support.",
        },
        {
            title: "Standard",
            subtitle: "Ideal for service companies.",
            price: "899",
            description: "advanced SEO, animations/parallax and add-on admin/payment/chat options. Responsive design, analytics and 60-day support.",
        },
        {
            title: "Premium",
            subtitle: "Perfect for e-commerce & SaaS",
            price: "1399",
            description: "Full-featured advanced website with admin panel, payment gateway, AI chatbot, WhatsApp & Maps. Premium SEO, animations, analytics and 90-day support.",
        },
    ];

    const appPlans = [
        {
            title: "Basic",
            subtitle: "Great for MVPs launches.",
            price: "1499",
            description: "Simple 3-screen app with basic UI and analytics. Optional login and push notifications, plus 30-day support.",
        },
        {
            title: "Standard",
            subtitle: "Ideal for businesses or startups.",
            price: "2499",
            description: "6-screen medium app with login system, analytics and optional admin/payment integrations. Push notifications included with 60-day support.",
        },
        {
            title: "Premium",
            subtitle: "Perfect for e-commerce & SaaS.",
            price: "3999",
            description: "Advanced 12+ screen app with custom UI/UX, full database/API, admin panel and payment gateway. Comes with analytics, notifications and 90-day support.",
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {websitePlans.map((plan, i) => (
                            <PricingCard key={i} {...plan} />
                        ))}
                    </div>
                </section>

                {/* App Category */}
                <section className="mb-20">
                    <h2 className="text-4xl text-white font-bold mb-10 pl-2">App</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {appPlans.map((plan, i) => (
                            <PricingCard key={i} {...plan} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PricingSection;