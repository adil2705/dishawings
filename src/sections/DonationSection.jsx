import React from 'react';
import { motion } from 'framer-motion';
import { Heart, QrCode } from 'lucide-react';

const DonationSection = () => {
    return (
        <section id="donate" className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-3">
                        Support Mental Health & Peace
                    </h2>
                    <p className="text-base text-gray-600 max-w-2xl mx-auto">
                        Your contribution helps us provide free counseling and support to those in need.
                    </p>
                </motion.div>

                {/* Image Slider */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="mb-12 relative"
                >
                    <style dangerouslySetInnerHTML={{__html: `
                        .hide-scrollbar::-webkit-scrollbar {
                            display: none;
                        }
                        .hide-scrollbar {
                            -ms-overflow-style: none;
                            scrollbar-width: none;
                        }
                    `}} />
                    <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 px-2 hide-scrollbar">
                        {[1, 2, 3, 4, 5, 6, 8, 9, 10].map((num) => (
                            <a 
                                key={num}
                                href="#scanner"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('scanner')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="flex-none w-[85%] sm:w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] snap-start relative overflow-hidden rounded-2xl h-[350px] sm:h-[400px] md:h-[550px] group shadow-sm bg-transparent block"
                            >
                                <img
                                    src={`/i${num}.jpeg`}
                                    alt={`Donation Impact ${num}`}
                                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2 md:p-6 pb-4">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex flex-col items-center mx-auto text-center w-full">
                                        <p className="text-white font-semibold mb-2 text-sm md:text-base hidden md:block w-full text-center">Help Us Serve</p>
                                        <span className="inline-flex justify-center items-center text-[10px] md:text-xs font-medium bg-lavender-500 text-white px-2 py-1 md:px-3 md:py-1.5 rounded-full whitespace-nowrap">
                                            Donate Now <Heart size={12} className="ml-1.5 fill-current flex-shrink-0" />
                                        </span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </motion.div>

                {/* Main Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                    <div className="bg-gradient-to-r from-lavender-500 to-lavender-600 text-white p-6 text-center">
                        <div className="flex items-center justify-center mb-3">
                            <Heart className="text-white" size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                            Be the Light in Someone's Darkness
                        </h3>
                        <p className="text-lavender-100 text-sm">
                            Your small contribution can restore peace, heal hearts, and serve humanity.
                        </p>
                    </div>

                    <div className="p-6 md:p-8 text-center">
                        {/* QR Code Scanner */}
                        <div id="scanner" className="mb-6 scroll-mt-24">
                            <div className="inline-flex items-center justify-center mb-3">
                                <div className="bg-lavender-100 p-2 rounded-full">
                                    <QrCode className="text-lavender-600" size={24} />
                                </div>
                            </div>
                            <h4 className="text-lg font-bold text-charcoal mb-2">Scan to Donate</h4>
                            <p className="text-sm text-gray-600 mb-4">
                                Use any UPI app to scan and contribute
                            </p>

                            {/* QR Code Image */}
                            <div className="bg-lavender-50 rounded-xl p-6 inline-block border border-lavender-200">
                                <img
                                    src="/qr-scanner.png"
                                    alt="Payment QR Code Scanner"
                                    className="w-full max-w-[20rem] h-auto aspect-square object-contain"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextElementSibling.style.display = 'flex';
                                    }}
                                />
                                {/* Fallback placeholder */}
                                <div className="hidden flex-col items-center justify-center w-full max-w-[20rem] h-auto aspect-square bg-white rounded-lg">
                                    <QrCode className="text-lavender-400 mb-2" size={64} />
                                    <p className="text-gray-500 text-sm">QR Code Scanner</p>
                                    <p className="text-gray-400 text-xs mt-1">Place at: /public/qr-scanner.png</p>
                                </div>
                            </div>
                        </div>

                        {/* Payment Info */}
                        <div className="bg-lavender-50 rounded-lg p-4 border border-lavender-100">
                            <p className="text-xs text-gray-600 mb-1">
                                <span className="font-semibold text-charcoal">Accepted:</span> PhonePe • GPay • Paytm • All UPI Apps
                            </p>
                        </div>

                        {/* Quote */}
                        <div className="mt-6 pt-6 border-t border-gray-200">
                            <p className="text-sm text-gray-700 italic">
                                "The best way to find yourself is to lose yourself in the service of others."
                            </p>
                            <p className="text-xs text-gray-500 mt-1">— Mahatma Gandhi</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default DonationSection;
