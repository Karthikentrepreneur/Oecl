import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Truck, Plane, Ship, Box, ShieldCheck, Warehouse, BarChart } from "lucide-react";
import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
};

const ServiceCard = ({ icon, title, description, image, link }) => {
  const getServiceImage = () => {
    switch (title) {
      case "Air Freight": return "/aircargo2.png";
      case "Ocean Freight": return "/oceanf.png";
      case "Customs Clearance": return "/lovable-uploads/cc.jpg";
      case "Liquid Transportation": return "/transports.png";
      case "Transportation": return "/CARGO.png";
      case "Warehousing": return "/warhouseh1.png";
      default: return image;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-black rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group grid grid-cols-1 md:grid-cols-2"
    >
      <div className="w-full h-48 md:h-64">
        <img
          src={getServiceImage()}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col justify-center text-white">
        <div className="bg-red-600 text-white p-2 rounded-full inline-block mb-2 w-fit">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-4">{description}</p>
        <Link
          to={link}
          className="text-red-400 hover:text-red-300 inline-flex items-center text-sm"
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
  const isMobile = useIsMobile();
  const services = [
    { id: 1, icon: <Ship className="w-5 h-5" />, title: "Ocean Freight", image: "/oceanf.png", description: "At GGL, our dedicated Ocean Freight Department specializes in comprehensive freight management services for both Less-than-Container Load (LCL) and Full Container Load (FCL) shipments.", link: "/services/ocean-freight" },
    { id: 2, icon: <Warehouse className="w-5 h-5" />, title: "LCL Consolidation", image: "/hom4.png", description: "We collect your goods from your location and prepare them for consolidation. This includes proper labelling, packaging, and documentation to ensure smooth transit.", link: "/services/lcl-consolidation" },
    { id: 3, icon: <Truck className="w-5 h-5" />, title: "Transportation", image: "/CARGO.png", description: "Efficient transportation and distribution are the backbone of a seamless supply chain. Our fleet and infrastructure ensure on-time delivery every time.", link: "/services/transportation" },
    { id: 4, icon: <Warehouse className="w-5 h-5" />, title: "Warehousing", image: "/warhouseh1.png", description: "We offer full-service warehousing and third-party logistics (3PL) to streamline your supply chain with flexible, reliable, and scalable solutions.", link: "/services/warehousing" },
    { id: 5, icon: <Plane className="w-5 h-5" />, title: "Air Freight", image: "/aircargo2.png", description: "Our air freight services provide fast, reliable, and flexible global shipping — including import/export, express, and door-to-door solutions.", link: "/services/air-freight" },
    { id: 6, icon: <Warehouse className="w-5 h-5" />, title: "Project Cargo", image: "/cargoh1.png", description: "We specialize in delivering end-to-end logistics for heavy, oversized, and time-critical shipments, ensuring efficiency and safety.", link: "/services/project-cargo" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <ScrollToTop />
      <Header />
      <main className="flex-grow pt-16 md:pt-20">
        <section className="relative overflow-hidden bg-black">
          <div className="absolute inset-0 z-0">
            <img src="/lovable-uploads/gp.jpg" alt="Services" className="w-full h-full object-cover opacity-10" />
            <div className="absolute inset-0 bg-black opacity-90" />
          </div>

          <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white">Our Logistics Services</h1>
              <div className="w-16 h-1 bg-red-600 mx-auto mb-4"></div>
              <p className="text-base md:text-lg text-white/80 mb-4">
                From air and ocean freight to specialized transportation solutions, we offer end-to-end logistics expertise to meet your global shipping needs.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 bg-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInVie
