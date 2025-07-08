import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Ship, Anchor, Container, Shield, CheckCircle } from "lucide-react";

const OceanFreight = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    "Full Container Load (FCL)",
    "Less than Container Load (LCL)",
    "Door-to-door delivery",
    "Customs documentation",
    "Cargo tracking & monitoring",
    "Competitive freight rates"
  ];

  return (
    <div className="bg-white text-black min-h-screen">
      <Navigation />
      
      <section className="pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-red-600/20 px-6 py-3 rounded-full mb-6">
              <Ship className="w-6 h-6 text-red-500" />
              <span className="text-red-500 font-semibold">Ocean Freight Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Ocean Freight <span className="text-red-500">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Cost-effective sea cargo services for your bulk shipments with reliable scheduling
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/oceanfreight.png"
                  alt="Ocean Freight Services"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-red-500">Comprehensive Ocean Freight</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                OECL has own fleet of containers including special equipment’s to accommodate special requirements of customers and specializes in many trade lanes. 
                Being sea freight professionals with vast experience in the field helps to match frequent sailing and flexible service options. 
                Multiple carrier options on any trade route with contracted rates helps to secure the space, allocation, timing, pricing and frequency of your shipments. 
                FCL is the most optimized container shipping way regarding cost, volume and weight of the cargo. 
                We take special care at each step of the process which involves fixing contract pricing with carriers, reserving space, make booking, picking up empty container at the container depot, 
                loading at shipper facility, transporting by truck / rail to the port and vessel loading, monitor vessel schedule till final delivery to consignee. 
                For import bookings we engage our overseas partners in the absence of our own network and monitor each steps and keep our customers / consignees informed at all stages.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                OECL operate own consolidation service on many trade routes. 
                With its vast network of consolidators, the company is able to provide competitive price with multiple options of sailing. 
                With regular consolidation boxes to important trade lanes, the company has the advantage of accommodating cargo which requires timely deliveries.
              </p>

            </motion.div>
          </div>
        </div>
      </section>

      {/* FCL Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-black mb-4">FCL Services</h2>
            <div className="w-20 h-1 bg-red-500 mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-lg mb-16"
          >
            <p className="text-gray-700 text-lg leading-relaxed">
              OECL has own fleet of containers including special equipment's to accommodate special requirements of customers and specializes in many trade lanes. 
              Being sea freight professionals with vast experience in the field helps to match frequent sailing and flexible service options. 
              Multiple carrier options on any trade route with contracted rates helps to secure the space, allocation, timing, pricing and frequency of your shipments. 
              FCL is the most optimized container shipping way regarding cost, volume and weight of the cargo. 
              We take special care at each step of the process which involves fixing contract pricing with carriers, reserving space, make booking, picking up empty container at the container depot, 
              loading at shipper facility, transporting by truck / rail to the port and vessel loading, monitor vessel schedule till final delivery to consignee. 
              For import bookings we engage our overseas partners in the absence of our own network and monitor each steps and keep our customers / consignees informed at all stages.
            </p>
          </motion.div>

          {/* LCL Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-3xl font-bold text-red-500 mb-4">LCL Services</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-lg mb-8"
          >
            <p className="text-gray-700 text-lg leading-relaxed">
              OECL operate own consolidation service on many trade routes. 
              With its vast network of consolidators, the company is able to provide competitive price with multiple options of sailing. 
              With regular consolidation boxes to important trade lanes, the company has the advantage of accommodating cargo which requires timely deliveries.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center bg-red-50 p-8 rounded-2xl border border-red-200"
          >
            <p className="text-red-700 text-lg font-semibold">
              OECL Provide complete transparency of all the pricing at the origin, destination and ocean freight charges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-black mb-4">Additional Services</h2>
            <div className="w-20 h-1 bg-red-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Warehousing */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-red-500 mb-6">WAREHOUSING</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                OECL is well equipped to handle the warehousing of various commodities including cold storage.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Warehouse management is a key part of the supply chain and primarily aims to control the movement and storage of materials within a warehouse and process the associated transactions including shipping, receiving, put away and picking.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With its network in domestic and global market, OECL can identify the right kind of warehouse depending on customer's requirement based on cost effective, storage specific, commodity specific and proximity specific needs.
              </p>
            </motion.div>

            {/* Customs Clearance */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-red-500 mb-6">CUSTOMS CLEARANCE</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                As one of the leading custom clearing agents, we ensure that all clearance formalities are done in a smooth and easy manner so that all our customers receive their goods on time.
              </p>
              <p className="text-gray-700 leading-relaxed">
                OECL takes pride in being in business for more than a decade and have cleared all types of shipments of any sizes and for a plethora of goods from across the world taking care of each transportation with precision.
              </p>
            </motion.div>

            {/* Liner Agency */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-red-500 mb-6">LINER AGENCY</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                OECL has liner division which is representing many medium to small carriers who use our local knowledge and expertise to handle and market their products.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With shipping industry going through many changes, OECL helps shipping carriers to optimize their resources by providing local support to ensure a win-win formula.
              </p>
            </motion.div>

            {/* Liquid Cargo Transportation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-red-500 mb-6">LIQUID CARGO TRANSPORTATION</h3>
              <p className="text-gray-700 leading-relaxed">
                OECL provides expertise and services for carriage of liquid cargoes in ISO Tanks, Flexi Tanks and IBCs (Inter Bulk Containers).
                OECL provide professional, cost effective and safe transportation of liquid cargo. A well experienced dedicated team provides complete logistics management for door to door movements with complete visibility.
              </p>
            </motion.div>
          </div>

          {/* Project Cargo - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-red-50 to-gray-50 p-8 md:p-12 rounded-2xl shadow-lg border border-red-100"
          >
            <h3 className="text-3xl font-bold text-red-500 mb-6 text-center">PROJECT CARGO</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We have a dedicated knowledge based project division having skilled experts in the field inherited from major project handlers. 
              OECL are well equipped to handle all kinds of long lengths, over width, over height, heavy lift and complex project cargoes including those that needs floating cranes or tandem lifting.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We create single solution packages, tailor made to meet our customers specific shipping and transport requirements, to most compass points across the globe, be it port to port or ex-works to door.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We believe in transparency, especially in our costings, so that our customers gets the best value which is important for their projects.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OceanFreight;
