import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { handleContactSubmission, showWarningModal } from "../utils/modalUtils";
import analytics from "../utils/analytics";
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

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

// Phone Number Input Component
const PhoneNumberInput = ({ formData, setFormData, error }) => {
    const [country, setCountry] = useState("in");

    // Auto-detect country from IP
    useEffect(() => {
        fetch("https://ipinfo.io/json")
            .then(res => res.json())
            .then(data => {
                if (data?.country) {
                    setCountry(data.country.toLowerCase());
                }
            })
            .catch(() => setCountry("in")); // fallback to India
    }, []);

    return (
        <div className="w-full [&_.react-tel-input]:h-auto">
            <style>{`
                .react-tel-input {
                    width: 100% !important;
                    height: auto !important;
                    overflow: hidden !important;
                }
                .react-tel-input .flag-dropdown {
                    background-color: #1c1c1e !important;
                    border: 1px solid ${error ? '#ef4444' : 'rgba(255, 255, 255, 0.1)'} !important;
                    border-right: none !important;
                    border-radius: 0.75rem 0 0 0.75rem !important;
                }
                .react-tel-input .flag-dropdown.open {
                    background-color: #1c1c1e !important;
                    border-color: ${error ? '#ef4444' : '#3b82f6'} !important;
                }
                .react-tel-input .flag-dropdown.open .selected-flag {
                    background-color: #1c1c1e !important;
                }
                .react-tel-input .selected-flag {
                    background-color: #1c1c1e !important;
                    border-radius: 0.75rem 0 0 0.75rem !important;
                    padding: 12px 8px 12px 12px !important;
                    display: flex !important;
                    align-items: center !important;
                    
                }
                .react-tel-input .selected-flag:hover {
                    background-color: #1c1c1e !important;
                }
                .react-tel-input .selected-flag:focus {
                    background-color: #1c1c1e !important;
                }
                .react-tel-input .flag-dropdown .arrow {
                    border-top-color: rgba(255, 255, 255, 0.5) !important;
                    margin-top: -2px !important;
                }
                .react-tel-input .flag-dropdown.open .arrow {
                    border-bottom-color: rgba(255, 255, 255, 0.5) !important;
                }
                .react-tel-input .country-list {
                    background-color: #1c1c1e !important;
                    border: 1px solid rgba(255, 255, 255, 0.1) !important;
                    border-radius: 0.75rem !important;
                    max-height: 240px !important;
                    margin-top: 4px !important;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3) !important;
                }
                .react-tel-input .country-list .country {
                    color: white !important;
                    padding: 8px 12px !important;
                }
                .react-tel-input .country-list .country:hover {
                    background-color: rgba(255, 255, 255, 0.05) !important;
                }
                .react-tel-input .country-list .country.highlight {
                    background-color: rgba(255, 255, 255, 0.1) !important;
                }
                .react-tel-input .country-list .search-box {
                    background-color: #1c1c1e !important;
                    border: none !important;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
                    color: white !important;
                    padding: 12px !important;
                    margin: 0 !important;
                }
                .react-tel-input .country-list .search-box::placeholder {
                    color: rgba(156, 163, 175, 1) !important;
                }
                .react-tel-input .country-list .search-box:focus {
                    outline: none !important;
                }
            `}</style>
            <PhoneInput
                country={country}
                value={formData.phone}
                onChange={(value, countryData) => {
                    setFormData({
                        ...formData,
                        phone: value,
                        countryCode: countryData.dialCode
                    });
                }}
                inputProps={{
                    name: "phone",
                    required: false
                }}
                enableSearch
                countryCodeEditable={false}
                inputClass={`!w-full !bg-[#1c1c1e] !border ${error ? '!border-red-500' : '!border-white/10'} !rounded-xl !rounded-l-none !py-3 !pl-14 !pr-4 !text-sm !text-white focus:!outline-none focus:!border-blue-500 !transition-colors !placeholder-gray-500`}
                buttonClass={`!bg-[#1c1c1e] !border ${error ? '!border-red-500' : '!border-white/10'} !rounded-l-xl !border-r-0`}
                dropdownClass="!bg-[#1c1c1e] !text-white"
                containerClass="!w-full"
                placeholder="Phone number"
            />
        </div>
    );
};

const ContactFooterSection = ({ id }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        countryCode: "",
        project: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    // Clear phone errors when phone number changes
    useEffect(() => {
        if (errors.phone && formData.phone) {
            setErrors({ ...errors, phone: "" });
        }
    }, [formData.phone]);

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
        // Phone validation (optional but if provided, should be valid)
        if (formData.phone && formData.phone.length < 8) {
            newErrors.phone = "Please enter a valid phone number";
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
        // Format phone number with country code for submission (PhoneInput value already includes country code digits)
        const formDataToSubmit = {
            ...formData,
            phone: formData.phone ? `+${formData.phone}` : ""
        };
        const success = await handleContactSubmission(formDataToSubmit);

        if (success) {
            if (analytics) analytics.trackFormSubmission('contact_form', true);
            setFormData({ name: "", email: "", phone: "", countryCode: "", project: "", message: "" });
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
                    className="w-full lg:w-[520px] bg-[#111111] p-8 rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden"
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
                                    <PhoneNumberInput
                                        formData={formData}
                                        setFormData={setFormData}
                                        error={errors.phone}
                                    />
                                    {errors.phone && (
                                        <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                                    )}
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
                    className="flex-1 flex items-center lg:mt-20"
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
                        <p className="text-white/60 font-sans">Turning Ideas into Digital Reality.</p>
                        <p className="text-white/60 font-sans">Balangir, India</p>
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
                    <h4 className="text-white font-bold mb-2 text-sm">Contact</h4>
                    <div className="text-white/60 text-sm font-sans font-semibold">
                        <a href="mailto:contact@codeyouridea.com" onClick={() => analytics.trackContactClick('email')} className="text-white/60 hover:text-white transition-colors">
                            Contact Email
                        </a>
                    </div>
                    <div className="text-white/60 text-sm font-sans font-semibold">
                        <a href="tel:+916370510539" onClick={() => analytics.trackContactClick('phone')} className="text-white/60 hover:text-white transition-colors">
                            Phone Number
                        </a>
                    </div>
                    <a href="https://wa.me/916370510539" onClick={() => analytics.trackContactClick('whatsapp')} className="text-white/60 hover:text-white transition-colors text-sm font-sans font-semibold">
                        WhatsApp
                    </a>
                </div>

                {/* Column 3: Quick Links */}
                <div className="lg:col-span-1 flex flex-col gap-4">
                    <h4 className="text-white font-bold mb-2 text-sm">Company</h4>
                    <FooterLink href="#about">About Us</FooterLink>
                    <FooterLink href="#portfolio">Portfolio</FooterLink>
                    <FooterLink href="#pricing">Pricing</FooterLink>
                </div>

                {/* Column 4: More */}
                <div className="lg:col-span-1 flex flex-col gap-4">
                    <h4 className="text-white font-bold mb-2 text-sm">Legal</h4>
                    <FooterLink href="#">Privacy Policy</FooterLink>
                    <FooterLink href="#">Terms of Service</FooterLink>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
                <p className="text-white/60 text-sm font-sans">© 2025 Code Your Idea. All Rights Reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <span className="text-white/60 text-sm font-sans">Let's go digital with Code Your Idea</span>
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

const FooterLink = ({ children, href, onClick, className = "" }) => (
    <a
        href={href}
        onClick={onClick}
        className={`text-white/60 hover:text-white transition-colors text-sm font-medium block font-sans ${className}`}
    >
        {children}
    </a>
);

export default ContactFooterSection;