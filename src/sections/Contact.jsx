import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    const contactMethods = [
        {
            icon: MessageCircle,
            title: 'WhatsApp',
            value: '+91 82912 81959',
            link: 'https://wa.me/8291281959',
            color: 'bg-green-100 text-green-600',
        },
        {
            icon: Phone,
            title: 'Phone',
            value: '+91 82912 81959',
            link: 'tel:+918291281959',
            color: 'bg-blue-100 text-blue-600',
        },
        {
            icon: Mail,
            title: 'Email',
            value: 'dishaawingstrust@gmail.com',
            link: 'mailto:dishaawingstrust@gmail.com',
            color: 'bg-purple-100 text-purple-600',
        },
    ];

    return (
        <section id="contact" className="py-24 px-4 relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-lavender-200/20 rounded-full blur-[120px] -z-10" />

            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-4">
                        Get In Touch
                    </h2>
                    <div className="w-24 h-1.5 bg-lavender-500 rounded-full mx-auto mb-6" />
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Whether you have a question or need immediate support, we're here to listen and help.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <ContactForm />
                    </motion.div>

                    {/* Right Column: Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        {/* Contact Methods Grid */}
                        <div className="grid sm:grid-cols-1 gap-4">
                            {contactMethods.map((method, index) => {
                                const Icon = method.icon;
                                return (
                                    <motion.a
                                        key={index}
                                        href={method.link}
                                        whileHover={{ x: 10 }}
                                        className="bg-white rounded-[2rem] p-6 shadow-lg shadow-lavender-100/50 border border-lavender-50 flex items-center gap-6 group transition-all"
                                    >
                                        <div className={`w-14 h-14 ${method.color} rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110`}>
                                            <Icon size={28} />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">{method.title}</h4>
                                            <p className="text-lg font-bold text-charcoal">{method.value}</p>
                                        </div>
                                    </motion.a>
                                );
                            })}
                        </div>

                        {/* Address */}
                        <div className="bg-lavender-600 rounded-[2.5rem] p-8 md:p-10 text-white shadow-xl h-full flex items-center">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <MapPin size={24} className="text-white" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-lavender-200 uppercase tracking-widest mb-2">Our Office</h4>
                                    <p className="text-lg leading-relaxed">
                                        123 Mental Health Street, Wellness District,<br />
                                        Mumbai, Maharashtra 400001
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
