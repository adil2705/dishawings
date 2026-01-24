import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const VideoSection = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const videoRef = useRef(null);

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
        <section className="py-20 px-4 bg-white overflow-hidden relative">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-lavender-200 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-lavender-200 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-lavender-100 text-lavender-700 text-sm font-bold tracking-wide mb-6">
                            OUR STORY
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-tight">
                            Finding Light in the <span className="text-lavender-600">Darkness</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            At DishAWings, we believe that every soul deserves peace. Our journey began with a simple mission: to listen to those who are unheard.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Watch how we're transforming lives through compassion, counseling, and a community that cares. Join us in our duty to serve creation and bring mental peace to the world.
                        </p>

                        <div className="flex flex-wrap gap-6">
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-lavender-600">500+</span>
                                <span className="text-gray-500 text-sm">Lives Touched</span>
                            </div>
                            <div className="bg-gray-200 w-px h-12" />
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-lavender-600">24/7</span>
                                <span className="text-gray-500 text-sm">Support Available</span>
                            </div>
                            <div className="bg-gray-200 w-px h-12" />
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-lavender-600">100%</span>
                                <span className="text-gray-500 text-sm">Free Counseling</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Video Player */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video group cursor-pointer" onClick={handlePlayClick}>
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
                        </div>

                        {/* Decorative Blob behind video */}
                        <div className="absolute top-10 -right-10 w-full h-full bg-lavender-600/10 rounded-2xl -z-10 transform rotate-6 scale-105" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
