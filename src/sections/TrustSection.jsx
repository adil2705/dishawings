import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Award, Heart } from 'lucide-react';
import { trustPoints } from '../data/mockData';

const iconMap = {
    Shield,
    Lock,
    Award,
    Heart,
};

const TrustSection = () => {
    return (
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-4">
                        Your Trust, Our Priority
                    </h2>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        We are committed to providing a safe, confidential, and supportive environment for everyone.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {trustPoints.map((point, index) => {
                        const Icon = iconMap[point.icon];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="w-12 h-12 bg-lavender-100 rounded-full flex items-center justify-center mb-4">
                                    <Icon size={24} className="text-lavender-600" />
                                </div>
                                <h3 className="text-lg font-semibold text-charcoal mb-2">{point.title}</h3>
                                <p className="text-sm text-gray-600">{point.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
