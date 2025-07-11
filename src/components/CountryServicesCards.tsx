// components/CountryServicesCards.tsx

import { Link } from "react-router-dom";
import ScrollAnimation from "./ScrollAnimation";
import { Clock, ChevronRight, Plane, Ship, Truck, Warehouse, Shield, Globe } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  delay: number;
  image: string;
  slug: string;
}

interface CountryServicesProps {
  country?: 'india' | 'indonesia' | 'malaysia' | 'thailand';
}

const CountryServicesCards = ({ country }: CountryServicesProps) => {
  const countryServices: Record<string, ServiceCardProps[]> = {
    india: [
      {
        title: "Customs Clearance",
        description: "Efficient documentation and compliance for hassle-free customs processing.",
        icon: Shield,
        delay: 0,
        image: "/customclearance.png",
        slug: "customs-clearance"
      },
      {
        title: "Digital Forwarding",
        description: "AI-powered digital air freight solutions for global reach.",
        icon: Plane,
        delay: 100,
        image: "/airfreight.png",
        slug: "air-freight"
      },
      {
        title: "Warehousing",
        description: "Flexible and secured storage options for all cargo types.",
        icon: Warehouse,
        delay: 200,
        image: "/warehousing.png",
        slug: "warehousing"
      },
      {
        title: "Regional Distribution",
        description: "Seamless regional delivery across India with speed and accuracy.",
        icon: Truck,
        delay: 300,
        image: "/distribution.png",
        slug: "regional-distribution"
      }
    ],
    indonesia: [
      {
        title: "Project Cargo",
        description: "Specialized handling for oversized and heavy-lift cargo.",
        icon: Truck,
        delay: 0,
        image: "/projectcargo.png",
        slug: "project-cargo"
      },
      {
        title: "Digital Forwarding",
        description: "Instant air freight booking and tracking via digital tools.",
        icon: Plane,
        delay: 100,
        image: "/airfreight.png",
        slug: "air-freight"
      },
      {
        title: "Liner Agency",
        description: "Comprehensive shipping representation services.",
        icon: Ship,
        delay: 200,
        image: "/linearagency.png",
        slug: "liner-agency"
      }
    ],
    malaysia: [
      {
        title: "Liquid Logistics",
        description: "Safe transport of chemicals, oils, and bulk liquids.",
        icon: Truck,
        delay: 0,
        image: "/liquidtransportation.png",
        slug: "liquid-cargo"
      },
      {
        title: "Digital Forwarding",
        description: "Digital air freight solutions for timely global delivery.",
        icon: Plane,
        delay: 100,
        image: "/airfreight.png",
        slug: "air-freight"
      },
      {
        title: "Warehousing",
        description: "Integrated warehouse services for all cargo types.",
        icon: Warehouse,
        delay: 200,
        image: "/warehousing.png",
        slug: "warehousing"
      },
      {
        title: "Regional Distribution",
        description: "Rapid and reliable distribution across Malaysia.",
        icon: Truck,
        delay: 300,
        image: "/distribution.png",
        slug: "regional-distribution"
      }
    ],
    thailand: [
      {
        title: "Air Freight",
        description: "Speedy air cargo connections from Thailand to the world.",
        icon: Plane,
        delay: 0,
        image: "/airfreight.png",
        slug: "air-freight"
      },
      {
        title: "Ocean Freight",
        description: "Cost-efficient shipping via Thailand’s major ports.",
        icon: Ship,
        delay: 100,
        image: "/oceanfreight.png",
        slug: "ocean-freight"
      },
      {
        title: "Warehousing",
        description: "Dedicated storage facilities supporting Thai logistics.",
        icon: Warehouse,
        delay: 200,
        image: "/warehousing.png",
        slug: "warehousing"
      },
      {
        title: "Regional Distribution",
        description: "End-to-end distribution services throughout Southeast Asia.",
        icon: Truck,
        delay: 300,
        image: "/distribution.png",
        slug: "regional-distribution"
      }
    ]
  };

  const services = country ? countryServices[country] : [];

  const ServiceCard = ({ title, description, icon: Icon, delay, image, slug }: ServiceCardProps) => (
    <ScrollAnimation
      delay={delay}
      className="group relative overflow-hidden bg-white shadow-lg rounded-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
    >
      <Link to={`/services/${slug}`}>
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>

        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          <div className="transform transition-all duration-500 group-hover:-translate-y-2">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-red-500/80 backdrop-blur-sm rounded-lg">
                <Icon size={24} />
              </div>
              <h3 className="text-xl font-bold">{title}</h3>
            </div>

            <p className="text-gray-200 mb-4 opacity-90">{description}</p>

            <div className="flex items-center gap-2 text-red-400 font-medium transition-all duration-300 group-hover:text-red-300 group-hover:gap-3">
              <span>LEARN MORE</span>
              <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    </ScrollAnimation>
  );

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Our {country ? country.charAt(0).toUpperCase() + country.slice(1) : ''} Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {country
              ? `Specialized logistics solutions tailored for the ${country.charAt(0).toUpperCase() + country.slice(1)} market.`
              : "Comprehensive logistics solutions tailored to meet your specific needs."}
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountryServicesCards;
