import ScrollAnimation from "./ScrollAnimation";
import { Clock, ChevronRight, Plane, Ship, Truck, Warehouse, Shield, Globe } from "lucide-react";

interface ServiceCard {
  title: string;
  description: string;
  icon: React.ElementType;
  delay: number;
  image: string;
}

interface CountryServicesProps {
  country?: 'india' | 'indonesia' | 'malaysia' | 'thailand';
}

const CountryServicesCards = ({ country }: CountryServicesProps) => {
  const countryServices = {
    india: [
      {
        title: "India Express Air",
        description: "Fast air freight services connecting major Indian cities to global destinations.",
        icon: Plane,
        delay: 0,
        image: "https://images.unsplash.com/photo-1542296332-2e4473faf563?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        title: "Mumbai Port Services",
        description: "Comprehensive port handling at India's largest container port.",
        icon: Ship,
        delay: 100,
        image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        title: "Delhi NCR Distribution",
        description: "Last-mile delivery solutions across the National Capital Region.",
        icon: Truck,
        delay: 200,
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        title: "Bangalore Tech Hub",
        description: "Specialized logistics for IT and technology sector exports.",
        icon: Shield,
        delay: 300,
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      }
    ],
    indonesia: [
      {
        title: "Jakarta Gateway",
        description: "Central hub connecting Indonesia's capital to international markets.",
        icon: Globe,
        delay: 0,
        image: "https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        title: "Inter-Island Shipping",
        description: "Specialized logistics for Indonesia's unique archipelago geography.",
        icon: Ship,
        delay: 100,
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        title: "Surabaya Industrial",
        description: "Industrial logistics solutions for East Java's manufacturing hub.",
        icon: Warehouse,
        delay: 200,
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        title: "Bali Tourism Logistics",
        description: "Specialized services for tourism and hospitality sector.",
        icon: Plane,
        delay: 300,
        image: "https://images.unsplash.com/photo-1539650116574-75c0c6d3e9e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      }
    ],
    malaysia: [
      {
        title: "Port Klang Gateway",
        description: "Malaysia's premier port connecting to global shipping routes.",
        icon: Ship,
        delay: 0,
        image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        title: "KLIA Air Hub",
        description: "Strategic air freight services through Kuala Lumpur International Airport.",
        icon: Plane,
        delay: 100,
        image: "https://images.unsplash.com/photo-1542296332-2e4473faf563?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        title: "Johor Cross-Border",
        description: "Efficient cross-border logistics between Malaysia and Singapore.",
        icon: Truck,
        delay: 200,
        image: "https://images.unsplash.com/photo-1568454537842-d933259bb258?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        title: "Penang Tech Valley",
        description: "High-tech logistics for Malaysia's Silicon Valley.",
        icon: Shield,
        delay: 300,
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      }
    ],
    thailand: [
      {
        title: "Bangkok Central Hub",
        description: "Thailand's main logistics hub connecting ASEAN markets.",
        icon: Globe,
        delay: 0,
        image: "https://images.unsplash.com/photo-1539650116574-75c0c6d3e9e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        title: "Laem Chabang Port",
        description: "Premier deep-sea port services on the Eastern Seaboard.",
        icon: Ship,
        delay: 100,
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        title: "Chiang Mai Northern",
        description: "Northern Thailand logistics connecting to Myanmar and Laos.",
        icon: Truck,
        delay: 200,
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        title: "Phuket Tourism Hub",
        description: "Specialized logistics for Thailand's tourism industry.",
        icon: Plane,
        delay: 300,
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      }
    ]
  };

  const defaultServices = [
    {
      title: "Air Freight",
      description: "Fast and reliable air cargo services worldwide.",
      icon: Plane,
      delay: 0,
      image: "https://images.unsplash.com/photo-1542296332-2e4473faf563?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Ocean Freight",
      description: "Cost-effective sea freight solutions for global trade.",
      icon: Ship,
      delay: 100,
      image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Ground Transport",
      description: "Comprehensive land transportation services.",
      icon: Truck,
      delay: 200,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Warehousing",
      description: "Modern storage and distribution facilities.",
      icon: Warehouse,
      delay: 300,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const services = country ? countryServices[country] : defaultServices;

  const ServiceCard = ({ title, description, icon: Icon, delay, image }: ServiceCard) => {
    return (
      <ScrollAnimation delay={delay} className="group relative overflow-hidden bg-white shadow-lg rounded-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
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
            
            <p className="text-gray-200 mb-4 opacity-90">
              {description}
            </p>
            
            <button className="flex items-center gap-2 text-red-400 font-medium transition-all duration-300 group-hover:text-red-300 group-hover:gap-3">
              <span>LEARN MORE</span>
              <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </ScrollAnimation>
    );
  };

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
              : "Comprehensive logistics solutions tailored to meet your specific needs."
            }
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