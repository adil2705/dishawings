import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, X } from 'lucide-react';
import ServicePill from '../components/ServicePill';

const Services = ({ services, selectedServices, onToggleService, onVoiceSupport }) => {
    const [activeInfoService, setActiveInfoService] = useState(null);

    const getSelectedServiceNames = () => {
        return selectedServices
            .map(id => services.find(s => s.id === id)?.name)
            .filter(Boolean)
            .join(', ');
    };

    const handleWhatsApp = () => {
        let message = "Hi, I'd like to share my concern.";
        if (selectedServices.length > 0) {
            const serviceNames = getSelectedServiceNames();
            message = `Hi, I'd like to get support for: ${serviceNames}`;
        }
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/8291281959?text=${encodedMessage}`, '_blank');
    };

    return (
        <section id="services" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Services Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-16"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <ServicePill
                                service={service}
                                onClick={() => setActiveInfoService(service)}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Support Options */}
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.02 }}
                        viewport={{ once: true }}
                        onClick={handleWhatsApp}
                        className="bg-white rounded-3xl p-8 cursor-pointer shadow-lg hover:shadow-xl transition-all"
                    >
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                <MessageCircle size={32} className="text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-charcoal mb-2">Chat Support</h3>
                            <p className="text-gray-700 mb-6">
                                Connect instantly via WhatsApp. Share your concerns through text at your own pace.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600 mb-4">
                                <li>✓ Instant connection</li>
                                <li>✓ Text-based support</li>
                                <li>✓ Available 24/7</li>
                            </ul>
                            <span className="text-lavender-600 font-medium">Click to Chat →</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.02 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        onClick={onVoiceSupport}
                        className="bg-white rounded-3xl p-8 cursor-pointer shadow-lg hover:shadow-xl transition-all"
                    >
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-lavender-100 rounded-full flex items-center justify-center mb-4">
                                <Phone size={32} className="text-lavender-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-charcoal mb-2">Voice Support</h3>
                            <p className="text-gray-700 mb-6">
                                Schedule a call with a professional counselor. Personal, empathetic conversation.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600 mb-4">
                                <li>✓ Scheduled sessions</li>
                                <li>✓ One-on-one counseling</li>
                                <li>✓ Professional support</li>
                            </ul>
                            <span className="text-lavender-600 font-medium">Book a Session →</span>
                        </div>
                    </motion.div>
                </div>

                {/* Info Modal */}
                <AnimatePresence>
                    {activeInfoService && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setActiveInfoService(null)}
                                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                className="relative bg-white rounded-3xl p-8 shadow-2xl max-w-md w-full z-10"
                            >
                                <button
                                    onClick={() => setActiveInfoService(null)}
                                    className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                                >
                                    <X size={20} className="text-charcoal" />
                                </button>

                                <div className="text-center">
                                    <div className="w-20 h-20 bg-lavender-100 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                                        {activeInfoService.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-charcoal mb-3">{activeInfoService.name}</h3>
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        {activeInfoService.description}
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Services;
