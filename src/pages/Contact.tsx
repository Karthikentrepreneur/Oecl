import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, XCircle, Linkedin, Facebook, Globe, Building2 } from 'lucide-react';
import { useLocation } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ScrollToTop = () => {
  const {
    pathname
  } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [pathname]);
  return null;
};

const Contact = () => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const url = new URL(window.location.href);
    if (url.searchParams.get('submitted') === 'true') {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 4000);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">
      <ScrollToTop />
      <Navigation />

      {showNotification && (
        <div className="fixed top-6 right-6 z-50 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3 transition-all">
          <Send size={18} />
          Message sent successfully!
          <button onClick={() => setShowNotification(false)} className="ml-2">
            <XCircle size={18} />
          </button>
        </div>
      )}

      <main className="flex-grow">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative h-[40vh] flex items-center justify-center bg-red-700 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black to-red-900/90" />
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center px-4 relative z-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">Get in Touch</h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto font-light">
              We're here to help and answer any questions you might have.
            </p>
          </motion.div>
        </motion.section>

        {/* Global Presence Section */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="flex justify-center items-center gap-3 mb-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Globe className="h-10 w-10 text-red-600" />
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Global Presence</h2>
              </div>
              <div className="w-24 h-1 bg-red-600 mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                OECL operates across multiple continents with offices and partners in key locations worldwide.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {/* Asia Pacific */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="h-6 w-6 text-red-600" />
                  <h3 className="text-xl font-bold text-gray-800">Asia Pacific</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-red-500" />
                    <span className="text-gray-700">Singapore (HQ)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-red-500" />
                    <span className="text-gray-700">India (Mumbai, Delhi, Chennai, Bangalore, Kolkata)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-red-500" />
                    <span className="text-gray-700">Malaysia (Johor Bahru, Klang)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-red-500" />
                    <span className="text-gray-700">Indonesia (Jakarta, Surabaya)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-red-500" />
                    <span className="text-gray-700">Thailand (Bangkok)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-red-500" />
                    <span className="text-gray-700">Sri Lanka (Colombo)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-red-500" />
                    <span className="text-gray-700">Myanmar (Yangon)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-red-500" />
                    <span className="text-gray-700">Bangladesh (Dhaka)</span>
                  </div>
                </div>
              </motion.div>

              {/* Middle East */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="h-6 w-6 text-red-600" />
                  <h3 className="text-xl font-bold text-gray-800">Middle East</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-red-500" />
                    <span className="text-gray-700">UAE (Dubai, Jebel Ali, Abu Dhabi)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-red-500" />
                    <span className="text-gray-700">Saudi Arabia (Dammam, Riyadh, Jeddah)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-red-500" />
                    <span className="text-gray-700">Qatar (Doha)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-red-500" />
                    <span className="text-gray-700">Pakistan (Karachi, Lahore)</span>
                  </div>
                </div>
              </motion.div>

              {/* Americas & Europe */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="h-6 w-6 text-red-600" />
                  <h3 className="text-xl font-bold text-gray-800">Americas & Europe</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-red-500" />
                    <span className="text-gray-700">USA (New York, Los Angeles, Chicago)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-red-500" />
                    <span className="text-gray-700">United Kingdom (London)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-red-500" />
                    <span className="text-gray-700">Australia (Melbourne)</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Need Our Services in Your Location?</h3>
                <p className="text-red-100 mb-6 max-w-2xl mx-auto">
                  Contact us to discuss your logistics needs. Our global network ensures we can support your business wherever you are.
                </p>
                <Button
                  className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8 py-3"
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get In Touch
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-16 bg-white" id="contact-form">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h2 className="text-2xl font-bold mb-6 text-black">Contact Information</h2>
                <div className="space-y-8">
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-red-700">Singapore Office</h3>
                    <motion.div whileHover={{ x: 10 }} className="flex items-start gap-4 group">
                      <Phone className="mt-1 text-red-600 group-hover:scale-110 transition-transform" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-gray-600">+65 69080838</p>
                      </div>
                    </motion.div>
                    <motion.div whileHover={{ x: 10 }} className="flex items-start gap-4 group">
                      <MapPin className="mt-1 text-red-600 group-hover:scale-110 transition-transform" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-gray-600">
                          OECL (Singapore) Pte Ltd. Blk 511 Kampong Bahru Road #03-01 Keppel Distripark Singapore - 099447
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Social Links */}
                  <div className="pt-6 border-t">
                    <p className="font-medium mb-4">Connect With Us</p>
                    <div className="flex gap-4">
                      <motion.a
                        href="https://www.linkedin.com/company/gglus/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5 }}
                        className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-red-700 hover:text-white transition-colors"
                      >
                        <Linkedin size={18} />
                      </motion.a>
                      <motion.a
                        href="https://www.facebook.com/gglusa"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5 }}
                        className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-red-700 hover:text-white transition-colors"
                      >
                        <Facebook size={18} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h2 className="text-2xl font-bold mb-4 text-black">Send us a Message</h2>
                <p className="text-gray-600 mb-6">
                  Fill in the form below and we'll get back to you as soon as possible.
                </p>
                <form
                  action="https://formsubmit.co/ajax/karthiktrendsandtactics@gmail.com"
                  method="POST"
                  className="space-y-5"
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="box" />
                  <input type="hidden" name="_subject" value="New Contact Submission!" />
                  <input type="hidden" name="_next" value="https://yourdomain.com/contact?submitted=true" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="First Name" name="First Name" required />
                    <Input placeholder="Last Name" name="Last Name" required />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="Email" type="email" name="Email" required />
                    <Input placeholder="Phone" name="Phone" />
                  </div>

                  <Input placeholder="Organization/Company" name="Organization" />
                  <Textarea placeholder="Your Message" name="Message" required />

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className="w-full text-white py-6 flex items-center justify-center gap-2 bg-black hover:bg-red-700"
                    >
                      Send Message
                      <Send size={18} />
                    </Button>
                  </motion.div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Google Maps */}
        <section className="py-10 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center gap-3">
                <MapPin className="text-red-700" />
                Our Location
              </h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                Visit us at our OECL Singapore office location
              </p>
            </motion.div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden relative">
              <div className="h-[500px] w-full relative">
                <iframe
                  src="https://www.google.com/maps/d/u/0/embed?mid=18pLzY9L_9ClJWUmM04FwX-lM_i8VgEE&ehbc=2E312F&noprof=1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="OECL Singapore Office Location"
                />
                <div className="absolute top-0 left-0 right-0 h-14 bg-white z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 h-14 bg-white z-10 pointer-events-none" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
