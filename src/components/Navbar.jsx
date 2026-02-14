import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "/logo-w.png";

const navLinks = [
    { label: "About Us", href: "#about", isHash: true },
    { label: "Our Work", href: "#portfolio", isHash: true },
    { label: "Pricing", href: "#pricing", isHash: true },
    { label: "Testimonials", href: "#testimonials", isHash: true },
    { label: "Career", href: "/career", isHash: false },
    { label: "Contact Us", href: "#contact", isHash: true },
];

const scrollToSection = (href) => {
    if (href === "#" || href === "") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
    }
    const id = href.replace("#", "");
    // Try multiple times in case element isn't loaded yet
    const attemptScroll = (attempts = 0) => {
        const el = document.getElementById(id);
        if (el) {
            // Add offset for fixed navbar
            const yOffset = -80;
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        } else if (attempts < 5) {
            // Retry after a short delay
            setTimeout(() => attemptScroll(attempts + 1), 100);
        }
    };
    attemptScroll();
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
            // Always navigate to home page first if not already there
            if (location.pathname !== '/') {
                // Navigate to home page with hash in URL
                navigate(`/${link.href}`);
                // Wait for navigation to complete, then scroll to section
                setTimeout(() => {
                    scrollToSection(link.href);
                }, 300);
            } else {
                // We're already on home page, update URL and scroll
                window.history.pushState(null, '', link.href);
                scrollToSection(link.href);
            }
        } else {
            // Handle route links (navigate to page and scroll to top)
            navigate(link.href);
            // Scroll to top when navigating to a new page
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full flex items-center justify-between transition-all duration-300 z-50 px-4 nav:px-8
                ${scrolled
                    ? "backdrop-blur-md bg-black/40 border-b border-white/10 py-2 nav:py-3"
                    : "bg-transparent py-4 nav:py-6"}
            `}
        >
            {/* Logo */}
            <div className="flex items-center gap-2">
                <Link to="/">
                    <img src={logo} alt="CodeYourIdea Logo" className="cyi-logo h-10 w-auto" />
                </Link>
            </div>
            {/* Desktop Nav */}
            <ul className="hidden nav:flex gap-8 text-lg font-medium text-white">
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
            <div className="hidden nav:flex items-center gap-4">
                <a
                    href="https://wa.me/916370510539"
                    target="_blank"
                    rel="noreferrer"
                    className="discuss-btn px-6 sm:px-7 py-3 rounded-full border border-white text-white font-semibold transition-all duration-200 ease-in-out hover:bg-white/10 hover:backdrop-blur-sm hover:text-white focus:text-white active:text-white"
                >
                    Let's Discuss
                </a>
            </div>
            {/* Hamburger Icon */}
            <button
                className="nav:hidden flex flex-col justify-center items-center w-10 h-10 group relative z-50"
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
                            {link.isHash ? (
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
                            ) : (
                                <Link
                                    to={link.href}
                                    className="relative text-white hover:text-white transition-colors duration-200 group inline-block"
                                    onClick={() => handleNavClick(link)}
                                >
                                    {link.label}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-futuristic-blue-400 to-futuristic-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
                <a
                    href="https://wa.me/916370510539"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto mb-10 px-6 py-3 rounded-full border border-white text-white font-semibold transition-all duration-200 ease-in-out hover:bg-white/10 hover:backdrop-blur-sm hover:text-white focus:text-white active:text-white text-center"
                >
                    Let's Discuss
                </a>
            </aside>
        </nav>
    );
};

export default Navbar; 