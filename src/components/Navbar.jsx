import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "/logo-w.png";

const navLinks = [
    { label: "Our Work", href: "#portfolio", isHash: true },
    { label: "Solutions", href: "#services", isHash: true },
    { label: "Process", href: "#process", isHash: true },
    { label: "Testimonials", href: "#testimonials", isHash: true },
    { label: "Blog", href: "/blog", isHash: false },
    { label: "Contact", href: "#contact", isHash: true },
];

const scrollToSection = (href) => {
    if (href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
    }
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: "smooth" });
    }
};

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (link) => {
        setSidebarOpen(false);

        if (link.isHash) {
            // Handle hash links (scroll to section)
            scrollToSection(link.href);
        } else {
            // Handle route links (navigate to page)
            navigate(link.href);
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full flex items-center justify-between transition-all duration-300 z-50 px-4 md:px-8
                ${scrolled
                    ? "backdrop-blur-md bg-black/40 border-b border-white/10 py-2 md:py-3"
                    : "bg-transparent py-4 md:py-6"}
            `}
        >
            {/* Logo */}
            <div className="flex items-center gap-2">
                <Link to="/">
                    <img src={logo} alt="CodeYourIdea Logo" className="h-10 w-auto" />
                </Link>
            </div>
            {/* Desktop Nav */}
            <ul className="hidden md:flex gap-8 text-lg font-medium text-white">
                {navLinks.map((link) => (
                    <li key={link.label}>
                        {link.isHash ? (
                            <a
                                href={link.href}
                                className="relative text-white hover:text-white transition-colors duration-200 group"
                                onClick={e => {
                                    e.preventDefault();
                                    handleNavClick(link);
                                }}
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-futuristic-blue-400 to-futuristic-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ) : (
                            <Link
                                to={link.href}
                                className="relative text-white hover:text-white transition-colors duration-200 group"
                                onClick={() => handleNavClick(link)}
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-futuristic-blue-400 to-futuristic-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        )}
                    </li>
                ))}
            </ul>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
                <button className="px-6 py-2 text-white border border-white/30 rounded-lg hover:bg-white/10 transition-all duration-200">
                    Log In
                </button>
                <button className="px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200">
                    Start Project
                </button>
            </div>
            {/* Hamburger Icon */}
            <button
                className="md:hidden flex flex-col justify-center items-center w-10 h-10 group relative z-50"
                aria-label="Open menu"
                onClick={() => setSidebarOpen((open) => !open)}
            >
                <span
                    className={`block h-0.5 w-7 bg-white rounded transition-all duration-300 ${sidebarOpen ? "rotate-45 translate-y-2" : ""}`}
                ></span>
                <span
                    className={`block h-0.5 w-7 bg-white rounded transition-all duration-300 my-1 ${sidebarOpen ? "opacity-0" : "opacity-100"}`}
                ></span>
                <span
                    className={`block h-0.5 w-7 bg-white rounded transition-all duration-300 ${sidebarOpen ? "-rotate-45 -translate-y-2" : ""}`}
                ></span>
            </button>
            {/* Sidebar Overlay */}
            <div
                className={`fixed inset-0 bg-black/40 transition-opacity duration-300 z-40 ${sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                onClick={() => setSidebarOpen(false)}
                aria-hidden="true"
            ></div>
            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-full w-72 backdrop-blur-xl bg-black/60 border-r border-white/10 shadow-2xl z-50 transform transition-transform duration-300 flex flex-col pt-16 px-8 gap-8 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
                aria-label="Sidebar menu"
            >
                <ul className="flex flex-col gap-6 text-xl font-semibold text-white">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                className="relative text-white hover:text-white transition-colors duration-200 group inline-block"
                                onClick={e => {
                                    e.preventDefault();
                                    handleNavClick(link);
                                }}
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-futuristic-blue-400 to-futuristic-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                    ))}
                </ul>
            </aside>
        </nav>
    );
};

export default Navbar; 