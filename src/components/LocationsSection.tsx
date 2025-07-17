import React, { useState } from "react";
import { useParams } from "react-router-dom";

const allOffices = {
  Singapore: [
    {
      name: "Singapore Office",
      address:
        "Blk 511 Kampong Bahru Road, #03-01 Keppel Distripark, Singapore 099447",
      phone: "+65 6224 1338 / +65 6224 1336",
      map: "https://www.google.com/maps/d/embed?mid=1dMWuQ-5-EQL2a1gOFRIYFxVLUdfERNw&ehbc=2E312F&noprof=1",
    },
  ],
  Malaysia: [
    {
      name: "Port Klang Office",
      address:
        "MTBBT 2, 3A-5, Jalan Batu Nilam 16, The Landmark (Behind AEON Mall), Bandar Bukit Tinggi 2, 41200 Klang, Selangor D.E",
      phone: "+603 - 3319 2778 / 74 / 75",
      map: "https://www.google.com/maps/d/embed?mid=1wY9IR1V-C3m6rqDjbDVuARcHIn5DaX0&ehbc=2E312F&noprof=1",
    },
    {
      name: "Pasir Gudang Office",
      address:
        "Unit 20-03A, Level 20 Menara Zurich, 15 Jalan Dato Abdullah Tahir, 80300 Johor Bahru",
      phone: "603-3319 2778 / 74 / 75, 79",
      map: "https://www.google.com/maps/d/embed?mid=1Ef2sco0B8ZB3fShOADFD17mX6eEn22g&ehbc=2E312F&noprof=1",
    },
  ],
  India: [
    {
      name: "Chennai Office",
      address:
        "Roma Building, Door No. 10, 3rd Floor, G.S.T. Road, Alandur, Chennai-600 016",
      phone: "044 4689 4646",
      map: "https://www.google.com/maps/d/embed?mid=1xTmhWpagroJz2YqtOTxHBEAZP8Xw_cA&ehbc=2E312F&noprof=1",
    },
    {
      name: "Chennai Warehouse",
      address:
        "Survey No.209/6A(Part)209/6B(Part), Mannur & Valarpuram Village, Perambakkam Road, Sriperumbudur Taluk, Kanchipuram District-602105",
      phone: "+91 9994355523",
      map: "https://www.google.com/maps/d/embed?mid=1prpWPmOJpIfxQg4LmwnRIyNE8pXue20&ehbc=2E312F&noprof=1",
    },
    // ... Add the rest of Indian locations here with map links
  ],
  Indonesia: [
    {
      name: "Jakarta Office",
      address: "408, Lina Building, JL.HR Rasuna Said kav B7, Jakarta",
      phone: "+62 21 529 20292, 522 4887",
      map: "https://www.google.com/maps/d/embed?mid=1wNAxoHYpLj-a8ekPGklU6BpnaBaz0Co&ehbc=2E312F&noprof=1",
    },
    {
      name: "Surabaya Office",
      address:
        "Japfa Indoland Center, Japfa Tower 1, Lantai 4/401-A, JL Jend, Basuki Rahmat 129-137, Surabaya 60271",
      phone: "+62 21 529 20292, 522 4887",
      map: "https://www.google.com/maps/d/embed?mid=1ecTq28A-CHVdwkhZB9M1HpLKe-xPKo0&ehbc=2E312F&noprof=1",
    },
  ],
  Thailand: [
    {
      name: "Bangkok Office",
      address:
        "109 CCT Building, 3rd Floor, Rm.3, Surawong Road, Suriyawongse, Bangrak, Bangkok 10500",
      phone: "+662-634-3240, +662-634-3942",
      map: "https://www.google.com/maps/d/embed?mid=1-KDMSa2eOSnchrGfGbRCMws3wdHa4tc&ehbc=2E312F&noprof=1",
    },
  ],
};

const LocationsSection = () => {
  const { slug } = useParams();
  const country = slug && allOffices[slug] ? slug : "India";
  const locations = allOffices[country];
  const [selected, setSelected] = useState(0);

  return (
    <section className="py-12 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          {country} Offices
        </h2>
        <p className="text-gray-600 text-lg">
          Find our presence across {country} below
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:flex gap-6">
        <div className="md:w-1/3 space-y-4 mb-8 md:mb-0">
          {locations.map((loc, i) => (
            <button
              key={i}
              className={`w-full text-left p-4 rounded border transition-all duration-200 ${
                i === selected
                  ? "bg-blue-900 text-white border-blue-900"
                  : "bg-white text-gray-800 border-gray-300 hover:bg-blue-100"
              }`}
              onClick={() => setSelected(i)}
            >
              {loc.name}
            </button>
          ))}
        </div>

        <div className="md:w-2/3 space-y-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h4 className="text-xl font-semibold mb-2">Address</h4>
            <p className="text-gray-700 whitespace-pre-line mb-4">
              {locations[selected].address}
            </p>
            <h4 className="text-xl font-semibold mb-2">Phone</h4>
            <p className="text-gray-700 whitespace-pre-line">
              {locations[selected].phone}
            </p>
          </div>

          <div className="relative shadow rounded-lg overflow-hidden h-[400px]">
            <iframe
              src={locations[selected].map}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${locations[selected].name} Map`}
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
