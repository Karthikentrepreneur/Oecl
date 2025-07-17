import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Building2, ChevronLeft, ChevronRight } from "lucide-react";
import { useLocation } from "react-router-dom";

const ContactForm = () => {
  const location = useLocation();
  const [selectedLocation, setSelectedLocation] = useState("");
  const [indiaPage, setIndiaPage] = useState(0); // 0 or 1

  const allOffices = {
    Singapore: [
      {
        name: "Singapore Office",
        address:
          "Blk 511 Kampong Bahru Road, #03-01 Keppel Distripark, Singapore 099447",
        phone: "+65 6224 1338 / +65 6224 1336",
        email: "info@oecl.sg",
      },
    ],
    Malaysia: [
      {
        name: "Port Klang Office",
        address:
          "MTBBT 2, 3A-5, Jalan Batu Nilam 16, The Landmark (Behind AEON Mall), Bandar Bukit Tinggi 2, 41200 Klang, Selangor D.E",
        phone: "+603 - 3319 2778 / 74 / 75",
        email: "malaysia@oecl.com",
      },
      {
        name: "Pasir Gudang Office",
        address:
          "Unit 20-03A, Level 20 Menara Zurich, 15 Jalan Dato Abdullah Tahir, 80300 Johor Bahru",
        phone: "603-3319 2778 / 74 / 75, 79",
        email: "malaysia@oecl.com",
      },
    ],
    India: [
      {
        name: "Chennai Office",
        address:
          "Roma Building, Door No. 10, 3rd Floor, G.S.T. Road, Alandur, Chennai-600 016",
        phone: "044 4689 4646",
        email: "chennai@oecl.com",
      },
      {
        name: "Chennai Warehouse",
        address:
          "Survey No.209/6A(Part)209/6B(Part), Mannur & Valarpuram Village, Perambakkam Road, Sriperumbudur Taluk, Kanchipuram District-602105",
        phone: "+91 9994355523",
        email: "warehouse@oecl.com",
      },
      {
        name: "Delhi Office",
        address:
          "Plot No. 15, 1st Floor, Block C, Pocket 8, Sector 17, Dwarka, New Delhi 110075",
        phone: "+91 11 41088871",
        email: "delhi@oecl.com",
      },
      {
        name: "Kolkata Office",
        address:
          "Imagine Techpark, Unit No. 10, 19th Floor, Block DN 6, Sector - V, Salt Lake City, Kolkata, West Bengal - 700091",
        phone: "+91 33 4814 9162 / 63",
        email: "kolkata@oecl.com",
      },
      {
        name: "Bengaluru Office",
        address:
          "3C-964 IIIrd Cross Street, HRBR Layout 1st Block, Kalyan Nagar Bannaswadi, Bengaluru - 560043",
        phone: "+91 9841676259",
        email: "bengaluru@oecl.com",
      },
      {
        name: "Cochin Office",
        address:
          "CC 59/801A Elizabeth Memorial Building, Thevara Ferry Jn, Cochin 682013, Kerala",
        phone: "+91 484 4019192 / 93",
        email: "cochin@oecl.com",
      },
      {
        name: "Hyderabad Office",
        address:
          "H.No. 1-8-450/1/A-7 Indian Airlines Colony, Opp Police Lines, Begumpet, Hyderabad-500016, Telangana",
        phone: "040-49559704",
        email: "hyderabad@oecl.com",
      },
      {
        name: "Mumbai Office",
        address:
          "Town Center - 2, Office No.607, 6th Floor, Marol, Andheri Kurla Road, Andheri East, Mumbai - 400059",
        phone: "+91 8879756838, 022-35131688 / 35113475 / 35082586",
        email: "mumbai@oecl.com",
      },
    ],
    Indonesia: [
      {
        name: "Jakarta Office",
        address: "408, Lina Building, JL.HR Rasuna Said kav B7, Jakarta",
        phone: "+62 21 529 20292, 522 4887",
        email: "jakarta@oecl.com",
      },
      {
        name: "Surabaya Office",
        address:
          "Japfa Indoland Center, Japfa Tower 1, Lantai 4/401-A, JL Jend, Basuki Rahmat 129-137, Surabaya 60271",
        phone: "+62 21 529 20292, 522 4887",
        email: "surabaya@oecl.com",
      },
    ],
    Thailand: [
      {
        name: "Bangkok Office",
        address:
          "109 CCT Building, 3rd Floor, Rm.3, Surawong Road, Suriyawongse, Bangrak, Bangkok 10500",
        phone: "+662-634-3240, +662-634-3942",
        email: "thailand@oecl.com",
      },
    ],
  };

  const getCurrentCountry = () => {
    const path = location.pathname.toLowerCase();
    if (path.includes("/india")) return "India";
    if (path.includes("/malaysia")) return "Malaysia";
    if (path.includes("/indonesia")) return "Indonesia";
    if (path.includes("/thailand")) return "Thailand";
    return "Singapore";
  };

  const currentCountry = getCurrentCountry();
  const currentOffices = allOffices[currentCountry] || [];

  const visibleIndiaOffices =
    currentCountry === "India"
      ? currentOffices.slice(indiaPage * 4, indiaPage * 4 + 4)
      : currentOffices;

  const handlePrev = () => setIndiaPage((prev) => Math.max(prev - 1, 0));
  const handleNext = () =>
    setIndiaPage((prev) => Math.min(prev + 1, Math.floor(currentOffices.length / 4)));

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Contact Our Offices</h2>
          <p className="text-gray-600">Reach out to any of our global branches below.</p>
        </div>

        <div className="relative">
          {currentCountry === "India" && (
            <div className="flex justify-between mb-4">
              <Button variant="ghost" onClick={handlePrev} disabled={indiaPage === 0}>
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                onClick={handleNext}
                disabled={indiaPage >= Math.floor(currentOffices.length / 4)}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
            {visibleIndiaOffices.map((office, index) => (
              <motion.div
                key={index}
                className="p-5 border rounded-xl shadow-md bg-red-50 border-red-400"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-red-700 mb-2">{office.name}</h3>
                <p className="flex items-start gap-2 text-sm text-gray-700">
                  <MapPin className="w-4 h-4 mt-1 text-red-600" /> {office.address}
                </p>
                <p className="flex items-center gap-2 mt-2 text-sm text-gray-700">
                  <Phone className="w-4 h-4 text-red-600" /> {office.phone}
                </p>
                <p className="flex items-center gap-2 mt-1 text-sm text-gray-700">
                  <Mail className="w-4 h-4 text-red-600" />{" "}
                  <a href={`mailto:${office.email}`} className="hover:underline">
                    {office.email}
                  </a>
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
