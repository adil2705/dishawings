import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Facebook, Twitter, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'About Us', href: '#about' },
        { name: 'Services', href: '#what-we-offer' },
        { name: 'Mental Health', href: '#mental-health' },
        { name: 'Donate', href: '#donate' },
    ];

    const servicesLinks = [
        { name: 'Counseling', href: '#what-we-offer' },
        { name: 'Care Taking', href: '#what-we-offer' },
        { name: 'Workshops', href: '#what-we-offer' },
        { name: 'Health Camps', href: '#what-we-offer' },
    ];

    const socialLinks = [
        { icon: Facebook, href: 'https://www.facebook.com/share/14SrVdAJawG/', label: 'Facebook' },
        { icon: Instagram, href: 'https://www.instagram.com/dishaa.wings.trust/?utm_source=gr&r=nametag', label: 'Instagram' },
        { icon: MessageCircle, href: 'https://wa.me/8291281959', label: 'WhatsApp' },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-lavender-600 text-white pt-16 pb-8 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <div
                            className="flex items-center gap-3 cursor-pointer group"
                            onClick={scrollToTop}
                        >
                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center group-hover:bg-lavender-50 transition-colors">
                                <Heart size={24} className="text-lavender-600 fill-lavender-600" />
                            </div>
                            <span className="text-xl font-bold tracking-tight">Dishawing's Trust</span>
                        </div>
                        <p className="text-lavender-100 text-sm leading-relaxed max-w-xs">
                            Providing compassionate care for mental health and senior wellness.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-lavender-100 hover:text-white transition-colors text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Services</h4>
                        <ul className="space-y-4">
                            {servicesLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-lavender-100 hover:text-white transition-colors text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect Section */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Connect With Us</h4>
                        <div className="flex gap-4 mb-8">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all group"
                                        aria-label={social.label}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Icon size={18} className="text-white group-hover:scale-110 transition-transform" />
                                    </a>
                                );
                            })}
                        </div>
                        <div className="space-y-2">
                            <p className="text-lavender-100 text-xs">Emergency: +91 82912 81959</p>
                            <p className="text-lavender-100 text-xs">Email: dishaawingstrust@gmail.com</p>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                    <p className="text-lavender-200 text-xs">
                        © {currentYear} Dishawing's Trust. All rights reserved. | <a href="#" className="hover:text-white transition-colors">Privacy Policy</a> | <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
