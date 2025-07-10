
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Play, Globe, Plane, Ship, Package, Star } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/h1.png",
      title: "Global Logistics Solutions",
      subtitle: "Connecting your business to the world with reliable freight forwarding services across air, sea, and land.",
      cta: "Explore Services"
    },
    {
      image: "/h2.png", 
      title: "Air Freight Excellence",
      subtitle: "Fast, secure air cargo services ensuring your time-sensitive shipments reach their destination on schedule.",
      cta: "Air Services"
    },
    {
      image: "/h3.png",
      title: "Ocean Freight Solutions", 
      subtitle: "Cost-effective sea freight options for bulk cargo with comprehensive container and LCL services.",
      cta: "Ocean Services"
    },
    {
      image: "/h4.png",
      title: "Warehousing & Distribution",
      subtitle: "State-of-the-art storage facilities with advanced inventory management and distribution networks.",
      cta: "Warehouse Solutions"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const portalButtons = [
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Singapore",
      onClick: () => window.location.href = "/",
      color: "bg-blue-600",
      hoverColor: "hover:bg-blue-700"
    },
    {
      icon: <Plane className="w-5 h-5" />,
      title: "India", 
      onClick: () => window.location.href = "/india/home",
      color: "bg-orange-600",
      hoverColor: "hover:bg-orange-700"
    },
    {
      icon: <Ship className="w-5 h-5" />,
      title: "Malaysia",
      onClick: () => window.location.href = "/malaysia/home", 
      color: "bg-red-600",
      hoverColor: "hover:bg-red-700"
    },
    {
      icon: <Package className="w-5 h-5" />,
      title: "Indonesia",
      onClick: () => window.location.href = "/indonesia/home",
      color: "bg-red-700", 
      hoverColor: "hover:bg-red-800"
    },
    {
      icon: <Star className="w-5 h-5" />,
      title: "Thailand",
      onClick: () => window.location.href = "/thailand/home",
      color: "bg-blue-700",
      hoverColor: "hover:bg-blue-800"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
        <ScrollAnimation>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            {slides[currentSlide].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              asChild
            >
              <Link to="/contact">
                Get a Quote
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm transition-all"
              asChild
            >
              <Link to="/services">
                {slides[currentSlide].cta}
              </Link>
            </Button>
          </div>
        </ScrollAnimation>

        {/* Portal Buttons */}
        <ScrollAnimation delay={200}>
          <div className="mt-16">
            <h3 className="text-lg md:text-xl mb-6 text-gray-300 font-medium">
              Choose Your Region
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {portalButtons.map((portal, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer transform hover:scale-105">
                  <CardContent 
                    className="p-4 flex items-center space-x-3"
                    onClick={portal.onClick}
                  >
                    <div className={`${portal.color} ${portal.hoverColor} p-2 rounded-lg text-white transition-colors`}>
                      {portal.icon}
                    </div>
                    <span className="text-white font-medium">
                      {portal.title}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>

      {/* Video Play Button (Decorative) */}
      <div className="absolute bottom-20 right-8 z-20">
        <Button
          size="lg"
          className="bg-white/20 hover:bg-white/30 text-white p-4 rounded-full backdrop-blur-sm transition-all"
        >
          <Play className="w-6 h-6" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
