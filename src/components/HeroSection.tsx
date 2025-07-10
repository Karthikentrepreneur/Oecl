
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Ship, Globe, Package, Truck, Plane, Anchor } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: <Ship className="h-8 w-8" />,
      title: "Ocean Freight",
      url: "/services/ocean-freight",
      external: false,
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:from-blue-700 hover:to-blue-900"
    },
    {
      icon: <Plane className="h-8 w-8" />,
      title: "Air Freight", 
      url: "/services/air-freight",
      external: false,
      color: "from-sky-500 to-sky-700",
      hoverColor: "hover:from-sky-600 hover:to-sky-800"
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: "Warehousing",
      url: "/services/warehousing", 
      external: false,
      color: "from-green-600 to-green-800",
      hoverColor: "hover:from-green-700 hover:to-green-900"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Project Cargo",
      url: "/services/project-cargo",
      external: false, 
      color: "from-orange-600 to-orange-800",
      hoverColor: "hover:from-orange-700 hover:to-orange-900"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Customs Clearance",
      url: "/services/customs-clearance",
      external: false,
      color: "from-purple-600 to-purple-800", 
      hoverColor: "hover:from-purple-700 hover:to-purple-900"
    },
    {
      icon: <Anchor className="h-8 w-8" />,
      title: "Linear Agency",
      onClick: () => navigate("/services/linear-agency"),
      color: "from-red-600 to-red-800",
      hoverColor: "hover:from-red-700 hover:to-red-900"
    }
  ];

  const handleServiceClick = (service: typeof services[0]) => {
    if (service.url) {
      if (service.external) {
        window.open(service.url, '_blank');
      } else {
        navigate(service.url);
      }
    } else if (service.onClick) {
      service.onClick();
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10"></div>
      
      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-500/10 rounded-full blur-xl animate-pulse delay-500"></div>

      <div className="relative z-10 container mx-auto px-4 py-20 pt-32">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full text-sm font-medium backdrop-blur-sm border border-blue-500/30">
              Global Logistics Excellence
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Connecting
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              World Commerce
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your trusted logistics partner delivering seamless supply chain solutions across continents with precision, reliability, and innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={() => navigate('/services')}
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300"
              onClick={() => navigate('/contact')}
            >
              Get Quote
            </Button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core Services
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Comprehensive logistics solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative group cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                  hoveredCard === index ? 'z-10' : 'z-0'
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleServiceClick(service)}
              >
                <div className={`bg-gradient-to-br ${service.color} ${service.hoverColor} p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/10 backdrop-blur-sm`}>
                  <div className="text-white mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <div className="flex items-center text-white/80 group-hover:text-white transition-colors duration-300">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
                
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: "50+", label: "Countries Served" },
            { number: "10K+", label: "Shipments Delivered" },
            { number: "99.9%", label: "On-Time Delivery" },
            { number: "24/7", label: "Customer Support" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
