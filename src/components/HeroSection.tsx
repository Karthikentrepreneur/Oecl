import React, { useState, useEffect } from "react";
import {
  Users,
  UserCircle,
  SearchCode,
  Ship,
  Calendar,
  ArrowRight,
  Play,
  Zap
} from "lucide-react";
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
      description:
        "Supported through own offices and network of key partners around the world.",
      gradient: "from-black/60 via-black/40 to-black/60"
    },
    {
      url: "/h3.png",
      title: "WAREHOUSE MANAGEMENT",
      description: "A cutting edge solutions with advanced WMS .",
      gradient: "from-black/60 via-black/40 to-black/60"
    },
    {
      url: "/h4.png",
      title: "MULTIPLE CARRIER OPTION",
      description:
        "Assured space with contracted rates to major trade routes .",
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
      setActiveSlide((prev) => (prev + 1) % sliderImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const currentSlide = sliderImages[activeSlide];

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Background Slider */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {sliderImages.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
              activeSlide === i
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
            style={{ zIndex: activeSlide === i ? 1 : 0 }}
          >
            <img
              src={slide.url}
              alt={`Slide ${i}`}
              className="w-full h-full object-cover transition-transform duration-2000"
              loading={i === 0 ? "eager" : "lazy"}
            />
            <div
              className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} z-[1]`}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/40 z-[2]" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl w-full space-y-6 sm:space-y-8 text-center sm:text-left mx-auto sm:mx-[200px]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            {currentSlide.title.split(" ").map((word, i) => (
              <span
                key={i}
                style={{ animationDelay: `${i * 0.1}s` }}
                className="text-slate-50"
              >
                {word}{" "}
              </span>
            ))}
          </h1>

          <p
            className={`text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto sm:mx-0 leading-relaxed transition-all duration-1000 delay-500 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {currentSlide.description}
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center sm:justify-start transition-all duration-1000 delay-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <Link to="/signup" className="group">
              <button className="relative overflow-hidden bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-xl px-8 py-4 text-lg font-semibold flex items-center gap-3 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-red-500/30 border border-red-500/30">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <Zap className="w-5 h-5" />
                <span>GET STARTED</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center sm:justify-start space-x-2 pt-4">
            {sliderImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSlide === i
                    ? "bg-red-500 scale-125 shadow-lg shadow-red-500/50"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
