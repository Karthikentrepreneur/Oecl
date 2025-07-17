import React, { useState } from "react";

type CountryKey = keyof typeof allOffices;

type Office = {
  name: string;
  address: string;
  phone: string;
};

const allOffices: Record<string, Office[]> = {
  Singapore: [
    {
      name: "Singapore Office",
      address:
        "Blk 511 Kampong Bahru Road, #03-01 Keppel Distripark, Singapore 099447",
      phone: "+65 6224 1338 / +65 6224 1336",
    },
  ],
  Malaysia: [
    {
      name: "Port Klang Office",
      address:
        "MTBBT 2, 3A-5, Jalan Batu Nilam 16, The Landmark (Behind AEON Mall), Bandar Bukit Tinggi 2, 41200 Klang, Selangor D.E",
      phone: "+603 - 3319 2778 / 74 / 75",
    },
    {
      name: "Pasir Gudang Office",
      address:
        "Unit 20-03A, Level 20 Menara Zurich, 15 Jalan Dato Abdullah Tahir, 80300 Johor Bahru",
      phone: "603-3319 2778 / 74 / 75, 79",
    },
  ],
  India: [
    {
      name: "Chennai Office",
      address:
        "Roma Building, Door No. 10, 3rd Floor, G.S.T. Road, Alandur, Chennai-600 016",
      phone: "044 4689 4646",
    },
    {
      name: "Chennai Warehouse",
      address:
        "Survey No.209/6A(Part)209/6B(Part), Mannur & Valarpuram Village, Perambakkam Road, Sriperumbudur Taluk, Kanchipuram District-602105",
      phone: "+91 9994355523",
    },
    {
      name: "Delhi Office",
      address:
        "Plot No. 15, 1st Floor, Block C, Pocket 8, Sector 17, Dwarka, New Delhi 110075",
      phone: "+91 11 41088871",
    },
    {
      name: "Kolkata Office",
      address:
        "Imagine Techpark, Unit No. 10, 19th Floor, Block DN 6, Sector - V, Salt Lake City, Kolkata, West Bengal - 700091",
      phone: "+91 33 4814 9162 / 63",
    },
    {
      name: "Bengaluru Office",
      address:
        "3C-964 IIIrd Cross Street, HRBR Layout 1st Block, Kalyan Nagar Bannaswadi, Bengaluru - 560043",
      phone: "+91 9841676259",
    },
    {
      name: "Cochin Office",
      address:
        "CC 59/801A Elizabeth Memorial Building, Thevara Ferry Jn, Cochin 682013, Kerala",
      phone: "+91 484 4019192 / 93",
    },
    {
      name: "Hyderabad Office",
      address:
        "H.No. 1-8-450/1/A-7 Indian Airlines Colony, Opp Police Lines, Begumpet, Hyderabad-500016, Telangana",
      phone: "040-49559704",
    },
    {
      name: "Mumbai Office",
      address:
        "Town Center - 2, Office No.607, 6th Floor, Marol, Andheri Kurla Road, Andheri East, Mumbai - 400059",
      phone: "+91 8879756838, 022-35131688 / 35113475 / 35082586",
    },
  ],
  Indonesia: [
    {
      name: "Jakarta Office",
      address: "408, Lina Building, JL.HR Rasuna Said kav B7, Jakarta",
      phone: "+62 21 529 20292, 522 4887",
    },
    {
      name: "Surabaya Office",
      address:
        "Japfa Indoland Center, Japfa Tower 1, Lantai 4/401-A, JL Jend, Basuki Rahmat 129-137, Surabaya 60271",
      phone: "+62 21 529 20292, 522 4887",
    },
  ],
  Thailand: [
    {
      name: "Bangkok Office",
      address:
        "109 CCT Building, 3rd Floor, Rm.3, Surawong Road, Suriyawongse, Bangrak, Bangkok 10500",
      phone: "+662-634-3240, +662-634-3942",
    },
  ],
};

const LocationSection = ({ currentCountry }: { currentCountry: CountryKey }) => {
  const locations = allOffices[currentCountry];

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-gray-800 text-center">
        {currentCountry} Office Locations
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        {locations.map((office, idx) => (
          <div
            key={idx}
            className="p-6 bg-slate-100 border rounded-lg shadow-sm"
          >
            <h4 className="text-lg font-bold mb-2">{office.name}</h4>
            <p className="text-gray-700 whitespace-pre-line mb-2">
              {office.address}
            </p>
            <p className="text-gray-700 font-semibold">{office.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationSection;
