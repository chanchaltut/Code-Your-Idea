import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { autoFillContactForm } from "../utils/modalUtils";
import analytics from "../utils/analytics";
import testimonial1 from "../assets/images/testimonial/testimonial-one.png";
import testimonial2 from "../assets/images/testimonial/testimonial-two.png";

const TestimonialSection = ({ id }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    const testimonials = [
        {
            quote: "Code Your Idea didn't just deliver a product, they delivered growth. Our bookings tripled in 2 months.",
            name: "Mr. Anik Halder",
            role: "Founder & CEO, Rent Yaard",
            rating: 5,
            project: "Rental Marketplace"
        },
        {
            quote: "The Galaxy EdTech app transformed how we deliver content. Our user engagement increased by 300%.",
            name: "Mr. Sachidananda Sahoo",
            role: "Managing Director, Galaxy EdTech",
            rating: 5,
            project: "Learning Platform"
        },
        {
            quote: "From concept to launch in record time. The team's expertise in conversion optimization is unmatched.",
            name: "Mr. Alok Ranjan Rathi",
            role: "Founder, Trails of Teak",
            rating: 5,
            project: "Hotel & Resort Website"
        }
    ];

    const staggerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <motion.section
            id={id}
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerVariants}
            className="w-full py-16 md:py-24 relative overflow-hidden backdrop-blur-sm bg-gradient-to-r from-futuristic-blue-600/30 via-black/40 to-futuristic-purple-600/30"
        >
            <div className="max-w-4xl mx-auto px-4 md:px-12 text-center">
                {/* Header */}
                <motion.div variants={itemVariants} className="mb-12">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                        Our Clients Say It Best
                    </h2>
                </motion.div>

                {/* Testimonial Card */}
                <motion.div
                    variants={itemVariants}
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-3xl p-8 md:p-12 shadow-futuristic relative backdrop-blur-md bg-white/5 border border-white/10"
                >
                    {/* Quote Icon */}
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-futuristic-blue-500 to-futuristic-cyan-500 shadow-glow-blue">
                            <FaQuoteLeft className="text-white text-xl" />
                        </div>
                    </div>

                    {/* Project Type Badge */}
                    <div className="inline-block bg-futuristic-blue-500/10 text-futuristic-cyan-200 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        {currentTestimonial.project}
                    </div>

                    {/* Stars */}
                    <div className="flex justify-center gap-1 mb-6">
                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                            <FaStar key={i} className="text-yellow-400 text-xl" />
                        ))}
                    </div>

                    {/* Quote */}
                    <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 italic">
                        "{currentTestimonial.quote}"
                    </p>

                    {/* Author Info */}
                    <div>
                        <h4 className="text-white text-xl font-bold mb-1">
                            {currentTestimonial.name}
                        </h4>
                        <p className="text-white/70 text-lg">
                            {currentTestimonial.role}
                        </p>
                    </div>
                </motion.div>

                {/* Navigation */}
                <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mt-8">
                    <button
                        onClick={prevTestimonial}
                        className="w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all"
                    >
                        <FaChevronLeft />
                    </button>

                    {/* Dots Indicator */}
                    <div className="flex gap-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? "bg-futuristic-cyan-300" : "bg-white/40"
                                    }`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextTestimonial}
                        className="w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all"
                    >
                        <FaChevronRight />
                    </button>
                </motion.div>

                {/* CTA */}
                <motion.div variants={itemVariants} className="mt-12">
                    <p className="text-white/90 text-lg mb-6">
                        Ready to join our success stories?
                    </p>
                    <button
                        onClick={() => autoFillContactForm('undecided')}
                        className="btn-futuristic text-lg px-8 py-4 rounded-full"
                    >
                        Start Your Project
                    </button>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-futuristic-blue-500/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-futuristic-purple-500/10 rounded-full blur-3xl"></div>
        </motion.section>
    );
};

export default TestimonialSection; 