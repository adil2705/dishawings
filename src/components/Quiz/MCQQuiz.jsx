import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { selfReflectionQuestions } from '../../data/quizData';
import { ArrowRight, RotateCcw, Heart, CheckCircle2, AlertCircle } from 'lucide-react';

const MCQQuiz = () => {
    const [questions, setQuestions] = useState([]);
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        startNewQuiz();
    }, []);

    const startNewQuiz = () => {
        const shuffled = [...selfReflectionQuestions]
            .sort(() => Math.random() - 0.5)
            .slice(0, 10);
        setQuestions(shuffled);
        setCurrentStep(0);
        setAnswers([]);
        setIsFinished(false);
    };

    const handleAnswerSelect = (option) => {
        const newAnswers = [...answers, option.score];
        setAnswers(newAnswers);

        if (currentStep < 9) {
            setCurrentStep(currentStep + 1);
        } else {
            setIsFinished(true);
        }
    };

    const totalScore = answers.reduce((acc, curr) => acc + curr, 0);
    const maxPossible = questions.length * 3;
    const percentage = totalScore / maxPossible;

    const getResultContent = () => {
        if (percentage >= 0.8) {
            return {
                title: "Thriving & Balanced",
                message: "You're doing an amazing job taking care of your mental well-being. Continue your mindfulness practices and keep shining!",
                color: "text-green-600",
                bg: "bg-green-50",
                icon: Heart
            };
        } else if (percentage >= 0.5) {
            return {
                title: "Steady & Mindful",
                message: "You're navigating life with awareness. Remember that it's okay to have off days. Consider reaching out for a brief chat if things feel a bit much.",
                color: "text-lavender-600",
                bg: "bg-lavender-50",
                icon: CheckCircle2
            };
        } else {
            return {
                title: "Seeking Support",
                message: "It seems you're carrying a heavy load right now. Please remember that you don't have to face this alone. We're here to help whenever you're ready.",
                color: "text-orange-600",
                bg: "bg-orange-50",
                icon: AlertCircle
            };
        }
    };

    if (isFinished) {
        const result = getResultContent();
        const ResultIcon = result.icon;
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`max-w-2xl mx-auto ${result.bg} p-10 rounded-[3rem] text-center shadow-lg border-2 border-white`}
            >
                <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 shadow-sm bg-white`}>
                    <ResultIcon size={40} className={result.color} />
                </div>
                <h3 className={`text-3xl font-bold mb-4 ${result.color}`}>{result.title}</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">{result.message}</p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={startNewQuiz}
                        className="bg-white text-gray-700 px-8 py-4 rounded-2xl font-bold shadow-sm hover:shadow-md transition-all flex items-center gap-2 justify-center"
                    >
                        <RotateCcw size={20} />
                        Retake Quiz
                    </button>
                    <a
                        href="#contact"
                        className="bg-lavender-600 text-white px-8 py-4 rounded-2xl font-bold shadow-sm hover:shadow-md transition-all flex items-center gap-2 justify-center"
                    >
                        Speak with Someone
                        <ArrowRight size={20} />
                    </a>
                </div>
            </motion.div>
        );
    }

    if (questions.length === 0) return null;

    const currentQuestion = questions[currentStep];
    const progress = ((currentStep + 1) / 10) * 100;

    return (
        <div className="max-w-3xl mx-auto px-4">
            {/* Progress Bar */}
            <div className="mb-10">
                <div className="flex justify-between items-end mb-3">
                    <span className="text-sm font-bold text-lavender-600 uppercase tracking-widest">Thought {currentStep + 1} of 10</span>
                    <span className="text-sm font-medium text-gray-400">{Math.round(progress)}% Complete</span>
                </div>
                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        className="h-full bg-lavender-500 rounded-full"
                    />
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-lavender-100 border border-lavender-50"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-10 leading-tight">
                        {currentQuestion.question}
                    </h3>

                    <div className="grid gap-4">
                        {currentQuestion.options.map((option, idx) => (
                            <motion.button
                                key={idx}
                                whileHover={{ scale: 1.01, x: 10 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => handleAnswerSelect(option)}
                                className="w-full text-left p-5 rounded-2xl border-2 border-lavender-50 hover:border-lavender-300 hover:bg-lavender-50/50 transition-all font-medium text-gray-700 text-lg flex justify-between items-center group"
                            >
                                {option.text}
                                <ArrowRight className="text-lavender-300 group-hover:text-lavender-600 opacity-0 group-hover:opacity-100 transition-all" size={20} />
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>

            <p className="text-center text-xs text-gray-400 mt-8 uppercase tracking-widest font-medium">
                This quiz is for self-awareness, not a clinical diagnosis.
            </p>
        </div>
    );
};

export default MCQQuiz;
