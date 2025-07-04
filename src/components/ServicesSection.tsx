import { Truck, Plane, Ship, Box, UserCheck, Container, Cuboid } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollAnimation from "./ScrollAnimation";

const services = [
  { id: 1, title: "Air Freight", icon: Plane, image: "/airfreight.png", delay: 100 },
  { id: 2, title: "Ocean Freight", icon: Ship, image: "/oceanfreight.png", delay: 200 },
  { id: 3, title: "Warehousing", icon: Box, image: "/warehousing.png", delay: 0 },
  { id: 4, title: "Customs Clearance", icon: UserCheck, image: "/customclearance.png", delay: 300 },
  { id: 5, title: "Linear Agency", icon: Container, image: "/linearagency.png", delay: 300 },
  { id: 6, title: "Liquid Cargo Transportation", icon: Truck, image: "/liquidtransportation.png", delay: 0 },
  { id: 7, title: "Consolidation", icon: Cuboid, image: "/consolidation.png", delay: 100 },
  { id: 8, title: "Project Cargo", icon: Container, image: "/projectcargo.png", delay: 200 },
  { id: 9, title: "3PL", icon: Cuboid, image: "/3pl.png", delay: 300 },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-red-50 via-white to-black/5">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollAnimation className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-black mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We provide comprehensive logistics solutions tailored to meet your specific needs.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ScrollAnimation key={service.id} delay={service.delay}>
              <Link to="/services" className="block group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300"></div>
                </div>
                <div className="p-5 text-center">
                  <div className="flex justify-center mb-3">
                    <service.icon className="text-kargon-red w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-black group-hover:text-kargon-red transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 group-hover:text-gray-700 transition-all duration-300">
                    Learn More →
                  </p>
                </div>
              </Link>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
