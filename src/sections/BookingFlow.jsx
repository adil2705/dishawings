import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Calendar, User, Globe, MessageSquare, Phone } from 'lucide-react';
import Button from '../components/Button';
import CounselorCard from '../components/CounselorCard';

const BookingFlow = ({ services, selectedServices, counselors, onClose }) => {
    const [step, setStep] = useState('counselor'); // counselor, booking, confirmation
    const [selectedCounselor, setSelectedCounselor] = useState(null);
    const [bookingData, setBookingData] = useState({
        name: '',
        phone: '',
        date: '',
        time: '',
        language: '',
        concern: '',
    });

    const getSelectedServiceNames = () => {
        return selectedServices
            .map(id => services.find(s => s.id === id)?.name)
            .filter(Boolean)
            .join(', ');
    };

    const filteredCounselors = counselors.filter(counselor => {
        if (selectedServices.length === 0) return true; // Show all if none selected
        return counselor.specializations.some(spec => selectedServices.includes(spec));
    });

    const handleBookingSubmit = (e) => {
        e.preventDefault();
        setStep('confirmation');
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-lavender-100 rounded-3xl max-w-4xl w-full my-8 max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="p-6 md:p-8">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                        {step !== 'counselor' && step !== 'confirmation' && (
                            <button
                                onClick={() => {
                                    if (step === 'booking') setStep('counselor');
                                }}
                                className="text-charcoal hover:text-lavender-600 transition-colors"
                            >
                                <ArrowLeft size={24} />
                            </button>
                        )}
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal flex-1 text-center">
                            {step === 'counselor' && 'Select Your Counselor'}
                            {step === 'booking' && 'Book Your Session'}
                            {step === 'confirmation' && 'Booking Confirmed!'}
                        </h2>
                        <button
                            onClick={onClose}
                            className="text-charcoal hover:text-lavender-600 transition-colors text-2xl"
                        >
                            ×
                        </button>
                    </div>

                    {/* Selected Services - Optional display */}
                    {selectedServices.length > 0 && (
                        <div className="bg-white rounded-2xl p-4 mb-6">
                            <p className="text-sm text-gray-600 mb-1">Selected areas:</p>
                            <p className="text-charcoal font-medium">{getSelectedServiceNames()}</p>
                        </div>
                    )}

                    <AnimatePresence mode="wait">


                        {/* Step 2: Counselor Selection */}
                        {step === 'counselor' && (
                            <motion.div
                                key="counselor"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                            >
                                <p className="text-gray-700 mb-6 text-center">
                                    We've matched you with {filteredCounselors.length} counselor(s) based on your selected areas.
                                </p>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {filteredCounselors.map((counselor) => (
                                        <CounselorCard
                                            key={counselor.id}
                                            counselor={counselor}
                                            services={services}
                                            onSelect={() => {
                                                setSelectedCounselor(counselor);
                                                setStep('booking');
                                            }}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Step 3: Booking Form */}
                        {step === 'booking' && selectedCounselor && (
                            <motion.div
                                key="booking"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                            >
                                <div className="bg-white rounded-2xl p-6 mb-6 flex items-center gap-4">
                                    <img
                                        src={selectedCounselor.photo}
                                        alt={selectedCounselor.name}
                                        className="w-16 h-16 rounded-full border-4 border-lavender-200"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-charcoal">{selectedCounselor.name}</h3>
                                        <p className="text-sm text-gray-600">{selectedCounselor.availability}</p>
                                    </div>
                                </div>

                                <form onSubmit={handleBookingSubmit} className="space-y-4">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-charcoal mb-2">
                                                <User size={16} className="inline mr-1" />
                                                Your Name *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={bookingData.name}
                                                onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border-2 border-lavender-200 focus:border-lavender-500 focus:outline-none"
                                                placeholder="Enter your name"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-charcoal mb-2">
                                                <Phone size={16} className="inline mr-1" />
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                required
                                                value={bookingData.phone}
                                                onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border-2 border-lavender-200 focus:border-lavender-500 focus:outline-none"
                                                placeholder="+91 XXXXX XXXXX"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-charcoal mb-2">
                                                <Calendar size={16} className="inline mr-1" />
                                                Preferred Date *
                                            </label>
                                            <input
                                                type="date"
                                                required
                                                value={bookingData.date}
                                                onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border-2 border-lavender-200 focus:border-lavender-500 focus:outline-none"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-charcoal mb-2">
                                                <Calendar size={16} className="inline mr-1" />
                                                Preferred Time *
                                            </label>
                                            <input
                                                type="time"
                                                required
                                                value={bookingData.time}
                                                onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border-2 border-lavender-200 focus:border-lavender-500 focus:outline-none"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-charcoal mb-2">
                                            <Globe size={16} className="inline mr-1" />
                                            Preferred Language *
                                        </label>
                                        <select
                                            required
                                            value={bookingData.language}
                                            onChange={(e) => setBookingData({ ...bookingData, language: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border-2 border-lavender-200 focus:border-lavender-500 focus:outline-none"
                                        >
                                            <option value="">Select language</option>
                                            {selectedCounselor.languages.map((lang) => (
                                                <option key={lang} value={lang}>{lang}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-charcoal mb-2">
                                            <MessageSquare size={16} className="inline mr-1" />
                                            Brief Description (Optional)
                                        </label>
                                        <textarea
                                            value={bookingData.concern}
                                            onChange={(e) => setBookingData({ ...bookingData, concern: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border-2 border-lavender-200 focus:border-lavender-500 focus:outline-none resize-none"
                                            rows="3"
                                            placeholder="Share what you'd like to discuss (optional)"
                                        />
                                    </div>

                                    <Button type="submit" className="w-full" size="lg">
                                        Confirm Booking
                                    </Button>
                                </form>
                            </motion.div>
                        )}

                        {/* Step 4: Confirmation */}
                        {step === 'confirmation' && (
                            <motion.div
                                key="confirmation"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-8"
                            >
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-charcoal mb-4">Booking Confirmed!</h3>
                                <div className="bg-white rounded-2xl p-6 max-w-md mx-auto mb-6 text-left">
                                    <p className="text-gray-700 mb-4">
                                        <strong>{selectedCounselor.name}</strong> will call you at:
                                    </p>
                                    <div className="space-y-2 text-gray-700">
                                        <p>📅 {new Date(bookingData.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                        <p>🕐 {bookingData.time}</p>
                                        <p>📞 {bookingData.phone}</p>
                                        <p>🌐 {bookingData.language}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-6">
                                    You'll receive a confirmation message shortly. Please keep your phone available at the scheduled time.
                                </p>
                                <Button onClick={onClose} size="lg">
                                    Done
                                </Button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default BookingFlow;
