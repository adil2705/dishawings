import React, { useState, useRef, useEffect } from 'react';
import { Music, VolumeX, Volume2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BackgroundMusic = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const [hasInteracted, setHasInteracted] = useState(false);

    // Calming ambient music URL
    // Using a reliable royalty-free source for "Ambient Piano" or similar
    const musicUrl = "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=meditation-impromptu-01-121819.mp3";

    useEffect(() => {
        // Attempt to auto-play at low volume on component mount if allowed (rarely works without interaction)
        // or just set up the audio
        if (audioRef.current) {
            audioRef.current.volume = 0.4; // Set initial volume to 40% (unobtrusive)
        }

        // Add interaction listener to start music if we want "click anywhere to play" behavior
        // But for better UX, we'll stick to the button control
    }, []);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => console.log("Audio play failed:", e));
        }
        setIsPlaying(!isPlaying);
        setHasInteracted(true);
    };

    return (
        <div className="fixed bottom-6 left-6 z-50">
            <audio ref={audioRef} loop src={musicUrl} />

            <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={togglePlay}
                className={`flex items-center gap-2 px-4 py-3 rounded-full shadow-lg backdrop-blur-md border transition-all duration-300 ${isPlaying
                        ? 'bg-lavender-600/90 text-white border-lavender-500 shadow-lavender-300/50'
                        : 'bg-white/80 text-charcoal border-white/50 hover:bg-white'
                    }`}
            >
                <div className={`relative ${isPlaying ? 'animate-pulse' : ''}`}>
                    {isPlaying ? <Volume2 size={20} /> : <Music size={20} />}
                </div>

                <span className={`text-sm font-medium ${isPlaying ? '' : 'hidden md:inline'}`}>
                    {isPlaying ? 'Playing Music' : 'Play Music'}
                </span>

                {isPlaying && (
                    <span className="flex gap-0.5 h-3 items-end">
                        <motion.span
                            animate={{ height: [4, 12, 4] }}
                            transition={{ repeat: Infinity, duration: 1 }}
                            className="w-0.5 bg-white rounded-full"
                        />
                        <motion.span
                            animate={{ height: [6, 16, 6] }}
                            transition={{ repeat: Infinity, duration: 1.2, delay: 0.2 }}
                            className="w-0.5 bg-white rounded-full"
                        />
                        <motion.span
                            animate={{ height: [4, 10, 4] }}
                            transition={{ repeat: Infinity, duration: 0.8, delay: 0.4 }}
                            className="w-0.5 bg-white rounded-full"
                        />
                    </span>
                )}
            </motion.button>

            {!hasInteracted && !isPlaying && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 2, duration: 0.5 }}
                    className="absolute bottom-full left-0 mb-3 w-48 bg-white p-3 rounded-xl shadow-xl border border-lavender-100 pointer-events-none"
                >
                    <p className="text-xs text-gray-600">
                        🎵 enhance your experience with calming music
                    </p>
                    <div className="absolute bottom-[-6px] left-6 w-3 h-3 bg-white border-b border-r border-lavender-100 transform rotate-45"></div>
                </motion.div>
            )}
        </div>
    );
};

export default BackgroundMusic;
