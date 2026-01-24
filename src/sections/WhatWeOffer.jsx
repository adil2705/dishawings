import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import wellnessImg from '../assets/wellness_illustration.png';

const WhatWeOffer = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const offerItems = [
        "Trained professionals – personalized counselors & Clinical Psychologists",
        "Yoga and Meditation Experts",
        "Life Coaches",
        "Mental Health Creative Skills Experts",
        "Camps and Workshops",
        "Health Advocates",
        "Geriatric Care",
        "Clinical Dietetics and Nutritionists",
        "Fitness Experts",
        "Caregivers"
    ];

    return (
        <section id="what-we-offer" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Services Header */}
                <motion.div {...fadeIn} className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-4">How Can We Support You?</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                            <img
                                src={wellnessImg}
                                alt="Mental Health and Wellness Services"
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {/* Decorative background element */}
                        <div className="absolute -z-10 top-10 -left-10 w-full h-full bg-lavender-200 rounded-3xl" />
                    </motion.div>

                    {/* Right Column - Content */}
                    <motion.div
                        {...fadeIn}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-2 uppercase tracking-wide">
                                What We Offer
                            </h2>
                            <div className="w-20 h-1.5 bg-lavender-500 rounded-full" />
                        </div>

                        <div className="space-y-4">
                            {offerItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="mt-1">
                                        <CheckCircle2 className="w-6 h-6 text-lavender-600" />
                                    </div>
                                    <p className="text-lg text-gray-700 font-medium leading-relaxed">
                                        {item}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeOffer;
