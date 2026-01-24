import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { growthMindsetPairs } from '../../data/quizData';
import { CheckCircle2, RefreshCcw } from 'lucide-react';

const MatchColumn = () => {
    const [leftCol, setLeftCol] = useState([]);
    const [rightCol, setRightCol] = useState([]);
    const [selectedLeft, setSelectedLeft] = useState(null);
    const [matches, setMatches] = useState({});
    const [feedback, setFeedback] = useState(null);

    useEffect(() => {
        initializeQuiz();
    }, []);

    const initializeQuiz = () => {
        // Pick a random set from 1 to 5
        const randomSetId = Math.floor(Math.random() * 5) + 1;
        const currentSet = growthMindsetPairs.filter(p => p.set === randomSetId);

        const shuffledLeft = [...currentSet].sort(() => Math.random() - 0.5);
        const shuffledRight = [...currentSet].sort(() => Math.random() - 0.5);
        setLeftCol(shuffledLeft);
        setRightCol(shuffledRight);
        setMatches({});
        setSelectedLeft(null);
        setFeedback(null);
    };

    const handleLeftClick = (id) => {
        if (matches[id]) return;
        setSelectedLeft(id);
        setFeedback(null);
    };

    const handleRightClick = (id) => {
        if (!selectedLeft) {
            setFeedback({ type: 'error', message: 'Select a thought from the left first! ☝️' });
            return;
        }

        if (selectedLeft === id) {
            setMatches(prev => ({ ...prev, [id]: true }));
            setSelectedLeft(null);
            setFeedback({ type: 'success', message: 'That’s a healthy thought 💚' });
        } else {
            setFeedback({ type: 'error', message: 'Not quite. Try another one! ✨' });
        }
    };

    const allMatched = Object.keys(matches).length === 5;

    return (
        <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-charcoal mb-2">Growth Mindset Matching</h3>
                <p className="text-gray-600">Click a thought on the left, then find its healthy reframe on the right.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Left Column */}
                <div className="space-y-4">
                    <h4 className="font-bold text-lavender-600 uppercase text-xs tracking-widest mb-4 ml-2">Instead of thinking...</h4>
                    {leftCol.map((item) => (
                        <motion.button
                            key={item.id}
                            onClick={() => handleLeftClick(item.id)}
                            whileHover={!matches[item.id] ? { scale: 1.02 } : {}}
                            whileTap={!matches[item.id] ? { scale: 0.98 } : {}}
                            className={`w-full min-h-[88px] p-6 rounded-2xl text-left border-2 transition-all duration-300 relative overflow-hidden flex items-center gap-4 ${matches[item.id]
                                ? 'bg-gray-50 border-gray-100 text-gray-400 cursor-default'
                                : selectedLeft === item.id
                                    ? 'bg-lavender-50 border-lavender-500 shadow-md ring-4 ring-lavender-100'
                                    : 'bg-white border-lavender-100 hover:border-lavender-300 shadow-sm'
                                }`}
                        >
                            <span className="text-2xl relative z-10">{item.unhelpfulIcon}</span>
                            <span className="relative z-10 font-medium flex-1">{item.unhelpful}</span>
                            {matches[item.id] && (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300"
                                >
                                    <CheckCircle2 size={24} />
                                </motion.div>
                            )}
                        </motion.button>
                    ))}
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                    <h4 className="font-bold text-green-600 uppercase text-xs tracking-widest mb-4 ml-2">Say this instead...</h4>
                    {rightCol.map((item) => (
                        <motion.button
                            key={item.id}
                            onClick={() => handleRightClick(item.id)}
                            whileHover={!matches[item.id] ? { scale: 1.02 } : {}}
                            whileTap={!matches[item.id] ? { scale: 0.98 } : {}}
                            className={`w-full min-h-[88px] p-6 rounded-2xl text-left border-2 transition-all duration-300 relative overflow-hidden flex items-center gap-4 ${matches[item.id]
                                ? 'bg-green-50 border-green-100 text-green-700 cursor-default shadow-sm'
                                : 'bg-white border-green-100 hover:border-green-300 shadow-sm'
                                }`}
                        >
                            <span className="text-2xl">{item.icon}</span>
                            <span className="font-medium flex-1">{item.healthy}</span>
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Feedback & Actions */}
            <div className="flex flex-col items-center gap-6 min-h-[100px]">
                <AnimatePresence mode="wait">
                    {feedback && (
                        <motion.div
                            key={feedback.message}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className={`px-6 py-3 rounded-full font-bold text-lg shadow-sm ${feedback.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                                }`}
                        >
                            {feedback.message}
                        </motion.div>
                    )}

                    {allMatched && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-lavender-600 text-white p-8 rounded-3xl text-center shadow-xl mb-6 w-full max-w-xl"
                        >
                            <h4 className="text-3xl font-bold mb-3">You've mastered the reframe! 🧠✨</h4>
                            <p className="text-lavender-50 mb-6 font-medium">Changing how we speak to ourselves is the first step toward inner peace.</p>
                            <button
                                onClick={initializeQuiz}
                                className="bg-white text-lavender-600 px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all flex items-center gap-2 mx-auto"
                            >
                                <RefreshCcw size={20} />
                                Try Again
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default MatchColumn;
