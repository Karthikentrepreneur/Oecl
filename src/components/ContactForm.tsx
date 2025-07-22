import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { useLocation, useSearchParams } from "react-router-dom";

const ContactForm = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [selectedLocation, setSelectedLocation] = useState("Singapore (HQ)");
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const submitted = searchParams.get("submitted");
      if (submitted === "true") {
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 5000);
      }
    }
  }, [searchParams]);

  const formAction = `https://formsubmit.co/karthikjungleemara@gmail.com`;
  const nextUrl = `${window.location.origin}${location.pathname}?submitted=true`;

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white" id="contact">
      <div className="container mx-auto px-4">
        {/* ✅ Success popup */}
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-6 mx-auto max-w-2xl p-4 rounded-xl bg-green-100 border border-green-400 text-green-800 shadow-md flex items-center gap-3"
          >
            <CheckCircle2 className="w-6 h-6 text-green-600" />
            <p className="text-sm md:text-base font-medium">
              Your message has been sent successfully. We’ll get back to you soon!
            </p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Ready to streamline your logistics? Contact us today for a customized solution.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
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
              action={formAction}
              method="POST"
              className="space-y-6"
            >
              {/* Hidden inputs for FormSubmit */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />
              <input type="hidden" name="_next" value={nextUrl} />
              <input type="hidden" name="Preferred_Location" value={selectedLocation} />
              <input type="hidden" name="Source_Page_URL" value={location.pathname} />

              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">First Name *</label>
                  <Input placeholder="Enter your first name" name="First Name" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Last Name *</label>
                  <Input placeholder="Enter your last name" name="Last Name" required />
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email Address *</label>
                  <Input type="email" name="Email" placeholder="Enter your email" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Phone Number</label>
                  <Input name="Phone" placeholder="Enter your phone number" />
                </div>
              </div>

              {/* Company */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Company/Organization</label>
                <Input name="Organization" placeholder="Enter your company name" />
              </div>

              {/* Preferred Location */}
              <div className="space-y-2 max-w-md mx-auto p-4 bg-white rounded-lg shadow">
                <label className="text-sm font-medium text-gray-700">Preferred Office Location</label>
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select office location" />
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      "Singapore (HQ)",
                      "Malaysia",
                      "India",
                      "Thailand",
                      "Indonesia",
                      "Sri Lanka",
                      "Myanmar",
                      "Pakistan",
                      "Bangladesh",
                      "UK",
                      "USA",
                    ].map((loc) => (
                      <SelectItem key={loc} value={loc}>
                        {loc}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Message *</label>
                <Textarea name="Message" placeholder="Tell us about your logistics needs..." required rows={5} />
              </div>

              {/* Submit Button */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5 mr-2" />
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
