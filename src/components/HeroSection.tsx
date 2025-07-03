import React, { useState, useEffect } from "react";
import { Users, UserCircle, SearchCode, Ship, Calendar, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isCustomerPortalOpen, setIsCustomerPortalOpen] = useState(false);

  const sliderImages = [
    "/lovable-uploads/9bc9bb5d-5345-4122-9396-f69e5f467fc3.png",
    "/truck12.png",
    "/ships.png",
    "/cargoplane.png",
  ];

  const portalLinks = [
    {
      icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "Customer Portal",
      description: "Access shipping dashboard",
      onClick: () => setIsCustomerPortalOpen(true),
    },
    {
      icon: <UserCircle className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "Partner Portal",
      description: "Manage partnership",
      url: "https://pp.onlinetracking.co/auth/login/3",
      external: true,
    },
    {
      icon: <SearchCode className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "Tracking",
      description: "Track your shipment",
      url: "http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:102:::::P0_GROUP_RID:59",
      external: true,
    },
    {
      icon: <Ship className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "Sailing Schedule",
      description: "View schedules",
      url: "http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:104:::::P0_GROUP_RID:59",
      external: true,
    },
    {
      icon: <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "Online Quote",
      description: "Request a quote",
      url: "/contact",
      external: false,
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {sliderImages.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              activeSlide === i ? "opacity-100" : "opacity-0"
            }`}
            style={{ zIndex: activeSlide === i ? 1 : 0 }}
          >
            <img
              src={img}
              alt={`Slide ${i}`}
              className="w-full h-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/50 z-[1]" />
      </div>

      {/* Text and Title */}
      <div className="relative z-10 flex items-center min-h-screen px-6">
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="text-yellow-500 animate-spin-slow">
              <Globe className="w-8 h-8 drop-shadow-[0_0_8px_rgba(246,177,0,0.8)]" />
            </div>
            <span className="bg-yellow-500/20 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium border border-yellow-500/30">
              Beyond Logistics, a Complete Solution
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Delivering Excellence in{" "}
            <span className="text-yellow-500">Global Logistics</span> Solutions
          </h1>
          <p className="text-lg text-white/90">
            GGL brings over 25 years of expertise in international logistics,
            offering comprehensive solutions tailored to your business needs.
          </p>
          <Link to="/signup">
            <button className="bg-kargon-red hover:bg-kargon-red/90 text-white rounded-md px-6 py-4 text-lg flex items-center gap-2">
              GET STARTED
            </button>
          </Link>
        </div>
      </div>

      {/* Portal Buttons */}
      <div className="absolute bottom-6 left-0 right-0 z-10 px-4">
        <div
          className={`max-w-7xl mx-auto transition-all duration-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3 bg-white/10 p-3 rounded-lg">
            {portalLinks.map((link, index) => (
              <div key={index} className="flex flex-col items-center">
                {link.external ? (
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="w-full">
                    <button className="w-full h-14 flex flex-col gap-1 items-center justify-center text-xs sm:text-sm bg-white/90 hover:bg-white text-gray-800 hover:text-blue-900 transition-all duration-300 rounded-lg shadow-sm hover:shadow-md hover:scale-105">
                      {link.icon}
                      <span className="font-medium leading-none">{link.title}</span>
                    </button>
                  </a>
                ) : link.onClick ? (
                  <button
                    onClick={link.onClick}
                    className="w-full h-14 flex flex-col gap-1 items-center justify-center text-xs sm:text-sm bg-white/90 hover:bg-white text-gray-800 hover:text-blue-900 transition-all duration-300 rounded-lg shadow-sm hover:shadow-md hover:scale-105"
                  >
                    {link.icon}
                    <span className="font-medium leading-none">{link.title}</span>
                  </button>
                ) : (
                  <Link to={link.url} className="w-full">
                    <button className="w-full h-14 flex flex-col gap-1 items-center justify-center text-xs sm:text-sm bg-white/90 hover:bg-white text-gray-800 hover:text-blue-900 transition-all duration-300 rounded-lg shadow-sm hover:shadow-md hover:scale-105">
                      {link.icon}
                      <span className="font-medium leading-none">{link.title}</span>
                    </button>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isCustomerPortalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-blue-900">Customer Portal</h2>
                <button
                  onClick={() => setIsCustomerPortalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium text-gray-800">Tutorial Videos</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { src: "/GGL_demo1.mp4", label: "Getting Started" },
                    { src: "/GGL_promo.mp4", label: "Advanced Features" },
                  ].map((video, i) => (
                    <div key={i} className="border rounded-lg overflow-hidden">
                      <div className="aspect-video">
                        <video controls className="w-full h-full object-cover">
                          <source src={video.src} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      <div className="p-2 bg-gray-50 text-sm font-medium">{video.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-4">
                <button
                  onClick={() => setIsCustomerPortalOpen(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
                <a
                  href="https://cp.onlinetracking.co/#/login/3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Login
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
