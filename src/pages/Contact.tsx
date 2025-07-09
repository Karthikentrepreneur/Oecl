
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, XCircle, Linkedin, Facebook, Globe, Building2, Map, Menu } from 'lucide-react';
import { useLocation } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ContactMapContainer from "@/components/ContactMapContainer";
import ContactSidebar from "@/components/ContactSidebar";
import { useIsMobile } from "@/hooks/use-mobile";

const ScrollToTop = () => {
  const { pathname } = useLocation();
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
  const isMobile = useIsMobile();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showMap, setShowMap] = useState(true);
  const location = useLocation();

  // Determine country from current route
  const getCountryFromRoute = () => {
    const path = location.pathname;
    if (path.includes('/india')) return 'india';
    if (path.includes('/malaysia')) return 'malaysia';
    if (path.includes('/indonesia')) return 'indonesia';
    if (path.includes('/thailand')) return 'thailand';
    return 'singapore'; // default
  };

  const country = getCountryFromRoute();

  // Country-specific information
  const countryInfo = {
    india: {
      name: "India Office",
      email: "india@oecl.com",
      phone: "+91 22 4517 4102",
      address: "407, Mayuresh Planet, Plot No - 42 & 43, Sector-15, CBD Belapur, Navi Mumbai, Maharashtra, 400614",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.1234567890123!2d73.0256789!3d19.0330000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAyJzAwLjAiTiA3M8KwMDEnMzIuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
    },
    malaysia: {
      name: "Malaysia Office",
      email: "malaysia@oecl.com",
      phone: "+60 3-3319 2778",
      address: "Unit 20-03A, Level 20 Menara Zurich, 15 Jalan Dato Abdullah Tahir, 80300 Johor Bahru",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.1234567890123!2d103.7629000!3d1.4842000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMjknMDMuMSJOIDEwM8KwNDUnNDYuNCJF!5e0!3m2!1sen!2smy!4v1234567890123!5m2!1sen!2smy"
    },
    indonesia: {
      name: "Indonesia Office",
      email: "indonesia@oecl.com",
      phone: "+62 21 529 20292",
      address: "408, Lina Building, JL.HR Rasuna Said kav B7, Jakarta",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1234567890123!2d106.8456000!3d-6.2088000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMzEuNyJTIDEwNsKwNTAnNDQuMiJF!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid"
    },
    thailand: {
      name: "Thailand Office",
      email: "thailand@oecl.com",
      phone: "+66 2-634-3240",
      address: "109 CCT Building, 3rd Floor, Rm.3, Surawong Road, Suriyawongse, Bangrak, Bangkok 10500",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.1234567890123!2d100.5018000!3d13.7563000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQ1JzIyLjciTiAxMDDCsDMwJzA2LjUiRQ!5e0!3m2!1sen!2sth!4v1234567890123!5m2!1sen!2sth"
    },
    singapore: {
      name: "Singapore Office",
      email: "info@oecl.com",
      phone: "+65 69080838",
      address: "OECL (Singapore) Pte Ltd. Blk 511 Kampong Bahru Road #03-01 Keppel Distripark Singapore - 099447",
      mapUrl: "https://www.google.com/maps/d/u/0/embed?mid=18pLzY9L_9ClJWUmM04FwX-lM_i8VgEE&ehbc=2E312F&noprof=1"
    }
  };

  const currentCountryInfo = countryInfo[country];

  useEffect(() => {
    // For mobile, initially show sidebar instead of map
    if (isMobile) {
      setShowMap(false);
      setIsSidebarOpen(true);
    } else {
      setShowMap(true);
      setIsSidebarOpen(true);
    }
  }, [isMobile]);

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

        {/* Interactive Global Presence Section */}
        <section className="py-16 bg-gradient-to-b from-red-50/30 to-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Global Presence</h2>
              <div className="w-24 h-1 bg-red-600 mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Explore our worldwide network of offices and partners.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-1 relative overflow-hidden"
            >
              {/* Page title for mobile */}
              {isMobile && (
                <div className="fixed top-20 left-0 right-0 z-30 bg-gradient-to-r from-red-600 to-red-700 p-3 text-white text-center shadow-md">
                  <h3 className="text-lg font-bold">Global Presence</h3>
                </div>
              )}
              
              {/* Main content with map - 60% on desktop, full on mobile when active */}
              {(!isMobile || (isMobile && showMap)) && (
                <motion.main
                  initial={isMobile ? { x: '100%' } : { opacity: 0 }}
                  animate={isMobile ? { x: 0 } : { opacity: 1 }}
                  exit={isMobile ? { x: '100%' } : { opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  className={`transition-all duration-300 ease-in-out ${isMobile ? 'w-full' : 'w-[60%]'}`}
                >
                  <ContactMapContainer />
                </motion.main>
              )}
              
              {/* Sidebar for locations - 35% on desktop, full width on mobile when active */}
              {(!isMobile || (isMobile && !showMap)) && (
                <motion.div
                  initial={isMobile ? { x: '-100%' } : { opacity: 0 }}
                  animate={isMobile ? { x: 0 } : { opacity: 1 }}
                  exit={isMobile ? { x: '-100%' } : { opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  className={`transition-all duration-300 ease-in-out ${isMobile ? 'w-full pt-12' : 'w-[35%]'}`}
                >
                  <ContactSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
                </motion.div>
              )}

              {/* Mobile toggle buttons */}
              {isMobile && (
                <div className="fixed bottom-4 right-4 z-50 flex gap-2">
                  <Button
                    onClick={() => setShowMap(!showMap)}
                    className="bg-red-600 hover:bg-red-700 text-white shadow-lg"
                    size="lg"
                  >
                    {showMap ? <Menu size={20} /> : <Map size={20} />}
                    {showMap ? 'Locations' : 'Map'}
                  </Button>
                </div>
              )}
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
                    <h3 className="text-lg font-semibold text-red-700">{currentCountryInfo.name}</h3>
                    <motion.div whileHover={{ x: 10 }} className="flex items-start gap-4 group">
                      <Phone className="mt-1 text-red-600 group-hover:scale-110 transition-transform" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-gray-600">{currentCountryInfo.phone}</p>
                      </div>
                    </motion.div>
                    <motion.div whileHover={{ x: 10 }} className="flex items-start gap-4 group">
                      <MapPin className="mt-1 text-red-600 group-hover:scale-110 transition-transform" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-gray-600">{currentCountryInfo.address}</p>
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
                  action={`https://formsubmit.co/ajax/${currentCountryInfo.email}`}
                  method="POST"
                  className="space-y-5"
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="box" />
                  <input type="hidden" name="_subject" value={`New Contact Submission from ${currentCountryInfo.name}!`} />
                  <input type="hidden" name="_next" value={`${window.location.origin}/contact?submitted=true`} />

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

        {/* Country-specific Google Maps */}
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
                Our {currentCountryInfo.name} Location
              </h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                Visit us at our {currentCountryInfo.name} office location
              </p>
            </motion.div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden relative">
              <div className="h-[500px] w-full relative">
                <iframe
                  src={currentCountryInfo.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${currentCountryInfo.name} Location`}
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
