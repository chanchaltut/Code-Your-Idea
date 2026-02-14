import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { MdWork, MdLocationOn, MdAccessTime, MdAttachMoney, MdPerson, MdAssignment, MdBusinessCenter } from 'react-icons/md';
import { handleCareerApplication } from '../utils/modalUtils';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Navbar from '../components/Navbar';
import Footer from '../components/ContactFooterSection';

// Job listings data - easily extensible for future roles
const jobListings = [
    {
        id: 'sales-executive',
        title: 'Sales Executive',
        location: 'Remote / Balangir, Odisha',
        type: 'Full-time',
        experience: '1-3 years',
        description: 'We are looking for a dynamic Sales Executive to join our team and help drive business growth through client acquisition and relationship management.',
        responsibilities: [
            'Identify and pursue new business opportunities',
            'Build and maintain strong client relationships',
            'Present our services to potential clients',
            'Negotiate contracts and close deals',
            'Meet and exceed sales targets',
            'Collaborate with the team to ensure client satisfaction'
        ],
        requirements: [
            'Proven experience in sales, preferably in IT/digital services',
            'Excellent communication and interpersonal skills',
            'Strong negotiation and closing abilities',
            'Self-motivated with a results-driven approach',
            'Ability to work independently and as part of a team',
            'Proficiency in CRM software and sales tools',
            'Bachelor\'s degree in Business, Marketing, or related field preferred'
        ],
        benefits: [
            'Competitive salary with performance-based incentives',
            'Flexible working hours',
            'Remote work options',
            'Professional development opportunities',
            'Collaborative and innovative work environment'
        ]
    }
];

const CareerPage = () => {
    const [selectedJob, setSelectedJob] = useState(jobListings[0].id);
    const [showApplicationForm, setShowApplicationForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        countryCode: '',
        position: 'sales-executive',
        experience: '',
        resume: null,
        coverLetter: '',
        linkedin: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    // Scroll to top when page loads
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const selectedJobData = jobListings.find(job => job.id === selectedJob);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) setErrors({ ...errors, [name]: '' });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) { // 5MB limit
                setErrors({ ...errors, resume: 'File size must be less than 5MB' });
                return;
            }
            if (!file.type.includes('pdf') && !file.type.includes('doc') && !file.type.includes('docx')) {
                setErrors({ ...errors, resume: 'Please upload a PDF or Word document' });
                return;
            }
            setFormData({ ...formData, resume: file });
            if (errors.resume) setErrors({ ...errors, resume: '' });
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (formData.phone && formData.phone.length < 5) {
            newErrors.phone = 'Please enter a valid phone number';
        }
        if (!formData.experience.trim()) newErrors.experience = 'Experience is required';
        if (!formData.resume) newErrors.resume = 'Resume is required';
        if (!formData.coverLetter.trim()) newErrors.coverLetter = 'Cover letter is required';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);

        const formattedPhone = formData.phone ? `+${formData.phone}` : '';

        const submissionData = {
            ...formData,
            phone: formattedPhone,
            position: selectedJobData.title
        };

        const success = await handleCareerApplication(submissionData);

        if (success) {
            setIsSubmitted(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                countryCode: '',
                position: 'sales-executive',
                experience: '',
                resume: null,
                coverLetter: '',
                linkedin: ''
            });
            setErrors({});
            setTimeout(() => {
                setIsSubmitted(false);
                setShowApplicationForm(false);
            }, 3000);
        }

        setIsSubmitting(false);
    };

    return (
        <div className="relative min-h-screen bg-black text-white text-left">
            <Navbar />
            {/* Main Content */}
            <div className="relative z-10 min-h-screen py-20 px-6 md:px-12 lg:px-24">
                <div className="w-full max-w-7xl mx-auto">


                    {/* Header */}
                    <motion.header
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-16 pb-8"
                    >
                        <h1 className="text-6xl mt-20 text-center md:text-7xl font-bold mb-4 tracking-tight text-white font-sans">
                            Join Our Team
                        </h1>
                        <p className="text-white/80 mx-auto text-lg text-center leading-relaxed font-sans max-w-3xl">
                            We're building the future of digital solutions. Join us in creating innovative products that make a difference.
                        </p>
                    </motion.header>

                    {/* Job Listings */}
                    <div ref={ref} className="space-y-8 mb-16">
                        {jobListings.map((job, index) => (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-[#111111] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300"
                            >
                                <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-6">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center">
                                                <MdWork className="text-blue-400 text-2xl" />
                                            </div>
                                            <div>
                                                <h2 className="text-3xl font-bold text-white font-sans">{job.title}</h2>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-4 text-sm text-white/60 font-sans mb-4">
                                            <div className="flex items-center gap-2">
                                                <MdLocationOn className="text-blue-400 text-lg" />
                                                <span>{job.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MdAccessTime className="text-blue-400 text-lg" />
                                                <span>{job.type}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MdPerson className="text-blue-400 text-lg" />
                                                <span>{job.experience} experience</span>
                                            </div>
                                        </div>
                                        <p className="text-white/80 leading-relaxed font-sans mb-6">{job.description}</p>
                                    </div>
                                    <button
                                        onClick={() => {
                                            setSelectedJob(job.id);
                                            setShowApplicationForm(true);
                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                        }}
                                        className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 whitespace-nowrap font-sans"
                                    >
                                        Apply Now
                                    </button>
                                </div>

                                {/* Job Details */}
                                <div className="grid md:grid-cols-2 gap-8 mt-8 pt-8 border-t border-white/10">
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-4 font-sans flex items-center gap-2">
                                            <MdAssignment className="text-blue-400 text-2xl" />
                                            Key Responsibilities
                                        </h3>
                                        <ul className="space-y-2 text-white/80 font-sans">
                                            {job.responsibilities.map((resp, idx) => (
                                                <li key={idx} className="flex items-start gap-2">
                                                    <span className="text-blue-400 mt-1.5">•</span>
                                                    <span>{resp}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-4 font-sans flex items-center gap-2">
                                            <MdBusinessCenter className="text-blue-400 text-2xl" />
                                            Requirements
                                        </h3>
                                        <ul className="space-y-2 text-white/80 font-sans">
                                            {job.requirements.map((req, idx) => (
                                                <li key={idx} className="flex items-start gap-2">
                                                    <span className="text-blue-400 mt-1.5">•</span>
                                                    <span>{req}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Benefits */}
                                <div className="mt-8 pt-8 border-t border-white/10">
                                    <h3 className="text-xl font-bold text-white mb-4 font-sans flex items-center gap-2">
                                        <MdAttachMoney className="text-blue-400 text-2xl" />
                                        What We Offer
                                    </h3>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {job.benefits.map((benefit, idx) => (
                                            <div key={idx} className="flex items-start gap-2 text-white/80 font-sans">
                                                <FaCheckCircle className="text-blue-400 mt-1 flex-shrink-0" />
                                                <span>{benefit}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Application Form Modal */}
                    {showApplicationForm && (
                        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start justify-center p-4 overflow-y-auto pt-20">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="bg-[#111111] border border-white/10 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto mt-20"
                            >
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-3xl font-bold text-white font-sans">
                                        Apply for {selectedJobData?.title}
                                    </h2>
                                    <button
                                        onClick={() => {
                                            setShowApplicationForm(false);
                                            setIsSubmitted(false);
                                        }}
                                        className="text-white/60 hover:text-white transition-colors text-2xl"
                                    >
                                        ×
                                    </button>
                                </div>

                                {isSubmitted ? (
                                    <div className="text-center py-12">
                                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                                            <FaCheckCircle className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2 font-sans">Application Submitted!</h3>
                                        <p className="text-white/80 font-sans">Thank you for your interest. We'll review your application and get back to you soon.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-white/80 text-sm font-semibold mb-2 font-sans">
                                                    Full Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className={`w-full bg-[#1c1c1e] border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors placeholder-gray-500 font-sans`}
                                                    placeholder="John Doe"
                                                />
                                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                            </div>
                                            <div>
                                                <label className="block text-white/80 text-sm font-semibold mb-2 font-sans">
                                                    Email Address *
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className={`w-full bg-[#1c1c1e] border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors placeholder-gray-500 font-sans`}
                                                    placeholder="john@example.com"
                                                />
                                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-white/80 text-sm font-semibold mb-2 font-sans">
                                                Phone Number
                                            </label>
                                            <div className="relative">
                                                <style>{`
                                                    .react-tel-input {
                                                        font-family: inherit !important;
                                                        width: 100% !important;
                                                        position: relative !important;
                                                    }
                                                    .react-tel-input .form-control {
                                                        width: 100% !important;
                                                        height: auto !important;
                                                        padding-top: 0.75rem !important;
                                                        padding-bottom: 0.75rem !important;
                                                        padding-left: 58px !important;
                                                        background-color: #1c1c1e !important;
                                                        border: 1px solid ${errors.phone ? '#ef4444' : 'rgba(255, 255, 255, 0.1)'} !important;
                                                        border-radius: 0.75rem !important;
                                                        color: white !important;
                                                        font-size: 0.875rem !important;
                                                        line-height: 1.25rem !important;
                                                        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
                                                    }
                                                    .react-tel-input .form-control:focus {
                                                        border-color: #3b82f6 !important;
                                                        box-shadow: none !important;
                                                    }
                                                    .react-tel-input .form-control::placeholder {
                                                        color: #6b7280 !important;
                                                    }
                                                    .react-tel-input .flag-dropdown {
                                                        background-color: transparent !important;
                                                        border: none !important;
                                                        border-radius: 0.75rem 0 0 0.75rem !important;
                                                        bottom: 2px !important;
                                                        top: 2px !important;
                                                        left: 1px !important;
                                                    }
                                                    .react-tel-input .flag-dropdown.open {
                                                        background-color: transparent !important;
                                                        width: auto !important;
                                                    }
                                                    .react-tel-input .selected-flag {
                                                        background-color: transparent !important;
                                                        border-radius: 0.75rem 0 0 0.75rem !important;
                                                        width: 46px !important;
                                                        padding-left: 14px !important;
                                                    }
                                                    .react-tel-input .selected-flag:hover, 
                                                    .react-tel-input .selected-flag:focus {
                                                        background-color: rgba(255, 255, 255, 0.05) !important;
                                                    }
                                                    .react-tel-input .selected-flag .arrow {
                                                        border-top-color: #9ca3af !important;
                                                    }
                                                    .react-tel-input .selected-flag.open .arrow {
                                                        border-bottom-color: #9ca3af !important;
                                                    }
                                                    .react-tel-input .country-list {
                                                        position: absolute !important;
                                                        top: 100% !important;
                                                        left: 0 !important;
                                                        z-index: 9999 !important;
                                                        margin-top: 8px !important;
                                                        background-color: #1c1c1e !important;
                                                        border: 1px solid rgba(255, 255, 255, 0.1) !important;
                                                        color: white !important;
                                                        border-radius: 0.75rem !important;
                                                        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5) !important;
                                                        max-width: 220px !important;
                                                        max-height: 240px !important;
                                                        text-align: left !important;
                                                    }
                                                    .react-tel-input .country-list .country {
                                                        padding: 10px 12px !important;
                                                        transition: background-color 0.15s ease !important;
                                                    }
                                                    .react-tel-input .country-list .country:hover {
                                                        background-color: rgba(255, 255, 255, 0.1) !important;
                                                    }
                                                    .react-tel-input .country-list .country.highlight {
                                                        background-color: rgba(59, 130, 246, 0.2) !important;
                                                    }
                                                    .react-tel-input .country-list .country-name {
                                                        color: #e5e7eb !important;
                                                        font-size: 0.875rem !important;
                                                    }
                                                    .react-tel-input .country-list .dial-code {
                                                        color: #9ca3af !important;
                                                    }
                                                    .react-tel-input .country-list .search {
                                                        background-color: #2c2c2e !important;
                                                        padding: 8px !important;
                                                    }
                                                    .react-tel-input .country-list .search-box {
                                                        background-color: #111111 !important;
                                                        border: 1px solid rgba(255, 255, 255, 0.1) !important;
                                                        color: white !important;
                                                        border-radius: 6px !important;
                                                        width: 100% !important;
                                                        padding: 8px 12px !important;
                                                        margin: 0 !important;
                                                    }
                                                    .react-tel-input .country-list .search-box::placeholder {
                                                        color: #6b7280 !important;
                                                    }
                                                `}</style>
                                                <PhoneInput
                                                    country="in"
                                                    countryCodeEditable={false}
                                                    value={formData.phone}
                                                    onChange={(value) => {
                                                        setFormData({ ...formData, phone: value });
                                                        if (errors.phone) setErrors({ ...errors, phone: '' });
                                                    }}
                                                    inputProps={{
                                                        name: 'phone',
                                                        required: false
                                                    }}
                                                    enableSearch={true}
                                                    disableSearchIcon={true}
                                                    searchPlaceholder="Search..."
                                                    placeholder="Phone number"
                                                    containerClass="!w-full"
                                                />
                                            </div>
                                            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-white/80 text-sm font-semibold mb-2 font-sans">
                                                Years of Experience *
                                            </label>
                                            <input
                                                type="text"
                                                name="experience"
                                                value={formData.experience}
                                                onChange={handleChange}
                                                className={`w-full bg-[#1c1c1e] border ${errors.experience ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors placeholder-gray-500 font-sans`}
                                                placeholder="e.g., 2 years in sales"
                                            />
                                            {errors.experience && <p className="text-red-500 text-xs mt-1">{errors.experience}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-white/80 text-sm font-semibold mb-2 font-sans">
                                                LinkedIn Profile (Optional)
                                            </label>
                                            <input
                                                type="url"
                                                name="linkedin"
                                                value={formData.linkedin}
                                                onChange={handleChange}
                                                className="w-full bg-[#1c1c1e] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors placeholder-gray-500 font-sans"
                                                placeholder="https://linkedin.com/in/yourprofile"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-white/80 text-sm font-semibold mb-2 font-sans">
                                                Upload Resume * (PDF or DOC, max 5MB)
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="file"
                                                    accept=".pdf,.doc,.docx"
                                                    onChange={handleFileChange}
                                                    className="w-full bg-[#1c1c1e] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer font-sans"
                                                />
                                            </div>
                                            {errors.resume && <p className="text-red-500 text-xs mt-1">{errors.resume}</p>}
                                            {formData.resume && (
                                                <p className="text-green-400 text-xs mt-1 flex items-center gap-1">
                                                    <FaCheckCircle /> {formData.resume.name}
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-white/80 text-sm font-semibold mb-2 font-sans">
                                                Cover Letter *
                                            </label>
                                            <textarea
                                                name="coverLetter"
                                                value={formData.coverLetter}
                                                onChange={handleChange}
                                                rows="5"
                                                className={`w-full bg-[#1c1c1e] border ${errors.coverLetter ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors resize-none placeholder-gray-500 font-sans`}
                                                placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                                            />
                                            {errors.coverLetter && <p className="text-red-500 text-xs mt-1">{errors.coverLetter}</p>}
                                        </div>

                                        <div className="flex gap-4 pt-4">
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="flex-1 bg-white text-black font-bold rounded-full py-4 hover:bg-gray-200 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed font-sans"
                                            >
                                                {isSubmitting ? 'Submitting...' : 'Submit Application'}
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setShowApplicationForm(false);
                                                    setIsSubmitted(false);
                                                }}
                                                className="px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300 font-sans"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </motion.div>
                        </div>
                    )}

                    {/* Footer Note */}
                    <div className="text-center text-white text-sm pt-16 mt-16 border-t border-white/10 font-sans">
                        <p className='text-white/60'>Don't see a role that fits? We're always looking for talented individuals. Reach out to us at <a href="mailto:careers@codeyouridea.com" className="text-blue-400 hover:text-blue-300 underline">careers@codeyouridea.com</a></p>
                    </div>
                </div>
            </div>
            <Footer id="footer" />
        </div>
    );
};

export default CareerPage;

