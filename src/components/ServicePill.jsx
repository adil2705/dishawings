import React from 'react';
import { motion } from 'framer-motion';

const ServicePill = ({ service, onClick }) => {
    return (
        <motion.div
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <div
                onClick={onClick}
                className={`
                    cursor-pointer px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2
                    bg-white text-charcoal border-2 border-lavender-200 hover:border-lavender-400 shadow-md hover:shadow-lg
                `}
            >
                <span className="text-lg">{service.icon}</span>
                <span>{service.name}</span>
            </div>
        </motion.div>
    );
};

export default ServicePill;
