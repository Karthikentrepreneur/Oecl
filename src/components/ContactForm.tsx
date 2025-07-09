
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Building2 } from "lucide-react";
import { useLocation } from "react-router-dom";

const ContactForm = () => {
  const location = useLocation();
  const [selectedLocation, setSelectedLocation] = useState("");

  // All office locations
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

  // Determine current country from route
  const getCurrentCountry = () => {
    const path = location.pathname;
    if (path.includes('/india')) return 'India';
    if (path.includes('/malaysia')) return 'Malaysia';
    if (path.includes('/indonesia')) return 'Indonesia';
    if (path.includes('/thailand')) return 'Thailand';
    return 'Singapore';
  };

  const currentCountry = getCurrentCountry();
  const currentOffice = allOffices.find(office => office.country === currentCountry) || allOffices[0];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Ready to streamline your logistics? Contact us today for a customized solution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information - All Offices */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Building2 className="w-6 h-6 text-red-600" />
              Our Global Offices
            </h3>
            
            <div className="space-y-6">
              {allOffices.map((office, index) => (
                <motion.div
                  key={office.country}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-white p-6 rounded-xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                    office.country === currentCountry 
                      ? 'border-red-500 bg-red-50' 
                      : 'border-gray-200 hover:border-red-300'
                  }`}
                >
                  <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className={`w-3 h-3 rounded-full ${
                      office.country === currentCountry ? 'bg-red-500' : 'bg-gray-400'
                    }`}></span>
                    {office.name}
                    {office.country === currentCountry && (
                      <span className="text-xs bg-red-600 text-white px-2 py-1 rounded-full ml-2">
                        Current
                      </span>
                    )}
                  </h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600 text-sm leading-relaxed">{office.address}</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <a href={`tel:${office.phone}`} className="text-gray-600 hover:text-red-600 transition-colors text-sm">
                        {office.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <a href={`mailto:${office.email}`} className="text-gray-600 hover:text-red-600 transition-colors text-sm">
                        {office.email}
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
            <p className="text-gray-600 mb-6">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
            
            <form 
              action={`https://formsubmit.co/ajax/${currentOffice.email}`} 
              method="POST" 
              className="space-y-6"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />
              <input type="hidden" name="_subject" value={`New Contact Submission from ${currentOffice.name}!`} />
              <input type="hidden" name="_next" value={`${window.location.origin}/contact?submitted=true`} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">First Name *</label>
                  <Input 
                    placeholder="Enter your first name" 
                    name="First Name" 
                    required 
                    className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Last Name *</label>
                  <Input 
                    placeholder="Enter your last name" 
                    name="Last Name" 
                    required 
                    className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email Address *</label>
                  <Input 
                    placeholder="Enter your email" 
                    type="email" 
                    name="Email" 
                    required 
                    className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Phone Number</label>
                  <Input 
                    placeholder="Enter your phone number" 
                    name="Phone" 
                    className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Company/Organization</label>
                <Input 
                  placeholder="Enter your company name" 
                  name="Organization" 
                  className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Preferred Office Location</label>
                <Select value={selectedLocation} onValueChange={setSelectedLocation} name="Preferred_Location">
                  <SelectTrigger className="border-gray-300 focus:border-red-500 focus:ring-red-500">
                    <SelectValue placeholder="Select office location" />
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
                <Textarea 
                  placeholder="Tell us about your logistics needs..." 
                  name="Message" 
                  required 
                  rows={5}
                  className="border-gray-300 focus:border-red-500 focus:ring-red-500 resize-none"
                />
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
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
  );
};

export default ContactForm;
