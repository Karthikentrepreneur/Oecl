import React, { useState } from "react";

const allLocations = {
  India: {
    Chennai: {
      map: "https://www.google.com/maps/d/embed?mid=1xTmhWpagroJz2YqtOTxHBEAZP8Xw_cA&ehbc=2E312F&noprof=1",
      address: "Chennai Office Address Here",
      phone: "+91 9123523496",
    },
    Chennai2: {
      map: "https://www.google.com/maps/d/embed?mid=1prpWPmOJpIfxQg4LmwnRIyNE8pXue20&ehbc=2E312F&noprof=1",
      address: "Chennai 2 Office Address Here",
      phone: "+91 9876543210",
    },
    Delhi: {
      map: "https://www.google.com/maps/d/embed?mid=1prpWPmOJpIfxQg4LmwnRIyNE8pXue20&ehbc=2E312F&noprof=1",
      address: "Delhi Office Address Here",
      phone: "+91 9999022030",
    },
    Kolkata: {
      map: "https://www.google.com/maps/d/embed?mid=1rM6AXz8EHQ7xg4aldjPH2AJuY5NtapY&ehbc=2E312F&noprof=1",
      address: "Kolkata Office Address Here",
      phone: "+91 6290921534",
    },
    Bengaluru: {
      map: "https://www.google.com/maps/d/embed?mid=1VfZTXJHg3ekHgdcyt3lf9cbsEnf11oA&ehbc=2E312F&noprof=1",
      address: "Bengaluru Office Address Here",
      phone: "+91 9986949743",
    },
    Cochin: {
      map: "https://www.google.com/maps/d/embed?mid=1wFWiRd2ewEGxxGv2NBKTwJX7eClgjv0&ehbc=2E312F&noprof=1",
      address: "Cochin Office Address Here",
      phone: "+91 9012345678",
    },
    Hyderabad: {
      map: "https://www.google.com/maps/d/embed?mid=1nfVu0PP4O3WJ9ZUqbJjpnKCblkY9rJI&ehbc=2E312F&noprof=1",
      address: "Hyderabad Office Address Here",
      phone: "+91 9123456789",
    },
    Mumbai: {
      map: "https://www.google.com/maps/d/embed?mid=1ndB2LDzMO0nBfUDdGe2o7-_BpQxQRUQ&ehbc=2E312F&noprof=1",
      address: "Mumbai Office Address Here",
      phone: "+91 2245174102",
    },
  },
  Singapore: {
    Singapore: {
      map: "https://www.google.com/maps/d/embed?mid=1dMWuQ-5-EQL2a1gOFRIYFxVLUdfERNw&ehbc=2E312F&noprof=1",
      address: "Singapore Office Address Here",
      phone: "+65 12345678",
    },
  },
  Malaysia: {
    PortKlang: {
      map: "https://www.google.com/maps/d/embed?mid=1wY9IR1V-C3m6rqDjbDVuARcHIn5DaX0&ehbc=2E312F&noprof=1",
      address: "Port Klang Office Address Here",
      phone: "+60 123456789",
    },
    PasirGudang: {
      map: "https://www.google.com/maps/d/embed?mid=1Ef2sco0B8ZB3fShOADFD17mX6eEn22g&ehbc=2E312F&noprof=1",
      address: "Pasir Gudang Office Address Here",
      phone: "+60 987654321",
    },
  },
  Thailand: {
    Bangkok: {
      map: "https://www.google.com/maps/d/embed?mid=1-KDMSa2eOSnchrGfGbRCMws3wdHa4tc&ehbc=2E312F&noprof=1",
      address: "Bangkok Office Address Here",
      phone: "+66 12345678",
    },
  },
  Indonesia: {
    Jakarta: {
      map: "https://www.google.com/maps/d/embed?mid=1wNAxoHYpLj-a8ekPGklU6BpnaBaz0Co&ehbc=2E312F&noprof=1",
      address: "Jakarta Office Address Here",
      phone: "+62 812345678",
    },
    Surabaya: {
      map: "https://www.google.com/maps/d/embed?mid=1ecTq28A-CHVdwkhZB9M1HpLKe-xPKo0&ehbc=2E312F&noprof=1",
      address: "Surabaya Office Address Here",
      phone: "+62 876543210",
    },
  },
};

const LocationsSection = () => {
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [selectedLocation, setSelectedLocation] = useState(
    Object.keys(allLocations[selectedCountry])[0]
  );

  const locations = allLocations[selectedCountry];

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-2 text-center">Our Global Offices</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {Object.keys(allLocations).map((country) => (
            <button
              key={country}
              className={`px-4 py-2 rounded border font-semibold transition-all ${
                selectedCountry === country
                  ? "bg-blue-900 text-white"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
              onClick={() => {
                setSelectedCountry(country);
                setSelectedLocation(Object.keys(allLocations[country])[0]);
              }}
            >
              {country}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-[30%] space-y-3">
          {Object.keys(locations).map((loc) => (
            <button
              key={loc}
              className={`w-full text-left p-3 rounded border transition-all ${
                selectedLocation === loc
                  ? "bg-blue-800 text-white border-blue-800"
                  : "bg-white border-gray-300 hover:bg-blue-100"
              }`}
              onClick={() => setSelectedLocation(loc)}
            >
              {loc}
            </button>
          ))}
        </div>

        <div className="w-full md:w-[70%] space-y-4">
          <div className="bg-slate-100 p-4 rounded border shadow">
            <h3 className="text-xl font-bold mb-2">Address</h3>
            <p className="whitespace-pre-line mb-2">
              {locations[selectedLocation].address}
            </p>
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p>{locations[selectedLocation].phone}</p>
          </div>

          <div className="relative rounded-lg overflow-hidden h-[400px] shadow-lg">
            <div className="absolute top-0 left-0 w-full text-center py-2 bg-yellow-400 font-semibold z-10">
              {selectedCountry} - {selectedLocation}
            </div>
            <iframe
              src={locations[selectedLocation].map}
              width="100%"
              height="100%"
              className="absolute top-0 left-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title={`${selectedLocation} Map`}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationsSection;
