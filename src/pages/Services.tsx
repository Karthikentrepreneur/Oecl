import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Truck, Plane, Ship, Box, ShieldCheck, BarChart } from "lucide-react";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
};

const ServiceCard = ({ title, description, icon: Icon, image, link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group grid grid-cols-1 md:grid-cols-2"
    >
      <div className="w-full h-48 md:h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col justify-center">
        <div className="bg-red-600/10 text-red-600 p-2 rounded-full inline-block mb-2 w-fit">
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="text-xl font-semibold text-black mb-3">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-4">{description}</p>
        <Link
          to={link}
          className="text-red-600 font-medium hover:text-red-800 inline-flex items-center text-sm"
        >
          Learn More
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Road Freight",
      description: "Reliable road transportation services for local and long-distance deliveries, with real-time tracking and flexible scheduling options.",
      icon: Truck,
      image: "/CARGO.png",
      link: "/services/road-freight",
    },
    {
      id: 2,
      title: "Air Freight",
      description: "Fast and efficient air cargo services to destinations worldwide, ideal for time-sensitive shipments and high-value goods.",
      icon: Plane,
      image: "/aircargo2.png",
      link: "/services/air-freight",
    },
    {
      id: 3,
      title: "Ocean Freight",
      description: "Cost-effective sea freight solutions for bulk cargo, with options for full container load (FCL) and less than container load (LCL) shipments.",
      icon: Ship,
      image: "/oceanf.png",
      link: "/services/ocean-freight",
    },
    {
      id: 4,
      title: "Warehousing",
      description: "Secure storage facilities with inventory management systems, order fulfillment services, and distribution solutions.",
      icon: Box,
      image: "/warhouseh1.png",
      link: "/services/warehousing",
    },
    {
      id: 5,
      title: "Cargo Insurance",
      description: "Comprehensive coverage options to protect your shipments against loss, damage, or theft during transportation.",
      icon: ShieldCheck,
      image: "/lovable-uploads/cc.jpg",
      link: "/services/cargo-insurance",
    },
    {
      id: 6,
      title: "Supply Chain Solutions",
      description: "End-to-end supply chain management services, including demand forecasting, inventory optimization, and logistics consulting.",
      icon: BarChart,
      image: "/cargoh1.png",
      link: "/services/supply-chain",
    },
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
              src="/lovable-uploads/gp.jpg"
              alt="Services"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900 opacity-90" />
          </div>
          <div className="container mx-auto px-4 py-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">
                Our Logistics Services
              </h1>
              <div className="w-16 h-1 bg-red-600 mx-auto mb-4"></div>
              <p className="text-lg text-white/90">
                From air and ocean freight to specialized transportation solutions, we offer end-to-end logistics expertise to meet your global shipping needs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Service Cards */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-black mb-3">All Services</h2>
              <div className="w-20 h-1 bg-red-600 mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore our comprehensive range of services designed to meet all your logistics requirements.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map(service => (
                <ServiceCard key={service.id} {...service} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
