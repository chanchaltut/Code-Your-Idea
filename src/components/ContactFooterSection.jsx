import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { handleContactSubmission, showWarningModal } from "../utils/modalUtils";
import analytics from "../utils/analytics";

// --- CONSTANTS ---
const TYPEWRITER_WORDS = ["Solutions", "Brands", "Products", "Platforms"];

// --- CUSTOM TYPEWRITER HOOK ---
const useTypewriter = (words, typingSpeed = 150, deletingSpeed = 80, pauseDuration = 2000) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    // Blinking cursor loop (independent of typing)
    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    // Typing logic loop
    useEffect(() => {
        // 1. Word Finished? Wait then Delete.
        if (subIndex === words[index].length && !reverse) {
            const timeout = setTimeout(() => setReverse(true), pauseDuration);
            return () => clearTimeout(timeout);
        }

        // 2. Deletion Finished? Next Word.
        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        // 3. Typing / Deleting step
        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words, typingSpeed, deletingSpeed, pauseDuration]);

    return {
        text: words[index].substring(0, subIndex),
        blink
    };
};

// --- TYPEWRITER COMPONENT ---
const TypewriterText = () => {
    const { text, blink } = useTypewriter(TYPEWRITER_WORDS);

    return (
        // OUTER CONTAINER: Fixed Min-Width prevents the layout jump.
        // "Solutions" is roughly 5em wide in this font weight. 
        // We use text-left to ensure typing starts from the left.
        <span className="text-blue-600 inline-block min-w-[5.5em] text-left align-top">

            {/* INNER SPAN: Grows as text is typed. Cursor hangs off the right edge. */}
            <span className="relative inline-block">
                {text}

                {/* CURSOR: Absolute positioned relative to the TEXT, not the container */}
                <span className={`absolute -right-[0.2em] top-[0.1em] bottom-[0.15em] w-[0.08em] bg-blue-600 transition-opacity duration-100 ${blink ? 'opacity-100' : 'opacity-0'}`}></span>
            </span>
        </span>
    );
};

const ContactFooterSection = ({ id }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        project: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) setErrors({ ...errors, [name]: "" });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.message.trim()) newErrors.message = "Message is required";
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            showWarningModal("Please Complete All Required Fields!", "Fill in your name, email, and message.");
            if (analytics) analytics.trackFormSubmission('contact_form', false);
            return;
        }

        setIsSubmitted(true);
        const success = await handleContactSubmission(formData);

        if (success) {
            if (analytics) analytics.trackFormSubmission('contact_form', true);
            setFormData({ name: "", email: "", phone: "", project: "", message: "" });
            setErrors({});
            setTimeout(() => setIsSubmitted(false), 3000);
        } else {
            if (analytics) analytics.trackFormSubmission('contact_form', false);
            setIsSubmitted(false);
        }
    };

    return (
        <footer
            ref={ref}
            id={id}
            className="bg-black text-white w-full pt-20 pb-8 px-4 md:px-12 font-sans selection:bg-blue-600 selection:text-white"
        >
            {/* Top Section: Form + Headline */}
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-16 mb-24">

                {/* Left: Contact Form Card */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-[480px] bg-[#111111] p-8 rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden"
                >
                    <h3 className="text-3xl font-bold mb-2 text-white">Let’s Create What Lasts</h3>
                    <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                        Every great story begins with a conversation. Let’s create yours.
                    </p>

                    {isSubmitted ? (
                        <div className="text-center py-20">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                            <p className="text-gray-400">We'll respond within 24 hours.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name *"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full bg-[#1c1c1e] border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors placeholder-gray-500`}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full bg-[#1c1c1e] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors placeholder-gray-500"
                                    />
                                </div>
                            </div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address *"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full bg-[#1c1c1e] border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors placeholder-gray-500`}
                            />
                            <div className="relative">
                                <select
                                    name="project"
                                    value={formData.project}
                                    onChange={handleChange}
                                    className="w-full bg-[#1c1c1e] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer"
                                >
                                    <option value="" disabled hidden className="text-gray-500">Select Project Type</option>
                                    <option value="website" className="text-white">Website Development</option>
                                    <option value="app" className="text-white">Mobile App Development</option>
                                    <option value="both" className="text-white">Website + App</option>
                                    <option value="consultation" className="text-white">Just a Consultation</option>
                                    <option value="undecided" className="text-white">Not decided yet</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                </div>
                            </div>
                            <textarea
                                name="message"
                                placeholder="Tell us about your project... *"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                className={`w-full bg-[#1c1c1e] border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors resize-none placeholder-gray-500`}
                            ></textarea>
                            <button type="submit" className="w-full bg-white text-black font-bold rounded-full py-4 mt-2 hover:bg-gray-200 transition-all duration-300 transform hover:scale-[1.02]">
                                Send Message
                            </button>
                        </form>
                    )}
                </motion.div>

                {/* Right: Big Headline with FIXED Typewriter */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 flex items-center lg:mt-white"
                >
                    <h2 className="ml-12 text-left text-4xl md:text-6xl lg:text-[5rem] font-bold leading-[1.1] tracking-tight text-white">
                        We don’t<br />
                        just build<br />
                        projects, we<br />
                        build <TypewriterText />
                    </h2>
                </motion.div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/10 mb-16"></div>

            {/* Bottom Section: Links & Logo */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                {/* Column 1: Logo & Socials */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2">
                        <img src="/logo-w.png" alt="CodeYourIdea" className="h-10 w-auto object-contain" />
                    </div>
                    <div className="text-sm leading-relaxed">
                        <p className="text-white/60">Turning Ideas into Digital Reality.</p>
                        <p className="text-white/60">Balangir, India</p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-3 pt-4">
                        <SocialIcon Icon={FaLinkedin} href="https://www.linkedin.com/company/codeyouridea" track="linkedin" />
                        <SocialIcon Icon={FaFacebook} href="https://www.facebook.com/codeyourideapage/" track="facebook" />
                        <SocialIcon Icon={FaInstagram} href="https://www.instagram.com/codeyouridea_" track="instagram" />
                        <SocialIcon Icon={FaYoutube} href="https://www.youtube.com/@CodeYourIdeaVideos" track="youtube" />
                        <SocialIcon Icon={SiX} href="https://www.x.com/codeyouridea_" track="x" />
                    </div>
                </div>

                {/* Column 2: Contact Info */}
                <div className="lg:col-span-1 flex flex-col gap-4">
                    <h4 className="text-white font-bold mb-2">Contact</h4>
                    <FooterLink href="mailto:contact@codeyouridea.com" onClick={() => analytics.trackContactClick('email')}>
                        contact@codeyouridea.com
                    </FooterLink>
                    <FooterLink href="tel:+916370510539" onClick={() => analytics.trackContactClick('phone')}>
                        +91 6370510539
                    </FooterLink>
                    <FooterLink href="https://wa.me/916370510539" onClick={() => analytics.trackContactClick('whatsapp')}>
                        WhatsApp Chat
                    </FooterLink>
                </div>

                {/* Column 3: Quick Links */}
                <div className="lg:col-span-1 flex flex-col gap-4">
                    <h4 className="text-white font-bold mb-2">Company</h4>
                    <FooterLink href="#about">About Us</FooterLink>
                    <FooterLink href="#portfolio">Portfolio</FooterLink>
                    <FooterLink href="#pricing">Pricing</FooterLink>
                </div>

                {/* Column 4: More */}
                <div className="lg:col-span-1 flex flex-col gap-4">
                    <h4 className="text-white font-bold mb-2">Legal</h4>
                    <FooterLink href="#">Privacy Policy</FooterLink>
                    <FooterLink href="#">Terms of Service</FooterLink>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
                <p>© 2025 Code Your Idea. All Rights Reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <span className="text-white-600/60 font-medium">Made with passion in India</span>
                </div>
            </div>
        </footer>
    );
};

// --- Sub Components ---

const SocialIcon = ({ Icon, href, track }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => analytics && analytics.trackSocialClick(track)}
        className="w-10 h-10 bg-[#e0e0e0] hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 group"
    >
        <Icon className="w-5 h-5 text-black/70 group-hover:text-black transition-colors" />
    </a>
);

const FooterLink = ({ children, href, onClick }) => (
    <a
        href={href}
        onClick={onClick}
        className="text-gray-500 hover:text-white transition-colors text-sm font-medium block"
    >
        {children}
    </a>
);

export default ContactFooterSection;