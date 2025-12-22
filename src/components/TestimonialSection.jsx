import React from 'react';
import { Star, Mic, Play } from 'lucide-react';
import anikBanner from "../assets/images/testimonial/anik.webp";
import rentYaard from "../assets/images/testimonial/rentyaard.png";
import sSahuBanner from "../assets/images/testimonial/s-sahu.webp";
import galaxyTutorials from "../assets/images/testimonial/galaxy-tutorials.png";
import alokBanner from "../assets/images/testimonial/alok.webp";
import tot from "../assets/images/testimonial/tot.png";

const TestimonialSection = () => {
    return (
        <section id="testimonials" className="bg-black text-white py-24 px-4 font-sans selection:bg-indigo-500 selection:text-white">
            {/* Header */}
            <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
                <span className="text-gray-400 text-lg font-light tracking-wide uppercase">Testimonials</span>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                    Trusted by Many
                </h2>
                <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto leading-relaxed">
                    Testimonials aren’t just reviews to us—they are voices of people who trusted us, collaborated with us, and continue to walk this journey alongside us.
                </p>
            </div>

            {/* Masonry Layout Container */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* --- COLUMN 1 --- */}
                <div className="flex flex-col gap-6">
                    {/* Card 1: Mr. Anik Halder (Rent Yaard) - Google Style */}
                    <ReviewCard
                        name="Mr. Anik Halder"
                        role="Founder & CEO, Rent Yaard"
                        avatar={anikBanner}
                        platformIcon={rentYaard}
                        rating={5}
                        text="Code Your Idea didn't just deliver a product, they delivered growth. Our bookings tripled in 2 months. They handled everything so nicely, from design to launch, it felt effortless."
                    />

                    {/* Card 2: Mr. Sachidananda Sahoo (Galaxy Tutorials) - Booking Style */}
                    <div className="bg-white rounded-[1.5rem] p-6 text-black shadow-lg hover:-translate-y-1 transition-transform duration-300">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                                <img src={sSahuBanner} alt="Sachidananda Sahoo" className="w-10 h-10 rounded-full object-cover" />
                                <div>
                                    <h4 className="font-bold text-sm">Mr. Sachidananda Sahoo</h4>
                                    <p className="text-xs text-gray-500 font-medium">MD, Galaxy Tutorials</p>
                                </div>
                            </div>
                            <div className="w-14 text-white p-1 rounded-sm">
                                <img src={galaxyTutorials} alt="Galaxy Tutorials" />
                            </div>
                        </div>

                        <div className="flex items-center gap-3 mb-3">
                            <div className="bg-[#003580] text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm">9.5</div>
                            <span className="font-bold text-sm">Exceptional</span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed mb-3">
                            The Galaxy Tutorials app transformed how we deliver content. Our user engagement increased by 300%.
                        </p>
                        <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
                            <span>☺</span> 100% Recommended
                        </div>
                    </div>

                    {/* Card 3: R.K. Mathur (Lemon Style) */}
                    <div className="bg-white rounded-[1.5rem] p-6 text-black shadow-lg hover:-translate-y-1 transition-transform duration-300">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold">W</div>
                                <div>
                                    <h4 className="font-bold text-sm">R.K. Mathur</h4>
                                    <p className="text-xs text-gray-400">December 21, 2024</p>
                                </div>
                            </div>
                            <span className="text-yellow-400 text-xl">☁</span>
                        </div>
                        <div className="flex gap-1 mb-3">
                            {[1, 2, 3, 4].map(i => <span key={i} className="text-xl">🍋</span>)}
                        </div>
                        <h4 className="font-bold text-sm mb-2">Amazing feed tool</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            The staff explained everything in plain terms and built us an online shop that's boosted our sales big time.
                        </p>
                    </div>
                </div>

                {/* --- COLUMN 2 --- */}
                <div className="flex flex-col gap-6">
                    {/* Card 4: Mr. Alok Ranjan Rathi (Trails of Teak) - Trustpilot Style with owner & brand */}
                    <div className="bg-white rounded-[1.5rem] p-6 text-black shadow-lg hover:-translate-y-1 transition-transform duration-300">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                                {/* Owner avatar */}
                                <img
                                    src={alokBanner}
                                    alt="Mr. Alok Ranjan Rathi"
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="font-bold text-sm">Mr. Alok Ranjan Rathi</h4>
                                    <p className="text-xs text-gray-500 font-medium">Founder, Trails of Teak</p>
                                </div>
                            </div>
                            {/* Company logo */}
                            <div className="w-16 text-white p-1 rounded-sm">
                                <img src={tot} alt="Trails of Teak" />
                            </div>
                        </div>
                        <div className="flex gap-1 mb-3">
                            {[1, 2, 3, 4, 5].map(i => (
                                <div key={i} className="bg-[#00b67a] p-1 rounded-sm">
                                    <Star className="w-3 h-3 text-white fill-white" />
                                </div>
                            ))}
                        </div>
                        <h4 className="font-bold text-sm mb-2">Record Time Launch</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            From concept to launch in record time. The team's expertise in conversion optimization is unmatched. A truly seamless experience.
                        </p>
                    </div>

                    {/* Card 5: Video Testimonial 1 */}
                    <VideoCard
                        name="Yuri Drabik"
                        date="June 05, 2025"
                        image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=80"
                    />

                    {/* Card 6: Audio Player 1 */}
                    <AudioCard date="August 18, 2025" />
                </div>

                {/* --- COLUMN 3 --- */}
                <div className="flex flex-col gap-6">
                    {/* Card 7: Audio Player 2 */}
                    <AudioCard date="October 23, 2024" />

                    {/* Card 8: Tobi Smith (Uber Style) */}
                    <div className="bg-white rounded-[1.5rem] p-6 text-black shadow-lg hover:-translate-y-1 transition-transform duration-300">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center">
                                    <span className="text-gray-400">👤</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm">Tobi Smith</h4>
                                    <p className="text-xs text-gray-400">January 12, 2025</p>
                                </div>
                            </div>
                            <div className="bg-black text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">U</div>
                        </div>
                        <div className="flex gap-1 mb-3 text-yellow-400">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            I manage a startup with a very tight budget, so I was nervous about costs. These guys were transparent, and still delivered an app that looked way more premium than I expected :)
                        </p>
                    </div>

                    {/* Card 9: Video Testimonial 2 */}
                    <VideoCard
                        name="Hemal Kalariya"
                        date="September 12, 2024"
                        image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80"
                    />
                </div>

            </div>
        </section>
    );
};

// --- Sub Components ---

const ReviewCard = ({ name, role, date, avatar, platformIcon, rating, text }) => (
    <div className="bg-white rounded-[1.5rem] p-6 text-black shadow-lg hover:-translate-y-1 transition-transform duration-300">
        <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
                <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                    <h4 className="font-bold text-sm">{name}</h4>
                    <p className="text-xs text-gray-500 font-medium">{role}</p>
                    <p className="text-[10px] text-gray-400">{date}</p>
                </div>
            </div>
            <img src={platformIcon} alt="Platform" className="w-10 h-10 opacity-80" />
        </div>
        <div className="flex gap-1 mb-3 text-yellow-400">
            {[...Array(rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
            ))}
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">
            {text}
        </p>
    </div>
);

const VideoCard = ({ name, date, image }) => (
    <div className="relative group overflow-hidden rounded-[1.5rem] h-64 shadow-lg hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
        <img src={image} alt={name} className="absolute inset-0 w-full h-full object-cover object-[50%_25%] transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/50">
                <Play className="w-6 h-6 text-white fill-white" />
            </div>
        </div>

        <div className="absolute bottom-4 left-4 flex items-center gap-3">
            <img src={image} alt={name} className="w-10 h-10 rounded-full border-2 border-white object-cover" />
            <div>
                <h4 className="text-white font-bold text-sm">{name}</h4>
                <p className="text-white/60 text-xs">{date}</p>
            </div>
        </div>
    </div>
);

const AudioCard = ({ date }) => (
    <div className="bg-[#5b50ff] rounded-[1.5rem] p-6 text-white relative overflow-hidden shadow-lg hover:-translate-y-1 transition-transform duration-300 h-48 flex flex-col justify-between">
        <div className="flex justify-center mb-2">
            <Mic className="w-8 h-8 text-white" />
        </div>

        {/* Simulated Waveform */}
        <div className="flex items-center justify-center gap-1 h-12">
            {[...Array(20)].map((_, i) => {
                const height = Math.random() * 24 + 8; // Random height between 8 and 32
                return (
                    <div
                        key={i}
                        className="w-1 bg-white/50 rounded-full animate-pulse"
                        style={{ height: `${height}px`, animationDelay: `${i * 0.1}s` }}
                    ></div>
                )
            })}
        </div>

        <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 mt-4 text-xs font-medium text-white/90">
            {date}
        </div>
    </div>
);

export default TestimonialSection;