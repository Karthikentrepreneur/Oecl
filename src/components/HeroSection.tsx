import React, { useState, useEffect } from "react";
import { Users, UserCircle, SearchCode, Ship, Calendar, ArrowRight, Zap, Play } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isCustomerPortalOpen, setIsCustomerPortalOpen] = useState(false);

  const sliderImages = [
    {
      url: "/h1.png",
      title: "OECL",
      description: "Vital Link to Enhance Your Supply Chain.",
      gradient: "from-black/60 via-black/40 to-black/60"
    },
    {
      url: "/h2.png",
      title: "LOGISTICS SERVICES",
      description: "Supported through own offices and network of key partners around the world.",
      gradient: "from-black/60 via-black/40 to-black/60"
    },
    {
      url: "/h3.png",
      title: "WAREHOUSE MANAGEMENT",
      description: "A cutting edge solutions with advanced WMS.",
      gradient: "from-black/60 via-black/40 to-black/60"
    },
    {
      url: "/h4.png",
      title: "MULTIPLE CARRIER OPTION",
      description: "Assured space with contracted rates to major trade routes.",
      gradient: "from-black/60 via-black/40 to-black/60"
    }
  ];

  const portalLinks = [
    {
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Customer Portal",
      subtitle: "Access your account",
      onClick: () => setIsCustomerPortalOpen(true),
      color: "from-blue-500 to-blue-700",
      hoverColor: "from-blue-600 to-blue-800"
    },
    {
      icon: <UserCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Partner Portal",
      subtitle: "Partner dashboard",
      url: "https://pp.onlinetracking.co/auth/login/3",
      external: true,
      color: "from-purple-500 to-purple-700",
      hoverColor: "from-purple-600 to-purple-800"
    },
    {
      icon: <SearchCode className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Tracking",
      subtitle: "Track shipments",
      url: "http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:102:::::P0_GROUP_RID:59",
      external: true,
      color: "from-green-500 to-green-700",
      hoverColor: "from-green-600 to-green-800"
    },
    {
      icon: <Ship className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Sailing Schedule",
      subtitle: "View schedules",
      url: "http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:104:::::P0_GROUP_RID:59",
      external: true,
      color: "from-cyan-500 to-cyan-700",
      hoverColor: "from-cyan-600 to-cyan-800"
    },
    {
      icon: <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Online Quote",
      subtitle: "Get instant quote",
      url: "/contact",
      external: false,
      color: "from-orange-500 to-orange-700",
      hoverColor: "from-orange-600 to-orange-800"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % sliderImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = sliderImages[activeSlide];

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-10">
        {sliderImages.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
              activeSlide === i ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
            style={{ zIndex: activeSlide === i ? 1 : 0 }}
          >
            <img src={slide.url} alt={`Slide ${i}`} className="w-full h-full object-cover" />
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} z-[1]`} />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/40 z-[2]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-4xl w-full space-y-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">
            {currentSlide.title}
          </h1>
          <p className={`text-xl sm:text-2xl text-gray-200 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            {currentSlide.description}
          </p>

          <div className={`transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <Link to="/signup" className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold shadow-lg">
              <Zap className="w-5 h-5 mr-2" />
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center gap-2 pt-4">
            {sliderImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`w-3 h-3 rounded-full ${
                  activeSlide === i ? "bg-red-500" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Portal Buttons */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 w-full px-6">
        <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl mx-auto p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {portalLinks.map((link, i) => {
            const content = (
              <div className="group relative overflow-hidden w-full h-24 flex flex-col justify-center items-center text-white rounded-xl p-3">
                <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-90 group-hover:opacity-100 transition`} />
                <div className="relative z-10 flex flex-col items-center gap-1 text-center">
                  <div className="p-2 bg-white/20 rounded-lg group-hover:bg-white/30 transition">
                    {link.icon}
                  </div>
                  <div className="font-medium text-sm">{link.title}</div>
                  <div className="text-xs text-white/80">{link.subtitle}</div>
                </div>
              </div>
            );

            if (link.external) {
              return (
                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer">
                  {content}
                </a>
              );
            } else if (link.onClick) {
              return (
                <button key={i} onClick={link.onClick}>
                  {content}
                </button>
              );
            } else {
              return (
                <Link key={i} to={link.url}>
                  {content}
                </Link>
              );
            }
          })}
        </div>
      </div>

      {/* Customer Portal Modal */}
      {isCustomerPortalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl w-full max-w-3xl overflow-hidden shadow-lg">
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-red-600 to-red-700 text-white">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Users className="w-5 h-5" />
                Customer Portal
              </h2>
              <button onClick={() => setIsCustomerPortalOpen(false)} className="text-2xl">
                ×
              </button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { src: "/GGL_demo1.mp4", label: "Getting Started", duration: "5:32" },
                  { src: "/GGL_promo.mp4", label: "Advanced Features", duration: "7:45" }
                ].map((vid, i) => (
                  <div key={i} className="border rounded-xl overflow-hidden">
                    <div className="relative">
                      <video controls className="w-full h-48 object-cover">
                        <source src={vid.src} type="video/mp4" />
                      </video>
                      <span className="absolute top-2 right-2 bg-black/70 text-white px-2 text-xs rounded">
                        {vid.duration}
                      </span>
                    </div>
                    <div className="p-3">
                      <h4 className="font-semibold text-gray-800">{vid.label}</h4>
                      <p className="text-sm text-gray-500">Learn how to use the portal</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-end gap-2">
                <button onClick={() => setIsCustomerPortalOpen(false)} className="px-4 py-2 bg-gray-200 rounded">
                  Close
                </button>
                <a
                  href="https://cp.onlinetracking.co/#/login/3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-red-600 text-white rounded"
                >
                  Login to Portal
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
