import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        const message = encodeURIComponent("Hi, I'd like to share my concern.");
        window.open(`https://wa.me/8291281959?text=${message}`, '_blank');
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, x: 20, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 20, scale: 0.8 }}
                        className="bg-white text-charcoal px-4 py-2 rounded-xl shadow-lg border border-gray-100 font-medium text-sm whitespace-nowrap"
                    >
                        Share your concern
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={handleClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle size={28} strokeWidth={2.5} />
            </motion.button>
        </div>
    );
};

export default WhatsAppButton;
