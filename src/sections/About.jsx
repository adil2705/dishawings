import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Heart, Users, Target, Lightbulb } from 'lucide-react';

const About = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <section id="about" className="py-20 px-4">
            <div className="max-w-6xl mx-auto space-y-20">

                {/* About Us Header & Intro */}
                <motion.div {...fadeIn} className="text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-4">About Us</h2>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                        Founded by <span className="font-semibold text-charcoal">Sangeeta Wadhwa</span>, a seasoned mental health professional with over 20 years of experience as a practicing Psychologist and Counsellor, Let’s Talk is dedicated to compassionate and effective mental health care.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        We collaborate with a strong network of clinical psychologists and psychotherapists, bringing together some of the most experienced mental health professionals in the field. Our team is committed to providing ethical, evidence-based, and personalized care to help individuals achieve meaningful and lasting change.
                    </p>
                </motion.div>

                {/* Goals */}
                <motion.div {...fadeIn} className="bg-white/50 rounded-3xl p-8 md:p-12 shadow-sm border border-lavender-200">
                    <div className="flex items-center gap-3 mb-8">
                        <Target className="text-lavender-600 w-8 h-8" />
                        <h3 className="text-2xl font-bold">Our Goals</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            "To create awareness about mental health",
                            "To transform the lives of individuals who are suffering and in need",
                            "To ensure that mental health support reaches underserved and deprived sections of society"
                        ].map((goal, index) => (
                            <div key={index} className="flex gap-4 items-start">
                                <div className="mt-1 bg-lavender-100 p-2 rounded-full">
                                    <CheckCircle size={20} className="text-lavender-600" />
                                </div>
                                <p className="text-gray-700 font-medium">{goal}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>



                {/* Vision & Mission Cards */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Vision */}
                    <motion.div
                        {...fadeIn}
                        className="bg-lavender-200/30 rounded-3xl p-8 md:p-10 border border-lavender-200"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Lightbulb className="text-lavender-600 w-8 h-8" />
                            <h3 className="text-2xl font-bold">Vision</h3>
                        </div>
                        <blockquote className="text-xl font-medium text-charcoal mb-4 ">
                            “Treating everyone with inherent worth and compassion.”
                        </blockquote>
                        <p className="text-gray-700">
                            A community where everyone feels mentally healthy, understood, and supported.
                        </p>
                    </motion.div>

                    {/* Mission */}
                    <motion.div
                        {...fadeIn}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-charcoal text-white rounded-3xl p-8 md:p-10"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Users className="text-lavender-400 w-8 h-8" />
                            <h3 className="text-2xl font-bold text-white">Mission</h3>
                        </div>
                        <blockquote className="text-xl font-medium text-white mb-4 ">
                            “To foster a society where everyone can thrive mentally and emotionally.”
                        </blockquote>
                        <p className="text-lavender-100 text-lg leading-relaxed">
                            To provide accessible mental health support, treatment, and education for individuals, families, and communities.
                        </p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default About;
