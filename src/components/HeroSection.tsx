import React, { useState, useEffect } from "react";
import {
  Users,
  UserCircle,
  SearchCode,
  Ship,
  Calendar,
  ArrowRight,
  Play,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isCustomerPortalOpen, setIsCustomerPortalOpen] = useState(false);

  const sliderImages = [
    {
      url: "/lovable-uploads/9bc9bb5d-5345-4122-9396-f69e5f467fc3.png",
      title: "OECL",
      description: "Vital Link to Enhance Your Supply Chain.",
      gradient: "from-gray-900/80 via-gray-700/60 to-gray-900/80",
    },
    {
      url: "/truck12.png",
      title: "LOGISTICS SERVICES",
      description:
        "Supported through own offices and network of key partners around the world.",
      gradient: "from-gray-900/80 via-gray-700/60 to-gray-900/80",
    },
    {
      url: "/ships.png",
      title: "WAREHOUSE MANAGEMENT",
      description: "A cutting edge solutions with advanced WMS.",
      gradient: "from-gray-900/80 via-gray-700/60 to-gray-900/80",
    },
    {
      url: "/cargoplane.png",
      title: "MULTIPLE CARRIER OPTION",
      description:
        "Assured space with contracted rates to major trade routes.",
      gradient: "from-gray-900/80 via-gray-700/60 to-gray-900/80",
    },
  ];

  const portalLinks = [
    {
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Customer Portal",
      subtitle: "Access your account",
      onClick: () => setIsCustomerPortalOpen(true),
      color: "from-blue-500 to-blue-700",
      hoverColor: "from-blue-600 to-blue-800",
    },
    {
      icon: <UserCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Partner Portal",
      subtitle: "Partner dashboard",
      url: "https://pp.onlinetracking.co/auth/login/3",
      external: true,
      color: "from-purple-500 to-purple-700",
      hoverColor: "from-purple-600 to-purple-800",
    },
    {
      icon: <SearchCode className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Tracking",
      subtitle: "Track shipments",
      url: "http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:102:::::P0_GROUP_RID:59",
      external: true,
      color: "from-green-500 to-green-700",
      hoverColor: "from-green-600 to-green-800",
    },
    {
      icon: <Ship className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Sailing Schedule",
      subtitle: "View schedules",
      url: "http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:104:::::P0_GROUP_RID:59",
      external: true,
      color: "from-cyan-500 to-cyan-700",
      hoverColor: "from-cyan-600 to-cyan-800",
    },
    {
      icon: <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Online Quote",
      subtitle: "Get instant quote",
      url: "/contact",
      external: false,
      color: "from-orange-500 to-orange-700",
      hoverColor: "from-orange-600 to-orange-800",
    },
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
  }, []);

  const currentSlide = sliderImages[activeSlide];

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background Stars/Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Background Image Slider */}
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
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`} />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/60 z-[2]" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 flex items-center min-h-screen px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-left space-y-8">
          <h1 className="text-5xl font-bold leading-tight">
            {currentSlide.title}
          </h1>
          <p
            className={`text-lg md:text-xl text-gray-200 max-w-2xl transition-opacity duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {currentSlide.description}
          </p>

          {/* CTA */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <Link to="/signup" className="inline-block">
              <button className="flex items-center gap-2 px-6 py-3 rounded-xl text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition-all">
                <Zap className="w-4 h-4" />
                GET STARTED
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>

          {/* Indicators */}
          <div className="flex gap-2 pt-4">
            {sliderImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`w-3 h-3 rounded-full ${
                  activeSlide === i
                    ? "bg-red-500 scale-125"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Portal Links */}
      <div className="absolute bottom-6 left-0 right-0 z-20 px-4">
        <div
          className={`max-w-7xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 bg-white/5 backdrop-blur-xl p-4 rounded-2xl border border-white/10">
            {portalLinks.map((link, index) => {
              const Content = (
                <div className="group relative p-4 rounded-xl text-center bg-gradient-to-br text-white from-black/30 to-black/60 hover:scale-105 transform transition-all duration-300">
                  <div className="mb-2">{link.icon}</div>
                  <div className="font-bold">{link.title}</div>
                  <div className="text-xs text-white/70">{link.subtitle}</div>
                </div>
              );
              if (link.external) {
                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {Content}
                  </a>
                );
              } else if (link.onClick) {
                return (
                  <button key={index} onClick={link.onClick}>
                    {Content}
                  </button>
                );
              } else {
                return (
                  <Link key={index} to={link.url}>
                    {Content}
                  </Link>
                );
              }
            })}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isCustomerPortalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-lg max-w-4xl w-full overflow-hidden">
            <div className="bg-gradient-to-r from-red-600 to-red-700 p-4 text-white flex justify-between items-center">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Users className="w-6 h-6" /> Customer Portal
              </h2>
              <button
                onClick={() => setIsCustomerPortalOpen(false)}
                className="text-white text-2xl"
              >
                ×
              </button>
            </div>

            <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2 text-red-600">
                  <Play className="w-5 h-5" /> Tutorial Videos
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      src: "/GGL_demo1.mp4",
                      label: "Getting Started",
                      duration: "5:32",
                    },
                    {
                      src: "/GGL_promo.mp4",
                      label: "Advanced Features",
                      duration: "7:45",
                    },
                  ].map((video, i) => (
                    <div
                      key={i}
                      className="rounded-lg border shadow-sm hover:shadow-lg transition"
                    >
                      <video
                        controls
                        className="w-full aspect-video"
                        poster={`/video-thumbnail-${i + 1}.jpg`}
                      >
                        <source src={video.src} type="video/mp4" />
                      </video>
                      <div className="p-4">
                        <h4 className="font-semibold">{video.label}</h4>
                        <p className="text-sm text-gray-500">
                          Duration: {video.duration}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-4 border-t">
                <button
                  onClick={() => setIsCustomerPortalOpen(false)}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                >
                  Close
                </button>
                <a
                  href="https://cp.onlinetracking.co/#/login/3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 flex items-center gap-2">
                    Login to Portal <ArrowRight className="w-4 h-4" />
                  </button>
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
