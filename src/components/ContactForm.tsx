
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, User, Phone, Send } from "lucide-react";
import { useLocation } from "react-router-dom";

const ContactForm = () => {
  const { toast } = useToast();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

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

  // Country-specific contact information
  const countryInfo = {
    india: {
      name: "India Office",
      email: "india@oecl.com",
      phone: "+91 22 4517 4102",
      address: "407, Mayuresh Planet, Plot No - 42 & 43, Sector-15, CBD Belapur, Navi Mumbai, Maharashtra, 400614"
    },
    malaysia: {
      name: "Malaysia Office", 
      email: "malaysia@oecl.com",
      phone: "+60 3-3319 2778",
      address: "Unit 20-03A, Level 20 Menara Zurich, 15 Jalan Dato Abdullah Tahir, 80300 Johor Bahru"
    },
    indonesia: {
      name: "Indonesia Office",
      email: "indonesia@oecl.com", 
      phone: "+62 21 529 20292",
      address: "408, Lina Building, JL.HR Rasuna Said kav B7, Jakarta"
    },
    thailand: {
      name: "Thailand Office",
      email: "thailand@oecl.com",
      phone: "+66 2-634-3240", 
      address: "109 CCT Building, 3rd Floor, Rm.3, Surawong Road, Suriyawongse, Bangrak, Bangkok 10500"
    },
    singapore: {
      name: "Singapore Office",
      email: "info@oecl.com",
      phone: "+65 69080838",
      address: "OECL (Singapore) Pte Ltd. Blk 511 Kampong Bahru Road #03-01 Keppel Distripark Singapore - 099447"
    }
  };

  const currentCountryInfo = countryInfo[country];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll respond shortly."
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="text-white py-16 bg-slate-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2 text-slate-950">Get In Touch</h2>
          <div className="w-16 h-1 bg-red-600 mx-auto mb-4"></div>
          <p className="max-w-2xl mx-auto text-slate-950">
            Need logistics support or want to know more about OECL services? Fill out the form and we'll get back to you shortly.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white text-black rounded-lg overflow-hidden shadow-lg grid md:grid-cols-5">
          {/* Contact Info Section */}
          <div className="bg-kargon-red text-white p-6 md:col-span-2 space-y-6">
            <img src="/oecl.png" alt="OECL Logo" className="h-12 mb-4" />
            <h3 className="text-xl font-bold">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail size={20} className="mt-1 mr-3" />
                <div>
                  <p className="font-medium">Email</p>
                  <p>{currentCountryInfo.email}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone size={20} className="mt-1 mr-3" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p>{currentCountryInfo.phone}</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="mt-1 mr-3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <p className="font-medium">Address</p>
                  <p>{currentCountryInfo.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="p-6 md:col-span-3 bg-white">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-medium text-gray-700 flex items-center">
                  <User size={18} className="mr-2 text-gray-500" />
                  Full Name
                </label>
                <Input name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
              </div>
              <div>
                <label className="font-medium text-gray-700 flex items-center">
                  <Mail size={18} className="mr-2 text-gray-500" />
                  Email
                </label>
                <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Your email" required />
              </div>
              <div>
                <label className="font-medium text-gray-700 flex items-center">
                  <Phone size={18} className="mr-2 text-gray-500" />
                  Phone
                </label>
                <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="Your phone number" />
              </div>
              <div>
                <label className="font-medium text-gray-700 flex items-center">
                  <svg className="mr-2 text-gray-500" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  Message
                </label>
                <Textarea name="message" rows={4} value={formData.message} onChange={handleChange} placeholder="How can we help you?" required />
              </div>

              <Button type="submit" className="bg-kargon-red text-white hover:bg-kargon-red/90 w-full" disabled={loading}>
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <Send size={18} className="mr-2" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
