import { Truck, Plane, Ship, Box, UserCheck, Container, Cuboid } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";
const services = [{
  id: 1,
  title: "Air Freight",
  icon: Plane,
  image: "/airfreight.png",
  delay: 100
}, {
  id: 2,
  title: "Ocean Freight",
  icon: Ship,
  image: "/oceanfreight.png",
  delay: 200
}, {
  id: 3,
  title: "Warehousing",
  icon: Box,
  image: "/warehousing.png",
  delay: 0
}, {
  id: 4,
  title: "Customs Clearance",
  icon: UserCheck,
  image: "/customclearance.png",
  delay: 300
}, {
  id: 5,
  title: "Linear Agency",
  icon: Container,
  image: "/linearagency.png",
  delay: 300
}, {
  id: 6,
  title: "Liquid Cargo Transportation",
  icon: Truck,
  image: "/liquidtransportation.png",
  delay: 0
}, {
  id: 7,
  title: "Consolidation",
  icon: Cuboid,
  image: "/consolidation.png",
  delay: 100
}, {
  id: 8,
  title: "Project Cargo",
  icon: Container,
  image: "/projectcargo.png",
  delay: 200
}, {
  id: 9,
  title: "3PL",
  icon: Cuboid,
  image: "/3pl.png",
  delay: 300
}];
const ServicesSection = () => {
  return <section className="py-16 bg-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollAnimation className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 md:text-5xl">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive logistics solutions tailored to meet your specific needs.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(service => <ScrollAnimation key={service.id} delay={service.delay}>
              <div className="service-card group">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                <div className="service-card-overlay">
                  <div className="service-card-icon">
                    <service.icon className="text-kargon-red" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                  <a href="#" className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More →
                  </a>
                </div>
              </div>
            </ScrollAnimation>)}
        </div>
      </div>
    </section>;
};
export default ServicesSection;
