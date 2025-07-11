import { motion } from "framer-motion";

const footerAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4 lg:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Column 1: Logo and Description */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={footerAnimation}
          transition={{ delay: 0.2 }}
          className="flex flex-col"
        >
          <img src="/oecl.png" alt="OECL Logo" className="h-12 mb-4" />
          <p className="text-white/80 text-sm">
            OECL is a leading freight forwarder offering customized logistics
            and shipping solutions across the globe.
          </p>
        </motion.div>

        {/* Column 2: Quick Links */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={footerAnimation}
          transition={{ delay: 0.3 }}
          className="flex flex-col"
        >
          <h3 className="font-bold text-lg text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/home" className="hover:text-yellow-400">Home</a></li>
            <li><a href="/about-us" className="hover:text-yellow-400">About Us</a></li>
            <li><a href="/services" className="hover:text-yellow-400">Services</a></li>
            <li><a href="/blogs" className="hover:text-yellow-400">Blogs</a></li>
            <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </motion.div>

        {/* Column 3: Contact Info - Scrollable Global Offices */}
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
            <button
              onClick={() => document.getElementById("officeScroll").scrollBy({ left: -300, behavior: "smooth" })}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-yellow-500 text-black p-2 rounded-full shadow"
            >
              &#8592;
            </button>
            <button
              onClick={() => document.getElementById("officeScroll").scrollBy({ left: 300, behavior: "smooth" })}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-yellow-500 text-black p-2 rounded-full shadow"
            >
              &#8594;
            </button>

            <div
              id="officeScroll"
              className="flex overflow-x-auto space-x-4 pr-6 scroll-smooth"
            >
              {[
                {
                  country: "Singapore",
                  address: (
                    <>
                      OECL (Singapore) Pte Ltd<br />
                      Blk 511 Kampong Bahru Road<br />
                      #03-01 Keppel Distripark<br />
                      Singapore - 099447<br />
                      📞 +65 6908 0838<br />
                      📧 sales.sg@oecl.com
                    </>
                  ),
                },
                {
                  country: "India - Chennai",
                  address: (
                    <>
                      Roma Building, Door No. 10, 3rd Floor<br />
                      G.S.T. Road, Alandur, Chennai - 600016<br />
                      📞 +91 44 4689 4646<br />
                      📧 chennai@oecl.in
                    </>
                  ),
                },
                {
                  country: "India - Mumbai",
                  address: (
                    <>
                      Office No. 314, 3rd Floor, Konark Shram<br />
                      Tardeo Road, Mumbai - 400034<br />
                      📞 +91 22 2386 4123
                    </>
                  ),
                },
                {
                  country: "India - Delhi",
                  address: (
                    <>
                      Plot No. 57, Udyog Vihar Phase I<br />
                      Gurgaon, Haryana - 122016<br />
                      📞 +91 124 400 2020
                    </>
                  ),
                },
                {
                  country: "Malaysia - Johor Bahru",
                  address: (
                    <>
                      Unit 20-03A, Level 20, Menara Zurich<br />
                      15 Jalan Dato Abdullah Tahir, 80300 JB<br />
                      📞 +603-3319 2778 / 74 / 75 / 79<br />
                      📧 malaysia@oecl.com.my
                    </>
                  ),
                },
                {
                  country: "Indonesia - Jakarta",
                  address: (
                    <>
                      408, Lina Building<br />
                      JL.HR Rasuna Said Kav B7, Jakarta<br />
                      📞 +62 21 529 20292 / 522 4887<br />
                      📧 jakarta@oecl.co.id
                    </>
                  ),
                },
                {
                  country: "Thailand - Bangkok",
                  address: (
                    <>
                      109 CCT Building, 3rd Floor, Rm.3<br />
                      Surawong Road, Bangrak, Bangkok 10500<br />
                      📞 +66 2 634 3240<br />
                      📧 thailand@oecl.co.th
                    </>
                  ),
                },
                {
                  country: "Vietnam - HCMC",
                  address: (
                    <>
                      Room 101, 1st Floor, Saigon Port Building<br />
                      3 Nguyen Tat Thanh, District 4, HCMC<br />
                      📞 +84 28 3825 7678<br />
                      📧 vietnam@oecl.vn
                    </>
                  ),
                },
                {
                  country: "UAE - Dubai",
                  address: (
                    <>
                      Office 202, Building 4, DAFZA<br />
                      Dubai, United Arab Emirates<br />
                      📞 +971 4 299 5600<br />
                      📧 dubai@oecl.me
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
    </footer>
  );
};

export default Footer;
