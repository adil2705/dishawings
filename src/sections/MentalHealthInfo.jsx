import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart, Users } from 'lucide-react';

const MentalHealthInfo = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const cards = [
        {
            placeholderText: "Emotional Wellbeing",
            title: "Emotional Health",
            description: "Managing emotions, stress, and maintaining positive outlook",
            icon: Heart
        },
        {
            placeholderText: "Psychological Balance",
            title: "Psychological Health",
            description: "Cognitive function, clarity of thought, and mental processes",
            icon: Brain
        },
        {
            placeholderText: "Social Connections",
            title: "Social Wellbeing",
            description: "Building relationships and community connections",
            icon: Users
        }
    ];

    return (
        <section id="mental-health" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div {...fadeIn} className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-4">What is Mental Health?</h2>
                    <p className="text-gray-500 text-lg">Understanding mental wellness and its importance in our daily lives</p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-lavender-200"
                        >
                            {/* Placeholder Area */}
                            <div className="bg-lavender-50 rounded-2xl h-48 mb-6 flex flex-col items-center justify-center text-center p-4 group-hover:bg-lavender-100 transition-colors">
                                <card.icon className="w-12 h-12 text-lavender-400 group-hover:text-lavender-600 transition-colors mb-3" />
                                <span className="text-lavender-600 font-medium text-sm">{card.placeholderText}</span>
                            </div>

                            {/* Content */}
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-charcoal mb-2">{card.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MentalHealthInfo;
