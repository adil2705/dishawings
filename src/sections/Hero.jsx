import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, MessageCircle } from 'lucide-react';
import Button from '../components/Button';

const Hero = ({ onGetStarted }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const videoRef = useRef(null);

    const handleWhatsApp = () => {
        const message = encodeURIComponent("Hi, I'd like to share my concern..");
        window.open(`https://wa.me/8291281959?text=${message}`, '_blank');
    };

    const handlePlayClick = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleMuteClick = (e) => {
        e.stopPropagation();
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <section id="home" className="py-12 md:py-20 px-4 mb-12 md:mb-20">
            <div className="max-w-5xl mx-auto text-center">
                {/* Tagline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6 leading-tight"
                >
                    Reconnect with yourself,
                    <span className="text-lavender-600 block mt-2">
                        And find your wings to fly.
                    </span>
                </motion.h1>

                {/* Introduction */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed"
                >
                    This is a space to reconnect with yourself — where your body, mind, and soul come into harmony. Through mindful conversation and inner awareness, you rediscover your strength, your balance, and the wings that help you rise and move freely through life.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
                >
                    <Button onClick={onGetStarted} size="lg">
                        Get Started
                    </Button>
                    <Button onClick={handleWhatsApp} variant="secondary" size="lg" icon={MessageCircle}>
                        Chat on WhatsApp
                    </Button>
                </motion.div>

                {/* Featured Video Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="relative max-w-4xl mx-auto"
                >
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video group cursor-pointer border-4 border-white" onClick={handlePlayClick}>
                        {/* Video Element */}
                        <video
                            ref={videoRef}
                            className="w-full h-full object-cover"
                            poster="/video-thumbnail.png"
                            loop
                            onClick={(e) => e.preventDefault()}
                        >
                            <source src="https://assets.mixkit.co/videos/preview/mixkit-young-woman-doing-yoga-outdoors-39726-large.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        {/* Overlay Darkening */}
                        <div className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`} />

                        {/* Play Button */}
                        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 shadow-lg"
                            >
                                {isPlaying ? (
                                    <Pause className="text-white fill-white ml-0.5" size={32} />
                                ) : (
                                    <Play className="text-white fill-white ml-1" size={32} />
                                )}
                            </motion.div>
                        </div>

                        {/* Mute Control */}
                        <div className="absolute bottom-4 right-4 z-20">
                            <button
                                onClick={handleMuteClick}
                                className="p-2 bg-black/50 hover:bg-black/70 rounded-full text-white backdrop-blur-sm transition-colors"
                            >
                                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                            </button>
                        </div>

                        {/* Video Caption Badge */}
                        <div className={`absolute top-4 left-4 z-20 transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md text-white/90 text-sm font-bold tracking-wide border border-white/20">
                                OUR STORY
                            </span>
                        </div>
                    </div>

                    <p className="text-sm text-gray-500 mt-4 font-medium">
                        Discover how DishAWings helps you find inner peace
                    </p>

                    {/* Decorative Elements */}
                    <div className="absolute -top-10 -left-10 w-20 h-20 bg-lavender-200 rounded-full blur-2xl opacity-50 -z-10" />
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-lavender-300 rounded-full blur-3xl opacity-40 -z-10" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
