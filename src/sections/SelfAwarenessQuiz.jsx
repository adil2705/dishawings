import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MatchColumn from '../components/Quiz/MatchColumn';
import MCQQuiz from '../components/Quiz/MCQQuiz';
import { BrainCircuit, PenLine } from 'lucide-react';

const SelfAwarenessQuiz = () => {
    const [activeTab, setActiveTab] = useState('mcq');

    return (
        <section id="quiz" className="py-24 px-4 overflow-hidden relative">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/4 -right-20 w-80 h-80 bg-lavender-300/30 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-lavender-400/20 rounded-full blur-[100px]" />

            <div className="max-w-6xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-4">Discover Your Inner Space</h2>
                    <div className="w-24 h-1.5 bg-lavender-500 rounded-full mx-auto mb-6" />
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        Self-awareness is the first step toward mental wellness. Take a moment to check in with yourself or practice positive reframing.
                    </p>
                </motion.div>

                {/* Custom Tabs */}
                <div className="flex justify-center mb-16">
                    <div className="bg-lavender-100/50 p-2 rounded-2xl flex gap-2 border border-lavender-200/50 shadow-sm backdrop-blur-sm">
                        <button
                            onClick={() => setActiveTab('mcq')}
                            className={`px-8 py-3 rounded-xl font-bold flex items-center gap-2 transition-all duration-300 ${activeTab === 'mcq'
                                ? 'bg-lavender-600 text-white shadow-md transform scale-105'
                                : 'text-lavender-700 hover:bg-lavender-100'
                                }`}
                        >
                            <PenLine size={20} />
                            <span className="hidden sm:inline">Self-Reflection Quiz</span>
                            <span className="sm:hidden">Check-in</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('match')}
                            className={`px-8 py-3 rounded-xl font-bold flex items-center gap-2 transition-all duration-300 ${activeTab === 'match'
                                ? 'bg-lavender-600 text-white shadow-md transform scale-105'
                                : 'text-lavender-700 hover:bg-lavender-100'
                                }`}
                        >
                            <BrainCircuit size={20} />
                            <span className="hidden sm:inline">Growth Mindset Matching</span>
                            <span className="sm:hidden">Matching</span>
                        </button>
                    </div>
                </div>

                <div className="relative min-h-[600px]">
                    <AnimatePresence mode="wait">
                        {activeTab === 'mcq' ? (
                            <motion.div
                                key="mcq"
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.4 }}
                            >
                                <MCQQuiz />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="match"
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.4 }}
                            >
                                <MatchColumn />
                            </motion.div>
                        )
                        }
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default SelfAwarenessQuiz;
