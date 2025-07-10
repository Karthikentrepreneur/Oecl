import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight, Facebook, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <footer className="pt-16 pb-8 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="h-1 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 rounded-full mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-4">
          {/* Column 1: Logo & About */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerAnimation}
            className="flex flex-col items-start"
          >
            <div className="mb-4">
              <img src="/oecl.png" alt="OECL Logo" className="h-14 w-auto object-contain" loading="lazy" />
              <img src="/1GlobalEnterprises.png" alt="1 Global Enterprises Logo" className="h-10 w-auto object-contain mt-2" />
            </div>
            <p className="text-sm md:text-base text-white/80 max-w-xs text-left">
              At OECL, we are proud to be one of Singapore's leading logistics companies. We offer specialized divisions in warehousing, forwarding (air and ocean), and transportation. Our mission is to deliver comprehensive end-to-end solutions in global freight forwarding, managed through a trusted network of partners who excel in all logistics segments.
            </p>
            <div className="flex space-x-3 mt-4">
              <motion.a
                href="https://www.facebook.com/oeclglobal"
                target="_blank"
                className="bg-white text-black p-2 rounded-full hover:bg-yellow-500 hover:text-black transition"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook size={18} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/oeclglobal"
                target="_blank"
                className="bg-white text-black p-2 rounded-full hover:bg-yellow-500 hover:text-black transition"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={18} />
              </motion.a>
            </div>
          </motion.div>

          {/* Column 2: Navigation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerAnimation}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-start md:items-end lg:items-start lg:pl-10"
          >
            <h3 className="font-bold text-lg text-white mb-4">Navigation</h3>
            <div className="flex flex-col gap-2">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about-us" },
                { name: "Services", path: "/services" },
                { name: "Contact Us", path: "/contact" },
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Terms And Conditions", path: "/terms-and-conditions" },
              ].map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="text-white/80 hover:text-yellow-500 transition flex items-center gap-2"
                >
                  <ArrowRight size={14} className="text-yellow-500" />
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Column 3: Contact Info - Scrollable */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerAnimation}
            transition={{ delay: 0.4 }}
            className="flex flex-col lg:pl-10"
          >
            <h3 className="font-bold text-lg text-white mb-4">Global Offices</h3>

            <div className="relative w-full">
              {/* Scroll Buttons */}
              <button
                onClick={() =>
                  document.getElementById("officeScroll").scrollBy({ left: -300, behavior: "smooth" })
                }
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-yellow-500 text-black p-2 rounded-full shadow"
              >
                &#8592;
              </button>
              <button
                onClick={() =>
                  document.getElementById("officeScroll").scrollBy({ left: 300, behavior: "smooth" })
                }
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-yellow-500 text-black p-2 rounded-full shadow"
              >
                &#8594;
              </button>

              {/* Scrollable Container */}
              <div
                id="officeScroll"
                className="flex overflow-x-auto space-x-4 pr-6 scroll-smooth"
              >
                {[
                  {
                    country: "Singapore",
                    address: (
                      <>
                        OECL (Singapore) Pte Ltd.<br />
                        Blk 511 Kampong Bahru Road<br />
                        #03-01 Keppel Distripark<br />
                        Singapore - 099447<br />
                        <strong>+65 69080838</strong>
                      </>
                    ),
                  },
                  {
                    country: "Indonesia - Jakarta",
                    address: (
                      <>
                        408, Lina Building,<br />
                        JL.HR Rasuna Said kav B7, Jakarta<br />
                        <strong>+62 21 529 20292, 522 4887</strong>
                      </>
                    ),
                  },
                  {
                    country: "India - Chennai",
                    address: (
                      <>
                        Roma Building, Door No. 10, 3rd Floor,<br />
                        G.S.T. Road, Alandur, Chennai-600 016<br />
                        <strong>044 4689 4646</strong>
                      </>
                    ),
                  },
                  {
                    country: "Malaysia - Pasirgudang",
                    address: (
                      <>
                        Unit 20-03A, Level 20 Menara Zurich<br />
                        15 Jalan Dato Abdullah Tahir, 80300 Johor Bahru<br />
                        <strong>603-3319 2778 / 74 / 75, 79</strong>
                      </>
                    ),
                  },
                  {
                    country: "Thailand - Bangkok",
                    address: (
                      <>
                        109 CCT Building, 3rd Floor, Rm.3,<br />
                        Surawong Road, Suriyawongse, Bangrak, Bangkok 10500<br />
                        <strong>+662-634-3240</strong>
                      </>
                    ),
                  },
                ].map((office, index) => (
                  <div
                    key={index}
                    className="min-w-[250px] bg-white/10 p-4 rounded-lg shadow-md border border-white/10"
                  >
                    <h4 className="text-yellow-400 font-semibold mb-2">{office.country}</h4>
                    <p className="text-sm text-white/80">{office.address}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Line */}
        <div className="text-center text-white/70 mt-10 text-sm">
          &copy; {new Date().getFullYear()} OECL. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
