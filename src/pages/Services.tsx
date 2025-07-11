const Services: React.FC = () => {
  const location = useLocation();
  const countrySlug = location.pathname.split("/")[1] || "india"; // fallback optional

  const allServices: Service[] = [
    // ... your service list
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      <Navigation />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        {/* ... same code ... */}

        {/* Services Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-black mb-3">All Services</h2>
              <div className="w-20 h-1 bg-red-600 mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From freight forwarding to specialized cargo handling, we’ve got it all covered.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {allServices.map((service) => (
                <ServiceCard key={service.id} {...service} country={countrySlug} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
