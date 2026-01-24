import React from 'react';
import { motion } from 'framer-motion';
import { Award, Globe, Clock } from 'lucide-react';

const CounselorCard = ({ counselor, onSelect, services }) => {
    const getSpecializationNames = () => {
        return counselor.specializations
            .map(id => services.find(s => s.id === id)?.name)
            .filter(Boolean)
            .join(', ');
    };

    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={onSelect}
        >
            <div className="flex items-start gap-4">
                <img
                    src={counselor.photo}
                    alt={counselor.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-lavender-200"
                />
                <div className="flex-1">
                    <h3 className="text-xl font-semibold text-charcoal mb-1">{counselor.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                        <Award size={14} className="text-lavender-500" />
                        <span>{counselor.experience} experience</span>
                    </div>
                </div>
            </div>

            <div className="mt-4 space-y-3">
                <div>
                    <p className="text-xs font-medium text-gray-500 mb-1">Specializations</p>
                    <p className="text-sm text-charcoal line-clamp-2">{getSpecializationNames()}</p>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Globe size={14} className="text-lavender-500" />
                    <span>{counselor.languages.join(', ')}</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock size={14} className="text-lavender-500" />
                    <span>{counselor.availability}</span>
                </div>
            </div>

            <button className="mt-4 w-full bg-lavender-500 hover:bg-lavender-600 text-white py-2 rounded-full font-medium transition-colors">
                Book Session
            </button>
        </motion.div>
    );
};

export default CounselorCard;
