import React from "react";
import { showQuoteModal, showLetsTalkModal } from "../utils/modalUtils";
import analytics from "../utils/analytics";

const LetsBuildSuccessSection = () => (
    <section className="w-full flex items-center justify-center py-8 px-4">
        <div className="w-full max-w-6xl mx-auto rounded-2xl backdrop-blur-sm bg-gradient-to-r from-futuristic-blue-600/30 via-black/40 to-futuristic-purple-600/30 border border-white/10 shadow-futuristic flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 gap-8">
            {/* Left: Text Content */}
            <div className="flex-1 flex flex-col items-start justify-center text-left">
                <h5 className="text-futuristic-cyan-200 text-lg font-semibold tracking-widest mb-2 uppercase">Ready to Launch Your Idea?</h5>
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">Let's Build Your Digital Future</h2>
                <p className="text-lg text-white/80 mb-4 max-w-xl">
                    Whether you need a stunning website or a powerful mobile app, we're here to turn your ideas into reality with clean code and smart design.
                </p>
            </div>
            {/* Right: Buttons */}
            <div className="flex-1 flex items-center justify-center md:justify-end w-full">
                <div className="flex flex-col sm:flex-row gap-4">
                    <button
                        onClick={() => {
                            analytics.trackButtonClick('get_quote', 'success_section');
                            showQuoteModal();
                        }}
                        className="btn-futuristic font-semibold px-8 py-4 rounded-full text-lg"
                    >
                        Get a Quote
                    </button>
                    <button
                        onClick={() => {
                            analytics.trackButtonClick('lets_talk', 'success_section');
                            showLetsTalkModal();
                        }}
                        className="border-2 border-futuristic-blue-400 text-white hover:bg-futuristic-blue-500/20 font-semibold px-8 py-4 rounded-full text-lg transition-all hover:scale-105"
                    >
                        Let's Discuss
                    </button>
                </div>
            </div>
        </div>
    </section>
);

export default LetsBuildSuccessSection; 