import React, { useState, useEffect } from "react";
import {
  Users,
  UserCircle,
  SearchCode,
  Ship,
  Calendar,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isCustomerPortalOpen, setIsCustomerPortalOpen] = useState(false);

  const sliderImages = [
    {
      url: "/lovable-uploads/9bc9bb5d-5345-4122-9396-f69e5f467fc3.png",
      title: "Delivering Excellence in Global Logistics Solutions",
      description:
        "GGL brings over 25 years of expertise in international logistics, offering comprehensive solutions tailored to your business needs.",
    },
    {
      url: "/truck12.png",
      title: "Seamless Road Freight Across Borders",
      description:
        "Our truck freight services are optimized for speed, safety, and reliability from start to finish.",
    },
    {
      url: "/ships.png",
      title: "Shipping Solutions That Navigate Success",
      description:
        "Efficient ocean freight services that guarantee timely and cost-effective global shipping.",
    },
    {
      url: "/cargoplane.png",
      title: "Air Freight With Sky-High Standards",
      description:
        "Fast, secure, and trackable air cargo solutions for urgent shipments worldwide.",
    },
  ];

  const portalLinks = [
    {
      icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "Customer Portal",
      onClick: () => setIsCustomerPortalOpen(true),
    },
    {
      icon: <UserCircle className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "Partner Portal",
      url: "https://pp.onlinetracking.co/auth/login/3",
      external: true,
    },
    {
      icon: <SearchCode className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "Tracking",
      url: "http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:102:::::P0_GROUP_RID:59",
      external: true,
    },
    {
      icon: <Ship className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "Sailing Schedule",
      url: "http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:104:::::P0_GROUP_RID:59",
      external: true,
    },
    {
      icon: <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "Online Quote",
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

  const currentSlide = sliderImages[activeSlide];

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {sliderImages.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              activeSlide === i ? "opacity-100" : "opacity-0"
            }`}
            style={{ zIndex: activeSlide === i ? 1 : 0 }}
          >
            <img
              src={slide.url}
              alt={`Slide ${i}`}
              className="w-full h-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/60 z-[1]" />
      </div>

      {/* Text and Title */}
      <div className="relative z-10 flex items-center min-h-screen px-6">
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="text-red-500 animate-spin-slow">
              <Globe className="w-8 h-8 drop-shadow-[0_0_8px_rgba(255,80,80,0.8)]" />
            </div>
            <span className="bg-red-500/20 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium border border-red-500/30">
              Beyond Logistics, a Complete Solution
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            {currentSlide.title.split(" ").map((word, i) => (
              <span
                key={i}
                className={`${
                  i % 6 === 0 ? "text-red-500" : ""
                } transition-all duration-500`}
              >
                {word}{" "}
              </span>
            ))}
          </h1>
          <p className="text-lg text-white/90">{currentSlide.description}</p>
          <Link to="/signup">
            <button className="bg-red-600 hover:bg-red-700 text-white rounded-md px-6 py-4 text-lg flex items-center gap-2 shadow-lg">
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3 bg-white/10 backdrop-blur p-3 rounded-lg shadow-md">
            {portalLinks.map((link, index) => {
              const ButtonContent = (
                <button className="w-full h-14 flex flex-col gap-1 items-center justify-center text-xs sm:text-sm bg-red-600 hover:bg-red-700 text-white transition-all duration-300 rounded-lg shadow hover:scale-105">
                  {link.icon}
                  <span className="font-medium leading-none">{link.title}</span>
                </button>
              );

              if (link.external) {
                return (
                  <a
                    href={link.url}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    {ButtonContent}
                  </a>
                );
              } else if (link.onClick) {
                return (
                  <div key={index} className="w-full">
                    <button
                      onClick={link.onClick}
                      className="w-full h-14 flex flex-col gap-1 items-center justify-center text-xs sm:text-sm bg-red-600 hover:bg-red-700 text-white transition-all duration-300 rounded-lg shadow hover:scale-105"
                    >
                      {link.icon}
                      <span className="font-medium leading-none">{link.title}</span>
                    </button>
                  </div>
                );
              } else {
                return (
                  <Link to={link.url} key={index} className="w-full">
                    {ButtonContent}
                  </Link>
                );
              }
            })}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isCustomerPortalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-red-700">Customer Portal</h2>
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
                    <div
                      key={i}
                      className="border rounded-lg overflow-hidden bg-gray-50"
                    >
                      <div className="aspect-video">
                        <video controls className="w-full h-full object-cover">
                          <source src={video.src} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      <div className="p-2 text-sm font-medium">{video.label}</div>
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
                  <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
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
