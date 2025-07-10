
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Truck, Package, BarChart3, Clock, Shield, CheckCircle } from "lucide-react";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  
  return null;
};

const ThirdPartyLogistics = () => {
  const benefits = [
    {
      icon: Package,
      title: "Scalable Warehousing",
      description: "Flexible storage solutions that grow with your business needs"
    },
    {
      icon: Truck,
      title: "Integrated Transportation",
      description: "Seamless transport coordination across multiple modes"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time visibility and performance tracking"
    },
    {
      icon: Clock,
      title: "Time-to-Market",
      description: "Faster delivery and reduced operational complexity"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Comprehensive insurance and quality assurance"
    },
    {
      icon: CheckCircle,
      title: "Cost Optimization",
      description: "Reduced overhead and improved efficiency"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      <Navigation />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-black via-gray-900 to-black text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/3pl.png"
              alt="Third Party Logistics"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900 opacity-90" />
          </div>
          <div className="container mx-auto px-4 py-16 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Third-Party Logistics (3PL)
              </h1>
              <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Comprehensive outsourced logistics solutions that streamline your supply chain operations, 
                reduce costs, and enhance customer satisfaction through our integrated approach.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-black mb-4">Why Choose Our 3PL Services?</h2>
              <div className="w-20 h-1 bg-red-600 mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Our third-party logistics services provide end-to-end supply chain management, 
                allowing you to focus on your core business while we handle the complexities of logistics.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="bg-red-600/10 text-red-600 p-3 rounded-full inline-block mb-4">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Details */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-black mb-6">Comprehensive 3PL Solutions</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-600 text-white p-2 rounded-full">
                      <Package className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-2">Warehousing & Distribution</h3>
                      <p className="text-gray-600">Strategic warehouse locations with advanced inventory management systems and pick-and-pack services.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-600 text-white p-2 rounded-full">
                      <Truck className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-2">Transportation Management</h3>
                      <p className="text-gray-600">Multi-modal transportation solutions including LTL, FTL, express delivery, and last-mile logistics.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-600 text-white p-2 rounded-full">
                      <BarChart3 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-2">Supply Chain Optimization</h3>
                      <p className="text-gray-600">Data-driven insights and analytics to optimize your entire supply chain network for maximum efficiency.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src="/3pl.png"
                  alt="3PL Services"
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-red-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Optimize Your Supply Chain?
              </h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Partner with us for comprehensive 3PL solutions that drive growth and efficiency in your business operations.
              </p>
              <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started Today
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ThirdPartyLogistics;
