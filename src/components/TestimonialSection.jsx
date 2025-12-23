import React from 'react';
import { Star, Mic, Play, ExternalLink } from 'lucide-react';
import anikBanner from "../assets/images/testimonial/anik.webp";
import rentYaard from "../assets/images/testimonial/rentyaard.png";
import sSahuBanner from "../assets/images/testimonial/s-sahu.webp";
import galaxyTutorials from "../assets/images/testimonial/galaxy-tutorials.png";
import alokBanner from "../assets/images/testimonial/alok.webp";
import tot from "../assets/images/testimonial/tot.png";
import ankitaBanner from "../assets/images/testimonial/ankita.webp";

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

                    {/* Card 5: Video Testimonial 1 - Ankitarani Deep */}
                    <YouTubeVideoCard
                        name="Ankitarani Deep"
                        date="October 05, 2025"
                        videoId="lINmr0gjcu0"
                        thumbnail={ankitaBanner}
                    />

                    {/* Card 6: Audio Player 1 */}
                    <AudioCard date="August 18, 2025" />
                </div>

                {/* --- COLUMN 3 --- */}
                <div className="flex flex-col gap-6">
                    {/* Card 7: Audio Player 2 */}
                    <AudioCard date="June 23, 2025" />

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

const YouTubeVideoCard = ({ name, date, videoId, thumbnail }) => {
    const [isPlaying, setIsPlaying] = React.useState(true);
    const [isMuted, setIsMuted] = React.useState(true);
    const [player, setPlayer] = React.useState(null);
    const [isBuffering, setIsBuffering] = React.useState(false);
    const containerRef = React.useRef(null);

    React.useEffect(() => {
        let ytPlayer = null;
        const containerId = `youtube-player-${videoId}`;

        // Load YouTube IFrame API
        const loadYouTubeAPI = () => {
            if (window.YT && window.YT.Player) {
                initializePlayer();
            } else {
                if (!document.getElementById('youtube-iframe-api')) {
                    const tag = document.createElement('script');
                    tag.id = 'youtube-iframe-api';
                    tag.src = 'https://www.youtube.com/iframe_api';
                    const firstScriptTag = document.getElementsByTagName('script')[0];
                    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                }

                window.onYouTubeIframeAPIReady = () => {
                    initializePlayer();
                };
            }
        };

        const initializePlayer = () => {
            if (containerRef.current && window.YT && window.YT.Player) {
                ytPlayer = new window.YT.Player(containerId, {
                    videoId: videoId,
                    width: '100%',
                    height: '100%',
                    playerVars: {
                        autoplay: 1,
                        mute: 1,
                        loop: 1,
                        playlist: videoId,
                        controls: 0,
                        modestbranding: 1,
                        rel: 0,
                        playsinline: 1,
                        iv_load_policy: 3,
                        showinfo: 0,
                        fs: 0,
                        cc_load_policy: 0,
                        // Quality settings - prefer best available, minimum 360p
                        vq: 'hd720', // Prefer 720p, falls back to best available
                        // Enable smooth playback
                        enablejsapi: 1,
                        // Preload for smoother playback
                        preload: 'auto',
                    },
                    events: {
                        onReady: (event) => {
                            const playerInstance = event.target;
                            setPlayer(playerInstance);

                            // Set quality to best available (minimum 360p)
                            try {
                                // Try to set quality - YouTube will use best available
                                const availableQualities = playerInstance.getAvailableQualityLevels();
                                if (availableQualities && availableQualities.length > 0) {
                                    // Prefer higher quality, but ensure at least medium (360p)
                                    const preferredQualities = ['hd720', 'hd1080', 'highres', 'medium'];
                                    for (const quality of preferredQualities) {
                                        if (availableQualities.includes(quality)) {
                                            playerInstance.setPlaybackQuality(quality);
                                            break;
                                        }
                                    }
                                    // Fallback: ensure minimum medium quality
                                    if (!availableQualities.includes('medium') && availableQualities.includes('small')) {
                                        playerInstance.setPlaybackQuality('small'); // 360p
                                    }
                                }
                            } catch (e) {
                                console.log('Quality setting handled by YouTube automatically');
                            }

                            // Ensure video plays smoothly
                            try {
                                playerInstance.playVideo();
                            } catch (e) {
                                console.log('Video autoplay initiated');
                            }
                        },
                        onStateChange: (event) => {
                            const playerInstance = event.target;
                            // 1 = playing, 2 = paused, 3 = buffering, 5 = cued
                            const state = event.data;

                            if (state === 1) { // Playing
                                setIsPlaying(true);
                                setIsBuffering(false);
                                // Ensure quality is maintained during playback
                                try {
                                    const currentQuality = playerInstance.getPlaybackQuality();
                                    if (currentQuality === 'tiny' || currentQuality === 'small') {
                                        // Try to upgrade quality if better is available
                                        const availableQualities = playerInstance.getAvailableQualityLevels();
                                        if (availableQualities && availableQualities.includes('medium')) {
                                            playerInstance.setPlaybackQuality('medium');
                                        }
                                    }
                                } catch (e) {
                                    // Quality handled automatically
                                }
                            } else if (state === 2) { // Paused
                                setIsPlaying(false);
                                setIsBuffering(false);
                            } else if (state === 3) { // Buffering
                                setIsBuffering(true);
                                // Video is buffering - ensure it continues playing when ready
                                const bufferCheck = setInterval(() => {
                                    try {
                                        const currentState = playerInstance.getPlayerState();
                                        if (currentState === 1) { // Playing
                                            setIsBuffering(false);
                                            clearInterval(bufferCheck);
                                        } else if (currentState === 3) { // Still buffering
                                            // Keep trying to play
                                            playerInstance.playVideo();
                                        } else {
                                            clearInterval(bufferCheck);
                                        }
                                    } catch (e) {
                                        clearInterval(bufferCheck);
                                    }
                                }, 500);

                                // Clear interval after 10 seconds to prevent infinite loop
                                setTimeout(() => clearInterval(bufferCheck), 10000);
                            } else if (state === 5) { // Cued
                                setIsBuffering(false);
                                // Video is cued and ready - play it
                                try {
                                    playerInstance.playVideo();
                                } catch (e) {
                                    // Continue
                                }
                            }
                        },
                        onError: (event) => {
                            // Handle errors gracefully - try to recover
                            console.log('YouTube player error:', event.data);
                            if (event.data === 150 || event.data === 101 || event.data === 100) {
                                // Video unavailable or restricted - try to reload
                                setTimeout(() => {
                                    try {
                                        if (ytPlayer) {
                                            ytPlayer.loadVideoById(videoId);
                                        }
                                    } catch (e) {
                                        console.error('Error recovering from playback error:', e);
                                    }
                                }, 2000);
                            }
                        },
                    },
                });
            }
        };

        // Create container div for YouTube player
        if (containerRef.current) {
            const playerDiv = document.createElement('div');
            playerDiv.id = containerId;
            playerDiv.style.cssText = 'position: absolute; top: 50%; left: 50%; width: 120%; height: 120%; transform: translate(-50%, -50%); pointer-events: none;';
            containerRef.current.appendChild(playerDiv);
        }

        loadYouTubeAPI();

        return () => {
            if (ytPlayer) {
                try {
                    ytPlayer.destroy();
                } catch (e) {
                    console.error('Error destroying player:', e);
                }
            }
        };
    }, [videoId]);

    const togglePlayPause = () => {
        if (player) {
            try {
                if (isPlaying) {
                    player.pauseVideo();
                } else {
                    player.playVideo();
                }
            } catch (e) {
                console.error('Error toggling play/pause:', e);
            }
        }
    };

    const toggleMute = () => {
        if (player) {
            try {
                if (isMuted) {
                    player.unMute();
                    setIsMuted(false);
                } else {
                    player.mute();
                    setIsMuted(true);
                }
            } catch (e) {
                console.error('Error toggling mute:', e);
            }
        }
    };

    return (
        <div className="relative group overflow-hidden rounded-[1.5rem] h-64 shadow-lg hover:-translate-y-1 transition-transform duration-300">
            {/* YouTube iframe container */}
            <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden rounded-[1.5rem]"></div>

            {/* Gradient overlay to maintain aesthetics */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none rounded-[1.5rem]"></div>

            {/* Buffering indicator (subtle) */}
            {isBuffering && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-5">
                    <div className="bg-black/40 backdrop-blur-sm rounded-full p-3">
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    </div>
                </div>
            )}

            {/* Custom Play/Pause, Mute, and YouTube Link Controls */}
            <div className="absolute top-4 right-4 flex gap-2 z-20">
                <button
                    onClick={toggleMute}
                    className="bg-white/20 backdrop-blur-md p-2.5 rounded-full border border-white/50 hover:bg-white/30 transition-all duration-300 flex items-center justify-center cursor-pointer"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                >
                    {isMuted ? (
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                        </svg>
                    ) : (
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                        </svg>
                    )}
                </button>
                <button
                    onClick={togglePlayPause}
                    className="bg-white/20 backdrop-blur-md p-2.5 rounded-full border border-white/50 hover:bg-white/30 transition-all duration-300 flex items-center justify-center cursor-pointer"
                    aria-label={isPlaying ? "Pause" : "Play"}
                >
                    {isPlaying ? (
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                        </svg>
                    ) : (
                        <Play className="w-5 h-5 text-white fill-white" />
                    )}
                </button>
                <a
                    href={`https://www.youtube.com/watch?v=${videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur-md p-2.5 rounded-full border border-white/50 hover:bg-white/30 transition-all duration-300 flex items-center justify-center cursor-pointer"
                    aria-label="Watch on YouTube"
                    title="Watch on YouTube"
                >
                    <ExternalLink className="w-5 h-5 text-white" />
                </a>
            </div>

            {/* Name and Date overlay */}
            <div className="absolute bottom-4 left-4 flex items-center gap-3 pointer-events-none z-10">
                <img
                    src={thumbnail}
                    alt={name}
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
                <div>
                    <h4 className="text-white font-bold text-sm">{name}</h4>
                    <p className="text-white/60 text-xs">{date}</p>
                </div>
            </div>
        </div>
    );
};

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