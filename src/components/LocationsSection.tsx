import React, { useState } from "react";

type LocationDetails = {
  map: string;
  address: string;
  phone: string;
};

type CountryLocations = {
  [location: string]: LocationDetails;
};

type LocationsData = {
  [country: string]: CountryLocations;
};

const allLocations: LocationsData = {
  India: {
    Chennai: {
      map: "https://www.google.com/maps/d/embed?mid=1xTmhWpagroJz2YqtOTxHBEAZP8Xw_cA&ehbc=2E312F&noprof=1",
      address: "Roma Building, Door No. 10, 3rd Floor, G.S.T. Road, Alandur, Chennai-600 016",
      phone: "044 4689 4646",
    },
    Chennai2: {
      map: "https://www.google.com/maps/d/embed?mid=1prpWPmOJpIfxQg4LmwnRIyNE8pXue20&ehbc=2E312F&noprof=1",
      address: "Survey No.209/6A(Part)... Kanchipuram District-602105",
      phone: "+91 9994355523",
    },
    Delhi: {
      map: "https://www.google.com/maps/d/embed?mid=1prpWPmOJpIfxQg4LmwnRIyNE8pXue20&ehbc=2E312F&noprof=1",
      address: "Plot No. 15, 1st Floor, Block C... Dwarka, New Delhi 110075",
      phone: "+91 11 41088871",
    },
    // ... add the rest of Indian locations
  },
  Singapore: {
    Singapore: {
      map: "https://www.google.com/maps/d/embed?mid=1dMWuQ-5-EQL2a1gOFRIYFxVLUdfERNw&ehbc=2E312F&noprof=1",
      address: "Blk 511 Kampong Bahru Road, #03-01 Keppel Distripark, Singapore 099447",
      phone: "+65 6224 1338 / +65 6224 1336",
    },
  },
  Malaysia: {
    PortKlang: {
      map: "https://www.google.com/maps/d/embed?mid=1wY9IR1V-C3m6rqDjbDVuARcHIn5DaX0&ehbc=2E312F&noprof=1",
      address: "MTBBT 2, 3A-5, Jalan Batu Nilam 16, Klang, Selangor",
      phone: "+603 - 3319 2778 / 74 / 75",
    },
    PasirGudang: {
      map: "https://www.google.com/maps/d/embed?mid=1Ef2sco0B8ZB3fShOADFD17mX6eEn22g&ehbc=2E312F&noprof=1",
      address: "Unit 20-03A, Level 20 Menara Zurich, Johor Bahru",
      phone: "603-3319 2778 / 74 / 75, 79",
    },
  },
  Thailand: {
    Bangkok: {
      map: "https://www.google.com/maps/d/embed?mid=1-KDMSa2eOSnchrGfGbRCMws3wdHa4tc&ehbc=2E312F&noprof=1",
      address: "109 CCT Building, 3rd Floor, Suriyawongse, Bangkok 10500",
      phone: "+662-634-3240, +662-634-3942",
    },
  },
  Indonesia: {
    Jakarta: {
      map: "https://www.google.com/maps/d/embed?mid=1wNAxoHYpLj-a8ekPGklU6BpnaBaz0Co&ehbc=2E312F&noprof=1",
      address: "408, Lina Building, JL.HR Rasuna Said, Jakarta",
      phone: "+62 21 529 20292, 522 4887",
    },
    Surabaya: {
      map: "https://www.google.com/maps/d/embed?mid=1ecTq28A-CHVdwkhZB9M1HpLKe-xPKo0&ehbc=2E312F&noprof=1",
      address: "Japfa Indoland Center, JL Jend Basuki Rahmat, Surabaya 60271",
      phone: "+62 21 529 20292, 522 4887",
    },
  },
};

const LocationsSection: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<keyof LocationsData>("India");
  const [selectedLocation, setSelectedLocation] = useState<keyof CountryLocations>(
    Object.keys(allLocations["India"])[0]
  );

  const handleCountryChange = (country: keyof LocationsData) => {
    setSelectedCountry(country);
    setSelectedLocation(Object.keys(allLocations[country])[0] as keyof CountryLocations);
  };

  const locations = allLocations[selectedCountry];
  const locationDetails = locations[selectedLocation];

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Our Global Offices</h2>

      {/* Country Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {Object.keys(allLocations).map((country) => (
          <button
            key={country}
            className={`px-4 py-2 rounded font-semibold transition-all border ${
              selectedCountry === country
                ? "bg-blue-900 text-white"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
            onClick={() => handleCountryChange(country as keyof LocationsData)}
          >
            {country}
          </button>
        ))}
      </div>

      {/* Locations & Details */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Location Buttons */}
        <div className="w-full md:w-1/3 space-y-2">
          {Object.keys(locations).map((locKey) => (
            <button
              key={locKey}
              onClick={() => setSelectedLocation(locKey as keyof CountryLocations)}
              className={`w-full text-left p-3 rounded border transition-all ${
                selectedLocation === locKey
                  ? "bg-blue-800 text-white border-blue-800"
                  : "bg-white border-gray-300 hover:bg-blue-100"
              }`}
            >
              {locKey}
            </button>
          ))}
        </div>

        {/* Address + Map */}
        <div className="w-full md:w-2/3 space-y-4">
          <div className="bg-slate-100 p-4 rounded shadow border">
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <p className="mb-4">{locationDetails.address}</p>

            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p>{locationDetails.phone}</p>
          </div>

          <div className="relative h-[400px] overflow-hidden rounded shadow-lg">
            <div className="absolute top-0 left-0 w-full text-center py-2 bg-yellow-400 font-semibold z-10">
              {selectedCountry} - {selectedLocation}
            </div>
            <iframe
              src={locationDetails.map}
              width="100%"
              height="100%"
              className="absolute top-0 left-0 w-full h-full"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              title={`${selectedLocation} Map`}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationsSection;
