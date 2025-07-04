import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20">
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
            >
              {/* Text Section */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="order-2 md:order-1"
              >
                <h2 className="text-3xl font-bold text-red-500 mb-4">About Us</h2>
                <p className="text-gray-200 mb-4 text-base text-justify">
                  Established in 2008 by a team of well-experienced professionals, OECL, headquartered in Singapore, is one of the premier global logistics and supply chain partners in the region.
                </p>
                <p className="text-gray-200 mb-4 text-base text-justify">
                  We have been providing world-class logistics services and solutions for over 30 years, delivering with passion and commitment across various industries.
                </p>
                <p className="text-gray-200 mb-4 text-base text-justify">
                  OECL’s performance since its creation has been outstanding in handling multiple products efficiently. A dedicated team, simplified processes, and the latest technology have helped us expand our global office network.
                </p>
                <p className="text-gray-200 mb-6 text-base text-justify">
                  With firm plans to expand into more Southeast Asian countries, OECL is in a credible position to meet the growing demands of the international logistics market.
                </p>
                <Link to="/about">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-sm bg-red-600 hover:bg-red-700 text-white rounded-md font-semibold"
                  >
                    Learn More
                  </Button>
                </Link>
              </motion.div>

              {/* Main Image Section */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="order-1 md:order-2 flex justify-center"
              >
                <div className="w-full max-w-md aspect-square overflow-hidden rounded-lg shadow-lg">
                  <img
                    alt="About OECL"
                    loading="lazy"
                    className="w-full h-full object-cover rounded-lg"
                    src="/lovable-uploads/14c89acc-9c64-4484-b520-f5142136ccc6.png"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Extra Image or Visual Section */}
        <section className="py-12 bg-gray-900">
          <div className="max-w-6xl mx-auto px-4">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center text-2xl font-bold text-white mb-8"
            >
              Global Presence & Logistics Excellence
            </motion.h3>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src="/lovable-uploads/global-presence.jpg"
                alt="Global Logistics"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
