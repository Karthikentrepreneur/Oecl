import { Truck, Plane, Ship, Box, UserCheck, Container, Cuboid } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import ScrollAnimation from "./ScrollAnimation";

// Utility to get country slug from URL path
const getCurrentCountryFromPath = (pathname: string) => {
  const segments = pathname.split('/');
  const countrySlug = segments[1]?.toLowerCase();

  const validCountries = ['india', 'malaysia', 'indonesia', 'thailand'];
  const slug = validCountries.includes(countrySlug) ? countrySlug : 'singapore';

  return { slug };
};

// All services list (shown for all countries)
const allServices = [
  { id: 1, title: "Air Freight", icon: Plane, image: "/airfreight.png", slug: "air-freight", delay: 100 },
  { id: 2, title: "Ocean Freight", icon: Ship, image: "/oceanfreight.png", slug: "ocean-freight", delay: 200 },
  { id: 3, title: "Warehousing", icon: Box, image: "/warehousing.png", slug: "warehousing", delay: 0 },
  { id: 4, title: "Customs Clearance", icon: UserCheck, image: "/customclearance.png", slug: "customs-clearance", delay: 300 },
  { id: 5, title: "Liner Agency", icon: Container, image: "/linearagency.png", slug: "liner-agency", delay: 300 },
  { id: 6, title: "Liquid Cargo Transportation", icon: Truck, image: "/liquidtransportation.png", slug: "liquid-cargo", delay: 0 },
  { id: 7, title: "Consolidation", icon: Cuboid, image: "/consolidation.png", slug: "consolidation", delay: 100 },
  { id: 8, title: "Project Cargo", icon: Container, image: "/projectcargo.png", slug: "project-cargo", delay: 200 },
  { id: 9, title: "3PL", icon: Cuboid, image: "/3pl.png", slug: "3pl", delay: 300 },
];

const ServicesSection = () => {
  const location = useLocation();
  const { slug: currentCountrySlug } = getCurrentCountryFromPath(location.pathname);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-red-600">Our Services</h2>
          <p className="text-gray-300 mt-4 max-w-xl mx-auto text-lg">
            Powerful logistics solutions to move your world – fast and safe.
          </p>
        </ScrollAnimation>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {allServices.map(service => (
            <ScrollAnimation key={service.id} delay={service.delay}>
              <Link
                to={`/${currentCountrySlug}/services/${service.slug}`}
                className="group bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-red-600/40 transition-shadow duration-300"
              >
                <div className="relative w-full h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition duration-300" />
                  <div className="absolute top-4 right-4 bg-red-600 p-2 rounded-full shadow-md">
                    <service.icon className="text-white w-5 h-5" />
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-2xl font-semibold text-white group-hover:text-red-500 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="mt-2">
                    <span className="text-red-500 text-sm font-medium group-hover:underline">
                      Learn More →
                    </span>
                  </p>
                </div>
              </Link>
            </ScrollAnimation>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to={`/${currentCountrySlug}/services`}
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
