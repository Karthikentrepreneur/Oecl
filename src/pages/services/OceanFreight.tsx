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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + (0.1 * index) }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-black mb-4">Ocean Freight Advantages</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Anchor,
                title: "Cost Effective",
                description: "Most economical shipping method for large volume cargo"
              },
              {
                icon: Container,
                title: "Flexible Options",
                description: "FCL and LCL services to meet your specific requirements"
              },
              {
                icon: Shield,
                title: "Reliable Service",
                description: "Established partnerships with major shipping lines worldwide"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
              >
                <div className="bg-red-600/20 p-4 rounded-xl mb-6 w-fit">
                  <benefit.icon className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed space-y-6">
            <p>
              OECL Provide complete transparency of all the pricing at the origin, destination and ocean freight charges.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OceanFreight;
