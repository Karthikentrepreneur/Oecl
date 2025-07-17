import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import LocationsSection from "@/components/LocationsSection";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, XCircle, Building2 } from 'lucide-react';
import { useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
};

const Contact: React.FC = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const isMobile = useIsMobile();
  const location = useLocation();

  const allOffices = [
    {
      country: "Singapore",
      name: "Singapore Office",
      email: "info@oecl.com",
      phone: "+65 69080838",
      address: "OECL (Singapore) Pte Ltd. Blk 511 Kampong Bahru Road #03-01 Keppel Distripark Singapore - 099447"
    },
    {
      country: "India",
      name: "India Office",
      email: "india@oecl.com",
      phone: "+91 22 4517 4102",
      address: "407, Mayuresh Planet, Plot No - 42 & 43, Sector-15, CBD Belapur, Navi Mumbai, Maharashtra, 400614"
    },
    {
      country: "Malaysia",
      name: "Malaysia Office",
      email: "malaysia@oecl.com",
      phone: "+60 3-3319 2778",
      address: "Unit 20-03A, Level 20 Menara Zurich, 15 Jalan Dato Abdullah Tahir, 80300 Johor Bahru"
    },
    {
      country: "Indonesia",
      name: "Indonesia Office",
      email: "indonesia@oecl.com",
      phone: "+62 21 529 20292",
      address: "408, Lina Building, JL.HR Rasuna Said kav B7, Jakarta"
    },
    {
      country: "Thailand",
      name: "Thailand Office",
      email: "thailand@oecl.com",
      phone: "+66 2-634-3240",
      address: "109 CCT Building, 3rd Floor, Rm.3, Surawong Road, Suriyawongse, Bangrak, Bangkok 10500"
    }
  ];

  const getCountryFromRoute = () => {
    const path = location.pathname;
    if (path.includes('/india')) return 'india';
    if (path.includes('/malaysia')) return 'malaysia';
    if (path.includes('/indonesia')) return 'indonesia';
    if (path.includes('/thailand')) return 'thailand';
    return 'singapore';
  };

  const country = getCountryFromRoute();
  const currentCountryInfo = allOffices.find(office => office.country.toLowerCase() === country) || allOffices[0];

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

            <section>
              <div>
                <motion.div>
                  <motion.main className="transition-all duration-300 ease-in-out w-full">
                    <LocationsSection />
                  </motion.main>
                </motion.div>
              </div>
            </section>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-white" id="contact-form">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
              >
                <h2 className="text-3xl font-bold mb-2 text-black text-center">Send us a Message</h2>
                <div className="w-16 h-1 bg-red-600 mx-auto mb-6"></div>
                <p className="text-gray-600 mb-8 text-center">
                  Fill in the form below and we'll get back to you as soon as possible.
                </p>

                <form
                  action={`https://formsubmit.co/ajax/${currentCountryInfo.email}`}
                  method="POST"
                  className="space-y-6"
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="box" />
                  <input type="hidden" name="_subject" value={`New Contact Submission from ${currentCountryInfo.name}!`} />
                  <input type="hidden" name="_next" value={`${window.location.origin}/contact?submitted=true`} />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">First Name *</label>
                      <Input name="First Name" required placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Last Name *</label>
                      <Input name="Last Name" required placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Email Address *</label>
                      <Input name="Email" required type="email" placeholder="Enter your email" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Phone Number</label>
                      <Input name="Phone" placeholder="Enter your phone number" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Company/Organization</label>
                    <Input name="Organization" placeholder="Enter your company name" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Preferred Location</label>
                    <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select preferred office location" />
                      </SelectTrigger>
                      <SelectContent>
                        {allOffices.map((office) => (
                          <SelectItem key={office.country} value={office.country}>
                            {office.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Message *</label>
                    <Textarea name="Message" required placeholder="Tell us about your logistics needs..." rows={5} />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
